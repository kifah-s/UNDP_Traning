type listProps = {
  text: string;
  num?: number;
};

function List(props: listProps) {
  return (
    <>
      <h3>{props.text}</h3>
      <h3>{props.num}</h3>
    </>
  );
}

export default List;
