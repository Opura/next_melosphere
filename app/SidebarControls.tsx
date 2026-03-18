"use client";

import { usePathname } from "next/navigation";
import { Aside } from "./modules/sidebar/components/Aside";
import { SidebarTrigger } from "./modules/shared/components/ui/sidebar";

export default function SidebarControls() {
  const pathname = usePathname();
  const showSidebar = pathname !== "/";

  return (
    <>
      {showSidebar && <Aside />}
      {showSidebar && <SidebarTrigger />}
    </>
  );
}