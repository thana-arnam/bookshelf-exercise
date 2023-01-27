import Modal from "./Modal";
import {Playfair_Display} from "@next/font/google";

const playfairDisplaySemiBold = Playfair_Display({weight: "600", subsets: ['latin']})

export default function BookDetail({ isShow, close, title, finished, description, category}) {
    if (!isShow) return null;
    return (
        <>
            <Modal close={close}>
                <div className="bookDetail">
                    <div className="left">
                        <img className="img" src="https://via.placeholder.com/269x355" alt="book cover"/>
                        <span className="category">{category}</span>
                    </div>

                    <div className="right">
                        <p className={playfairDisplaySemiBold.className + " bookName"}>{title}</p>
                        <p className="description">{description}</p>

                        <a className="readBtn" href="#">I have read it</a>
                    </div>
                </div>
            </Modal>
        </>
    )
}
