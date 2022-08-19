import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import useStateContext from "../lib/State"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import EditWalletForm from "../components/EditWalletForm"

const EditWalletPage = () => {
	const { setPage } = useStateContext()

	const goBackHandler = () => setPage((page) => page.slice(0, page.length - 1))

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 15 }}>
				<TouchableOpacity style={{ paddingHorizontal: 5, marginRight: 10 }} onPress={goBackHandler}>
					<FontAwesome5Icon name="arrow-left" size={24} />
				</TouchableOpacity>
				<Text style={{ fontSize: 28, fontWeight: "bold" }}>Edit Wallet</Text>
			</View>
			<EditWalletForm />
		</SafeAreaView>
	)
}

export default EditWalletPage

