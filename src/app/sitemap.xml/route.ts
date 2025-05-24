import { NextResponse } from "next/server";

const baseUrl = "https://yourdomain.com"; // change this!
const locales = ["en", "ar"];

const staticPaths = ["", "/about", "/contact", "/fqas", "/projects", "/blogs"];

// 👇 Real data fetch from your API
async function getAllBlogs() {
  const res = await fetch("https://arx-test.com/api/v1/blogs");
  const json = await res.json();
  return json.data || [];
}

async function getAllProjects() {
  const res = await fetch("https://arx-test.com/api/v1/properties");
  const json = await res.json();
  return json.data || [];
}

export async function GET() {
  const urls: string[] = [];

  // Static localized pages
  for (const locale of locales) {
    for (const path of staticPaths) {
      const fullPath = path === "" ? "" : `${path}`;
      urls.push(`${baseUrl}/${locale}${fullPath}`);
    }
  }

  // Dynamic blogs
  const blogs = await getAllBlogs();
  for (const locale of locales) {
    for (const blog of blogs) {
      if (blog.slug) {
        urls.push(`${baseUrl}/${locale}/blogs/${blog.slug}`);
      }
    }
  }

  // Dynamic projects
  const projects = await getAllProjects();
  for (const locale of locales) {
    for (const project of projects) {
      if (project.id) {
        urls.push(`${baseUrl}/${locale}/projects/${project.id}`);
      }
    }
  }

  // Build the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
