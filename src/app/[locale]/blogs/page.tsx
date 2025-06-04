import { Link } from "@/i18n/routing";
import "/public/css/blogs.css";
import { getData } from "@/libs/axios/server";
import { AxiosHeaders } from "axios";
import { BlogType } from "@/libs/types/types";
import { getTranslations } from "next-intl/server";

const BlogsPage = async ({
  params,
}: {
  params: Promise<{ locale: string; "blog-slug": string }>;
}) => {
  const { locale } = await params;
  const feachData = async () => {
    try {
      const response = await getData(
        "blogs",
        {},
        new AxiosHeaders({
          lang: locale,
        })
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { blogs: blogPosts } = await feachData();

  const t = await getTranslations("blog");

  return (
    <div className="min-h-screen font-lato bg-white pb-20">
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Video Section */}
        {/* <BlogVideos /> */}

        {/* Additional content - Interview excerpt */}
        {/* <div className="mb-12">
          <div className="text-lg font-bold mb-2">
            Exclusive Interview From The Ramadan Iftar Party!
          </div>
          <p className="text-gray-700">
            Mr. Mohamed Nazmy, VIP Sales Partner at RED - Real Estate Domain,
            shares expert insights on the real estate market and investment
            opportunities in 2025!
          </p>
        </div> */}

        {/* Blog Posts Section */}
        <section>
          <div className="mb-8 text-center">
            <div
              className="inline-block mb-1 text-gray-500 uppercase tracking-wider"
              style={{ fontSize: "clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)" }}
            >
              {t("latest")}
            </div>
            <h2
              className="font-bold tracking-tight mb-2"
              style={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 2.25rem)" }}
            >
              {t("welcome_to_our_blog")}
            </h2>
            <p
              className="text-gray-700"
              style={{ fontSize: "clamp(1rem, 1vw + 0.5rem, 1.25rem)" }}
            >
              {t("welcome_to_our_blog_description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {blogPosts.map((post: BlogType) => (
              <Link
                href={`/blogs/${post.slug}`}
                key={post.id}
                className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "60%" }}
                >
                  <div className="absolute inset-0 bg-gray-300">
                    <img
                      src={post.cover || "/placeholder.jpg"}
                      alt={post.title}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-xs text-gray-500 mb-1">
                    {post.category}
                  </div>
                  <h3
                    className="font-semibold line-clamp-2"
                    style={{
                      fontSize: "clamp(0.875rem, 0.5vw + 0.7rem, 1.125rem)",
                    }}
                  >
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogsPage;
