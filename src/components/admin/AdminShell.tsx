import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Users,
  Megaphone,
  Building2,
  Gift,
  PackageCheck,
  Wallet,
  Search,
  Bell,
  Settings,
} from "lucide-react";
import type { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Overview", icon: LayoutDashboard },
  { to: "/users", label: "Users", icon: Users },
  { to: "/advertisers", label: "Advertisers", icon: Building2 },
  { to: "/ads", label: "Ads & Campaigns", icon: Megaphone },
  { to: "/rewards", label: "Rewards", icon: Gift },
  { to: "/redemptions", label: "Redemptions", icon: PackageCheck },
  { to: "/transactions", label: "Wallet", icon: Wallet },
] as const;

export function AdminShell({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
        <div className="h-16 flex items-center gap-2 px-6 border-b border-sidebar-border">
          <div className="h-8 w-8 rounded-lg bg-primary grid place-items-center text-primary-foreground font-black">
            L
          </div>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight">LANTAW</div>
            <div className="text-[10px] uppercase tracking-widest text-sidebar-foreground/60">
              Admin
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={[
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                ].join(" ")}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <Link
            to="/"
            className="flex items-center gap-3 text-xs text-sidebar-foreground/60 hover:text-sidebar-foreground"
          >
            <Settings className="h-4 w-4" /> Settings
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="h-16 border-b border-border bg-card flex items-center gap-4 px-4 md:px-8 sticky top-0 z-10">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users, ads, rewards…"
              className="pl-9 bg-muted/40 border-transparent focus-visible:bg-card"
            />
          </div>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://i.pravatar.cc/64?img=5" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </header>

        {/* Page header */}
        <div className="px-4 md:px-8 pt-6 pb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight truncate">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
        </div>

        <main className="flex-1 px-4 md:px-8 pb-10">{children}</main>
      </div>
    </div>
  );
}
