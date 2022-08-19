import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import useStateContext from "../lib/State"
import AddPaymentForm from "../components/AddPaymentForm"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"

const AddPaymentPage = () => {
	const { setPage } = useStateContext()

	const goBackHandler = () => setPage((page) => page.slice(0, page.length - 1))

	return (
		<SafeAreaView style={{ flex: 1, padding: 15 }}>
			<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
				<TouchableOpacity style={{ paddingHorizontal: 5, marginRight: 10 }} onPress={goBackHandler}>
					<FontAwesome5Icon name="arrow-left" size={24} />
				</TouchableOpacity>
				<Text style={{ fontSize: 28, fontWeight: "bold" }}>Add Payment</Text>
			</View>
			<AddPaymentForm />
		</SafeAreaView>
	)
}

export default AddPaymentPage

