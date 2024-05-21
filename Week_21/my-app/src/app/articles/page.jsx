import Link from "next/link";

function ArticlesPage() {
  return (
    <>
      <h1>Articles Page</h1>

      {/* Routing */}
      <Link href="/">Go To Home Page</Link>
      <br />
      <Link href="posts">Go To Posts Page</Link>
    </>
  );
}

export default ArticlesPage;

//* By Default: React Server Component.