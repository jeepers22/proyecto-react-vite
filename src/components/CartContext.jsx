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
                qty: quantity
            }]) // ** VER QUE PONER ACA PARA QUE AGREGUE TODOS
        }

    const addCartItemQty = (item, quantity) => {
        const itemToUpdate = cartItems.find(itemCart => itemCart.idPelicula === item.idPelicula)
        const cartUpdate = cartItems.map(itemCart =>
            itemCart.idPelicula === itemToUpdate.idPelicula
            ? {
                idPelicula: itemCart.idPelicula,
                titulo: itemCart.titulo,
                qty: itemCart.qty + quantity
              }
            : itemCart
        )
        setCartItems(cartUpdate)
    }

    const removeItem = (itemId) => {
        const updateCart = cartItems.filter(item => item.id !== itemId)
        setCartItems(updateCart)
    }

    const clearCart = () => {
        setCartItems([])
    }

    const isInCart = (itemId) => cartItems.some(item => item.idPelicula === itemId)

    return (
        <CartContext.Provider value={{cartItems, addItem, removeItem, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider