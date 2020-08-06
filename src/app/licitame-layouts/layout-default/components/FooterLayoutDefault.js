import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { useSelector } from 'react-redux';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import ListIcon from '@material-ui/icons/List';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import UserIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
	root: {
		width: '100%'
	}
});

function FooterLayoutDefault(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState('home');
	const history = useHistory();

	const handleChange = (event, newValue) => {
		setValue(newValue);
		history.push('/' + newValue);
	};

	const footerTheme = useSelector(({ licitame }) => licitame.settings.footerTheme);

	return (
		<ThemeProvider theme={footerTheme}>
			<AppBar id="licitame-footer" className="relative z-10" color="default">
				<Toolbar className="px-16 py-0 flex items-center">
					<BottomNavigation value={value} onChange={handleChange} className={classes.root}>
						<BottomNavigationAction label="Inicio" value="home" icon={<HomeIcon />} />
						<BottomNavigationAction label="Categorías" value="categories" icon={<ListIcon />} />
						<BottomNavigationAction label="Cuenta" value="account" icon={<UserIcon />} />
					</BottomNavigation>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(FooterLayoutDefault);
