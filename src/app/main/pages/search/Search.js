import LicitamePageSimple from '@licitame/core/LicitamePageSimple';
import { fade, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
	Card,
	CardHeader,
	CardMedia,
	Typography,
	CardActions,
	IconButton,
	Avatar,
	Collapse,
	CardContent,
	AppBar,
	Toolbar,
	Icon,
	InputBase
} from '@material-ui/core';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	media: {
		width: '100%' // 16:9
	},
	search: {
		position: 'relative',

		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%'
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		width: '100%'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	}
}));

function SearchPage(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('seacrhPage');
	const history = useHistory();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const toHistory = () => {
		history.goBack();
	};

	return (
		<LicitamePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			content={
				<div>
					<AppBar position="static" color="default">
						<Toolbar className="p-0">
							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
								<InputBase
									placeholder="Search…"
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput
									}}
									inputProps={{ 'aria-label': 'search' }}
								/>
							</div>

							<IconButton className="w-64 h-64" onClick={toHistory}>
								<Icon>close</Icon>
							</IconButton>
						</Toolbar>
					</AppBar>
					<div className="p-24">aaa</div>
				</div>
			}
		/>
	);
}

export default SearchPage;
