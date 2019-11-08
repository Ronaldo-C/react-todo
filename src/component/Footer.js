import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const { filter, setFilter: changeFilter } = this.props
        return (
            <div>
                <span>Show:</span>
                <button disabled={filter === 'all'} onClick={() => changeFilter('all')}>All</button>
                <button disabled={filter === 'active'} onClick={() => changeFilter('active')}>Active</button>
                <button disabled={filter === 'completed'} onClick={() => changeFilter('completed')}>Completed</button>
            </div>
        );
    }
}

export default Footer;