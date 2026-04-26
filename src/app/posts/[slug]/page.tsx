import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/sections/Footer";
import { getPostBySlug, posts } from "@/data/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const blocks = renderBlocks(post.content);

  return (
    <>
      <Nav />
      <main className="pb-24 pt-32 sm:pt-40">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <ArrowLeft className="h-4 w-4" />
            All posts
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-fg-dim)]">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]">
            {post.title}
          </h1>

          <p className="mt-5 text-lg text-[var(--color-fg-muted)]">
            {post.excerpt}
          </p>

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[0.7rem] text-[var(--color-fg-muted)]"
              >
                {t}
              </li>
            ))}
          </ul>

          <hr className="accent-divider mt-10" aria-hidden />

          <div className="mt-10 space-y-6 text-[var(--color-fg-muted)]">
            {blocks}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function renderBlocks(content: string[]) {
  const out: React.ReactNode[] = [];
  let bulletBuffer: string[] = [];

  const flushBullets = (key: string) => {
    if (bulletBuffer.length === 0) return;
    out.push(
      <ul
        key={`ul-${key}`}
        className="space-y-2.5 border-l border-[var(--color-border)] pl-5"
      >
        {bulletBuffer.map((b, j) => (
          <li key={j} className="flex gap-3">
            <span
              aria-hidden
              className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>,
    );
    bulletBuffer = [];
  };

  content.forEach((line, i) => {
    if (line.startsWith("- ")) {
      bulletBuffer.push(line.slice(2));
      return;
    }
    flushBullets(String(i));
    if (line.startsWith("## ")) {
      out.push(
        <h2
          key={i}
          className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-[var(--color-fg)] sm:text-[1.65rem]"
        >
          {line.slice(3)}
        </h2>,
      );
      return;
    }
    out.push(
      <p key={i} className="text-pretty leading-relaxed">
        {line}
      </p>,
    );
  });

  flushBullets("end");
  return out;
}
