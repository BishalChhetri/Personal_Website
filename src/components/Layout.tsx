import { FloatingToolbar } from "./FloatingToolbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <FloatingToolbar />
      <main className="flex-1 pr-16 md:pr-20">
        {children}
      </main>
      <div className="pr-16 md:pr-20">
        <Footer />
      </div>
    </div>
  );
}
