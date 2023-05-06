import { useMainStore } from "../stores/mainContext"
import { useNavigate } from 'react-router-dom'

const { user } = useMainStore()
const navigate = useNavigate()

export const useRedirect = () => {
    return user && navigate('/iniciar-sesion');
}