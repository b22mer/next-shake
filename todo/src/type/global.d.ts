import { MongoClient } from "@/node_modules/mongodb/mongodb";


export {};
declare global {
    var _mongo: Promise<MongoClient>;
}