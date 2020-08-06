import LicitamePageSimple from '@licitame/core/LicitamePageSimple';
import { makeStyles } from '@material-ui/core/styles';
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
	CardContent
} from '@material-ui/core';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	media: {
		width: '100%' // 16:9
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

function AccountPage(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('examplePage');

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const click = e => {
		e.target.remove();
	};

	return (
		<LicitamePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			content={<div className="p-24">Account</div>}
		/>
	);
}

export default AccountPage;
