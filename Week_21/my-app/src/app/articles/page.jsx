import Link from "next/link";

function ArticlesPage() {
  return (
    <>
      <h1 className="centerElement">Articles Page</h1>

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

      {/* <Link href="/">
        <button style={{marginBottom: "10px"}}>Go To Home Page</button>
      </Link>

      <br />

      <Link href="/posts">
        <button>Go To Posts Page</button>
      </Link> */}
    </>
  );
}

export default ArticlesPage;

//* By Default: React Server Component.
