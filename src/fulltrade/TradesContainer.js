import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fullTradesSelector } from './../_selectors/FullTradeSelector';
import TradePanel from './TradePanel';

@connect(fullTradesSelector)
export default class TradesContainer extends React.Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired,
        contracts: PropTypes.object.isRequired,
        currency: PropTypes.string.isRequired,
        trades: PropTypes.object.isRequired,
        ticks: PropTypes.object.isRequired,
    };
    createTrade() {
        const { trades, actions } = this.props;

        const allIDs = Object.keys(trades).map(id => +id);
        const maxID = allIDs.length > 0 ? allIDs.reduce((a, b) => Math.max(a, b)) : 0;
        actions.initTrade(maxID.toString());
    }

    render() {
        const { assets, trades, contracts, actions, ticks, currency } = this.props;
        const allID = Object.keys(trades);
        return (
            <div>
                {allID.map(id => {
                    const symbol = trades[id].symbol;
                    const contract = contracts[symbol];
                    const tick = ticks[symbol];
                    if (contract && tick) {
                        return (
                            <TradePanel
                                actions={actions}
                                assets={assets}
                                currency={currency}
                                key={id}
                                id={id}
                                trade={trades[id]}
                                contract={contract}
                                tick={tick}
                            />
                        );
                    }
                })}
                <button onClick={::this.createTrade}>Create Trade Panel</button>
            </div>
        );
    }
}