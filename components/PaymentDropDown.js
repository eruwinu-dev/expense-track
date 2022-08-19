import { View, Text } from "react-native"
import React from "react"
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu"
import useStateContext from "../lib/State"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"

const PaymentDropDown = () => {
	const { setDialog, setPage } = useStateContext()

	const toggleDialog = (prop) => (event) => setDialog((dialog) => ({ ...dialog, [prop]: !dialog[prop] }))

	const goToEditPaymentPage = (event) => setPage((page) => [...page, "editPayment"])

	return (
		<Menu>
			<MenuTrigger style={{ padding: 5, marginLeft: 5 }}>
				<FontAwesomeIcon name="navicon" size={24} />
			</MenuTrigger>
			<MenuOptions customStyles={optionsStyles}>
				<MenuOption onSelect={goToEditPaymentPage}>
					<FontAwesomeIcon name="edit" size={20} />
					<Text style={{ marginLeft: 5, fontWeight: "bold" }}>Edit Payment</Text>
				</MenuOption>
				<MenuOption onSelect={toggleDialog("deletePayment")}>
					<FontAwesomeIcon name="remove" size={20} />
					<Text style={{ marginLeft: 5, fontWeight: "bold" }}>Delete Payment</Text>
				</MenuOption>
			</MenuOptions>
		</Menu>
	)
}

export default PaymentDropDown

const optionsStyles = {
	optionsContainer: {
		borderRadius: 10,
	},
	optionsWrapper: {},
	optionWrapper: {
		padding: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	optionTouchable: {
		activeOpacity: 70,
	},
	optionText: {},
}

