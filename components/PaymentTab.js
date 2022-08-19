import { View, Text, Pressable, TouchableOpacity } from "react-native"
import React from "react"
import useStateContext from "../lib/State"
import { formatAmount } from "../lib/utils/formatAmount"
import { isToday, parseISO } from "date-fns"

const PaymentTab = ({ payment, showDate = true }) => {
	const { setSelectedPaymentId, setPage } = useStateContext()

	const goToPaymentPage = () => {
		setSelectedPaymentId(payment.id)
		setPage((page) => [...page, "viewPayment"])
	}

	return (
		<Pressable
			style={{
				flex: 1,
				paddingVertical: 10,
				paddingHorizontal: 15,
				flexDirection: "row",
				alignItems: "flex-start",
			}}
			onPress={goToPaymentPage}
		>
			<View style={{ flex: 1 }}>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>{payment.name}</Text>
				<Text style={{ color: "gray" }}>{payment.walletName}</Text>
			</View>
			<View style={{ flex: 0 }}>
				<Text style={{ fontSize: 20, fontWeight: "bold", color: payment.amount > 0 ? "steelblue" : "crimson" }}>
					{formatAmount(payment.amount)}
				</Text>
			</View>
		</Pressable>
	)
}

export default PaymentTab

