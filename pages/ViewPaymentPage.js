import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import PaymentDropDown from "../components/PaymentDropDown"
import useStateContext from "../lib/State"
import { format, parseISO } from "date-fns"
import { formatAmount } from "../lib/utils/formatAmount"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"

const ViewPaymentPage = () => {
	const { setPage, selectedPaymentId, payments, wallets } = useStateContext()

	const payment = payments.find((payment) => payment.id === selectedPaymentId)
	const wallet = wallets.find((wallet) => wallet.id === payment?.walletId)

	const goBackHandler = (event) => setPage((page) => page.slice(0, page.length - 1))

	if (!payment) return <View></View>

	return (
		<SafeAreaView style={{ flex: 1, padding: 15 }}>
			<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
				<TouchableOpacity style={{ padding: 5, marginRight: 5 }} onPress={goBackHandler}>
					<FontAwesomeIcon name="arrow-left" size={24} />
				</TouchableOpacity>
				<Text style={{ fontSize: 28, fontWeight: "bold", flex: 1 }}></Text>
				<View style={{ flexDirection: "row", flex: 0 }}>
					<PaymentDropDown />
				</View>
			</View>
			<View style={{ marginVertical: 20, flex: 1, alignItems: "center", justifyContent: "center" }}>
				<FontAwesomeIcon name="money" size={72} />
				<Text style={{ marginTop: 20, fontWeight: "bold" }}>{`Payment to ${wallet?.name || ""}`}</Text>
				<Text
					style={{
						marginVertical: 10,
						fontSize: 60,
						fontWeight: "bold",
						color: payment.amount > 0 ? "steelblue" : "crimson",
					}}
				>
					{formatAmount(payment.amount)}
				</Text>
			</View>
			<View style={{ flex: 1 }}>
				<Text style={{ fontSize: 15 }}>{`ID: ${payment.id}`}</Text>
				<Text style={{ fontSize: 15, marginVertical: 10 }}>{`Name: ${payment.name}`}</Text>
				<Text style={{ fontSize: 15 }}>{`Date: ${format(parseISO(payment.dateCreated), "LLL d, yyyy")}`}</Text>
			</View>
		</SafeAreaView>
	)
}

export default ViewPaymentPage

