import { View, Text, Pressable } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import useStateContext from "../lib/State"

const Dialog = ({ name, children }) => {
	const { dialog, setDialog } = useStateContext()

	const toggleDialog = () => setDialog((dialog) => ({ ...dialog, [name]: !dialog[name] }))

	if (!dialog[name]) return <View></View>

	return (
		<SafeAreaView
			style={{
				flex: 1,
				top: 0,
				right: 0,
				position: "absolute",
				width: "100%",
				height: "105%",
				flexDirection: "column",
				backgroundColor: "rgba(0,0,0,0.7)",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Pressable
				style={{
					height: "100%",
					width: "100%",
					opacity: 0.8,
				}}
				onPress={toggleDialog}
			/>
			<SafeAreaView
				style={{
					position: "absolute",
					padding: 10,
					width: "80%",
					backgroundColor: "white",
					borderRadius: 10,
				}}
			>
				{children}
			</SafeAreaView>
		</SafeAreaView>
	)
}

export default Dialog

