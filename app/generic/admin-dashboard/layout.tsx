import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leads Dashboard | Sudha Generic Landing Page",
  robots: { index: false, follow: false },
    icons: {
    icon: [
      { url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "any" },
      { url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "16x16", type: "image/png" },
      { url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
