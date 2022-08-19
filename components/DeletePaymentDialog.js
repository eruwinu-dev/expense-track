import { View, Text, Pressable, TouchableOpacity } from "react-native"
import React from "react"
import Dialog from "./Dialog"
import useStateContext from "../lib/State"

const DeletePaymentDialog = () => {
	const { setDialog, deletePayment } = useStateContext()

	const closeDialogHandler = () => setDialog((dialog) => ({ ...dialog, deletePayment: false }))

	const deletePaymentHandler = async () => {
		await deletePayment()
	}

	return (
		<Dialog name="deletePayment">
			<Text style={{ fontSize: 18, fontWeight: "bold" }}>Delete this payment?</Text>
			<Text style={{ marginVertical: 10 }}>Once you delete this payment, it cannot be undone.</Text>
			<View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
				<TouchableOpacity
					style={{
						paddingVertical: 10,
						paddingHorizontal: 15,
					}}
					onPress={closeDialogHandler}
				>
					<Text style={{ color: "gray", fontSize: 15, fontWeight: "bold" }}>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						paddingVertical: 10,
						paddingHorizontal: 15,
					}}
					onPress={deletePaymentHandler}
				>
					<Text style={{ color: "crimson", fontSize: 15, fontWeight: "bold" }}>Delete</Text>
				</TouchableOpacity>
			</View>
		</Dialog>
	)
}

export default DeletePaymentDialog

