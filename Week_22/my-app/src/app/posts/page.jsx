import Link from "next/link";

export default async function Posts() {
  // * API.
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} style={{width:"70%"}}>
        <div className="posts">
          <h1>Title: {post.title}</h1>
          <br />
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="pageName">Posts Page</h1>
      </div>

      {/* Posts */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {postsJSX}
      </div>
    </>
  );
}
