import { collection, getDocs, getDoc, setDoc, updateDoc, doc, increment, where, query } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"

export const getCollectionFromFirebase = async (idCategoriaParam) => {
    let q
    if (idCategoriaParam) {
        // where(atributo colección, "==", id traído por parámetro)
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

export const getDocFromFirebase = async (idProdParam) => {
    const docRef = doc(db, "products", idProdParam)
    const docProduct = await getDoc(docRef)
    if (docProduct.exists()) {
        return {
            idProd: docProduct.id,
            ...docProduct.data()
        }
    } else {
        console.log("Intentando acceder a un Item inexistente")
    }
}

export const sendOrderToFireStore = async(orden) => {
    const newProductRef = doc(collection(db, "orders"))
    await setDoc(newProductRef, orden)
    return newProductRef
}

export const updateOrderFirestore = async(item) => {
    const itemRef = doc(db, "products", item.idProd)
    await updateDoc(itemRef, {
        stock: increment(-item.qty)
    })
    return itemRef
}