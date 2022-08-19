import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import useStateContext from "../lib/State"
import WalletCard from "../components/WalletCard"
import PaymentsList from "../components/PaymentsList"
import WalletDropDown from "../components/WalletDropDown"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"

const ViewWalletPage = () => {
	const { setPage, selectedWalletId, wallets, payments: paymentInfo, setSelectedWalletId } = useStateContext()

	const wallet = wallets.find((wallet) => wallet.id === selectedWalletId)
	const payments = paymentInfo.filter((payment) => payment.walletId === selectedWalletId)

	const goBackHandler = () => {
		setPage((page) => page.slice(0, page.length - 1))
		setSelectedWalletId(null)
	}

	if (!wallet) return <SafeAreaView style={{ flex: 1 }} />

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15 }}>
				<TouchableOpacity style={{ padding: 5, marginRight: 5 }} onPress={goBackHandler}>
					<FontAwesomeIcon name="arrow-left" size={24} />
				</TouchableOpacity>
				<Text style={{ fontSize: 28, fontWeight: "bold", flex: 1 }}>{wallet.name}</Text>
				<View style={{ flexDirection: "row", flex: 0 }}>
					<WalletDropDown />
				</View>
			</View>
			<WalletCard payments={payments} height={225} color={wallet.color} />
			<PaymentsList
				paymentInfo={payments}
				header={() => (
					<Text style={{ fontWeight: "bold", color: "gray", paddingHorizontal: 15 }}>Payments</Text>
				)}
				footer={() =>
					wallet.desc ? (
						<View style={{ padding: 15 }}>
							<Text style={{ fontWeight: "bold", color: "gray", marginVertical: 10 }}>Description</Text>
							<Text>{wallet.desc}</Text>
						</View>
					) : (
						<></>
					)
				}
			/>
		</SafeAreaView>
	)
}

export default ViewWalletPage

