import AddPaymentPage from "../pages/AddPaymentPage"
import AddWalletPage from "../pages/AddWalletPage"
import EditPaymentPage from "../pages/EditPaymentPage"
import EditWalletPage from "../pages/EditWalletPage"
import HomePage from "../pages/HomePage"
import PaymentsPage from "../pages/PaymentsPage"
import SettingsPage from "../pages/SettingsPage"
import ViewPaymentPage from "../pages/ViewPaymentPage"
import ViewWalletPage from "../pages/ViewWalletPage"
import WalletsPage from "../pages/WalletsPage"

export const navs = ["home", "payments", "wallets", "settings"]

const pages = {
	home: {
		label: "Home",
		page: <HomePage />,
	},
	payments: {
		label: "Payments",
		page: <PaymentsPage />,
	},
	wallets: {
		label: "Wallets",
		page: <WalletsPage />,
	},
	addWallet: {
		label: "Add Wallet",
		page: <AddWalletPage />,
	},
	viewWallet: {
		label: "View Wallet",
		page: <ViewWalletPage />,
	},
	editWallet: {
		label: "Edit Wallet",
		page: <EditWalletPage />,
	},
	addPayment: {
		label: "Add Payment",
		page: <AddPaymentPage />,
	},
	viewPayment: {
		label: "View Payment",
		page: <ViewPaymentPage />,
	},
	editPayment: {
		label: "Edit Payment",
		page: <EditPaymentPage />,
	},
	settings: {
		label: "Settings",
		page: <SettingsPage />,
	},
}

export default pages

