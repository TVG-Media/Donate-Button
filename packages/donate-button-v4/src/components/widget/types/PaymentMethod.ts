export enum PaymentMethod {
	CREDIT_CARD = 'card',
	BANK = 'bank',
	PAYPAL = 'paypal',
	VENMO = 'venmo',
	PAYMENT_REQUEST = 'pay',
	CRYPTO = 'crypto',
	STOCKS = 'stocks',
	DAF = 'daf'
}

export const OneTimeFrequencyMethods = [
	PaymentMethod.VENMO,
	PaymentMethod.DAF,
	PaymentMethod.CRYPTO,
	PaymentMethod.STOCKS
];
export const AvailablePaymentMethods = Object.values(PaymentMethod);