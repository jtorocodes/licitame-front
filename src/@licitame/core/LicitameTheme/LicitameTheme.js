import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';

function LicitameTheme(props) {
	const mainTheme = useSelector(({ licitame }) => licitame.settings.mainTheme);

	// console.warn('LicitameTheme:: rendered',mainTheme);
	return <ThemeProvider theme={mainTheme}>{props.children}</ThemeProvider>;
}

export default React.memo(LicitameTheme);
