/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './screen/Login/Login';
import Home from './screen/Home/Home';
import Header from './screen/Header/Header'

AppRegistry.registerComponent(appName, () => Home);
