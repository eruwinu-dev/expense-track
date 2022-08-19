export const formatAmount = (amount, seperateDecimals = false) => {
	return `${amount >= 0 ? "" : "-"}$${Math.abs(amount).toLocaleString()}`
}

