function ShowArticlePage(props) {
  console.log(props);
  console.log(props.params.title);

  return (
    <>
      <h1 className="centerElement">Show Article Page</h1>
      <h3 >Article Id: {props.params.articleId}</h3>
    </>
  );
}

export default ShowArticlePage;
