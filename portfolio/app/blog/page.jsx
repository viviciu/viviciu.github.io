// import Navbar from "../_components/Navbar"
// import Blog1 from "./blog1.mdx"
// import Blog2 from "./page2.mdx"

// export default function Blog() {
//     return (
//         <main className="min-h-screen justify-between p-2">
//             <Navbar />
//             <h2>this is my Blog</h2>
//             <div className="prose prose-slate">
//             <Blog1 />
//             <Blog2 />
//                 </div>
            
//         </main>

//     )
// }
'use client'
import { blogs } from './blogs.js';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Navbar from '../_components/Navbar';

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState(null);



  return (
    <main className="min-h-screen justify-between p-2">
      <Navbar />
      <h2>This is my Blog</h2>
      <div className="prose prose-slate">
        {blogs
          .filter(blog => selectedTag ? blog.metadata.tags.includes(selectedTag) : true)
          .map(blog => {
            const BlogPost = dynamic(() => import(blog.component));
            return <BlogPost key={blog.metadata.dateCreated} metadata={blog.metadata} />;
          })}
      </div>
    </main>
  );
}