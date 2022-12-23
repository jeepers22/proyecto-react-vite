import catalogo from "./catalogo"
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"


export const enviarProductos = () => {   // * ESTA FUNCION LA TENGO QUE LLAMAR DESDE DONDE VAYA A ENVIAR LOS PRODUCTOS
    catalogo.forEach(prod =>
        sendProductToFireStore(prod)
            .then (result => console.log(result.id))
            .catch (err => console.log(err))
    )
}

const sendProductToFireStore = async(prod) => {
    const newProductRef = doc(collection(db, "products"))
    await setDoc(newProductRef, prod)
    return newProductRef
}

enviarProductos()
