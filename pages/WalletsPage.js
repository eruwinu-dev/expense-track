import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import useStateContext from "../lib/State"
import WalletsList from "../components/WalletsList"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"

const WalletsPage = () => {
	const { setPage } = useStateContext()

	const goToAddWalletHandler = () => setPage((page) => [...page, "addWallet"])

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15 }}>
				<Text style={{ fontSize: 28, fontWeight: "bold" }}>Your Wallets</Text>
				<TouchableOpacity onPress={goToAddWalletHandler}>
					<FontAwesome5Icon name="plus" size={24} />
				</TouchableOpacity>
			</View>

			<WalletsList />
		</SafeAreaView>
	)
}

export default WalletsPage

