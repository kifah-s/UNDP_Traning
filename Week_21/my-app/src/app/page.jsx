import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      {/* Routing */}
      <Link href="articles">Go to articles page</Link>
      <br />
      <Link href="posts">Go to posts page</Link>
    </>
  );
}

//* Min: 35.
