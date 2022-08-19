import { View, Text, Pressable, TouchableOpacity } from "react-native"
import React from "react"
import Dialog from "./Dialog"
import useStateContext from "../lib/State"

const DeleteWalletDialog = () => {
	const { setDialog, deleteWallet } = useStateContext()

	const closeDialogHandler = () => setDialog((dialog) => ({ ...dialog, deleteWallet: false }))

	const deleteWalletHandler = async () => {
		await deleteWallet()
	}

	return (
		<Dialog name="deleteWallet">
			<Text style={{ fontSize: 18, fontWeight: "bold" }}>Delete this wallet?</Text>
			<Text style={{ marginVertical: 10 }}>
				All payments made for that wallet will be removed as well. This action cannot be undone.
			</Text>
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
					onPress={deleteWalletHandler}
				>
					<Text style={{ color: "crimson", fontSize: 15, fontWeight: "bold" }}>Delete</Text>
				</TouchableOpacity>
			</View>
		</Dialog>
	)
}

export default DeleteWalletDialog

