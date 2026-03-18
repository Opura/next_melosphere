import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/app/modules/shared/components/ui/sidebar";

export function Aside() {
  return (
    <Sidebar className="w-64">
      <SidebarHeader className="bg-neutral-800 border-white/15 text-center text-neutral-100">
        <h1>Melosphere</h1>
      </SidebarHeader>
      <SidebarContent className="bg-neutral-800 border-white/15 text-neutral-100 text-center flex justify-center gap-4">
        <SidebarGroup>
          <Link href="/dashboard">Dashboard</Link>
        </SidebarGroup>
        <SidebarGroup>
          <Link href="/products">Produits</Link>
        </SidebarGroup>
        <SidebarGroup>
          <Link href="/brands">Marques</Link>
        </SidebarGroup>
        <SidebarGroup>
          <Link href="/categories">Categories</Link>
        </SidebarGroup>
        <SidebarGroup>
          <Link href="/tags">Tags</Link>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-neutral-800 border-white/15 text-center text-neutral-100 text-sm">
        <p>&copy; 2026 Melosphere. Tous droits réservés.</p>
      </SidebarFooter>
    </Sidebar>
  );
}
