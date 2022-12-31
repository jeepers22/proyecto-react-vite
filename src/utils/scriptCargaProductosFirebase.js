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
        precio: 1500,
        stock: 3,
        descripcion: "Albun Naruto Shippuden",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/album-naruto_rmmjqd.png"
    },
    {
        idCategoria: 2,
        categoria: "Figuritas",
        nombre: "Messi",
        anio: 2022,
        precio: 3000,
        stock: 5,
        descripcion: "Figurita de Lionel Messi (GOAT), capitán de la selección argentina",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152281/figu-messi_y7mduw.jpg"
    },
    {
        idCategoria: 2,
        categoria: "Figuritas",
        nombre: "Cristiano Ronaldo",
        anio: 2022,
        precio: 2500,
        stock: 3,
        descripcion: "Figurita de Cristiano Ronaldo (CR7), capitán de la selección de Portugal",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152281/figu-cr7_xjopch.jpg"
    },
    {
        idCategoria: 2,
        categoria: "Figuritas",
        nombre: "Qatar 2022",
        anio: 2022,
        precio: 300,
        stock: 55,
        descripcion: "Figuritas Qatar 2022 en paquete sellado",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152281/figus-mundial_izlruc.png"
    },
    {
        idCategoria: 2,
        categoria: "Figuritas",
        nombre: "Naruto 2021",
        anio: 2021,
        precio: 150,
        stock: 30,
        descripcion: "Figuritas Naruto 2021 en paquete sellado",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/figus-naruto_jsvcag.png"
    },
    {
        idCategoria: 3,
        categoria: "Coleccionables",
        nombre: "Emboscada de Veloceleste",
        anio: 2004,
        precio: 7000,
        stock: 4,
        descripcion: "Emboscada de Veloceleste, una de las cartas mas valiosas del momento",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/magic-2_f0pcn4.jpg"
    },
    {
        idCategoria: 3,
        categoria: "Coleccionables",
        nombre: "Desdén de Sharkhan",
        anio: 2004,
        precio: 8500,
        stock: 3,
        descripcion: "Desdén de Sharkhan, una de las cartas más dificiles de conseguir",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/magic-1_rw7meu.jpg"
    },
    {
        idCategoria: 3,
        categoria: "Coleccionables",
        nombre: "Stampede Dwarf",
        anio: 2004,
        precio: 8000,
        stock: 1,
        descripcion: "Stampede Dwarf, carta importada, hay sólo unas pocas unidades en el mundo",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/magic-3_ovojug.jpg"
    },
    {
        idCategoria: 3,
        categoria: "Coleccionables",
        nombre: "Slinn Voda",
        anio: 2004,
        precio: 4300,
        stock: 6,
        descripcion: "Slinn Voda, el Abisal Emergente. Estupenda bestia marina con un asombroso poder",
        portada: "https://res.cloudinary.com/datqk3byv/image/upload/v1672152282/magic-4_bjw8g5.jpg"
    }
]

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCL1EuNUhGtuTk9CYJC-ZYUpTc1RQjbZVg",
    authDomain: "proyecto-react-e75cf.firebaseapp.com",
    projectId: "proyecto-react-e75cf",
    storageBucket: "proyecto-react-e75cf.appspot.com",
    messagingSenderId: "130925470865",
    appId: "1:130925470865:web:82933498e0ab0a38c9cb30"
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


