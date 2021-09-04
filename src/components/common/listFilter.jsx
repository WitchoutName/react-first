import React, { Component } from "react";
import PropTypes from "prop-types";

class ListFilter extends Component {
  render() {
    const { filters, currentFilter, all, onFilterChange } = this.props;

    filters.unshift(all);

    return (
      <div className="list-group">
        {filters.map((filter) => (
          <a
            key={filter}
            className={`list-group-item list-group-item-action ${
              filter === currentFilter && "active"
            }`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </a>
        ))}
      </div>
    );
  }
}

ListFilter.propTypes = {
  all: PropTypes.string,
  filters: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default ListFilter;
