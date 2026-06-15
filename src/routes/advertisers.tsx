import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Plus, ShieldCheck, Ban } from "lucide-react";
import { advertisers } from "@/lib/mock-data";

export const Route = createFileRoute("/advertisers")({
  head: () => ({ meta: [{ title: "Advertisers · Lantaw Admin" }] }),
  component: AdvertisersPage,
});

function AdvertisersPage() {
  return (
    <AdminShell
      title="Advertisers"
      subtitle="Brands running campaigns across Lantaw."
      actions={<Button size="sm"><Plus className="h-4 w-4 mr-2" />Add advertiser</Button>}
    >
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Active Ads</TableHead>
                <TableHead className="text-right">Spend</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {advertisers.map((a) => (
                <TableRow key={a.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center font-bold">
                        {a.initial}
                      </div>
                      <span className="font-medium">{a.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{a.category}</TableCell>
                  <TableCell className="text-right tabular-nums">{a.activeAds}</TableCell>
                  <TableCell className="text-right tabular-nums">${a.spend.toLocaleString()}</TableCell>
                  <TableCell><StatusBadge status={a.status} /></TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm"><ShieldCheck className="h-4 w-4 mr-1" />Verify</Button>
                    <Button variant="ghost" size="sm" className="text-destructive"><Ban className="h-4 w-4 mr-1" />Block</Button>
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
