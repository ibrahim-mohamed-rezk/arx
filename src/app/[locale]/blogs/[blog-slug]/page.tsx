import Image from "next/image";
import { Lato } from "next/font/google";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import BlogMain from "../../../../../public/images/home/BlogMain.png";
import PrimeMiniste1 from "../../../../../public/images/home/PrimeMiniste1.png";
import PrimeMiniste2 from "../../../../../public/images/home/PrimeMiniste2.png";
import PrimeMiniste3 from "../../../../../public/images/home/PrimeMiniste3.png";
import { AxiosHeaders } from "axios";
import { getData } from "@/libs/axios/server";

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

// Captions for gallery images
const captions = [
  "Prime Minister Office 1",
  "Prime Minister Office 2",
  "Prime Minister Office 3",
];

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

  const blogData = await feachData();

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
        <Image
          src={blogData.cover}
          alt={blogData.title}
          className="w-full h-auto object-cover max-h-[80vh] rounded-lg"
          priority
          width={100}
          height={50}
        />
        {/* Social Icons */}
        <div className="flex items-center  justify-between py-15 text-[clamp(1rem,1.5vw,1.125rem)]">
          {/* Date & Title */}
          <p className="text-gray-500 uppercase mt-4 text-[clamp(0.875rem,1vw,1rem)]">
            Tuesday, 28 March 2023
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
          {blogData.title}
        </h1>

        {/* Article Content */}
        <article
          className="mt-8 space-y-6 text-gray-700"
          dangerouslySetInnerHTML={{ __html: blogData.description }}
        />

        {/* Gallery Images with Captions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {[PrimeMiniste1, PrimeMiniste2, PrimeMiniste3].map((src, idx) => (
            <div key={idx} className="relative rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={captions[idx]}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 px-3">
                <p className="text-white text-[clamp(0.875rem,1vw,1rem)]">
                  {captions[idx]}
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
