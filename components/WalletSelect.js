import { View, Text, FlatList, Pressable } from "react-native"
import React from "react"

const WalletSelect = ({ wallets, walletId, setWalletId }) => {
	const selectWalletHandler = (id) => (event) => setWalletId(id)

	const WalletItem = ({ item: wallet }) => {
		return (
			<Pressable
				style={{
					margin: 10,
					width: 75,
					height: 75,
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 10,
					borderWidth: 1,
					borderColor: walletId === wallet.id ? "steelblue" : "lightgray",
				}}
				onPress={selectWalletHandler(wallet.id)}
			>
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>
					{wallet.name
						.split(" ")
						.map((word) => word[0])
						.join("")}
				</Text>
				<Text>{wallet.name}</Text>
			</Pressable>
		)
	}

	return (
		<View>
			<Text style={{ fontWeight: "bold" }}>Select a wallet.</Text>
			<FlatList data={wallets} numColumns={4} renderItem={WalletItem} keyExtractor={(item) => item.id} />
		</View>
	)
}

export default WalletSelect

