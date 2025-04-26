import type { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      header
      <main className="min-h-dvh container mx-auto px-4 py-8">
      {children}
      </main>
      footer
    </div>
  );
};
