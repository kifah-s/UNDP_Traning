import Link from "next/link";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <h1 className="centerElement">Home Page</h1>

      {/* <Link href="/articles">
        <button style={{ marginBottom: "10px" }}>Go To Articles Page</button>
      </Link>

      <br />

      <Link href="/posts">
        <button>Go To Posts Page</button>
      </Link> */}
    </>
  );
}

//* Min: 50.
//* --------------------------------------
//* - Introduction.
//* - Project Structure.
//* - New Page.
//* - NavBar.
//* - Routes.
//* - Layout.
//* - Nested Routes.
//* - Dynamic Routes.
//* - Nested Layout.
//* - Meta Tags
//* - Data Fetching.
//* - Data Fetching In Server Component.
//* - Data Fetching In Clint Component.
//* - SSR vs SSG vs ISG & Caching.
//* - Start Project.
//* - Loading In Next.
//* - Using Suspense & UI Streaming.
//* - Deploying The Project.
//* --------------------------------------
