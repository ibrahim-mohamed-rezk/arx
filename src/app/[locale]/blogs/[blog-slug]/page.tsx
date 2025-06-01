import { Lato } from "next/font/google";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AxiosHeaders } from "axios";
import { getData } from "@/libs/axios/server";
import { BlogType } from "@/libs/types/types";

// Load Lato font
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

// Banner images array
// const bannerImages = [
//   { src: BlogMain, alt: "Downtown view" },
//   { src: PrimeMiniste1, alt: "Prime Minister Office 1" },
//   { src: PrimeMiniste2, alt: "Prime Minister Office 2" },
//   { src: PrimeMiniste3, alt: "Prime Minister Office 3" },
// ];

const BlogPage = async ({
  params,
}: {
  params: Promise<{ locale: string; "blog-slug": string }>;
}) => {
  const { locale, "blog-slug": blogSlug } = await params;
  const feachData = async () => {
    try {
      const response = await getData(
        `blog/${blogSlug}`,
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

  const { blog, latest_blogs } = await feachData();

  //   const [current, setCurrent] = useState(0);
  //   const length = bannerImages.length;

  // Automatic slide every 1 second
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCurrent((prev) => (prev + 1) % length);
  //     }, 100000);
  //     return () => clearInterval(timer);
  //   }, [length]);

  return (
    <div className="mb-[100px]">
      {/* Full-Width Automatic Slider */}
      <div className="relative max-w-7xl mx-auto w-full overflow-hidden p-5 px-10 pt-20 rounded-lg">
        {/* {bannerImages.map(
          ({ src, alt }, idx) =>
            idx === current && (
              <Image
                key={idx}
                src={src}
                alt={alt}
                className="w-full h-auto object-cover max-h-[80vh] rounded-lg"
                priority
              />
            )
        )} */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto object-cover max-h-[80vh] rounded-lg"
          width={1920}
          height={1080}
        />
        {/* Social Icons */}
        <div className="flex items-center  justify-between py-15 text-[clamp(1rem,1.5vw,1.125rem)]">
          {/* Date & Title */}
          <p className="text-gray-500 uppercase mt-4 text-[clamp(0.875rem,1vw,1rem)]">
            {new Date(blog.created_at).toLocaleDateString('en-US', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>
          <div className="flex items-center mt-4 space-x-4 py-15 text-[clamp(1rem,1.5vw,1.125rem)]">
            <a href="#" aria-label="Share on Facebook">
              <FaFacebookF className="text-blue-600 hover:text-blue-800 cursor-pointer" />
            </a>
            <a href="#" aria-label="Share on Twitter">
              <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
            </a>
            <a href="#" aria-label="Share on LinkedIn">
              <FaLinkedinIn className="text-blue-700 hover:text-blue-900 cursor-pointer" />
            </a>
          </div>
        </div>
        <hr className="text-gray-500" />
      </div>

      <div
        className={`${lato.className} max-w-4xl mx-auto px-4 py-8 font-sans`}
      >
        <h1 className="mt-2 font-bold text-[clamp(2rem,3vw,2.5rem)] leading-tight">
          {blog.title}
        </h1>

        {/* Article Content */}
        <article
          className="mt-8 space-y-6 text-gray-700"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />

        {/* Gallery Images with Captions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {latest_blogs.map((src: BlogType, idx: number) => (
            <div key={idx} className="relative rounded-lg overflow-hidden">
              <img
                src={src.image}
                alt={src.title}
                className="object-cover w-full h-full"
                width={1920}
                height={1080}
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 px-3">
                <p className="text-white line-clamp-1 text-[clamp(0.875rem,1vw,1rem)]">
                  {src.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
