import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const mostrarAlertBasico = (titulo, msjSecundario, icono) => {
    MySwal.fire(
        titulo,
        msjSecundario,
        icono
    )
}

export const mostrarAlertDeleteItem = (item) => {
    let userResponse = false
    MySwal.fire({
        title: 'Está seguro?',
        text: `Está por eliminar el ítem ${item.nombre} del carrito`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#187c04',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, quitar ítem'
    }).then((result) => {
        if (result.isConfirmed) {
            MySwal.fire({
                title: 'Item eliminado',
                icon: 'success'
            })
            userResponse = true
        } else {
            userResponse = true
        }
    })
    return userResponse
}

export const mostrarAlertEmptyCart = () => {
    MySwal.fire({
        title: 'Está seguro?',
        text: `Está por vaciar el contenido de su carrito`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#187c04',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar carrito'
    }).then((result) => {
        if (result.isConfirmed) {
            MySwal.fire({
                title: 'Carrito eliminado',
                icon: 'success'
            })
            clearCart()
        }
    })
}