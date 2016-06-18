import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default class WatchlistSparkline extends Component {

	static propTypes = {
		history: PropTypes.array,
	};

	static defaultProps = {
		history: [],
	};

	shouldComponentUpdate = shouldPureComponentUpdate;

	render() {
		const { history } = this.props;
		return (
			<Sparklines
				data={history.map((h) => h.quote)}
				limit={30}
				width={60}
				height={20}
				{...this.props}
			>
				<SparklinesLine />
				<SparklinesSpots />
			</Sparklines>
		);
	}
}
