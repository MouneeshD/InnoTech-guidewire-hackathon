import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <Topbar
            mobileMenuOpen={mobileMenuOpen}
            onToggleMobileMenu={() => setMobileMenuOpen((current) => !current)}
          />
          {mobileMenuOpen ? (
            <div className="px-4 pt-4 lg:hidden">
              <Sidebar mobile onNavigate={() => setMobileMenuOpen(false)} />
            </div>
          ) : null}
          <main className="flex-1 px-4 py-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
