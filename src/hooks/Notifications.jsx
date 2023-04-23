import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useErrorNotify = (errorMsg) =>
	toast.error(errorMsg, {
		position: 'top-center',
		autoClose: 6000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	})

const useCorrectLoginNotify = () =>
	toast.success('El inicio de sesión se ha realizado con éxito', {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	})

const useCorrectRegisterNotify = (userName) =>
	toast.success(`Se ha registrado el usuario: ${userName} correctamente`, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	})

export { useErrorNotify, useCorrectLoginNotify, useCorrectRegisterNotify }
