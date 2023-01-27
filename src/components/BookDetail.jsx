import Image from "next/image";
import Modal from "./Modal";
import { Playfair_Display } from "@next/font/google";

const playfairDisplaySemiBold = Playfair_Display({
    weight: "600",
    subsets: ["latin"],
});

export default function BookDetail({
    isShow,
    coverImg,
    close,
    title,
    finished,
    description,
    category,
}) {
    if (!isShow) return null;
    return (
        <>
            <Modal close={close}>
                <div className="bookDetail">
                    <div className="left">
                        <Image
                            src={coverImg}
                            alt="book cover"
                            width={165}
                            height={230}
                        />
                        <div className="pt-12">
                            <span className="category pt-12">{category}</span>
                        </div>
                    </div>

                    <div className="right">
                        <p
                            className={
                                playfairDisplaySemiBold.className + " bookName"
                            }
                        >
                            {title}
                        </p>
                        <p className="description">{description}</p>

                        <a className="readBtn" href="#">
                            I have read it
                        </a>
                    </div>
                </div>
            </Modal>
        </>
    );
}
