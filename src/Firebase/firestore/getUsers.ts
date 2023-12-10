import firebase_app from "../config";
import { getFirestore, collection, getDocs, query, where, limit } from "firebase/firestore";

const db = getFirestore(firebase_app)
const usersCollectionRef = collection(db, "users")

export type User = {
    classroom: string
    id: string
    instagram: string
    name: string
    notes: string
    phone_number: string 
}

export default async function getUsers() {
        //? Read the data;
        let result: User[] | undefined, error: any;
        const q = query(usersCollectionRef, limit(5));
        try {
            const data = await getDocs(q)
            const filteredData:User[] = data.docs.map((doc) => {
                let user = { ...doc.data(), id: doc.id } as User
                user.name = user.name.substring(0, 12) + "..."
                return user;
            })
            result = filteredData;
        } catch (error) {
            error = error;
        }

        return { result, error };
}
export async function getAllUsers() {
        //? Read the data;
        let result: User[] = [];
        try {
            const data = await getDocs(usersCollectionRef)
            const filteredData:User[] = data.docs.map((doc) => {
            let user = { ...doc.data(), id: doc.id } as User
            user.name = user.name.substring(0, 12) + "..."
            return user;
            })
            result = filteredData;
        } catch (error) {
            console.log(error);
        }

        return result;
}