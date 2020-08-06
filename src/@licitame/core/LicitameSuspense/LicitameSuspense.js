import LicitameLoading from '@licitame/core/LicitameLoading';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * React Suspense defaults
 * For to Avoid Repetition
 */ function LicitameSuspense(props) {
	return <React.Suspense fallback={<LicitameLoading {...props.loadingProps} />}>{props.children}</React.Suspense>;
}

LicitameSuspense.propTypes = {
	loadingProps: PropTypes.object
};

LicitameSuspense.defaultProps = {
	loadingProps: {
		delay: 0
	}
};

export default LicitameSuspense;
