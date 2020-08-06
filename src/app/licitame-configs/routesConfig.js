import React from 'react';
import { Redirect } from 'react-router-dom';
import LicitameUtils from '@licitame/utils';
import HomeConfig from 'app/main/pages/home/HomeConfig';
import CategorieConfig from 'app/main/pages/categories/CategoriesConfig';
import SearchConfig from 'app/main/pages/search/SearchConfig';
import AccountConfig from 'app/main/pages/account/AccountConfig';

const routeConfigs = [HomeConfig, AccountConfig, CategorieConfig, SearchConfig];

const routes = [
	...LicitameUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/home" />
	},
	{
		path: '/home',
		component: () => <Redirect to="/home" />
	},
	{
		path: '/account',
		component: () => <Redirect to="/account" />
	},
	{
		path: '/categories',
		component: () => <Redirect to="/categories" />
	}
];

export default routes;
