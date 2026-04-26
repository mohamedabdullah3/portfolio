"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initMixpanel, trackEvent } from "@/lib/mixpanel";

export default function MixpanelProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    initMixpanel();
  }, []);

  useEffect(() => {
    trackEvent("Page Viewed", { path: pathname });
  }, [pathname]);

  return <>{children}</>;
}
