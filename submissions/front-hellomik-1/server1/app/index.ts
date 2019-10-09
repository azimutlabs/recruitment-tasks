import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

const app = express();
const port = 8082;
const router = express.Router();

async function main() {
    app.use(bodyParser.json());
    app.use(cors());
    app.listen(port, () => console.log(`Server started on port ${port}`));
    const db = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        }
    ];
    router.get('/all', async (req, res) => {
        res.status(200).send(db.slice(0, 3))
    })
    router.get('/pag', async (req, res) => {
        console.log(req.query);
        console.log(req.query._page);
        const yer = parseInt(req.query._page) + parseInt(req.query._limit)
        const sendTo = db.slice(req.query._page, yer)
        res.status(200).send(sendTo);
    })
    app.use('/', router);
}

main() 