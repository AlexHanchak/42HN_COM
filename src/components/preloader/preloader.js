import React from 'react';
import './preloader.css';

const Preloader = () => {
	
	const inlineStyle = {
		width: '100%',
		height: '100%'
	};
	
	return (
		<div style={ inlineStyle }
		     className="lds-css ng-scope">
			<div className="lds-eclipse">
				<div/>
			</div>
		</div>
	);
};

export default Preloader;