import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Note } from '@screens';

import { navOptionHandler } from '@utils/functions';

const StactNote = createStackNavigator();
export default function NoteStack() {
  return (
    <StactNote.Navigator initialRouteName="Note">
      <StactNote.Screen name="Note" component={Note} options={navOptionHandler} />
    </StactNote.Navigator>
  )
}