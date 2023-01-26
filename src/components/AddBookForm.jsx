"use client";
import { useImmer } from "use-immer";

const INITIAL_FORM = { title: "", category: "" };

const AddBookForm = ({ addBook }) => {
  const [form, setForm] = useImmer(INITIAL_FORM);
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      ...form,
      id: Date.now(),
    });
    setForm(INITIAL_FORM);
  };
  const handleChange = (field, value) => {
    setForm((draft) => {
      draft[field] = value;
    });
  };
  return (
    <div>
      <h1>ADD TO COLLECTION</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title </label>
          <input
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        <div>
          <label>Category </label>
          <select
            value={form.category}
            onChange={(e) => handleChange("category", e.target.value)}
          >
            <option disabled></option>
            <option>Computer</option>
            <option>Novel</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
