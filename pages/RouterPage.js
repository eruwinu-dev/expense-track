import React, { useEffect } from "react"

import useStateContext from "../lib/State"
import { SafeAreaView } from "react-native-safe-area-context"
import { BackHandler } from "react-native"

import pages from "../lib/pages"
import Navbar from "../components/Navbar"
import { StatusBar } from "expo-status-bar"
import DeleteWalletDialog from "../components/DeleteWalletDialog"
import DeletePaymentDialog from "../components/DeletePaymentDialog"
import NotFoundPage from "./NotFoundPage"

import { navs } from "../lib/pages"

const RouterPage = () => {
	const { page, setPage } = useStateContext()

	const goToHomeHandler = (event) => {
		if (page.length === 1 && page[0] === "home") {
			BackHandler.exitApp()
		} else {
			setPage((page) => (page.length === 1 && navs.includes(page[0]) ? ["home"] : page.slice(0, page.length - 1)))
		}
		return true
	}

	useEffect(() => {
		BackHandler.addEventListener("hardwareBackPress", goToHomeHandler)
		return () => {
			BackHandler.removeEventListener("hardwareBackPress", goToHomeHandler)
		}
	}, [page])

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar />
			{pages[page[page.length - 1]]?.page ?? <NotFoundPage />}
			<Navbar />
			<DeleteWalletDialog />
			<DeletePaymentDialog />
		</SafeAreaView>
	)
}

export default RouterPage

