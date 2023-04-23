import create from 'zustand'

export const useMainStore = create((set, get) => ({
	emailLogin: '',
	passwordLogin: '',

	dataLogin: false,
	tasasLogin: false,

	user: {
		dni: '',
		email: '',
		id: '',
		img: '',
		name: '',
		paid: false,
		phone: '',
		roles: [],
		token: '',
	},

	setEmailLogin: (value) => {
		set({ emailLogin: value })
	},
	setPassLogin: (value) => {
		set({ passwordLogin: value })
	},
	setDataLogin: (value) => {
		set({ dataLogin: value })
	},
	setTasasLogin: (value) => {
		set({ tasasLogin: value })
	},

	setUser: ({ statusCode, ...value }) => {
		set(({ user }) => ({ user: { ...user, ...value } }))
	},

	logout: () => {
		set({ emailLogin: '' })
		set({ passwordLogin: '' })
		set({ dataLogin: false })
		set({ tasasLogin: false })
		set({ user: {} })
	},
}))
