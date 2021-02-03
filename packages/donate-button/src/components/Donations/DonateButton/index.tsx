import {useContext} from 'preact/hooks';

import DonationsContext from '../../../contexts/donationsContext';
import OptionsContext from '../../../contexts/optionsContext';
import {replaceKeys} from '../../../helpers/interpolation';
import isFunction from '../../../helpers/is-function';
import useI18n from '../../../hooks/useI18n';
import Button from '../../Button';

const constructEveryUrl = (company, frequency, amount, mode, extras) => {
	const baseUrl = `https://www.every.org/${company}/donate?frequency=${frequency}&amount=${amount}&utm_campaign=single-or-split&utm_content=${mode.toLowerCase()}&utm_source=${company}&utm_medium=every-month`;
	const extraParameters = Object.keys(extras).reduce((previous, key) => {
		return previous.concat(`&${key}=${extras[key]}`);
	}, '');

	return `${baseUrl}${extraParameters}`;
};

const getButtonTextFormatted = (amount, text, currency) => {
	if (amount && !isNaN(amount)) {
		return replaceKeys({amount: `$${amount} ${currency}`}, text);
	}

	return replaceKeys({amount: ''}, text);
};

const DonateButton = ({monthlyDonation, extraClasses = []}) => {
	const lang = useI18n();
	const {donationAmount} = useContext(DonationsContext);
	const {onSubmit, currency, mode} = useContext(OptionsContext);
	const formText = monthlyDonation ? lang.monthly : lang.oneTime;

	const handleDonateButton = (mode) => {
		if (!isNaN(donationAmount)) {
			const frequency = monthlyDonation ? 'MONTHLY' : 'ONCE';

			if (isFunction(onSubmit)) {
				onSubmit({amount: donationAmount, frequency});
			} else {
				const url = constructEveryUrl(
					onSubmit.charity,
					frequency,
					donationAmount,
					mode,
					onSubmit.params
				);
				window.location.href = url;
			}
		}
	};

	return (
		<Button
			extraClasses={extraClasses}
			handleClick={() => {
				handleDonateButton(mode);
			}}
		>
			{getButtonTextFormatted(donationAmount, formText.button, currency)}
		</Button>
	);
};

export default DonateButton;
