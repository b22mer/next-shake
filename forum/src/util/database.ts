import { MongoClient } from 'mongodb'
// const url = 'mongodb+srv://admin:0000@cluster0.cfrqvwj.mongodb.net/?retryWrites=true&w=majority'
// Connect MongoDB
const url ='mongodb+srv://admin:0000@cluster0.cfrqvwj.mongodb.net/?retryWrites=true&w=majority'
// 환경변수 설정하지 않으면 에러 발생
if (!url) {
    throw new Error('The MONGODB_URL environment variable is not defined')
}
let connectDB: Promise<MongoClient>;
if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url).connect()
}
export {connectDB}

// 이런식으로 변수에 저장해놓고 쓰는것이 좋은데 next는 개발시 파일 저장하면 모든 js 코드를 다 읽고 지나감
// 그걸 막고 싶을때의 코드야