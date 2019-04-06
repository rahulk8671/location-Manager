import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import bandwidth from '../selectors/bandwidth';
import moment from 'moment';

const LocationList = ({ _id, leasedCircuitId, locationName, locationType,  vendor, firstCommissioningDate, status, closureDate, trueBandwidth}) => (
  <div className="location-list">
    <div className="location-title">
      <Link to={`location/${leasedCircuitId}`}>
        <p>{locationName} </p>
      </Link> </div>
      {!closureDate && <div className="location-summary">
        
        {/* {closureDate && <p>Closing Date {moment(closureDate).format("L")}</p> } */}
        {trueBandwidth[0] && <p><Icon style={{fontSize: '4rem', color: 'green'}} type="arrow-up" /> {trueBandwidth[0].bandwidth} {trueBandwidth[0].bandwidthUnit}</p>}
      </div>}
      {closureDate && <div className="location-summary">
        
        {/* {closureDate && <p>Closing Date {moment(closureDate).format("L")}</p> } */}
        {trueBandwidth[0] && <p><Icon style={{fontSize: '4rem', color: 'red'}} type="arrow-down" /> {trueBandwidth[0].bandwidth} {trueBandwidth[0].bandwidthUnit}</p>}
      </div>}
      {!closureDate && <div className="location-date">
        <p>Last Updated</p>
        <p>{moment(trueBandwidth[0].commissioningDate).format("L")}</p>
      </div>}
      {closureDate && <div className="location-date close" style={{color: 'red'}}>
        <p>Closing Date</p>
        <p>{moment(closureDate).format("L")}</p>
      </div>}
  </div>
);

const mapStateToProps = (state, ownProps) => {
    const trueBandwidthArr = bandwidth(state.bandwidth, ownProps.leasedCircuitId)
    
    return {
      trueBandwidth: trueBandwidthArr
    };
  };
  
export default connect(mapStateToProps)(LocationList);