import React from 'react';
import { connect } from 'react-redux';
import LocationListItem from './LocationListItem';
import bandwidths from '../reducers/bandwidths';
import selectLocation from '../selectors/location';
import { Empty } from 'antd';
//import ExpenseListItem from './ExpenseListItem';
// import selectExpenses from '../selectors/expenses';

export const LocationList = (props) => (
  <div className="location">
    {
      props.locations.length === 0 ? (
        <Empty />
      ) : (
          props.locations.map((location) => {
            return <LocationListItem  key={location._id} {...location} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    locations: selectLocation(state.location, state.filters)
  };
};

export default connect(mapStateToProps)(LocationList);
