import { View, Text, Pressable, TextInput, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import useStateContext from "../lib/State"
import WalletSelect from "./WalletSelect"

const initialFields = {
	name: "",
	amount: "0",
}
const initialErrors = {
	name: false,
	amount: false,
}

const AddPaymentForm = () => {
	const { wallets, addPayment, selectedWalletId } = useStateContext()

	const [walletId, setWalletId] = useState(selectedWalletId)
	const [fields, setFields] = useState(initialFields)
	const [dateValue, setDateValue] = useState(new Date(Date.now()))
	const [errors, setErrors] = useState(initialErrors)
	const [paymentType, setPaymentType] = useState(true)

	const changeFieldHandler = (prop) => (newText) => {
		const strippedText = newText.replace(/\D/g, "")
		setFields((fields) => ({ ...fields, [prop]: prop === "amount" ? strippedText : newText }))
		setErrors((errors) => ({
			...errors,
			[prop]: prop === "amount" ? !Boolean(strippedText) : !Boolean(newText),
		}))
	}

	const toggleType = (option) => () => setPaymentType(option !== paymentType ? option : paymentType)

	const addPaymentHandler = async () => {
		if (!fields.name || parseInt(fields.amount) <= 0) {
			setErrors((errors) => ({
				...errors,
				name: !Boolean(fields.name),
				amount: parseInt(fields.amount) <= 0,
			}))
			return
		}
		await addPayment({ ...fields, amount: (paymentType ? 1 : -1) * fields.amount, walletId })
	}

	if (!wallets.length)
		return (
			<SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>No wallets. Add a wallet first.</Text>
			</SafeAreaView>
		)

	return (
		<SafeAreaView>
			{!Boolean(walletId) ? (
				<WalletSelect wallets={wallets} walletId={walletId} setWalletId={setWalletId} />
			) : (
				<View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							marginVertical: 10,
						}}
					>
						<View
							style={{
								width: 30,
								height: 30,
								borderRadius: 1000,
								marginRight: 5,
								backgroundColor: wallets.find((wallet) => walletId === wallet.id).color,
							}}
						/>
						<Text style={{ fontWeight: "bold", flex: 1 }}>
							{wallets.find((wallet) => walletId === wallet.id).name}
						</Text>
						{!Boolean(selectedWalletId) && (
							<Pressable onPress={() => setWalletId(null)}>
								<Text>Go Back</Text>
							</Pressable>
						)}
					</View>
					<View style={{ flexDirection: "row", alignItems: "stretch", justifyContent: "space-evenly" }}>
						<Pressable
							style={{
								flex: 1,
								paddingHorizontal: 10,
								paddingVertical: 15,
								borderRadius: 10,
								borderWidth: 2,
								borderColor: "steelblue",
								alignItems: "center",
								marginRight: 10,
								backgroundColor: paymentType ? "steelblue" : "white",
							}}
							onPress={toggleType(true)}
						>
							<Text style={{ color: paymentType ? "white" : "steelblue" }}>Income</Text>
						</Pressable>
						<Pressable
							style={{
								flex: 1,
								paddingHorizontal: 10,
								paddingVertical: 15,
								borderRadius: 10,
								borderWidth: 2,
								alignItems: "center",
								borderColor: "crimson",
								marginLeft: 10,
								backgroundColor: !paymentType ? "crimson" : "white",
							}}
							onPress={toggleType(false)}
						>
							<Text style={{ color: !paymentType ? "white" : "crimson" }}>Expense</Text>
						</Pressable>
					</View>
					<TextInput
						style={{
							paddingHorizontal: 15,
							paddingVertical: 10,
							borderRadius: 10,
							borderColor: errors.name ? "crimson" : "lightgray",
							borderWidth: 2,
							marginVertical: 10,
						}}
						placeholder="Payment Name"
						value={fields.name}
						onChangeText={changeFieldHandler("name")}
					/>
					{errors.name && <Text style={{ color: "crimson" }}>*Required</Text>}
					<TextInput
						style={{
							paddingHorizontal: 15,
							paddingVertical: 10,
							borderRadius: 10,
							borderColor: errors.amount ? "crimson" : "lightgray",
							borderWidth: 2,
							marginVertical: 10,
						}}
						placeholder="Amount"
						keyboardType="phone-pad"
						value={fields.amount}
						onChangeText={changeFieldHandler("amount")}
					/>
					{errors.amount && <Text style={{ color: "crimson" }}>*Must be a number greater than 0.</Text>}

					<TouchableOpacity
						onPress={addPaymentHandler}
						style={{
							paddingHorizontal: 10,
							paddingVertical: 15,
							backgroundColor: paymentType ? "steelblue" : "crimson",
							alignItems: "center",
							borderRadius: 10,
						}}
					>
						<Text style={{ color: "white", fontWeight: "bold" }}>{`Add ${
							paymentType ? "Income" : "Expense"
						}`}</Text>
					</TouchableOpacity>
				</View>
			)}
		</SafeAreaView>
	)
}

export default AddPaymentForm

