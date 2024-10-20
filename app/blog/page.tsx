import type { Metadata } from 'next'
import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { playfair, spacemono } from "../fonts";

export const metadata: Metadata = {
  title: 'Blog - Fever trip',
  description: "Checkout out Fever trip's blog",
}

export default function BlogList() {
  const posts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <div className="">
      <h1 className={`SectionTitle text-3xl ${spacemono.className} mb-10`}>
        Blog
      </h1>
      {posts.map((post) => (
        <article key={post._id} className="my-8">
          <div className={`${spacemono.className} text-slate-500 text-xs`}>
            {post.date.slice(0, 10)}
          </div>
          <Link href={post.slug}>
            <h2 className={`${playfair.className} text-hackergreen text-3xl`}>
              {post.title}
            </h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
