import { View, Text } from "react-native"
import React from "react"
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu"
import useStateContext from "../lib/State"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"

const HomeDropDown = () => {
	const { setPage } = useStateContext()

	const goToPage = (prop) => (event) => setPage((page) => [...page, prop])

	return (
		<Menu>
			<MenuTrigger style={{ padding: 5, marginLeft: 5 }}>
				<FontAwesome5Icon name="plus" size={24} />
			</MenuTrigger>
			<MenuOptions customStyles={optionsStyles}>
				<MenuOption onSelect={goToPage("addPayment")}>
					<FontAwesome5Icon name="money-bill" size={20} />
					<Text style={{ marginLeft: 5, fontWeight: "bold" }}>Add Payment</Text>
				</MenuOption>
				<MenuOption onSelect={goToPage("addWallet")}>
					<FontAwesome5Icon name="wallet" size={20} />
					<Text style={{ marginLeft: 5, fontWeight: "bold" }}>Add Wallet</Text>
				</MenuOption>
			</MenuOptions>
		</Menu>
	)
}

export default HomeDropDown

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

