import Link from "next/link";

export default async function Photos() {
  // * API.
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();

  const photosJSX = photos.map((photo) => {
    return (
      <Link href={`/photos/${photo.id}`} style={{ width: "70%" }}>
        <div className="photos">
          <h2>Photo Title: {photo.title}</h2>
          <br />
        </div>
      </Link>
    );
  });
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="pageName">Photos Page</h1>
      </div>

      {/* Photos */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {photosJSX}
      </div>
    </>
  );
}
