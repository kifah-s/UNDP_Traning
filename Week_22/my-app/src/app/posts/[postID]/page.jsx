export default async function PostDetails({ params }) {
  // console.log(params.postID);

  // * API.
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );
  const post = await response.json();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="pageName">Posts Details</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width:"100%"
        }}
      >
        <div className="postsDetails">
          <h1>User Id: {post.userId}</h1>
          <br />
          <h1>Post Id: {post.id}</h1>
          <br />
          <h1>Title: {post.title}</h1>
          <br />
          <h2>{post.body}</h2>
        </div>
      </div>
    </>
  );
}
