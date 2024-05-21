import Link from "next/link";

function PostsPage() {
  return (
    <>
      <h1>Posts Page</h1>

      {/* Routing */}
      <Link href="/">Go To Home Page</Link>
      <br />
      <Link href="articles">Go To Articles Page</Link>
    </>
  );
}

export default PostsPage;

//* By Default: React Server Component.
