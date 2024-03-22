import { recentBlogData } from "@/data";
import { RiArrowRightSLine } from "@remixicon/react";
import Image from "next/image";

const RecentBlogs = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col items-center text-center gap-12">
        <div className="flex flex-col items-center gap-8">
          <h2 className="section-title">Recent Blogs</h2>
          <p className="section-subtitle">
            Get updates about our latest trends and techniques used in interior
            design project works.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {recentBlogData.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface IBlogCardProps {
  title: string;
  date: string;
  type: string;
  href: string;
}

const BlogCard = ({ title, date, type, href }: IBlogCardProps) => {
  return (
    <div className="p-5 pb-12 text-left rounded-5xl flex flex-col gap-2 hover:bg-accent-light transition-all duration-300 group border-2 border-neutral-200">
      <Image src={href} width={370} height={200} alt="blog image" />
      <h3>{title}</h3>

      <div className="flex justify-between items-center">
        <p className="text-[1.2rem] text-gray-500 ">{date}</p>
        <div className="rounded-full p-4 bg-accent-light group-hover:bg-white transition-all duration-300">
          <RiArrowRightSLine className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
