import { doc, setDoc, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const catalogo = [
    {
        idGenero: 1,
        genero: "Album",
        titulo: "FIFA World Cup - Qatar 2022",
        anio: 2022,
        precio: 2500,
        stock: 10,
        resenia: "Album oficial Panini del mundial Qatar 2022",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152281/album-mundial_cbmexa.png"
    },
    {
        idGenero: 1,
        genero: "Album",
        titulo: "Naruto Shippuden",
        anio: 2021,
        precio: 4000,
        stock: 3,
        resenia: "Albun Naruto Shippuden",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/album-naruto_rmmjqd.png"
    },
    {
        idGenero: 2,
        genero: "Figuritas",
        titulo: "Figurita Messi",
        anio: 2022,
        precio: 5500,
        stock: 15,
        resenia: "Figurita de Lionel Messi (GOAT), capitán de la selección argentina",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152281/figu-messi_y7mduw.jpg"
    },
    {
        idGenero: 2,
        genero: "Figuritas",
        titulo: "Figurita Cristiano Ronaldo",
        anio: 2022,
        precio: 3300,
        stock: 1,
        resenia: "Figurita de Cristiano Ronaldo (CR7), capitán de la selección de Portugal",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152281/figu-cr7_xjopch.jpg"
    },
    {
        idGenero: 2,
        genero: "Figuritas",
        titulo: "Paquete Qatar 2022",
        anio: 2017,
        precio: 2800,
        stock: 5,
        resenia: "Figuritas Qatar 2022 en paquete sellado",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152281/figus-mundial_izlruc.png"
    },
    {
        idGenero: 2,
        genero: "Figuritas",
        titulo: "Paquete Naruto 2021",
        anio: 2004,
        precio: 1500,
        stock: 8,
        resenia: "Figuritas Naruto 2021 en paquete sellado",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/figus-naruto_jsvcag.png"
    },
    {
        idGenero: 3,
        genero: "Coleccionables",
        titulo: "Emboscada de Veloceleste",
        anio: 2004,
        precio: 1500,
        stock: 8,
        resenia: "Emboscada de Veloceleste, una de las cartas mas valiosas del momento",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/magic-2_f0pcn4.jpg"
    },
    {
        idGenero: 3,
        genero: "Coleccionables",
        titulo: "Desdén de Sharkhan",
        anio: 2004,
        precio: 1500,
        stock: 8,
        resenia: "Desdén de Sharkhan, una de las cartas más dificiles de conseguir",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/magic-1_rw7meu.jpg"
    },
    {
        idGenero: 3,
        genero: "Coleccionables",
        titulo: "Stampede Dwarf",
        anio: 2004,
        precio: 1500,
        stock: 8,
        resenia: "Stampede Dwarf, carta importada, hay sólo unas pocas unidades en el mundo",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/magic-3_ovojug.jpg"
    },
    {
        idGenero: 3,
        genero: "Coleccionables",
        titulo: "Slin Voda",
        anio: 2004,
        precio: 1500,
        stock: 8,
        resenia: "Slin Voda, el Abisal Emergente. Estupenda bestia marina con un asombroso poder",
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


