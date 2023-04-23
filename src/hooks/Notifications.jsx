import { ToastContainer, toast } from 'react-toastify'
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

export { useErrorNotify }
