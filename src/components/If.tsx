import PropTypes from 'prop-types';

/**
 * Conditionally render passed components.
 * Alternative for ternary syntax
 * https://github.com/facebook/jsx/issues/65#issuecomment-255484351
 *
 * @param {condition, then, else} props
 */
const If = (props) => {
	const condition = props.condition || false;
	const positive = props.then || null;
	const negative = props.else || null;

	return condition ? positive : negative;
};

export default If;

If.propTypes = {
	condition: PropTypes.bool,
	then: PropTypes.node,
	else: PropTypes.node,
};
