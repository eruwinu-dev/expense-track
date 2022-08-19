import { View, Text, VirtualizedList, Pressable } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import useStateContext from "../lib/State"
import PaymentTab from "./PaymentTab"
import { isToday, parseISO } from "date-fns"
import WalletCard from "./WalletCard"

const PaymentHistory = () => {
	const { payments, wallets } = useStateContext()
	const [flip, setFlip] = useState("total")

	const toggleFlip = () => setFlip((flip) => (flip === "total" ? "today" : "total"))

	const walletNames = wallets.length
		? wallets.reduce((acc, wallet) => ({ ...acc, [wallet.id]: wallet.name }), {})
		: {}

	const getItem = (data, index) => data[index]

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<VirtualizedList
				data={payments
					.filter((payment) => isToday(parseISO(payment.dateCreated)))
					.map((payment) => ({
						...payment,
						walletName: walletNames[payment.walletId],
					}))}
				initialNumToRender={6}
				renderItem={({ item }) => <PaymentTab payment={item} showDate={false} />}
				keyExtractor={(item) => item.id}
				getItemCount={(data) => data.length}
				getItem={getItem}
				ListHeaderComponent={() => (
					<>
						{flip === "total" ? (
							<Pressable onPress={toggleFlip}>
								<WalletCard payments={payments} height={225} color="steelblue" />
							</Pressable>
						) : (
							<Pressable onPress={toggleFlip}>
								<WalletCard
									payments={payments
										.filter((payment) => isToday(parseISO(payment.dateCreated)))
										.map((payment) => ({
											...payment,
											walletName: walletNames[payment.walletId],
										}))
										.sort((a, b) => parseISO(a.dateCreated) - parseISO(b.dateCreated))}
									height={225}
									color="coral"
								/>
							</Pressable>
						)}
						<Text style={{ fontWeight: "bold", color: "gray", paddingHorizontal: 15 }}>Today</Text>
					</>
				)}
				ListEmptyComponent={() => <Text style={{ marginVertical: 10, textAlign: "center" }}>No payments.</Text>}
			/>
		</SafeAreaView>
	)
}

export default PaymentHistory

