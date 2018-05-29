import React, { Component } from 'react';
class Topic extends Component {
    render() {
        let {match} = this.props;
        return (
            <div>
                <p>{match.params.id}</p>
            </div>
        )
    }
}
export default Topic;