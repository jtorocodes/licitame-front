import i18next from 'i18next';
import en from './i18n/en';
import SearchPage from './Search';

i18next.addResourceBundle('en', 'searchPage', en);

const SearchConfig = {
	settings: {
		layout: {
			config: {
				toolbar: false
			}
		}
	},
	routes: [
		{
			path: '/search',
			component: SearchPage
		}
	]
};

export default SearchConfig;
