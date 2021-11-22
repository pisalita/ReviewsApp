import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone',
      //headerStyle: {backgroundColor: '#999'}
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
      //headerStyle: {backgroundColor: '#eee'}
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default HomeStack;