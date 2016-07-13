import React, { PropTypes, Component } from 'react';
import { actions } from '../_store';
import ContractDetailsContainer from './ContractDetailsContainer';

export default class ForTesting extends Component {

    static propTypes = {
        params: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            done: false,
        };
    }

    componentDidMount() {
        const { params } = this.props;
        actions.detailsForContract(params.id).then(() => this.setState({ done: true }));
    }

    render() {
        const { done } = this.state;
        return (
            done ? <ContractDetailsContainer /> : null
        );
    }
}