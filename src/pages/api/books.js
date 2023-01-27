const delay = (cb) => {
    const ms = Math.round(Math.random() * 5000);
    setTimeout(cb, ms);
};

const books = [
    {
        id: 1,
        title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
        desc: "Eric Evans has written a fantastic book on how you can make the design of your software match your mental model of the problem domain you are addressing.",
        coverImg:
            "https://m.media-amazon.com/images/I/61aFldsgAmL._SX646_BO1,204,203,200_.jpg",
        owner: "bazsup",
        category: "Computer",
        finished: false,
    },
    {
        id: 2,
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        desc: "Eric Evans has written a fantastic book on how you can make the design of your software match your mental model of the problem domain you are addressing.",
        coverImg:
            "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        owner: "bazsup",
        category: "Computer",
        finished: true,
    },
    {
        id: 2,
        title: "Gone Girl",
        desc: "#1 NEW YORK TIMES BESTSELLER The “mercilessly entertaining” (Vanity Fair) instant classic “about the nature of identity and the terrible secrets that can survive and thrive in even the most intimate relationships” (Lev Grossman, Time)—now featuring never-before-published deleted scenes.",
        coverImg: "https://m.media-amazon.com/images/I/41x6HtLdEhL.jpg",
        owner: "bazsup",
        category: "Novel",
        finished: false,
    },
];

const defaultCategory = "Computer";

export default function handler(req, res) {
    const category = req.query.category || defaultCategory;
    console.log();
    const result = books.filter((b) => b.category === category);

    delay(() => {
        res.status(200).json(result);
    });
}
