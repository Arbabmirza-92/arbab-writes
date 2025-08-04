import { json } from "@remix-run/node";
import { useLoaderData, Link, useParams } from "@remix-run/react";


import { useState } from "react";
import { useGetBlogsdetailQuery } from "~/Redux/Apislice";



export default function BlogPostDetail() {
  const { slug } = useParams();
  const { data: post, isLoading,  } = useGetBlogsdetailQuery({ slug });
  const [searchQuery, setSearchQuery] = useState('');
  
  console.log("Post Data:", post);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  

  return (
    <div className="bg-white">
      
      
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src={post.data.img}
            alt={post.data.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
          
        <div className="relative z-10 max-w-6xl px-4 sm:px-6 lg:px-8 w-full pb-12">
          <div className="max-w-3xl mx-4 sm:mx-6"> 
            <span className="inline-block bg-white/90 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight font-serif drop-shadow-lg">
              {post.data.title}
            </h1>
            <div className="flex items-center text-white/90 text-sm">
              <span className="flex items-center mr-4">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.data.author}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {post.month} {post.day}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 px-8">
            <article className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: post.data.content }}
                className="[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6
                          [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-10 [&_h3]:mb-4
                          [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:my-4
                          [&_img]:rounded-lg [&_img]:shadow-md [&_img]:my-8
                          [&_img]:w-full [&_img]:max-w-3xl [&_img]:mx-auto
                          [&_blockquote]:border-l-4 [&_blockquote]:border-purple-500
                          [&_blockquote]:bg-purple-50 [&_blockquote]:px-6 [&_blockquote]:py-4
                          [&_a]:text-purple-600 [&_a]:hover:text-purple-800 [&_a]:underline
                          [&_ul]:list-disc [&_ol]:list-decimal [&_li]:marker:text-purple-500"
              />
            </article>
          </div>


             
            </div>
          </div>
        </div>
      
  );
}