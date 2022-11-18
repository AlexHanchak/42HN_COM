import { ToastsStore } from 'react-toasts';

export default (message, type = 'info') => {
	const timer = 10000, classNames = `alert alert-${ type }`;
	
	switch (type) {
		case 'info':
			return ToastsStore.info(message, timer, classNames);
		case 'success':
			return ToastsStore.success(message, timer, classNames);
		case 'warning':
			return ToastsStore.warning(message, timer, classNames);
		case 'error':
			return ToastsStore.error(message, timer, classNames);
		default:
			throw new TypeError('Type is not appropriate!');
	}
}