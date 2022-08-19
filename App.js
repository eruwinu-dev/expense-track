import React from "react"
import RouterPage from "./pages/RouterPage"
import { StateProvider } from "./lib/State"
import { MenuProvider } from "react-native-popup-menu"

const App = () => {
	return (
		<MenuProvider>
			<StateProvider>
				<RouterPage />
			</StateProvider>
		</MenuProvider>
	)
}

export default App

