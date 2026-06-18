import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import PageFallback from "./components/ui/PageFallback";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const BlogIndexPage = lazy(() => import("./pages/BlogIndexPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const MassSavePage = lazy(() => import("./pages/MassSavePage"));
const MediaPage = lazy(() => import("./pages/MediaPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const ServiceAreaPage = lazy(() => import("./pages/ServiceAreaPage"));
const ServiceAreasIndexPage = lazy(() => import("./pages/ServiceAreasIndexPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceDetailPage />} />
            <Route path="service-areas" element={<ServiceAreasIndexPage />} />
            <Route path="service-areas/:slug" element={<ServiceAreaPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="mass-save" element={<MassSavePage />} />
            <Route path="blog" element={<BlogIndexPage />} />
            <Route path="blog/:slug" element={<BlogDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}