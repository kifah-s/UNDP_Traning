import Link from "next/link";

function layoutArticlesPage({ children }) {
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
        <Link href="/articles">
          <h2>Articles</h2>
        </Link>

        <Link href="/articles/featuredArticles">
          <h2>Featured Articles</h2>
        </Link>
      </div>

      {children}
    </>
  );
}

export default layoutArticlesPage;
