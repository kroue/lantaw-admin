import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Check, X, Pause, Plus } from "lucide-react";
import { ads } from "@/lib/mock-data";

export const Route = createFileRoute("/ads")({
  head: () => ({ meta: [{ title: "Ads · Lantaw Admin" }] }),
  component: AdsPage,
});

function AdsPage() {
  return (
    <AdminShell
      title="Ads & Campaigns"
      subtitle="Review, approve and moderate ad campaigns."
      actions={<Button size="sm"><Plus className="h-4 w-4 mr-2" />New campaign</Button>}
    >
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead className="text-right">Budget</TableHead>
                <TableHead className="text-right">Pts / view</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Moderate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ads.map((a) => (
                <TableRow key={a.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img src={a.image} alt="" className="h-10 w-14 rounded-md object-cover" />
                      <div className="min-w-0">
                        <div className="font-medium truncate">{a.title}</div>
                        <div className="text-xs text-muted-foreground truncate">{a.advertiser}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="secondary">{a.plan}</Badge></TableCell>
                  <TableCell className="text-right tabular-nums">${a.budget.toLocaleString()}</TableCell>
                  <TableCell className="text-right tabular-nums">{a.pointsPerView}</TableCell>
                  <TableCell className="text-right tabular-nums">{a.views.toLocaleString()}</TableCell>
                  <TableCell><StatusBadge status={a.status} /></TableCell>
                  <TableCell className="text-right whitespace-nowrap">
                    <Button size="icon" variant="ghost" className="text-success"><Check className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost"><Pause className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost" className="text-destructive"><X className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AdminShell>
  );
}
