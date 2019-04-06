import React, { Component } from 'react'
import { Input, DatePicker, Form, Button, message } from 'antd'
import { connect } from 'react-redux';
import { addLocation } from '../actions/location';
import { addBandwidth } from '../actions/bandwidth';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

class AddLocation extends Component {
  state = {
    legacyCircuitId: '',
    leasedCircuitId: '',
    locationName: '',
    locationType: '',
    vendor: '',
    firstCommissioningDate: moment(),
    status: 'ACTIVE',
    closureDate: null,
    bandwidth: '',
    bandwidthUnit: '',
    bandwidthType: '',
    connectivityType: '',
    lastMile: '',
    remarks: '',
    discountPolicy: '',
    nextSt: true
  }
  componentWillMount = () => {
    this.setState({
      nextSt: true
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.bandwidth === '' || this.state.bandwidthUnit === '' || this.state.bandwidthType === '' || this.state.lastMile === '' || this.state.connectivityType === '' ) {
      message.info('Please fill out the details');
    } else {
    // axios.post('http://10.6.32.16:4000/loc/location', {
    //   "legacyCircuitId": this.state.legacyCircuitId,
    //   "leasedCircuitId": this.state.leasedCircuitId,
    //   "locationName": this.state.locationName,
    //   "locationType": this.state.locationType,
    //   "vendor": this.state.vendor,
    //   "firstCommissioningDate": this.state.firstCommissioningDate.valueOf(),
    //   "status": this.state.status,
    //   "closureDate": this.state.closureDate
    // }).then((res) => {
      this.props.addLocation({
        _id: uuid(),
        legacyCircuitId: this.state.legacyCircuitId,
        leasedCircuitId: this.state.leasedCircuitId,
        locationName: this.state.locationName,
        locationType: this.state.locationType,
        vendor: this.state.vendor,
        firstCommissioningDate: this.state.firstCommissioningDate.valueOf(),
        status: this.state.status,
        closureDate: this.state.closureDate
      });
    // }).catch(e => console.log('error =>', e))
    
    // axios.post('http://10.6.32.16:4000/loc/bandwidth', {
    //   "leasedCircuitId": this.state.leasedCircuitId,
    //   "bandwidth": this.state.bandwidth,
    //   "bandwidthUnit": this.state.bandwidthUnit,
    //   "bandwidthType": this.state.bandwidthType,
    //   "commissioningDate": this.state.firstCommissioningDate.valueOf(),
    //   "connectivityType": this.state.connectivityType,
    //   "lastMile": this.state.lastMile,
    //   "remarks": this.state.remarks,
    //   "discountPolicy": this.state.discountPolicy,
    //   "status": true
    // }).then((res) => {
      this.props.addBandwidth({
        _id: uuid(),
        leasedCircuitId: this.state.leasedCircuitId,
        bandwidth: this.state.bandwidth,
        bandwidthUnit: this.state.bandwidthUnit,
        bandwidthType: this.state.bandwidthType,
        commissioningDate: this.state.firstCommissioningDate.valueOf(),
        connectivityType: this.state.connectivityType,
        lastMile: this.state.lastMile,
        remarks: this.state.remarks,
        discountPolicy: this.state.discountPolicy,
        status: true
      })
    // }).catch(e => console.log('error =>', e))

    
    this.props.history.push('/');
  }
  }

  nextStep = () => {
    if(this.state.leasedCircuitId === '' || this.state.legacyCircuitId === '' || this.state.locationName === '' || this.state.locationType === '' || this.state.vendor === '' || this.state.status === '') {
      message.info('please fill out the details');
    } else {
      this.setState({
        'nextSt': false
      })
    }
   
  }
  goback = () => {
    this.setState({
      'nextSt': true
    })
  }
  onDateChange = (date) => {
    console.log(date)
    this.setState(() => this.setState({ firstCommissioningDate: date }))
    console.log(moment(this.state.firstCommissioningDate).format("L"));
  }
  render() {
    const { nextSt } = this.state;
    return (
      <div className="add-location">
        {nextSt ?  <div className="add-location-form">
                <h2>Location details (new)</h2>
                <div className="form-item">
                  <label>Legacy Circuit Id</label>
                  <Input value={this.state.legacyCircuitId} type="text" id='legacyCircuitId' placeholder="enter legacyCircuitId" onChange={this.handleChange}/>
                </div>
                <div className="form-item">
                  <label>Leased Circuit Id</label>
                  <Input value={this.state.leasedCircuitId} type="text" id='leasedCircuitId' placeholder="enter leasedCircuitId" onChange={this.handleChange}/>
                </div>
                <div className="form-item">
                  <label>Location Name</label>
                  <Input  value={this.state.locationName} type="text" id='locationName' placeholder="enter locationName" onChange={this.handleChange}/>
                </div>
                <div className="form-item">
                  <label>Location Type</label>
                  <Input value={this.state.locationType} type="text" id='locationType' placeholder="enter locationType" onChange={this.handleChange}/>
                </div>
                <div className="form-item">
                  <label>Vendor</label>
                  <Input value={this.state.vendor} type="text" id='vendor' placeholder="enter vendor" onChange={this.handleChange}/>
                </div>
                <div className="fcd form-item">
                  <label>First Commissioning Date</label>
                  <DatePicker defaultValue={this.state.firstCommissioningDate} onChange={this.onDateChange}/>
                </div>
                
                {/* <Input type="text" id='firstCommissioningDate' placeholder="enter firstCommissioningDate" onChange={this.handleChange}/> */}
                {/* <label>status</label> */}
                {/* <Input type="text" id='status' placeholder="enter status" onChange={this.handleChange}/> */}
                {/* <Input type="text" id='closureDate' placeholder="enter closureDate" onChange={this.handleChange}/> */}
                
                <Button type="primary" onClick={this.nextStep}>Next</Button>
            </div> :  
            <Form onSubmit={this.handleSubmit}>
              <div className="add-location-form">
                  <h2>Bandwidth details</h2>
                  <div className="form-item">
                    <label>Bandwidth</label>
                    <Input value={this.state.bandwidth} type="text" id='bandwidth' placeholder="enter bandwidth" onChange={this.handleChange}/>
                  </div>
                  <div className="form-item">
                    <label>Bandwidth Unit</label>
                    <Input value={this.state.bandwidthUnit} type="text" id='bandwidthUnit' placeholder="enter bandwidthUnit" onChange={this.handleChange}/>
                  </div>
                  <div className="form-item">
                    <label>Bandwidth Type</label>
                    <Input value={this.state.bandwidthType} type="text" id='bandwidthType' placeholder="enter bandwidthType" onChange={this.handleChange}/>
                  </div>
                  <div className="form-item">
                    <label>Connectivity Type</label>
                    <Input value={this.state.connectivityType} type="text" id='connectivityType' placeholder="enter connectivityType" onChange={this.handleChange}/>
                  </div>
                  <div className="form-item">
                    <label>Last Mile</label>
                    <Input value={this.state.lastMile} type="text" id='lastMile' placeholder="enter lastMile" onChange={this.handleChange}/>
                  </div>
                  <div className="form-item">
                    <label>Remarks</label>
                    <Input value={this.state.remarks} type="text" id='remarks' placeholder="enter remarks" onChange={this.handleChange}/>
                  </div>
                  <div className="form-item">
                    <label>Discount Policy</label>
                    <Input value={this.state.discountPolicy} type="text" id='discountPolicy' placeholder="enter discountPolicy" onChange={this.handleChange}/>
                  </div>
                  <Button type='primary' htmlType="submit" onClick={this.handleSubmit}>Submit</Button>
                  
                  
                  <Link to={'/create'} onClick={this.goback}>Go back</Link>
              </div>
            </Form>}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addLocation: (location) => dispatch(addLocation(location)),
  addBandwidth: (bandwidth) => dispatch(addBandwidth(bandwidth))
});

export default connect(undefined, mapDispatchToProps)(AddLocation);

