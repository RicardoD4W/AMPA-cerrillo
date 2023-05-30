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

const useCorrectAceptDenyNotify = (paid, user) => {
	paid
		? toast.success(`Usuario ${user} admitido con éxito`, {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
		  })
		: toast.success(`Usuario ${user} denegado con éxito`, {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
		  })
}

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

const useCorrectChangeUserDataNotify = () =>
	toast.success(`Sus datos se han actualizado correctamnete`, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	})

const useCorrectChangeChildDataNotify = (childName) =>
	toast.success(
		`Los datos de su hijo ${childName}, se han actualizado correctamnete`,
		{
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		}
	)

const useCorrectPostSuggestionsNotify = (title) =>
	toast.success(
		`La sugerencia "${title}", ha sido notificada correctamente al administrador`,
		{
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		}
	)

export {
	useErrorNotify,
	useCorrectLoginNotify,
	useCorrectRegisterNotify,
	useCorrectChangeUserDataNotify,
	useCorrectChangeChildDataNotify,
	useCorrectPostSuggestionsNotify,
	useCorrectAceptDenyNotify,
}
