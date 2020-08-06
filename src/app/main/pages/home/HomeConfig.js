import i18next from 'i18next';
import en from './i18n/en';
import HomePage from './Home';

i18next.addResourceBundle('en', 'homePage', en);

const HomeConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/home',
			component: HomePage
		}
	]
};

export default HomeConfig;
