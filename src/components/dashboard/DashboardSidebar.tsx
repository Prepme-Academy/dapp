"use client";

import { ChevronLeft, X } from "lucide-react";
import { dashboardNavLinks } from "./routes";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";

const DashboardSidebar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname.startsWith(path);

  // Close the sidebar when clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (showMenu) {
        document.body.style.overflow = "hidden";
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.body.style.overflow = "auto";
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showMenu]);

  return (
    <>
      <Button
        variant={"unstyled"}
        onClick={() => setShowMenu((prev) => !prev)}
        className="text-sm font-normal text-secondary-600 flex items-center justify-start gap-2 lg:hidden border-b border-secondary-200 p-4 w-full"
      >
        <ChevronLeft />
        <span>Menu</span>
      </Button>
      <aside
        className={cn(
          "fixed inset-0 bg-gray-800 bg-opacity-50 z-40 lg:static lg:bg-transparent lg:z-auto transition-transform transform",
          showMenu ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div
          ref={sidebarRef}
          className="w-64 h-full bg-white lg:p-4 border-b lg:border-b-0 border-r border-secondary-200 flex-shrink-0 overflow-y-auto relative"
        >
          <Button
            variant={"unstyled"}
            onClick={() => setShowMenu(false)}
            className="lg:hidden"
          >
            <X className="text-secondary-600 h-8 w-8" />
          </Button>
          <nav className="w-full flex flex-col items-start justify-start gap-3 p-3">
            <h6 className="text-xs font-normal text-secondary-600 hidden lg:block">
              Menu
            </h6>
            {dashboardNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={cn(
                  "w-full flex items-center justify-start gap-x-3 px-4 text-sm font-normal rounded py-3 transition-all duration-300 hover:bg-primary-100 hover:border hover:border-primary-400 ",
                  isActive(link.href)
                    ? " bg-primary-100 border border-primary-400 text-muted-500"
                    : "text-muted-400"
                )}
              >
                {link.icon}
                <span>{link.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
