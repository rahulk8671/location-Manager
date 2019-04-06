import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import uuid from 'uuid';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'antd/dist/antd.css';
import { addLocation } from './actions/location';
import { addBandwidth } from './actions/bandwidth';
import axios from 'axios';
const store = configureStore();



// axios.get('http://10.6.32.16:4000/loc/bandwidth').then((res) => {
//   console.log(res.data);
//   res.data.forEach((doc) => {
//     store.dispatch(addBandwidth({...doc}));
//   })
// }).catch(e => console.log('error => ', e));


store.dispatch(addLocation({
    _id: uuid(),
    legacyCircuitId: '123456789',
    leasedCircuitId: '987654321',
    locationName: 'Florida',
    locationType: 'AFS',
    vendor: 'Airtel',
    firstCommissioningDate: 1552734766023,
    status: 'ACTIVE',
    closureDate: null
  }));

  store.dispatch(addLocation({
    _id: uuid(),
    legacyCircuitId: '463828966',
    leasedCircuitId: '376829826',
    locationName: 'New York',
    locationType: 'DO',
    vendor: 'Airtel',
    firstCommissioningDate: 1552734766342,
    status: 'ACTIVE',
    closureDate: null
  }));

store.dispatch(addBandwidth({
    _id: uuid(),
    leasedCircuitId: '987654321',
    bandwidth: '128',
    bandwidthUnit: 'Kbps',
    bandwidthType: 'SILVER',
    commissioningDate: 1552734766023,
    connectivityType: 'Primary',
    lastMile: 'Copper',
    remarks: 'good state',
    discountPolicy: 'none',
    status: true
}));

store.dispatch(addBandwidth({
  _id: uuid(),
  leasedCircuitId: '376829826',
  bandwidth: '256',
  bandwidthUnit: 'Kbps',
  bandwidthType: 'GOLD',
  connectivityType: 'Primary',
  lastMile: 'Bronze',
  commissioningDate: 1552734766342,
  remarks: 'good state',
  discountPolicy: 'none',
  status: false
}));

store.dispatch(addBandwidth({
  _id: uuid(),
  leasedCircuitId: '376829826',
  bandwidth: '512',
  bandwidthUnit: 'Kbps',
  bandwidthType: 'GOLD',
  connectivityType: 'Secondary',
  lastMile: 'Bronze',
  commissioningDate: 1552734764322,
  remarks: 'good state',
  discountPolicy: 'none',
  status: true
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// axios.get('http://10.6.32.16:4000/loc/location').then((res) => {
//   res.data.forEach(doc => {
//     store.dispatch(addLocation({...doc}));
//   })
//   axios.get('http://10.6.32.16:4000/loc/bandwidth').then((resw) => {
//     resw.data.forEach(doc => {
//       store.dispatch(addBandwidth({...doc}));
//     })
    ReactDOM.render(jsx, document.getElementById('app'));
//   })
// }).catch(e => console.log('error => ', e));


// axios.get('http://10.6.32.16:4000/loc/location').then((res) => {
//   console.log((res.data).length);
//   for(let i = 0; i < res.data.length; i++) {
//     console.log(res.data[i].leasedCircuitId);
//     store.dispatch(addLocation({
//     _id: res.data[i]._id,
//     legacyCircuitId: res.data[i].legacyCircuitId,
//     leasedCircuitId: res.data[i].leasedCircuitId,
//     locationName: res.data[i].locationName,
//     locationType: res.data[i].locationType,
//     vendor: res.data[i].vendor,
//     firstCommissioningDate: res.data[i].firstCommissioningDate,
//     status: res.data[i].status,
//     closureDate: res.data[i].closureDate
//   }));
//     // store.dispatch(addLocation(res.data[i]));
//   }

//   axios.get('http://10.6.32.16:4000/loc/bandwidth').then((res) => {
//     for(let i = 0; i < res.data.length; i++) {
//       store.dispatch(addBandwidth({...res.data[i]}));
//     }

//     ReactDOM.render(jsx, document.getElementById('app'));
//   })

  
// }).catch(e => console.log('error => ', e));





