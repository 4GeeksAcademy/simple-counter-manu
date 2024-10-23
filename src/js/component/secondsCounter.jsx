import React from "react";

const Card = (props) => {
	return (
		<div className="card text-bg-dark m-2 p-4 ">
			<div className="card-body">
				<h4 className="card-text text-bold">{props.digito}</h4>
			</div>
		</div>
	);
};

const SecondsCounter = (props) => { 
	return (
		<div className="d-flex mx-auto">
			<Card digito={Math.floor(props.counter/100000 %10)} />
			<Card digito={Math.floor(props.counter/10000 %10)} />
			<Card digito={Math.floor(props.counter/1000 %10)} />
			<Card digito={Math.floor(props.counter/100 %10)} />
			<Card digito={Math.floor(props.counter/10 %10)} />
			<Card digito={props.counter % 10} />

		</div>);
};

export default SecondsCounter;
