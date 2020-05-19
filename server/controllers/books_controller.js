const books = []
let id = 0

module.exports = {
	read: (req, res) => {
		res.status(200).send(books)
	},
	create: (req, res) => {
		const { title, author } = req.body

		if (!title || !author) return res.status(400).send('Title and Author are BOTH required')

		const book = { id: ++id, title, author }
		books.push(book)
		res.status(200).send(books)
	},
	update: (req, res) => {
		const { book_id } = req.params
		const { title, author } = req.body

        const index = books.findIndex(e => e.id === +book_id)
        
        if (index === -1) {
            return res.status(404).send('Book not found')
        }

        const updatedBook = {
            id: +book_id,
            title: title || books[index].title,
            author: author || books[index].author
        }

        books[index] = updatedBook

        res.status(200).send(books)
	},
	delete: (req, res) => {
        const {book_id} = req.params
        
        const index = books.findIndex(e => e.id === +book_id)

        if (index === -1) return res.status(404).send('Book not found')

        books.splice(index, 1)

        res.status(200).send(books)
    }
}
