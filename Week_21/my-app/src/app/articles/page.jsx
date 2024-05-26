import Link from "next/link";

export const metadata = {
  title: "Articles",
};

function ArticlesPage() {
  return (
    <>
      <h1 className="centerElement">Articles Page</h1>

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
