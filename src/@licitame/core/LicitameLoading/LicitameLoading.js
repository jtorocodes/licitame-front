import { useTimeout } from '@licitame/hooks';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function LicitameLoading(props) {
	const [showLoading, setShowLoading] = useState(!props.delay);

	useTimeout(() => {
		setShowLoading(true);
	}, props.delay);

	if (!showLoading) {
		return null;
	}

	return (
		<div className="flex flex-1 flex-col items-center justify-center">
			<Typography className="text-20 mb-16" color="textSecondary">
				Loading...
			</Typography>
			<LinearProgress className="w-xs" color="secondary" />
		</div>
	);
}

LicitameLoading.propTypes = {
	delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};

LicitameLoading.defaultProps = {
	delay: false
};

export default LicitameLoading;
