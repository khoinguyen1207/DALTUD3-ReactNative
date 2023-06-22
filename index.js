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

AppRegistry.registerComponent(appName, () => Profile);
