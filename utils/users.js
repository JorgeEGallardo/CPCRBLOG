import { firestore } from "./firebase";

const getUsers = async () => {
    const snapshot = await firestore.collection("cities").get()
    //snapshot.docs.forEach((doc) => console.log(doc.data()))
    console.log(snapshot.docs, 'ewe')
    return snapshot.docs
};
const addUser = async (params) => {
    if (params) {
    const snapshot = await firestore.collection("cities").add({
       ...params
    })
    console.log(snapshot)
}
};
export { getUsers };
export { addUser };
