import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { useSelector } from 'react-redux';
import { TextField, Icon, Button, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
	separator: {
		width: 1,
		height: 64,
		backgroundColor: theme.palette.divider
	}
}));

function ToolbarLayoutDefault(props) {
	const toolbarTheme = useSelector(({ licitame }) => licitame.settings.toolbarTheme);
	const classes = useStyles(props);
	const history = useHistory();

	const toSearch = () => {
		history.push('/search');
	};

	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="licitame-toolbar"
				className="flex relative z-10"
				color="default"
				style={{ backgroundColor: toolbarTheme.palette.background.default }}
			>
				<Toolbar className="p-0">
					<div className="flex flex-1" />
					<div className="flex">
						<IconButton className="w-64 h-64" onClick={toSearch}>
							<Icon>search</Icon>
						</IconButton>

						{/*<div className={classes.separator} />
						menu 1
						<div className={classes.separator} />
						menu 2
						<div className={classes.separator} />
						menu 3
						<div className={classes.separator} />
						menu 4
	<div className={classes.separator} />*/}
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(ToolbarLayoutDefault);
