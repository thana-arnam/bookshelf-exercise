import { Playfair_Display } from "@next/font/google";
import Image from "next/image";
import useModal from "@/hooks/useModal";
import BookDetail from "@/components/BookDetail";

const playfairDisplaySemiBold = Playfair_Display({
    weight: "600",
    subsets: ["latin"],
});

export default function Book({
    title,
    coverImg,
    finished,
    description,
    category,
}) {
    const bookDetailModal = useModal();

    return (
        <>
            <div className="book" onClick={bookDetailModal.open}>
                <Image
                    src={coverImg}
                    alt="book cover"
                    width={260}
                    height={355}
                />
                <p className={playfairDisplaySemiBold.className + " bookName"}>
                    {title}
                </p>
                {finished ? (
                    <span className="readingStatus">Finish</span>
                ) : null}
            </div>

            <BookDetail
                isShow={bookDetailModal.isShow}
                close={bookDetailModal.close}
                title={title}
                description={description}
                category={category}
            />
        </>
    );
}
