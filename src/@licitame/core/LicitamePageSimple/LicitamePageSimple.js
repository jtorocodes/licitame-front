import LicitameScrollbars from '@licitame/core/LicitameScrollbars';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import * as PropTypes from 'prop-types';
import React, { useRef } from 'react';
import LicitamePageSimpleHeader from './LicitamePageSimpleHeader';

const headerHeight = 120;
const toolbarHeight = 64;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100%',
		position: 'relative',
		flex: '1 0 auto',
		height: 'auto',
		backgroundColor: theme.palette.background.default
	},
	innerScroll: {
		flex: '1 1 auto',
		height: '100%'
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		zIndex: 2,
		maxWidth: '100%',
		minWidth: 0,
		height: '100%',
		backgroundColor: theme.palette.background.default
	},
	header: {
		height: headerHeight,
		minHeight: headerHeight,
		display: 'flex',
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
		color: theme.palette.primary.contrastText,
		backgroundSize: 'cover',
		backgroundColor: theme.palette.primary.dark
	},
	topBg: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: headerHeight,
		pointerEvents: 'none'
	},

	contentWrapper: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		overflow: 'auto',
		'-webkit-overflow-scrolling': 'touch',
		zIndex: 9999
	},
	toolbar: {
		height: toolbarHeight,
		minHeight: toolbarHeight,
		display: 'flex',
		alignItems: 'center'
	},
	content: {
		flex: '1 0 auto'
	}
}));

const LicitamePageSimple = React.forwardRef((props, ref) => {
	// console.info("render::LicitamePageSimple");
	const rootRef = useRef(null);
	const classes = useStyles(props);

	React.useImperativeHandle(ref, () => ({
		rootRef
	}));

	return (
		<div className={clsx(classes.root, props.innerScroll && classes.innerScroll)} ref={rootRef}>
			<div className={clsx(classes.header, classes.topBg)} />

			<div className="flex flex-auto flex-col container z-10 h-full">
				{props.header && <LicitamePageSimpleHeader header={props.header} classes={classes} />}

				<div className={classes.wrapper}>
					<LicitameScrollbars className={classes.contentWrapper} enable={props.innerScroll}>
						{props.header && <LicitamePageSimpleHeader header={props.header} classes={classes} />}

						{props.contentToolbar && <div className={classes.toolbar}>{props.contentToolbar}</div>}

						{props.content && <div className={classes.content}>{props.content}</div>}
					</LicitameScrollbars>
				</div>
			</div>
		</div>
	);
});

LicitamePageSimple.propTypes = {
	header: PropTypes.node,
	content: PropTypes.node,
	contentToolbar: PropTypes.node,
	innerScroll: PropTypes.bool
};

LicitamePageSimple.defaultProps = {};

export default React.memo(LicitamePageSimple);
