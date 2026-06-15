import { Badge } from "@/components/ui/badge";

const MAP: Record<string, string> = {
  active: "bg-success/15 text-success border-success/30",
  verified: "bg-success/15 text-success border-success/30",
  fulfilled: "bg-success/15 text-success border-success/30",
  earn: "bg-success/15 text-success border-success/30",
  topup: "bg-success/15 text-success border-success/30",

  pending: "bg-warning/20 text-warning-foreground border-warning/40",
  draft: "bg-muted text-muted-foreground border-border",
  paused: "bg-warning/20 text-warning-foreground border-warning/40",

  suspended: "bg-destructive/15 text-destructive border-destructive/30",
  blocked: "bg-destructive/15 text-destructive border-destructive/30",
  rejected: "bg-destructive/15 text-destructive border-destructive/30",
  cancelled: "bg-destructive/15 text-destructive border-destructive/30",
  redeem: "bg-primary/15 text-primary border-primary/30",
  payout: "bg-primary/15 text-primary border-primary/30",
};

export function StatusBadge({ status }: { status: string }) {
  const cls = MAP[status] ?? "bg-muted text-muted-foreground border-border";
  return (
    <Badge variant="outline" className={`capitalize font-medium ${cls}`}>
      {status}
    </Badge>
  );
}
