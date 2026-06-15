import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { transactions } from "@/lib/mock-data";

export const Route = createFileRoute("/transactions")({
  head: () => ({ meta: [{ title: "Wallet · Lantaw Admin" }] }),
  component: TxnPage,
});

function TxnPage() {
  return (
    <AdminShell title="Wallet & Transactions" subtitle="Points earned, redeemed, paid out and topped up across users.">
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Note</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">{t.id}</TableCell>
                  <TableCell className="font-medium">{t.userName}</TableCell>
                  <TableCell><StatusBadge status={t.type} /></TableCell>
                  <TableCell className={`text-right tabular-nums font-medium ${t.amount < 0 ? "text-destructive" : "text-success"}`}>
                    {t.amount > 0 ? "+" : ""}{t.amount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{t.note}</TableCell>
                  <TableCell className="text-muted-foreground">{t.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AdminShell>
  );
}
