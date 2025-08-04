import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import { useGetBlogsQuery } from "~/Redux/Apislice";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const { isLoading, data, isError } = useGetBlogsQuery(currentPage);


  if (isLoading) return <div>Loading...</div>;
  if (isError || !data?.data) return <div>Failed to load blogs</div>;

  const blogPosts = data.data;

  const categories = [
    "All",
    ...new Set(blogPosts.map((post: any) => post.category.name)),
  ];

  const filteredAll =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post: any) => post.category.name === activeCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredAll.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredAll.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    // if (currentPage < totalPages) 
      setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: any) => {
            const month = new Date(post?.created_at).toLocaleString("default", {
              month: "short",
            });

            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className="bg-white/90 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {post.category.name}
                    </span>
                    <span className="bg-white/90 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {month}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3 gap-2">
                    <span className="flex items-center max-w-[120px] truncate">
                      <svg
                        className="w-3.5 h-3.5 mr-1 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="truncate">{post.user.name}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-purple-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post?.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center text-purple-600 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2 items-center flex-wrap">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: data?.total_pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        {
          data?.next_page&&(
              <button
            onClick={handleNext}
            // disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
          )
        }
        </div>
      </div>
    </div>
  );
}
