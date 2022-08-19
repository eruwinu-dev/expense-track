import { View, Text, VirtualizedList } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import useStateContext from "../lib/State"
import WalletTab from "./WalletTab"

const WalletsList = () => {
	const { wallets: walletInfo, payments } = useStateContext()

	const wallets = walletInfo.map((wallet) => ({
		...wallet,
		payments: payments.filter((payment) => payment.walletId === wallet.id),
	}))

	const getItem = (data, index) => data[index]

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<VirtualizedList
				data={wallets}
				initialNumToRender={5}
				renderItem={({ item }) => <WalletTab wallet={item} />}
				keyExtractor={(item) => item.id}
				getItemCount={(data) => data.length}
				getItem={getItem}
				ListEmptyComponent={() => <Text style={{ marginVertical: 10, textAlign: "center" }}>No wallets.</Text>}
			/>
		</SafeAreaView>
	)
}

export default WalletsList

