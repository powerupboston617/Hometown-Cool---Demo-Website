import { Outlet } from "react-router-dom";
import { EstimateModalProvider } from "../../context/EstimateModalContext";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout() {
  return (
    <EstimateModalProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </EstimateModalProvider>
  );
}