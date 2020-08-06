import i18next from 'i18next';
import en from './i18n/en';
import CategoriePage from './Categories';

i18next.addResourceBundle('en', 'categoriesPage', en);

const CategorieConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/categories',
			component: CategoriePage
		}
	]
};

export default CategorieConfig;
