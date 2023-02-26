const Book = require("../models/book");

exports.getBooks = async (req, res) => {
    try{
        const allBooks = await Book.find({});
        console.log(allBooks);
        if(allBooks) {
            return res.status(200).send({
                allBooks,
                success: "true"
            })
        }
    } catch{(err) => {
        console.log(err);
        res.status(500).send({
            message: "Internal server error",
            success: "false"
        })
    }}
    
}

