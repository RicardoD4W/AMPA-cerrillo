import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMainStore } from '../../stores/mainContext'
import StructureLayout from '../../components/StructureLayout'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import { useAceptUser, useDenyUser, useGetAllUsers } from '../../services/admin'
import { ToastContainer } from 'react-toastify'
import { useIsArrayNotification } from '../../hooks/useIsArrayNotification'
import { useCorrectAceptDenyNotify } from '../../hooks/Notifications'
import { Audio } from 'react-loader-spinner'

const AdminPage = () => {
	const user = useMainStore((state) => state.user)
	const navigate = useNavigate()

	const [usersList, setUsersList] = useState([])
	const [filterUsersList, setFilterUsersList] = useState(usersList)

	useEffect(() => {
		!user.email &&
			user.roles.map((rol) => {
				return rol === 'ADMIN_ROLE'
			}) &&
			navigate('/iniciar-sesion')
	}, [])

	useEffect(() => {
		useGetAllUsers(user.token).then((res) => setFilterUsersList(res.users))
	}, [usersList])

	useEffect(() => {
		useGetAllUsers(user.token).then((res) => setUsersList(res.users))
	}, [filterUsersList])

	const handleOnClickAcceptUser = (idUser) => () => {
		useAceptUser(user.token, idUser).then((res) => {
			if (res.error) {
				useIsArrayNotification(res.message)
			} else {
				useCorrectAceptDenyNotify(res.paid, res.name)
			}
		})
	}
	const handleOnClickDenyUser = (idUser) => () => {
		useDenyUser(user.token, idUser).then((res) => {
			if (res.error) {
				useIsArrayNotification(res.message)
			} else {
				useCorrectAceptDenyNotify(res.paid, res.name)
			}
		})
	}

	return (
		<>
			<StructureLayout>
				<Header admin />
				<Layout>
					<ToastContainer />
					<section className='bg-slate-100/40'>
						{filterUsersList ? (
							filterUsersList.map(({ email, name, paid, phone, id }) => (
								<div
									key={id}
									className='flex flex-wrap items-center m-6 border-b-2 border-slate-300'
								>
									<article class='mr-3 md:min-w-[270px] md:max-w-[270px]  '>
										<p className='flex text-sm'>
											Nombre:{' '}
											<span
												className={` ml-1 px-1 py-0.5 text-xs font-medium text-blue-800 capitalize bg-blue-100 border border-blue-400 rounded`}
											>
												{name}
											</span>
										</p>{' '}
									</article>

									<article class='mr-3 md:min-w-[200px] md:max-w-[200px]'>
										<p className='flex text-sm'>
											Mail:{' '}
											<span
												className={` ml-1 px-1 py-0.5 text-xs font-medium text-indigo-800  bg-indigo-100 border border-indigo-400 rounded`}
											>
												{email}
											</span>
										</p>{' '}
									</article>
									<article class='mr-3 md:min-w-[130px] md:max-w-[130px]'>
										<p className='flex text-sm'>
											Tlfno:{' '}
											<span
												className={` ml-1 px-1 py-0.5 text-xs font-medium text-purple-800 capitalize bg-purple-100 border border-purple-400 rounded`}
											>
												{phone}
											</span>
										</p>{' '}
									</article>
									<article class='mr-3 md:min-w-[100px] md:max-w-[100px]'>
										<p className='flex text-sm'>
											{paid ? (
												<span
													className={`px-1 py-0.5 text-xs font-medium text-green-800 capitalize bg-green-100 border border-green-400 rounded`}
												>
													Pagado
												</span>
											) : (
												<span
													className={`px-1 py-0.5 text-xs font-medium text-red-800 capitalize bg-red-100 border border-red-400 rounded`}
												>
													No Pagado
												</span>
											)}
										</p>{' '}
									</article>
									<article class=''>
										<p className='text-sm'>
											{paid ? (
												<button onClick={handleOnClickDenyUser(id)}>
													{' '}
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														strokeWidth={1.5}
														stroke='currentColor'
														className='w-6 h-6 text-red-600 cursor-pointer'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
														/>
													</svg>
												</button>
											) : (
												<button onClick={handleOnClickAcceptUser(id)}>
													{' '}
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														strokeWidth={1.5}
														stroke='currentColor'
														className='w-6 h-6 mt-2 text-green-600 cursor-pointer'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
														/>
													</svg>
												</button>
											)}
										</p>{' '}
									</article>
								</div>
							))
						) : (
							<Audio
								height='100'
								width='100'
								color='#4fa94d'
								ariaLabel='audio-loading'
								wrapperStyle={{}}
								wrapperClass='wrapper-class'
								visible={true}
							/>
						)}
					</section>
				</Layout>
				<Footer />
			</StructureLayout>
		</>
	)
}

export default AdminPage
