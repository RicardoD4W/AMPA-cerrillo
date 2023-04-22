import create from 'zustand'

export const useMainStore = create((set, get) => ({
	emailLogin: '',
	passwordLogin: '',
	name: '',
	dataLogin: false,
	tasasLogin: false,
	role: undefined,
	bearerToken: '',

	setEmail: (value) => {
		set({ emailLogin: value })
	},
	setPass: (value) => {
		set({ passwordLogin: value })
	},
	setData: (value) => {
		set({ dataLogin: value })
	},
	setRole: (value) => {
		set({ role: value })
	},
	setTasas: (value) => {
		set({ tasasLogin: value })
	},
	setName: (value) => {
		set({ name: value })
	},
	setBearerToken: (value) => {
		set({ bearerToken: value })
	},

	logout: () => {
		set({ emailLogin: '' })
		set({ name: '' })
		set({ passwordLogin: '' })
		set({ dataLogin: false })
		set({ tasasLogin: false })
		set({ role: undefined })
		set({ bearerToken: '' })
	},
}))
