const AddBookForm = () => {
  const title = "Domain Driven Design";
  return (
    <div>
      <h1>ADD TO COLLECTION</h1>
      <form>
        <div>
          <label>Title </label>
          <input value={title} />
          <br />
          {title}
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
