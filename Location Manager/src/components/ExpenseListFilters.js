import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { Input, Select } from 'antd'
const Option = Select.Option;
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (value) => {
    if (value === 'Name') {
      this.props.sortByDate();
    } else if (value === 'leased') {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div className="filter">
        <div className="filter-text">
          <Input
            placeholder="Search Location..."
            type="text"
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </div>
        <div className="filter-select">
          <label className="filter-label">Search By</label>
          
            <Select
              className="filter-option"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <Option value="Name">Name</Option>
              <Option value="leased">Leased Id</Option>
            </Select>
          
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
