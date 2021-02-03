import './toggle-donation-type.css';
import {replaceTagWithComponent} from '../../../helpers/interpolation';
import useI18n from '../../../hooks/useI18n';

const getActionFormatted = (switchText, handleClick) => {
	const comp = 'span';
	const props = {onClick: handleClick};
	const tag = 'action';

	return replaceTagWithComponent(switchText, tag, comp, props);
};

const ToggleDonationType = ({handleClick, monthlyDonation}) => {
	const lang = useI18n();
	const formText = monthlyDonation ? lang.monthly : lang.oneTime;

	return (
		<p className="t-title donation-type">
			{getActionFormatted(formText.switch, handleClick)}
		</p>
	);
};

export default ToggleDonationType;
