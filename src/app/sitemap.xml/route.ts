import { NextResponse } from "next/server";
import { AxiosHeaders } from "axios";
import { getData } from "@/libs/axios/server";

const baseUrl = "https://www.arxeg.com"; // Replace with your domain
const locales = ["en", "ar"];

const staticPaths = ["", "/about", "/contact", "/fqas", "/projects", "/blogs"];

async function getAllBlogs(locale: string) {
  try {
    const response = await getData(
      "blogs",
      {},
      new AxiosHeaders({ lang: locale })
    );
    return response.data.blogs;
  } catch (error) {
    console.error(`Error fetching blogs for ${locale}:`, error);
    return [];
  }
}

async function getAllProjects(locale: string) {
  try {
    const response = await getData(
      "properties",
      {},
      new AxiosHeaders({ lang: locale })
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching blogs for ${locale}:`, error);
    return [];
  }
}

export async function GET() {
  const urls: string[] = [];

  // Static localized pages
  for (const locale of locales) {
    for (const path of staticPaths) {
      urls.push(`${baseUrl}/${locale}${path}`);
    }
  }

  // Dynamic localized blogs
  for (const locale of locales) {
    const blogs = await getAllBlogs(locale);
    for (const blog of blogs) {
      if (blog.slug) {
        urls.push(`${baseUrl}/${locale}/blogs/${blog.slug}`);
      }
    }
  }
  
  // Dynamic localized blogs
  for (const locale of locales) {
    const projects = await getAllProjects(locale);
    for (const project of projects) {
      if (project.slug) {
        urls.push(`${baseUrl}/${locale}/projects/${project.slug}`);
      }
    }
  }


  // Build XML
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
