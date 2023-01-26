import Modal from "./Modal";

const AddBookModal = ({ isShow, close }) => {
    if (!isShow) return null;
    return (
        <Modal close={close}>
            <h1 className="text-title text-big">
                ADD TO
                <br />
                COLLECTION
            </h1>
            <form className="add-book-form">
                <div className="form-field">
                    <label className="field-label text-title">Title</label>
                    <div className="field-input">
                        <input />
                    </div>
                </div>
                <div className="form-field">
                    <label className="field-label text-title">
                        Description
                    </label>
                    <div className="field-input">
                        <textarea rows={3} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="field-label text-title">
                        Cover image
                    </label>
                    <div className="field-input">
                        <input />
                        <div className="image-thumbnail">
                            <img src="https://via.placeholder.com/120x160" />
                        </div>
                    </div>
                </div>
                <div className="form-field">
                    <label className="field-label text-title">Category</label>
                    <div className="field-input">
                        <select>
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
                            <input type="radio" name="read-book" value="y" />
                            {` Yes, I have read it.`}
                        </label>
                        <label>
                            <input type="radio" name="read-book" value="n" />

                            {` No, I haven't read it.`}
                        </label>
                    </div>
                </div>
                <div className="pt-12 text-right">
                    <button class="btn-primary">SAVE</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddBookModal;
