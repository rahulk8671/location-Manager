import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import bandwidth from '../selectors/bandwidth';
import { Button, Icon } from 'antd';
import moment from 'moment';

export class BandwidthList extends React.Component {
  state = {
    showRemarks: false
  }
  showRemarks = () => {
    this.setState({
      showRemarks: !this.state.showRemarks
    })
  }
  render() {
    const { bandwidth, bandwidthUnit,  bandwidthType, lastMile, remarks, discountPolicy, commissioningDate, connectivityType} = this.props;
    return (
      <div style={{background: 'rgb(253, 225, 225)'}} className="true-bandwidth">
              <div className="true-band-item">
                <label>Bandwidth</label>
                <p>{bandwidth}</p>
              </div>
              <div className="true-band-item down-arrow">
                <div>
                  <label>Bandwidth Unit</label>
                  <p>{bandwidthUnit}</p>
                </div>
                <Icon style={{fontSize: '2.5rem', color: 'red'}} type="down-circle" theme="filled" />
              </div>
              <div className="true-band-item">
                <label>Bandwidth Type</label>
                <p>{bandwidthType}</p>
              </div>
              <div className="true-band-item">
                <label>Connectivity Type</label>
                <p>{connectivityType}</p>
              </div>
              <div className="true-band-item">
                <label>Last Mile</label>
                <p>{lastMile}</p>
              </div>
              <div className="true-band-item">
                <label>Commissioning Date</label>
                <p className="show-remarks">{moment(commissioningDate).format("L")} <Button style={{height: '2rem'}} onClick={this.showRemarks}><Icon type="caret-down" theme="filled" /></Button></p>
              </div>
              {this.state.showRemarks && <div>
                <div>
                  <label>Remarks</label>
                  <p>{remarks}</p>
                </div>
                <div>
                  <label>Discount Policy</label>
                  <p>{discountPolicy}</p>
                </div>
              </div>}
          </div>
    )
  }
}

export default BandwidthList;

// export const BandwidthList = ({ _id, leasedCircuitId, bandwidth, bandwidthUnit,  bandwidthType, lastMile, remarks, discountPolicy, status, commissioningDate, connectivityType}) => (
//   <div className="bandwidth-list">
//       <p>{bandwidth} {bandwidthUnit} {moment(commissioningDate).format("L")}</p>
//       <p>{bandwidthType} {status}</p>
//   </div>
// );
  
// export default BandwidthList;




// const BandwidthList = ({ _id, leasedCircuitId, bandwidth, bandwidthUnit,  bandwidthType, lastMile, remarks, discountPolicy, status, commissioningDate, connectivityType}) => (
//   <div className="bandwidth-list">
//       <p>{bandwidth} {bandwidthUnit} {moment(commissioningDate).format("L")}</p>
//       <p>{bandwidthType} {status}</p>
//   </div>
// );
  
// export default BandwidthList;