import { View, Text, TextInput, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import useStateContext from "../lib/State"

const initialFields = {
	name: "",
	desc: "",
	color: "",
}

const initialErrors = {
	name: false,
	desc: false,
	color: false,
}

const AddWalletForm = () => {
	const { addWallet } = useStateContext()

	const [fields, setFields] = useState(initialFields)
	const [errors, setErrors] = useState(initialErrors)

	const changeFieldHandler = (prop) => (newText) => {
		setFields((fields) => ({ ...fields, [prop]: newText }))
		if (prop === "name" || prop === "color") setErrors((errors) => ({ ...errors, [prop]: !Boolean(newText) }))
	}

	const addWalletHandler = async () => {
		if (!fields.name || !fields.color) {
			setErrors((errors) => ({ ...errors, name: !Boolean(fields.name), color: !Boolean(fields.color) }))
			return
		}
		await addWallet(fields)
	}

	return (
		<SafeAreaView style={{ paddingHorizontal: 15 }}>
			<TextInput
				style={{
					paddingHorizontal: 15,
					paddingVertical: 10,
					borderRadius: 10,
					borderColor: errors.name ? "crimson" : "lightgray",
					borderWidth: 2,
					marginVertical: 10,
				}}
				placeholder="Wallet Name"
				value={fields.name}
				onChangeText={changeFieldHandler("name")}
			/>
			{errors.name && <Text style={{ color: "crimson" }}>*Required</Text>}
			<TextInput
				multiline
				numberOfLines={3}
				style={{
					paddingHorizontal: 15,
					paddingVertical: 10,
					borderRadius: 10,
					borderColor: errors.desc ? "crimson" : "lightgray",
					borderWidth: 2,
					marginVertical: 10,
				}}
				placeholder="Description"
				value={fields.desc}
				onChangeText={changeFieldHandler("desc")}
			/>
			<TextInput
				style={{
					paddingHorizontal: 15,
					paddingVertical: 10,
					borderRadius: 10,
					borderColor: errors.color ? "crimson" : "lightgray",
					borderWidth: 2,
					marginVertical: 10,
				}}
				placeholder="Wallet Color"
				value={fields.color}
				onChangeText={changeFieldHandler("color")}
			/>
			{errors.color && <Text style={{ color: "crimson" }}>*Required</Text>}
			<TouchableOpacity
				onPress={addWalletHandler}
				style={{
					paddingHorizontal: 10,
					paddingVertical: 15,
					backgroundColor: "steelblue",
					alignItems: "center",
					borderRadius: 10,
				}}
			>
				<Text style={{ color: "white", fontWeight: "bold" }}>Add Wallet</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default AddWalletForm

