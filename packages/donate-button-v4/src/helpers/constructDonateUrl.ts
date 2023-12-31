/* eslint-disable unicorn/prevent-abbreviations */
import {DonationFrequency} from 'src/components/widget/types/DonationFrequency';
import {PaymentMethod} from 'src/components/widget/types/PaymentMethod';
import {BASE_URL, GIFT_CARD_URL} from 'src/constants/url';

const UTM_MEDIUM = 'donate-button-0.4'; // Update this if the major version changes
const HASH = 'donate';

interface BaseUrlParams {
	nonprofitSlug: string;
	fundraiserSlug?: string;
	fundraiserId?: string;
	noExit?: boolean;
	methods?: PaymentMethod[];
	privateNote?: string;
	utmSource?: string;
}

interface DonateUrlParams extends BaseUrlParams {
	frequency: DonationFrequency;
	amount: number;
}

interface DonateStocksUrlParams extends BaseUrlParams {
	stockAmount: number;
	stockSymbol: string;
}

interface DonateCryptoUrlParams extends BaseUrlParams {
	cryptoAmount: number;
	cryptoCurrency: string;
}

function serializeParams(
	params: Record<string, string | number | boolean | undefined>
) {
	return Object.entries(params)
		.filter(([, value]) => Boolean(value))
		.map((entry) => entry.map((part) => encodeURIComponent(part!)).join('='))
		.join('&');
}

function getBaseUrl({
	fundraiserSlug,
	nonprofitSlug
}: Pick<BaseUrlParams, 'nonprofitSlug' | 'fundraiserSlug'>) {
	let baseUrl = BASE_URL + nonprofitSlug;

	if (fundraiserSlug) {
		baseUrl += '/f/' + fundraiserSlug;
	}

	return baseUrl;
}

function getBaseParams({
	methods,
	nonprofitSlug,
	noExit,
	privateNote,
	utmSource
}: Pick<
	BaseUrlParams,
	'nonprofitSlug' | 'methods' | 'noExit' | 'privateNote' | 'utmSource'
>) {
	return {
		method: methods?.join(','),
		utm_campaign: 'donate-button',
		utm_source: utmSource ?? nonprofitSlug,
		utm_medium: UTM_MEDIUM,
		no_exit: noExit ?? 1,
		private_note: privateNote
	};
}

export function constructBasicDonateUrl(
	// eslint-disable-next-line @typescript-eslint/ban-types
	props: Omit<DonateUrlParams, 'frequency' | 'amount'>
) {
	const baseUrl = getBaseUrl(props);
	const params = getBaseParams(props);

	const parameters = serializeParams(params);

	return `${baseUrl}?${parameters}#/${HASH}`;
}

export function constructDonateUrl({
	frequency,
	amount,
	...rest
}: DonateUrlParams) {
	const baseUrl = getBaseUrl(rest);
	const params = getBaseParams(rest);

	const parameters = serializeParams({
		frequency,
		amount,
		...params
	});

	return `${baseUrl}?${parameters}#/${HASH}`;
}

export function constructDonateStocksUrl({
	stockAmount,
	stockSymbol,
	...rest
}: DonateStocksUrlParams) {
	const baseUrl = getBaseUrl(rest);
	const params = getBaseParams(rest);

	const parameters = serializeParams({
		stock_amount: stockAmount,
		stock_symbol: stockSymbol,
		...params
	});

	return `${baseUrl}?${parameters}#/${HASH}`;
}

export function constructDonateCryptoUrl({
	cryptoAmount,
	cryptoCurrency,
	...rest
}: DonateCryptoUrlParams) {
	const baseUrl = getBaseUrl(rest);
	const params = getBaseParams(rest);

	const parameters = serializeParams({
		crypto_amount: cryptoAmount,
		crypto_currency: cryptoCurrency,
		...params
	});

	return `${baseUrl}?${parameters}#/${HASH}`;
}

export function constructGiftCardUrl(nonprofitSlug: string) {
	const parameters = serializeParams({
		nonprofitSlug
	});

	return `${GIFT_CARD_URL}?${parameters}`;
}
