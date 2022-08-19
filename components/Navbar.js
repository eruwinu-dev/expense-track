import { View, Text, Pressable, TouchableOpacity } from "react-native"
import React, { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"

import pages, { navs } from "../lib/pages"
import useStateContext from "../lib/State"

const icons = ["home", "money-bill", "wallet", "cog"]
const pagesWithNavs = [...navs]

const Navbar = () => {
	const { page, setPage } = useStateContext()

	const setPageHandler = (location) => (event) => setPage((page) => [location])

	if (!pagesWithNavs.includes(page.slice(-1)[0])) return <View></View>

	return (
		<SafeAreaView
			style={{
				flexDirection: "row",
				alignItems: "flex-end",
				justifyContent: "space-evenly",
				borderTopColor: "lightgray",
				borderTopWidth: 1,
			}}
		>
			{Object.keys(pages)
				.filter((page) => navs.includes(page))
				.map((pageItem, index) => (
					<TouchableOpacity
						key={index}
						style={{ padding: 10, alignItems: "center" }}
						onPress={setPageHandler(pageItem)}
					>
						<FontAwesome5Icon
							name={icons[index]}
							size={24}
							color={page[page.length - 1] === pageItem ? "steelblue" : "black"}
						/>
						<Text
							style={{ color: page[page.length - 1] === pageItem ? "steelblue" : "black", fontSize: 10 }}
						>
							{pages[pageItem].label}
						</Text>
					</TouchableOpacity>
				))}
		</SafeAreaView>
	)
}

export default Navbar

