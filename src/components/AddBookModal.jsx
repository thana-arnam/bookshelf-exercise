import Modal from "./Modal";
import useForm from "@/hooks/useForm";

const INITIAL_FORM = {
    title: "",
    desc: "",
    coverImg: "",
    category: "",
    finished: null,
};

const AddBookModal = ({ isShow, close }) => {
    const { form, register, registerRadio, reset } = useForm(INITIAL_FORM);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API create
        reset();
    };

    if (!isShow) return null;
    return (
        <Modal close={close}>
            <h1 className="text-title text-big">
                ADD TO
                <br />
                COLLECTION
            </h1>
            <form className="add-book-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label className="field-label text-title">Title</label>
                    <div className="field-input">
                        <input {...register("title")} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="field-label text-title">
                        Description
                    </label>
                    <div className="field-input">
                        <textarea rows={3} {...register("desc")} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="field-label text-title">
                        Cover image
                    </label>
                    <div className="field-input">
                        <input {...register("coverImg")} />
                        <div className="image-thumbnail">
                            <img src="https://via.placeholder.com/120x160" />
                        </div>
                    </div>
                </div>
                <div className="form-field">
                    <label className="field-label text-title">Category</label>
                    <div className="field-input">
                        <select {...register("category")}>
                            <option disabled></option>
                            <option>Computer</option>
                            <option>Novel</option>
                        </select>
                    </div>
                </div>
                <div className="form-field">
                    <label className="field-label text-title">
                        Have you read the book?
                    </label>
                    <div className="field-input pt-12 two-option">
                        <label>
                            <input
                                type="radio"
                                name="read-book"
                                {...registerRadio("finished", true)}
                            />
                            {` Yes, I have read it.`}
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="read-book"
                                {...registerRadio("finished", false)}
                            />

                            {` No, I haven't read it.`}
                        </label>
                    </div>
                </div>
                <div className="pt-12 text-right">
                    <button className="btn-primary">SAVE</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddBookModal;
