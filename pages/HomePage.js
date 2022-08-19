import { View, Text, Pressable } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import PaymentHistory from "../components/PaymentHistory"
import HomeDropDown from "../components/HomeDropDown"

const HomePage = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15 }}>
				<Text style={{ fontSize: 28, fontWeight: "bold" }}>Welcome</Text>
				<HomeDropDown />
			</View>
			<PaymentHistory />
		</SafeAreaView>
	)
}

export default HomePage

