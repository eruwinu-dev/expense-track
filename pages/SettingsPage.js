import { Text } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"

const SettingsPage = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text style={{ fontSize: 28, fontWeight: "bold", padding: 15 }}>Settings</Text>
			<Text>Username</Text>
			<Text>Delete All Payments</Text>
			<Text>Delete All Wallets</Text>
			<Text>Change Theme</Text>
		</SafeAreaView>
	)
}

export default SettingsPage

