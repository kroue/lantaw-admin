import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { rewards } from "@/lib/mock-data";

export const Route = createFileRoute("/rewards")({
  head: () => ({ meta: [{ title: "Rewards · Lantaw Admin" }] }),
  component: RewardsPage,
});

function RewardsPage() {
  return (
    <AdminShell
      title="Rewards Catalog"
      subtitle="Manage items users can redeem with points."
      actions={<Button size="sm"><Plus className="h-4 w-4 mr-2" />Add reward</Button>}
    >
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rewards.map((r) => (
          <Card key={r.id} className="overflow-hidden flex flex-col">
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <img src={r.image} alt={r.title} className="h-full w-full object-cover" />
            </div>
            <CardContent className="p-4 flex-1 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.brand}</div>
                  <div className="font-semibold truncate">{r.title}</div>
                  <div className="text-xs text-muted-foreground truncate">{r.subtitle}</div>
                </div>
                <Badge variant="secondary" className="shrink-0">{r.points.toLocaleString()} pts</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className={r.stock === 0 ? "text-destructive" : "text-muted-foreground"}>
                  Stock: {r.stock}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Active</span>
                  <Switch defaultChecked={r.active} />
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <Button variant="outline" size="sm" className="flex-1"><Pencil className="h-3.5 w-3.5 mr-1" />Edit</Button>
                <Button variant="ghost" size="sm" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminShell>
  );
}
