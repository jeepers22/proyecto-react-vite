import { doc, setDoc, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const catalogo = [
    {
        idCategoria: 1,
        categoria: "Album",
        nombre: "World Cup - Qatar 2022",
        anio: 2022,
        precio: 2500,
        stock: 10,
        descripcion: "Album oficial Panini del mundial Qatar 2022",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152281/album-mundial_cbmexa.png"
    },
    {
        idCategoria: 1,
        categoria: "Album",
        nombre: "Naruto Shippuden",
        anio: 2021,
        precio: 4000,
        stock: 3,
        descripcion: "Albun Naruto Shippuden",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/album-naruto_rmmjqd.png"
    },
    {
        idCategoria: 2,
        categoria: "Figuritas",
        nombre: "Messi",
        anio: 2022,
        precio: 5500,
        stock: 15,
        descripcion: "Figurita de Lionel Messi (GOAT), capitán de la selección argentina",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152281/figu-messi_y7mduw.jpg"
    },
    {
        idCategoria: 2,
        categoria: "Figuritas",
        nombre: "Cristiano Ronaldo",
        anio: 2022,
        precio: 3300,
        stock: 1,
        descripcion: "Figurita de Cristiano Ronaldo (CR7), capitán de la selección de Portugal",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152281/figu-cr7_xjopch.jpg"
    },
    {
        idCategoria: 2,
        categoria: "Figuritas",
        nombre: "Qatar 2022",
        anio: 2022,
        precio: 2800,
        stock: 5,
        descripcion: "Figuritas Qatar 2022 en paquete sellado",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152281/figus-mundial_izlruc.png"
    },
    {
        idCategoria: 2,
        categoria: "Figuritas",
        nombre: "Naruto 2021",
        anio: 2021,
        precio: 1500,
        stock: 8,
        descripcion: "Figuritas Naruto 2021 en paquete sellado",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/figus-naruto_jsvcag.png"
    },
    {
        idCategoria: 3,
        categoria: "Coleccionables",
        nombre: "Emboscada de Veloceleste",
        anio: 2004,
        precio: 1500,
        stock: 8,
        descripcion: "Emboscada de Veloceleste, una de las cartas mas valiosas del momento",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/magic-2_f0pcn4.jpg"
    },
    {
        idCategoria: 3,
        categoria: "Coleccionables",
        nombre: "Desdén de Sharkhan",
        anio: 2004,
        precio: 1500,
        stock: 8,
        descripcion: "Desdén de Sharkhan, una de las cartas más dificiles de conseguir",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/magic-1_rw7meu.jpg"
    },
    {
        idCategoria: 3,
        categoria: "Coleccionables",
        nombre: "Stampede Dwarf",
        anio: 2004,
        precio: 1500,
        stock: 8,
        descripcion: "Stampede Dwarf, carta importada, hay sólo unas pocas unidades en el mundo",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/magic-3_ovojug.jpg"
    },
    {
        idCategoria: 3,
        categoria: "Coleccionables",
        nombre: "Slinn Voda",
        anio: 2004,
        precio: 1500,
        stock: 8,
        descripcion: "Slinn Voda, el Abisal Emergente. Estupenda bestia marina con un asombroso poder",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/magic-4_bjw8g5.jpg"
    }
]

// Your web app's Firebase configuration
const firebaseConfig = {
// Creado con maxizero@gmail.com se me excedió la cuota diaria
    apiKey: "AIzaSyCL1EuNUhGtuTk9CYJC-ZYUpTc1RQjbZVg",
    authDomain: "proyecto-react-e75cf.firebaseapp.com",
    projectId: "proyecto-react-e75cf",
    storageBucket: "proyecto-react-e75cf.appspot.com",
    messagingSenderId: "130925470865",
    appId: "1:130925470865:web:82933498e0ab0a38c9cb30"

    // Creado con maxizerodev@gmail.com
    // apiKey: "AIzaSyD85SGU5RHT6m9hcoZuzpVN7Nsnhwdjslw",
    // authDomain: "proyecto-final-react-b5e77.firebaseapp.com",
    // projectId: "proyecto-final-react-b5e77",
    // storageBucket: "proyecto-final-react-b5e77.appspot.com",
    // messagingSenderId: "374680553485",
    // appId: "1:374680553485:web:252700d13f9dd3107f2d44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);



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


