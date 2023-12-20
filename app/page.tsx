import Link from "next/link";
import { reader } from "./reader";
import "./styles.css";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  if (!posts) {
    return <div>No posts</div>;
  }

  const authors = await reader.collections.authors.read(
    posts[0].entry.authors[0]
  );

  return (
    <div>
      <h1>Keystatic ⚡️</h1>
      <p>This homepage shows how to load a collection from the reader API.</p>
      <p>
        <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
        below to view a post in the collection.
      </p>

      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
