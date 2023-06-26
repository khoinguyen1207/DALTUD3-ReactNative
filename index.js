/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './screen/Login/Login';
import Home from './screen/Home/Home';
import Payment from './screen/Payment/Payment';
import Profile from './screen/Profile/Profile';
import Register from './screen/Register/Register';
import OrderHistory from './screen/OrderHistory/OrderHistory';

AppRegistry.registerComponent(appName, () => OrderHistory);
