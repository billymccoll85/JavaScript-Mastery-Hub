import React, { Component } from 'react';

class FilterComponent extends Component {
  handleChange = (event) => {
    this.props.onFilterChange(event.target.value);
  }

  render() {
    return (
      <div className="mb-4">
        <input
          type="text"
          className="p-2 border rounded w-full"
          placeholder="Filter posts by title..."
          value={this.props.filter}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default FilterComponent;
