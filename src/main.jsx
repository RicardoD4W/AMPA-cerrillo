import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { GenericLogin } from './pages/GenericLogin'
import ConsoleLog from './components/ConsoleLog'
import PaginaPrincipal from './pages/PaginaPrincipal'
import UserPage from './pages/user/UserPage'
import AdminPage from './pages/user/AdminPage'
import GuestPage from './pages/user/GuestPage'
import Header from './components/Header'
import DatosPersonales from './components/DatosPersonales'
import Sugerencias from './components/Sugerencias'
import Suscripcion from './components/Suscripcion'
import AdminisTrarPeticiones from './components/AdministrarPeticiones'
import AdministrarNoticias from './components/AdministrarNoticias'
import CardDetail from './components/CardDetail'

const router = createHashRouter([
	{ path: '/', element: <App /> },
	{
		path: '/iniciar-sesion',
		element: <GenericLogin valueButtonSubmit='Iniciar Sesión' />,
	},
	{
		path: '/registrarse',
		element: <GenericLogin valueButtonSubmit='Registrarse' />,
	},
	{
		path: '/pagina-principal',
		element: <PaginaPrincipal />,
	},

	{
		path: '/pagina-usuario/:id',
		element: <UserPage />,
	},
	{
		path: '/pagina-usuario/:id/datos-personales',
		element: <DatosPersonales />,
	},
	{
		path: '/pagina-usuario/:id/suscripcion',
		element: <Suscripcion />,
	},
	{
		path: '/pagina-usuario/:id/sugerencias',
		element: <Sugerencias />,
	},

	{
		path: '/pagina-admin/:id',
		element: <AdminPage />,
	},
	{
		path: '/pagina-admin/:id/peticiones',
		element: <AdminisTrarPeticiones />,
	},
	{
		path: '/pagina-admin/:id/noticias',
		element: <AdministrarNoticias />,
	},

	{
		path: '/pagina-invitado',
		element: <GuestPage />,
	},
	{
		path: '/:role/:id/:idPublicacion',
		element: <CardDetail />,
	},
	{
		path: '/*',
		element: <Navigate to='/' />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <ConsoleLog /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
)
