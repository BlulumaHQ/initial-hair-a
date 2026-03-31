import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-40 p-3 bg-background/90 backdrop-blur-sm border-t border-border">
        <a
          href="https://initialsalon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-sticky w-full text-center block"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
};

export default Layout;
