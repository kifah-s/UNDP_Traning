/* 
* Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.

* You will learn:
* - How to create and nest components
* - How to add markup and styles
* - How to display data
* - How to render conditions and lists
* - How to respond to events and update the screen
* - How to share data between components
*/


//* ---------------------------------------------------------------------

//* >>>>> Creating and nesting components <<<<<

/*
//* Creating components.
function MyButton() {
  return <button>Click me</button>; // tsx OR jsx
}

//* Nesting components.
//* Main component -> export default.
export default function MyApp() {
  return (
    <div>
    <h1>Hello React ..</h1>
    <br />
    <MyButton />
    </div>
    );
  }
  */

//* ---------------------------------------------------------------------

//* >>>>> Adding styles <<<<<

/*
export default function MyApp() {
  return (
    <div>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hello React"
        className="avatar"
      />
    </div>
  );
}
*/

//* ---------------------------------------------------------------------

//* >>>>> Displaying data <<<<<

/*
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 200,
};

export default function MyApp() {
  return (
    <div>
      <h1> {user.name} </h1>

      <img
        src={user.imageUrl}
        alt={"Photo of:" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}
*/

//* ---------------------------------------------------------------------

//* >>>>> Conditional rendering <<<<<

/*
//* Create AdminPanel component.
function AdminPanel() {
  return <h1>Admin Panel ..</h1>;
}

//* Create AdminPanel component.
function LoginForm() {
  return <h1>Login Form ..</h1>;
}

//* Create main component.
export default function MyApp() {
  let content;
  let isLoggedIn = false;
  
  //* Conditional, (way - 1).
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return <div>{content}</div>;
}
*/

//* ..............................

/*
//* Create AdminPanel component.
function AdminPanel() {
  return <h1>Admin Panel ..</h1>;
}

//* Create AdminPanel component.
function LoginForm() {
  return <h1>Login Form ..</h1>;
}

//* Create main component.
export default function MyApp() {
  let isLoggedIn = false;
  
  //* Conditional, (way - 2).
  if (isLoggedIn) {
    return <AdminPanel />;
  } else {
    return <LoginForm />;
  }
}
*/

//* ..............................

/*
//* Create AdminPanel component.
function AdminPanel() {
  return <h1>Admin Panel ..</h1>;
}

//* Create AdminPanel component.
function LoginForm() {
  return <h1>Login Form ..</h1>;
}

//* Create main component.
export default function MyApp() {
  let isLoggedIn = false;

  //* Conditional, (way - 3).
  return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
}
*/

//* ..............................

/*
//* Create AdminPanel component.
function AdminPanel() {
  return <h1>Admin Panel ..</h1>;
}

//* Create AdminPanel component.
function LoginForm() {
  return <h1>Login Form ..</h1>;
}

//* Create main component.
export default function MyApp() {
  let isLoggedIn = true;
  
  //* Conditional, (way - 4).
  return <div>{isLoggedIn && <AdminPanel />}</div>;
}
*/

//* ---------------------------------------------------------------------

//* >>>>> Rendering lists <<<<<

/*
//* Create object.
const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

//* Create main component.
export default function MyApp() {
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  
  return <ul>{listItems}</ul>;
}
*/

//* ..............................

/*
//* Create object.
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

//* Create main component.
export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "red" : "black",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
*/

//* ---------------------------------------------------------------------

//* >>>>> Responding to events  <<<<<
