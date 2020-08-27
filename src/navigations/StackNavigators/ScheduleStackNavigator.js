import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Schedule } from '@screens';

import { navOptionHandler } from '@utils/functions';

const StactSchedule = createStackNavigator();
export default function ScheduleStack() {
  return (
    <StactSchedule.Navigator initialRouteName="Schedule">
      <StactSchedule.Screen name="Schedule" component={Schedule} options={navOptionHandler} />
    </StactSchedule.Navigator>
  )
}