import firebase_app from "../config";
import { getFirestore, doc, addDoc, collection } from "firebase/firestore";

const db = getFirestore(firebase_app)

type Data = {
    classroom: string,
    email: string,
    instagram: string,
    name: string,
    notes: string,
    phone_number: string
}
export default async function addUser(data: Data) {
    let result = null;
    let error = null;

    try {
        const usersCollection = collection(db, "users");
        result = await addDoc(usersCollection, data);
    } catch (e) {
        error = e;
    }

    return { result, error };
}