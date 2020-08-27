import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

import HomeStack from "./StackNavigators/HomeStackNavigator";
import ScheduleStack from "./StackNavigators/ScheduleStackNavigator";
import MainStack from "./StackNavigators/MainStackNavigator";
import NoteStack from "./StackNavigators/NoteStackNavigator";
import ProfileStack from "./StackNavigators/ProfileStackNavigator";

import { colors } from "@constants/themes";

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          showLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon
                name="home"
                type="ant-design"
                size={20}
                color={focused ? colors.BLUE.TAB : colors.GREY.PRIMARY}
              />
              <View style={{ marginTop: 1, width: 4, height: 4, backgroundColor: focused ? colors.BLUE.TAB : colors.WHITE, borderRadius: 2 }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon
                name="calendar"
                type="ant-design"
                size={20}
                color={focused ? colors.BLUE.TAB : colors.GREY.PRIMARY}
              />
              <View style={{ marginTop: 1, width: 4, height: 4, backgroundColor: focused ? colors.BLUE.TAB : colors.WHITE, borderRadius: 2 }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.mainButton}>
              <Icon
                name="plus"
                type="ant-design"
                size={20}
                color={colors.WHITE}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Note"
        component={NoteStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon
                name="filetext1"
                type="ant-design"
                size={20}
                color={focused ? colors.BLUE.TAB : colors.GREY.PRIMARY}
              />
              <View style={{ marginTop: 1, width: 4, height: 4, backgroundColor: focused ? colors.BLUE.TAB : colors.WHITE, borderRadius: 2 }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon
                name="user"
                type="ant-design"
                size={20}
                color={focused ? colors.BLUE.TAB : colors.GREY.PRIMARY}
              />
              <View style={{ marginTop: 1, width: 4, height: 4, backgroundColor: focused ? colors.BLUE.TAB : colors.WHITE, borderRadius: 2 }} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  mainButton: {
    justifyContent: 'center', alignItems: 'center',
    width: 35, height: 35,
    backgroundColor: colors.BLUE.TAB,
    borderRadius: 5,
    shadowColor: colors.BLUE.TAB,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10
  }
});
