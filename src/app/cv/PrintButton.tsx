"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PrintButton() {
  return (
    <Button
      onClick={() => window.print()}
      variant="primary"
      size="sm"
    >
      <span className="inline-flex items-center gap-2">
        <Download className="h-4 w-4" />
        Download as PDF
      </span>
    </Button>
  );
}
