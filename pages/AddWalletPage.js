import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import AddWalletForm from "../components/AddWalletForm"
import useStateContext from "../lib/State"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"

const AddWalletPage = () => {
	const { setPage } = useStateContext()

	const goBackHandler = () => setPage((page) => page.slice(0, page.length - 1))

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 15 }}>
				<TouchableOpacity style={{ paddingHorizontal: 5, marginRight: 10 }} onPress={goBackHandler}>
					<FontAwesome5Icon name="arrow-left" size={24} />
				</TouchableOpacity>
				<Text style={{ fontSize: 28, fontWeight: "bold" }}>Add Wallet</Text>
			</View>
			<AddWalletForm />
		</SafeAreaView>
	)
}

export default AddWalletPage

