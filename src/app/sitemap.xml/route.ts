// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

const baseUrl = "https://www.arxeg.com";
const locales = ["en", "ar"];

// Static paths (no trailing slash)
const staticPaths = ["", "/about", "/contact", "/fqas", "/projects", "/blogs"];

// Dummy dynamic data – replace with your DB or CMS queries
async function getAllBlogs() {
  return [{ slug: "ai-trends" }, { slug: "nextjs-guide" }];
}

async function getAllProjects() {
  return [{ id: "123" }, { id: "456" }];
}

export async function GET() {
  const urls: string[] = [];

  // Static paths
  for (const locale of locales) {
    for (const path of staticPaths) {
      const fullPath = path === "" ? "" : `${path}`;
      urls.push(`${baseUrl}/${locale}${fullPath}`);
    }
  }

  // Dynamic: blogs/[blog-slug]
  const blogs = await getAllBlogs();
  for (const locale of locales) {
    for (const blog of blogs) {
      urls.push(`${baseUrl}/${locale}/blogs/${blog.slug}`);
    }
  }

  // Dynamic: projects/[id]
  const projects = await getAllProjects();
  for (const locale of locales) {
    for (const project of projects) {
      urls.push(`${baseUrl}/${locale}/projects/${project.id}`);
    }
  }

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
