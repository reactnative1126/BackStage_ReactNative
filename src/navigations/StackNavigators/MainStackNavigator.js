import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main } from '@screens';

import { navOptionHandler } from '@utils/functions';

const StactMain = createStackNavigator();
export default function MainStack() {
  return (
    <StactMain.Navigator initialRouteName="Main">
      <StactMain.Screen name="Main" component={Main} options={navOptionHandler} />
    </StactMain.Navigator>
  )
}