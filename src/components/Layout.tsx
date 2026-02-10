import { TopNavigation } from "./TopNavigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col pt-4">
      <TopNavigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
