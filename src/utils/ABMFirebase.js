import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"

export const getCollectionFromFirebase = async (idCategoriaParam) => {
    let q
    if (idCategoriaParam) {
        q = query(collection(db, "products"), where("idCategoria", "==", parseInt(idCategoriaParam)))
    } else {
        q = query(collection(db, "products"))
    }
    const queryDocsProducts = await getDocs(q)
    const products = queryDocsProducts.docs.map((doc) => (
        {
            idProd: doc.id,
            ...doc.data()
        }))
    return products
}