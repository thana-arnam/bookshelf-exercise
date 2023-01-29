"use client";

import React from "react";

const AddBookForm = () => {
  const [title, setTitle] = React.useState("");

  return (
    <div>
      <h1>ADD TO COLLECTION</h1>
      <form>
        <div>
          <label>Title </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <br />
          {title}
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
