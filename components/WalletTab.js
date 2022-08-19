import { View, Text, Pressable } from "react-native"
import React from "react"
import useStateContext from "../lib/State"
import { formatAmount } from "../lib/utils/formatAmount"

const WalletTab = ({ wallet }) => {
	const { setSelectedWalletId, setPage } = useStateContext()

	const selectWalletHandler = () => {
		setSelectedWalletId(wallet.id)
		setPage((page) => [...page, "viewWallet"])
	}

	const totalBalance = wallet.payments.reduce((acc, payment) => acc + payment.amount || 0, 0)

	return (
		<Pressable
			style={{
				flex: 1,
				backgroundColor: wallet.color || "gray",
				height: 150,
				marginHorizontal: 15,
				marginVertical: 7.5,
				padding: 20,
				alignItems: "stretch",
				justifyContent: "space-evenly",
				borderRadius: 30,
			}}
			onPress={selectWalletHandler}
		>
			<View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
				<Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>{wallet.name}</Text>
				<Text style={{ fontSize: 28, color: "white", fontWeight: "bold" }}>{formatAmount(totalBalance)}</Text>
			</View>
			<View style={{ flex: 1 }}>
				<Text style={{ color: "white", fontWeight: "bold" }}>{`${wallet.payments.length} transaction${
					wallet.payments.length === 1 ? "" : "s"
				}`}</Text>
			</View>
		</Pressable>
	)
}

export default WalletTab

