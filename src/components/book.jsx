import {Playfair_Display} from "@next/font/google";
import useModal from "@/hooks/useModal";
import BookDetail from "@/components/BookDetail";

const playfairDisplaySemiBold = Playfair_Display({weight: "600", subsets: ['latin']})

export default function Book({title, finished, description, category}) {
    const bookDetailModal = useModal();

    return (
        <>
            <div className="book" onClick={bookDetailModal.open}>
                <img src="https://via.placeholder.com/269x355" alt="book cover"/>
                <p className={playfairDisplaySemiBold.className + " bookName"}>{title}</p>
                {finished? <span className="readingStatus">Finish</span>: null}
            </div>

            <BookDetail
                isShow={bookDetailModal.isShow}
                close={bookDetailModal.close}
                title={title}
                description={description}
                category={category}
            />
        </>
    )
}
