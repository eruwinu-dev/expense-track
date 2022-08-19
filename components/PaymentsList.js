import { View, Text, VirtualizedList } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import useStateContext from "../lib/State"
import PaymentTab from "./PaymentTab"

const PaymentsList = ({ paymentInfo, header = null, footer = null }) => {
	const { wallets } = useStateContext()

	const walletNames = wallets.length
		? wallets.reduce((acc, wallet) => ({ ...acc, [wallet.id]: wallet.name }), {})
		: {}

	const payments = paymentInfo.map((payment) => ({
		...payment,
		walletName: walletNames[payment.walletId],
	}))

	const getItem = (data, index) => data[index]

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<VirtualizedList
				data={payments}
				initialNumToRender={10}
				renderItem={({ item }) => <PaymentTab payment={item} />}
				keyExtractor={(item) => item.id}
				getItemCount={(data) => data.length}
				ListHeaderComponent={header}
				ListFooterComponent={footer}
				ListEmptyComponent={() => <Text style={{ marginVertical: 10, textAlign: "center" }}>No payments.</Text>}
				getItem={getItem}
			/>
		</SafeAreaView>
	)
}

export default PaymentsList

