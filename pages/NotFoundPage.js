import { Text, Pressable, TouchableOpacity } from "react-native"
import React from "react"
import useStateContext from "../lib/State"
import { SafeAreaView } from "react-native-safe-area-context"

const NotFoundPage = () => {
	const { setPage, page } = useStateContext()

	const goBackHandler = () => setPage(["home"])

	return (
		<SafeAreaView style={{ flex: 1, padding: 15, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ fontSize: 60, fontWeight: "bold" }}>404</Text>
			<Text style={{ marginVertical: 20 }}>Page not found.</Text>
			<TouchableOpacity
				style={{ borderRadius: 10, padding: 10, backgroundColor: "coral" }}
				onPress={goBackHandler}
			>
				<Text style={{ color: "white" }}>Go Back</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default NotFoundPage

