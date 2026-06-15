import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { redemptions } from "@/lib/mock-data";

export const Route = createFileRoute("/redemptions")({
  head: () => ({ meta: [{ title: "Redemptions · Lantaw Admin" }] }),
  component: RedemptionsPage,
});

function RedemptionsPage() {
  return (
    <AdminShell
      title="Redemptions"
      subtitle="Approve or cancel reward redemption requests."
    >
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Reward</TableHead>
                <TableHead className="text-right">Points</TableHead>
                <TableHead>Requested</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {redemptions.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">{r.id}</TableCell>
                  <TableCell className="font-medium">{r.userName}</TableCell>
                  <TableCell className="text-muted-foreground">{r.rewardTitle}</TableCell>
                  <TableCell className="text-right tabular-nums">{r.points.toLocaleString()}</TableCell>
                  <TableCell className="text-muted-foreground">{r.requestedAt}</TableCell>
                  <TableCell><StatusBadge status={r.status} /></TableCell>
                  <TableCell className="text-right whitespace-nowrap">
                    <Button size="sm" variant="ghost" className="text-success"><Check className="h-4 w-4 mr-1" />Fulfill</Button>
                    <Button size="sm" variant="ghost" className="text-destructive"><X className="h-4 w-4 mr-1" />Cancel</Button>
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
