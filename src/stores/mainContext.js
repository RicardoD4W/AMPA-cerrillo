import create from 'zustand'

export const useMainStore = create((set, get) => ({
	emailLogin: '',
	passwordLogin: '',
	dataLogin: false,
	tasasLogin: false,
	role: undefined,

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

	logout: () => {
		set({ emailLogin: '' })
		set({ passwordLogin: '' })
		set({ dataLogin: false })
		set({ tasasLogin: false })
		set({ role: undefined })
	},
}))
