import React, { createContext, useCallback, useContext, useEffect, useState } from "react"
import uuid from "react-native-uuid"
import * as SecureStore from "expo-secure-store"

const StateContext = createContext()

export const StateProvider = ({ children }) => {
	const [page, setPage] = useState(["home"])
	const [dialog, setDialog] = useState({
		editWallet: false,
		deleteWallet: false,
		deletPayment: false,
	})

	const [wallets, setWallets] = useState([])
	const [selectedWalletId, setSelectedWalletId] = useState(null)

	const [payments, setPayments] = useState([])
	const [selectedPaymentId, setSelectedPaymentId] = useState(null)

	const getWallets = useCallback(async () => {
		const storedWallets = await SecureStore.getItemAsync("wallets")

		setWallets(storedWallets ? JSON.parse(storedWallets) : [])
	}, [])

	const addWallet = async (values) => {
		try {
			const newWallet = { ...values, id: uuid.v4(), dateCreated: new Date(Date.now()).toISOString() }
			const newWallets = [...wallets, newWallet]
			setWallets(newWallets)
			await SecureStore.setItemAsync("wallets", JSON.stringify(newWallets))
		} finally {
			setPage(["wallets"])
		}
	}

	const editWallet = async (values) => {
		try {
			const newWallets = wallets.map((wallet) =>
				wallet.id === selectedWalletId ? { ...wallet, ...values } : wallet
			)
			setWallets(newWallets)
			await SecureStore.setItemAsync("wallets", JSON.stringify(newWallets))
		} finally {
			setPage((page) => page.slice(0, page.length - 1))
		}
	}

	const deleteWallet = async () => {
		try {
			const newWallets = wallets.filter((wallet) => wallet.id !== selectedWalletId)
			const newPayments = payments.filter((payment) => payment.walletId !== selectedWalletId)
			setWallets(newWallets)
			setPayments(newPayments)
			await SecureStore.setItemAsync("wallets", JSON.stringify(newWallets))
			await SecureStore.setItemAsync("payments", JSON.stringify(newPayments))
		} finally {
			setSelectedWalletId(null)
			setDialog((dialog) => ({ ...dialog, deleteWallet: false }))
			setPage((page) => page.slice(0, page.length - 1))
		}
	}

	const getPayments = useCallback(async () => {
		const storedPayments = await SecureStore.getItemAsync("payments")
		setPayments(storedPayments ? JSON.parse(storedPayments) : [])
	}, [])

	const addPayment = async (values) => {
		try {
			const newPayment = { ...values, id: uuid.v4(), dateCreated: new Date(Date.now()).toISOString() }
			const newPayments = [...payments, newPayment]
			setPayments(newPayments)
			await SecureStore.setItemAsync("payments", JSON.stringify(newPayments))
		} finally {
			setPage((page) => page.slice(0, page.length - 1))
		}
	}

	const editPayment = async (values) => {
		try {
			const newPayments = payments.map((payment) =>
				payment.id === selectedPaymentId ? { ...payment, ...values } : payment
			)
			setPayments(newPayments)
			await SecureStore.setItemAsync("payments", JSON.stringify(newPayments))
		} finally {
			setPage((page) => page.slice(0, page.length - 1))
		}
	}

	const deletePayment = async () => {
		try {
			const newPayments = payments.filter((payment) => payment.id !== selectedPaymentId)
			setPayments(newPayments)
			await SecureStore.setItemAsync("payments", JSON.stringify(newPayments))
		} finally {
			setSelectedPaymentId(null)
			setDialog((dialog) => ({ ...dialog, deletePayment: false }))
			setPage((page) => page.slice(0, page.length - 1))
		}
	}

	const value = {
		page,
		setPage,
		wallets,
		addWallet,
		editWallet,
		deleteWallet,
		selectedWalletId,
		setSelectedWalletId,
		payments,
		addPayment,
		editPayment,
		deletePayment,
		selectedPaymentId,
		setSelectedPaymentId,
		dialog,
		setDialog,
	}

	useEffect(() => {
		let mark = true
		if (mark) getWallets()
		return () => (mark = false)
	}, [])

	useEffect(() => {
		let mark = true
		if (mark) getPayments()
		return () => {
			mark = false
		}
	}, [])

	return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

const useStateContext = () => useContext(StateContext)

export default useStateContext

