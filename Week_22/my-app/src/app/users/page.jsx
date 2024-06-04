import Link from "next/link";

export default async function Users() {
  // * API.
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const usersJSX = users.map((user) => {
    return (
      <Link href={`/users/${user.id}`} style={{ width: "70%" }}>
        <div className="users">
          <h2>Name: {user.name}</h2>
          <br />
          <h3>User Name: {user.username}</h3>
          <br />
        </div>
      </Link>
    );
  });
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="pageName">Users Page</h1>
      </div>

      {/* Users */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {usersJSX}
      </div>
    </>
  );
}
