type listProps = {
  text: string;
  num?: number;
};

function List({text, num}: listProps) {
  return (
    <>
      <h3 style={{color: "yellow", marginBottom: "25px"}}>{text}</h3>
      <h3 style={{color: "yellow", marginBottom: "25px"}}>{num}</h3>
    </>
  );
}

export default List;
