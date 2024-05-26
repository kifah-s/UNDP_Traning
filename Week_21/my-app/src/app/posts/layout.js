import Link from "next/link";

function layoutPostsPage({ children }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <Link href="/posts">
          <h2>Posts</h2>
        </Link>

        <Link href="/posts/featuredPosts">
          <h2>Featured Posts</h2>
        </Link>
      </div>

      {children}
    </>
  );
}

export default layoutPostsPage;
