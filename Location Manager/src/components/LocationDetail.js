import React from 'react';
import { connect } from 'react-redux';
import { Input, Form, Button, DatePicker, Icon } from 'antd';
import BandwidthList from '../components/BandwidthList';
import { addBandwidth, editBandwidth } from '../actions/bandwidth';
import { editLocation } from '../actions/location';
import uuid from 'uuid';
//import sortBandwidth from '../selectors/sortBandwidth';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';


export class LocationDetail extends React.Component {
  state = {
    showRemarks: false,
    legacyCircuitId: this.props.location.legacyCircuitId,
    locationName: this.props.location.locationName,
    locationType: this.props.location.locationType,
    vendor: this.props.location.vendor,
    firstCommissioningDate: this.props.location.firstCommissioningDate.valueOf(),
    status: this.props.location.status,
    closureDate: this.props.location.closureDate ? moment(this.props.location.closureDate.valueOf()) : this.props.location.closureDate,
    leasedCircuitId: this.props.match.params.id,
    bandwidth: '',
    bandwidthUnit: '',
    bandwidthType: '',
    connectivityType: '',
    lastMile: '',
    remarks: '',
    discountPolicy: '',
    commissioningDate: moment(),
    upgrade: false,
    showUpdate: false,
    showClosureDetail: false,
    AC: null
  }

  showUpdateFunc = () => {
      this.setState({
          showUpdate: true
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleChangeL = (e) => {
      //this.showUpdateFunc();
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    // axios.put('http://10.6.32.16:4000/loc/bandwidth/'+this.state.leasedCircuitId, {
    //     "status": false
    // }).then(res => {
      
    //   console.log(res);

      // axios.post('http://10.6.32.16:4000/loc/bandwidth', {
      //   "leasedCircuitId": this.state.leasedCircuitId,
      //   "bandwidth": this.state.bandwidth,
      //   "bandwidthUnit": this.state.bandwidthUnit,
      //   "bandwidthType": this.state.bandwidthType,
      //   "connectivityType": this.state.connectivityType,
      //   "lastMile": this.state.lastMile,
      //   "remarks": this.state.remarks,
      //   "discountPolicy": this.state.discountPolicy,
      //   "commissioningDate": this.state.commissioningDate.valueOf(),
      //   "status": true
      // }).then(res => {
      //   console.log(this.state.bandwidth);
      //   console.log(this.props.location);
      this.props.editBandwidth(this.state.leasedCircuitId, {status: false});
        this.props.addBandwidth({
        _id: uuid(),
        leasedCircuitId: this.state.leasedCircuitId,
        bandwidth: this.state.bandwidth,
        bandwidthUnit: this.state.bandwidthUnit,
        bandwidthType: this.state.bandwidthType,
        connectivityType: this.state.connectivityType,
        lastMile: this.state.lastMile,
        remarks: this.state.remarks,
        discountPolicy: this.state.discountPolicy,
        commissioningDate: this.state.commissioningDate.valueOf(),
        status: true
      });
     
      

      // }).catch(e => console.log('error =>', e));
      
    // }).catch(e => console.log('error => ', e));

    this.setState({
      upgrade: false
  })
    
  }
  upgrade = () => {
      this.setState({
          upgrade: true
      })
  }

  updateLocation = (e) => {
    e.preventDefault();

    if (this.state.closureDate == null) {
      // axios.put('http://10.6.32.16:4000/loc/location/'+this.state.leasedCircuitId, {
      //   "legacyCircuitId": this.state.legacyCircuitId,
      //   "leasedCircuitId": this.state.leasedCircuitId,
      //   "locationName": this.state.locationName,
      //   "locationType": this.state.locationType,
      //   "status": this.state.status,
      //   "vendor": this.state.vendor,
      //   "firstCommissioningDate": this.state.firstCommissioningDate.valueOf(),
      //   "closureDate": this.state.closureDate
      // }).then((res) => {

      //   console.log(res);
        this.props.editLocation(this.state.leasedCircuitId, {
          legacyCircuitId: this.state.legacyCircuitId,
          leasedCircuitId: this.state.leasedCircuitId,
          locationName: this.state.locationName,
          locationType: this.state.locationType,
          status: this.state.status,
          vendor: this.state.vendor,
          firstCommissioningDate: this.state.firstCommissioningDate.valueOf(),
          closureDate: this.state.closureDate
        });

      // }).catch(e => console.log(e));
    } else {
  
      // axios.put('http://10.6.32.16:4000/loc/location/'+this.state.leasedCircuitId, {
      //   "legacyCircuitId": this.state.legacyCircuitId,
      //   "leasedCircuitId": this.state.leasedCircuitId,
      //   "locationName": this.state.locationName,
      //   "locationType": this.state.locationType,
      //   "status": "CLOSED",
      //   "vendor": this.state.vendor,
      //   "firstCommissioningDate": this.state.firstCommissioningDate.valueOf(),
      //   "closureDate": this.state.closureDate.valueOf()
      // }).then((res) => {

      //   console.log(res);
        this.setState({
          status: "CLOSED"
        })
          this.props.editLocation(this.state.leasedCircuitId, {
          legacyCircuitId: this.state.legacyCircuitId,
          leasedCircuitId: this.state.leasedCircuitId,
          locationName: this.state.locationName,
          locationType: this.state.locationType,
          status: "CLOSED",
          vendor: this.state.vendor,
          firstCommissioningDate: this.state.firstCommissioningDate.valueOf(),
          closureDate: this.state.closureDate.valueOf()
        });

      // }).catch(e => console.log(e));
    }
    console.log(this.state);
    
    this.setState({
        showUpdate: false
    })
  }

  handleFocus = () => {
    this.setState({
        showClosureDetail: true
    })
  }

  handleBlur = () => {
      this.setState({
          showClosureDetail: false
      })
  }

  cancelUpdate = () => {
      this.setState({
          closureDate: null,
          showUpdate: false
      })
  }

  cancelUpgrade = () => {
      this.setState({
        upgrade: false
      })
  }

  onDateChange = (date) => {
    this.setState({
      commissioningDate: date
    })
  }

  onDateChangeClose = (date) => {
    this.setState({
      closureDate: date
    })
  }

  onDateChangeCom = (date) => {
    this.setState({
      firstCommissioningDate: date
    })
  }

  revokeLocation = () => {

    // axios.put('http://10.6.32.16:4000/loc/location/'+this.state.leasedCircuitId, {
    //   "status": "ACTIVE",
    //   "closureDate": null
    // }).then(res => {
    //   console.log(res);
      this.setState({
        status: 'ACTIVE',
        closureDate: null
      })
      this.props.editLocation(this.state.leasedCircuitId, {
        status: 'ACTIVE',
        closureDate: null
      });

    // }).catch(e => console.log(e));
  }

  showRemarks = () => {
    this.setState({
      showRemarks: !this.state.showRemarks
    })
  }
 
  render() {
      const locationEdit = () => {
          if(this.state.showUpdate) {
              return(<div className="update-location">
                   <Form onSubmit={this.updateLocation}>
                    <h2>Update Location Details</h2>
                        <div className="form-item">
                          <label>LegacyCircuitId</label>
                          <Input type="text" id='legacyCircuitId' placeholder="enter legacyCircuitId" value={this.state.legacyCircuitId} onChange={this.handleChangeL}/>
                        </div>
                        <div className="form-item">
                          <label>LeasedCircuitId</label>
                          <Input disabled={true} type="text" id='leasedCircuitId' placeholder="enter leasedCircuitId" value={this.state.leasedCircuitId} onChange={this.handleChangeL}/>
                        </div>
                        <div className="form-item">
                          <label>Location Name</label>
                          <Input type="text" id='locationName' placeholder="enter locationName" value={this.state.locationName} onChange={this.handleChangeL}/>
                        </div>
                        <div className="form-item">
                          <label>Location Type</label>
                          <Input type="text" id='locationType' placeholder="enter locationType" value={this.state.locationType} onChange={this.handleChangeL}/>
                        </div>
                        <div className="form-item">
                          <label>Vendor</label>
                          <Input type="text" id='vendor' placeholder="enter vendor" value={this.state.vendor} onChange={this.handleChangeL}/>
                        </div>
                        <div className="form-item fcd">
                          <label>First Commissioning Date</label>
                          <DatePicker defaultValue={moment(this.state.firstCommissioningDate)} onChange={this.onDateChangeCom}/>
                        </div>
                        <div className="form-item">
                          <label>Status</label>
                          <Input disabled={true} id='status' type="text" placeholder="enter status" value={this.state.status} onChange={this.handleChangeL}/>
                        </div>
                        <div className="form-item fcd">
                          <label>Closure Date {this.state.closureDate && <span className="close">This will close connection</span>}</label>
                          <DatePicker defaultValue={this.state.closureDate} onChange={this.onDateChangeClose}  disabled={!!(this.state.status === "CLOSED")}/>
                        </div>
                        <Button className="update" type='primary' htmlType="submit" onClick={this.updateLocation}>Update</Button>
                    </Form> 
                    <Button className="cancel" type='danger' onClick={this.cancelUpdate}>Cancel Update</Button>
              </div>)
          } else {
              return (<div className="location-summary-show">
                  <div className="location-summary-title">
                    <div className="location-summary-title-fdiv"><label>Location Name</label>
                    <p>{this.state.locationName}</p></div>
                    <div>
                    {this.props.location.closureDate && <Button onClick={this.revokeLocation}>Revoke Location</Button> }
                    {!this.state.showUpdate && <Button onClick={this.showUpdateFunc}><Icon style={{ color: '#08c' }} type="edit" />Edit Location</Button>}</div>
                  </div>
                  <div className="whole-sum">
                  <div className="loc-sum-item">
                    <label>Leased Circuit Id</label>
                    <p>{this.state.leasedCircuitId}</p>
                  </div>
                  <div className="loc-sum-item">
                    <label>Legacy Circuit Id</label>
                    <p>{this.state.legacyCircuitId}</p>
                  </div>
                  <div className="loc-sum-item">
                    <label>Location type</label>
                    <p>{this.state.locationType}</p>
                  </div>
                  <div className="loc-sum-item">
                    <label>Vendor</label>
                    <p>{this.state.vendor}</p>
                  </div>
                  <div className="loc-sum-item">
                    <label>First Commissioning Date</label>
                    <p>{moment(this.state.firstCommissioningDate).format("L")}</p>
                  </div>
                  <div className="loc-sum-item">
                    <label>Status</label>
                    {!this.state.closureDate && <p className="active-status">{this.state.status} <Icon style={{color: '#52c41a', fontSize: '20px'}} type="like" theme="filled" /></p>}
                    {!!this.state.closureDate && <p className="close-status">{this.state.status} <Icon style={{color: '#f7505e', fontSize: '20px'}} type="dislike" theme="filled" /></p>}
                  </div>
                  </div>
              </div>)
          }
      }
   
    return (
      <div className="content-v2">
          
            
            
            {locationEdit()}
          
          {!this.state.upgrade && <Button style={{margin: '1rem 0', background: '#5bc726', color: 'white'}} disabled={!!(this.state.status === 'CLOSED')} onClick={this.upgrade}><Icon type="rise" />Upgrade Bandwidth</Button>}
          {this.state.upgrade && <div className="upgrade-bandwidth">
           <Form  onSubmit={this.handleSubmit}>
                <h2 className="upgrade=title">Upgrade Bandwidth</h2>  
                <div className="form-item">
                  <label>Bandwidth</label>
                  <Input type="text" id='bandwidth' placeholder="enter bandwidth" onChange={this.handleChange}/>
                </div>
                <div className="form-item">
                  <label>Bandwidth Unit</label>
                  <Input type="text" id='bandwidthUnit' placeholder="enter bandwidthUnit" onChange={this.handleChange}/>
                </div>
                <div className="form-item">
                  <label>Bandwidth Type</label>
                  <Input type="text" id='bandwidthType' placeholder="enter bandwidthType" onChange={this.handleChange}/>
                </div>
                <div className="form-item">
                  <label>Connectivity Type</label>
                  <Input type="text" id='connectivityType' placeholder="enter connectivityType" onChange={this.handleChange}/>
                </div>
                <div className="form-item">
                  <label>Last Mile</label>
                  <Input type="text" id='lastMile' placeholder="enter lastMile" onChange={this.handleChange}/>
                </div>
                <div className="form-item">
                  <label>Remarks</label>
                  <Input type="text" id='remarks' placeholder="enter remarks" onChange={this.handleChange}/>
                </div>
                <div className="form-item">
                  <label>Discount Policy</label>
                  <Input type="text" id='discountPolicy' placeholder="enter discountPolicy" onChange={this.handleChange}/>
                </div>
                <div className="form-item cd">
                  <label>Commissioning Date</label>
                  <DatePicker defaultValue={this.state.commissioningDate} onChange={this.onDateChange}/>
                </div>
                <Button className="upgrade" type='primary' htmlType="submit" onClick={this.handleSubmit}>Upgrade</Button>
            </Form> <Button className="cancel" type='danger' onClick={this.cancelUpgrade}>Cancel Upgrade</Button>
          </div>
              }
          {this.props.trueBandwidth && <div style={{background: 'rgb(222, 255, 222)'}} className="true-bandwidth">
              <div className="true-band-item">
                <label>Bandwidth</label>
                <p>{this.props.trueBandwidth.bandwidth}</p>
              </div>
              <div className="true-band-item up-arrow">
                <div>
                  <label>Bandwidth Unit</label>
                  <p>{this.props.trueBandwidth.bandwidthUnit}</p>
                </div>
                <Icon  style={{fontSize: '2.5rem', color: 'green'}} type="up-circle" theme="filled" />
              </div>
              <div className="true-band-item">
                <label>Bandwidth Type</label>
                <p>{this.props.trueBandwidth.bandwidthType}</p>
              </div>
              <div className="true-band-item">
                <label>Connectivity Type</label>
                <p>{this.props.trueBandwidth.connectivityType}</p>
              </div>
              <div className="true-band-item">
                <label>Last Mile</label>
                <p>{this.props.trueBandwidth.lastMile}</p>
              </div>
              <div className="true-band-item">
                <label>Commissioning Date</label>
                <p className="show-remarks">{moment(this.props.trueBandwidth.commissioningDate).format("L")} <Button style={{height: '2rem'}} onClick={this.showRemarks}><Icon type="caret-down" theme="filled" /></Button></p>
              </div>
              {this.state.showRemarks && <div>
                <div>
                  <label>Remarks</label>
                  <p>{this.props.trueBandwidth.remarks}</p>
                </div>
                <div>
                  <label>Discount Policy</label>
                  <p>{this.props.trueBandwidth.discountPolicy}</p>
                </div>
              </div>}
          </div>}
          {this.props.bandwidth &&
              this.props.bandwidth.map((band) => {
                return <BandwidthList key={band._id} {...band}/>
              })
          }
          {this.props.bandwidth.length === 0 && <p>No upgrade history</p>}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
    trueBandwidth: state.bandwidth.find((band) => band.leasedCircuitId === props.match.params.id && band.status === true),
    bandwidth: (state.bandwidth.filter((band) => band.leasedCircuitId === props.match.params.id && band.status === false)).sort((a, b) => a.commissioningDate < b.commissioningDate ? 1 : -1),
    location: state.location.find((location) => location.leasedCircuitId === props.match.params.id)
  });

const mapDispatchToProps = (dispatch) => ({
    addBandwidth: (bandwidth) => dispatch(addBandwidth(bandwidth)),
    editBandwidth: (id, update) => dispatch(editBandwidth(id, update)),
    editLocation: (id, update) => dispatch(editLocation(id, update))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
