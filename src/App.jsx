import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import AboutPage from "./pages/AboutPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import MassSavePage from "./pages/MassSavePage";
import MediaPage from "./pages/MediaPage";
import NotFoundPage from "./pages/NotFoundPage";
import ReviewsPage from "./pages/ReviewsPage";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import ServiceAreasIndexPage from "./pages/ServiceAreasIndexPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="service-areas" element={<ServiceAreasIndexPage />} />
          <Route path="service-areas/:slug" element={<ServiceAreaPage />} />
          <Route path="mass-save" element={<MassSavePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogIndexPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}