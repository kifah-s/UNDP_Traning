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

/*
//* Creating and nesting components ..

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

/*
//* Adding styles ..

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

//* Displaying data  ..

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

//* ---------------------------------------------------------------------
