import { toast, Slide } from 'react-toastify';

export const dangerMessage = (msg: string) => {
    toast.error(msg, {
        position: "top-center",
        autoClose: 4500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "light",
    })
}

export const successMessage = (msg: string) => {
    toast.success(msg, {
        position: "top-center",
        autoClose: 4500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "light",
    })
}