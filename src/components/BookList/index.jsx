"use client";

// 💡 book contains title: string, coverImg: string, finished: boolean

const Book = ({ name, isFinish, srcImage }) => {
  return (
    <div className="book">
      <div className="book-thumbnail">
        <img src={srcImage} alt="book cover" />
      </div>
      <p className="text-title">{name}</p>
      {isFinish ? <span className="readingStatus">Finish</span> : ""}
    </div>
  );
};

const BookList = () => {
  const books = [
    {
      name: "Domain Driven Design",
      isFinish: true,
      srcImage:
        "https://m.media-amazon.com/images/I/61aFldsgAmL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      name: "Clean Code",
      isFinish: false,
      srcImage:
        "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
  ];
  return (
    <div className="bookList">
      {books.map((b) => (
        <Book
          key={b}
          name={b.name}
          isFinish={b.isFinish}
          srcImage={b.srcImage}
        />
      ))}
    </div>
  );
};

// const BookList = () => {
//   return (
//     <div className="bookList">
//       <div className="book">
//         <div className="book-thumbnail">
//           <img
//             src="https://m.media-amazon.com/images/I/61aFldsgAmL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
//             alt="book cover"
//           />
//         </div>
//         <p className="text-title">Domain Driven Design</p>
//         <span className="readingStatus">Finish</span>
//       </div>
//       <div className="book">
//         <div className="book-thumbnail">
//           <img
//             src="https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
//             alt="book cover"
//           />
//         </div>
//         <p className="text-title">Clean Code</p>
//       </div>
//     </div>
//   );
// };

export default BookList;
