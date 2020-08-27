import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Detail, Detail1, Status } from '@screens';
import BottomTabNavigator from '@navigations/BottomTabNavigator';
import { navOptionHandler } from '@utils/functions';

const StackApp = createStackNavigator();
class AppContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <StackApp.Navigator initialRouteName={"App"}>
          <StackApp.Screen name="App" component={BottomTabNavigator} options={navOptionHandler} />
          <StackApp.Screen name="Detail" component={Detail} options={navOptionHandler} />
          <StackApp.Screen name="Detail1" component={Detail1} options={navOptionHandler} />
          <StackApp.Screen name="Status" component={Status} options={navOptionHandler} />
        </StackApp.Navigator>
      </NavigationContainer>
    );
  }
}
export default AppContainer;
