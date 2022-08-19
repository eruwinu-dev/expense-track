import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import useStateContext from "../lib/State"
import PaymentsList from "../components/PaymentsList"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"

const PaymentsPage = () => {
	const { setPage, payments } = useStateContext()

	const goToAddPaymentHandler = () => setPage((page) => [...page, "addPayment"])

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15 }}>
				<Text style={{ fontSize: 28, fontWeight: "bold" }}>Your Payments</Text>
				<TouchableOpacity onPress={goToAddPaymentHandler}>
					<FontAwesome5Icon name="plus" size={24} />
				</TouchableOpacity>
			</View>
			<PaymentsList paymentInfo={payments} />
		</SafeAreaView>
	)
}

export default PaymentsPage

