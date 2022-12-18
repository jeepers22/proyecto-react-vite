import { useState, createContext } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    const addItem = (item, quantity) => {
        setCartItems(item) // ** VER QUE PONER ACA PARA QUE AGREGUE TODOS
    }

    const removeItem = (itemId) => {
        const updateCart = cartItems.filter(item => item.id !== itemId)
        setCartItems(updateCart)
    }

    const clearCart = () => {
        setCartItems([])
    }

    const isInCart = (itemId) => cartItems.some(item => item.id === itemId)

    return (
        <CartContext.Provider value={{cartItems, addItem, removeItem, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider