import { useState, createContext } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    const addItem = (item, quantity) => {
        isInCart(item.idPelicula)
        ? addCartItemQty(item, quantity)
        : setCartItems([...cartItems, {
                idPelicula: item.idPelicula,
                titulo: item.titulo,
                precio: item.precio,
                qty: quantity
            }])
        }

    const addCartItemQty = (item, quantity) => {
        const itemToUpdate = cartItems.find(itemCart => itemCart.idPelicula === item.idPelicula)
        const cartUpdate = cartItems.map(itemCart =>
            itemCart.idPelicula === itemToUpdate.idPelicula
            ? {
                idPelicula: itemCart.idPelicula,
                titulo: itemCart.titulo,
                precio: item.precio,
                qty: itemCart.qty + quantity
            }
            : itemCart
        )
        setCartItems(cartUpdate)
    }

    const removeItem = (itemId) => {
        const updateCart = cartItems.filter(item => item.idPelicula !== itemId)
        setCartItems(updateCart)
    }

    const clearCart = () => {
        setCartItems([])
    }

    const isInCart = (itemId) => cartItems.some(item => item.idPelicula === itemId)

    const countCartItems = () => { // ! OJO QUE CREO QUE NO LO ESTOY USANDO ***********************************************
        const cantItems = cartItems.reduce((acum, item) => acum + item.qty, 0)
        if (cantItems > 0) {
            return cantItems
        }
    }

    const calcTotalPrice = () => cartItems.reduce((acum, item) => acum + (item.precio * item.qty), 0)

    return (
        <CartContext.Provider value={{cartItems, addItem, removeItem, clearCart, isInCart, countCartItems, calcTotalPrice}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider