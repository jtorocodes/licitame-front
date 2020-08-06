import i18next from 'i18next';
import en from './i18n/en';
import AccountPage from './Account';

i18next.addResourceBundle('en', 'accountPage', en);

const AccountConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/account',
			component: AccountPage
		}
	]
};

export default AccountConfig;
