import React from 'react';
import M from '../_common/M';

export default class WatchlistTableHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th>
						<M m="Asset" />
					</th>
					<th>
						<M m="Spot" />
					</th>
					<th>
						<M m="Change" />
					</th>
					<th>
						<M m="Chart" />
					</th>
				</tr>
			</thead>
		);
	}
}
