import List from "./List";

type contentProps = {
  text: string;
};

function Content(props: contentProps) {
  return (
    <>
      <h1 style={{color: "yellow"}}>{props.text}</h1>
      <List text="Go to content"/>
    </>
  );
}

export default Content;
