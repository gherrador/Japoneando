import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const alertCart = (count, itemNombre) => {
    MySwal.fire({
        title: <strong>Items added to your cart</strong>,
        html: <i>Added {count} units of {itemNombre} to your cart</i>,
        icon: 'success'
    })
}

const alertRemove = () => {
    MySwal.fire({
        title: <strong>Impossible to perform this action</strong>,
        html: <i>It is not possible to decrease by 1 unit</i>,
        icon: 'error'
    })
}

const dataMissed = () => {
    MySwal.fire({
        title: <strong>Impossible to perform this action</strong>,
        html: <i>One or more fields of your credit card are empty</i>,
        icon: 'error'
      })
}

const deleteProductAlert = () => {
    return new Promise(resolve => {
        Swal.fire({
            title: 'Delete Product',
            text: "Do you want to delete this product?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            resolve(result.isConfirmed)
        })
    })
}

const alertAdd = () => {
    MySwal.fire({
        title: <strong>Impossible to perform this action</strong>,
        html: <i>There is not enough stock of the required item!</i>,
        icon: 'error'
    })
}


const alertLoginError = () => {
    MySwal.fire({
        title: <strong>Impossible to perform this action</strong>,
        html: <i>The username or password is not correctly</i>,
        icon: 'error'
    })
}

const alertLoginSuccess = ({payload}) => {
    MySwal.fire({
        title: <strong>Wellcome!</strong>,
        html: <i>Wellcome {payload.username}!</i>,
        icon: 'success'
    })
}

const alertLogOut = (user) => {

    MySwal.fire({
        title: <strong>Log Out Succefully!</strong>,
        html: <i>Bye bye {user.username}</i>,
        icon: 'success'
    })
}


const registerSuccessAlert = () => {
    MySwal.fire({
        title: <strong>congratulations!!!</strong>,
        html: <i>Now you can log in on our page!</i>,
        icon: 'success'
    })
}

const registerErrorAlert = () => {
    MySwal.fire({
        title: <strong>Impossible to perform this action</strong>,
        html: <i>The user is already registered</i>,
        icon: 'error'
    })
}

const missUser = () => {
    MySwal.fire({
        title: <strong>Impossible to perform this action</strong>,
        html: <i>You must be logged in to enter this route</i>,
        icon: 'error'
    })
}

const buyFailed = () => {
    MySwal.fire({
        title: <strong>Impossible to perform this action</strong>,
        html: <i>You must be logged in to make the purchase</i>,
        icon: 'error'
    })
}

const changeStatusAlert = (actualStatus, newStatus) =>{
    return new Promise(resolve => {
        Swal.fire({
            title: 'Change Status',
            text: `Do you want to change of status from ${actualStatus}  to ${newStatus} product?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, change it!'
        }).then((result) => {
            resolve(result.isConfirmed)
        })
    })

}

const addingProducts = () => {
    MySwal.fire({
        position: 'middle',
        icon: 'success',
        title: 'Adding Product - Please wait...',
        showConfirmButton: false,
        timer: 2000
      })

}


const deleteOrderAlert = (number) => {
    return new Promise(resolve => {
        Swal.fire({
            title: 'Delete Order',
            text: `Do you want to delete the order N°${number}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            resolve(result.isConfirmed)
        })
    })
}


const deleteAllOrderAlert = (number) => {
    return new Promise(resolve => {
        Swal.fire({
            title: 'Delete Orders',
            text: `Do you want to delete all orders?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            resolve(result.isConfirmed)
        })
    })
}



export { alertCart,dataMissed, alertRemove,deleteAllOrderAlert ,alertAdd, alertLoginError, alertLoginSuccess, registerSuccessAlert,changeStatusAlert ,registerErrorAlert,  deleteProductAlert, alertLogOut, addingProducts, missUser, buyFailed, deleteOrderAlert }



