import { View, Text } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { formatAmount } from "../lib/utils/formatAmount"

const sumFunction = (acc, payment) => acc + payment.amount || 0

const WalletCard = ({ payments, height, color }) => {
	const totalBalance = payments.reduce(sumFunction, 0)
	const totalIncome = payments.filter((payment) => payment.amount > 0).reduce(sumFunction, 0)
	const totalExpenses = payments.filter((payment) => payment.amount < 0).reduce(sumFunction, 0)

	return (
		<SafeAreaView
			style={{
				height,
				position: "relative",
				marginHorizontal: 15,
				marginVertical: 20,
				padding: 20,
				backgroundColor: color,
				alignItems: "flex-start",
				justifyContent: "space-evenly",
				borderRadius: 30,
			}}
		>
			<View
				style={{
					position: "absolute",
					right: 20,
					top: 20,
					padding: 15,
					borderRadius: 999,
					backgroundColor: "white",
				}}
			></View>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<Text style={{ color: "white" }}>Your Balance</Text>
				<Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>{formatAmount(totalBalance)}</Text>
			</View>
			<View style={{ flex: 1, flexDirection: "row" }}>
				<View style={{ flex: 1 }}>
					<Text style={{ color: "white" }}>Income</Text>
					<Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>
						{formatAmount(totalIncome)}
					</Text>
				</View>
				<View style={{ flex: 1 }}>
					<Text style={{ color: "white" }}>Expenses</Text>
					<Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>
						{formatAmount(totalExpenses)}
					</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default WalletCard

