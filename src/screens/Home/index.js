import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Svg, Circle, Text as SVGText } from 'react-native-svg';
import ProgressCircle from 'react-native-progress-circle';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { Loading } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";

const projects = [
  {
    name: "Ofspace Logo Design",
    description: "Ofspace is a Startup. Which is named...",
    days: 4,
    users: [
      { image: 'http://wikicraze.com/wp-content/uploads/2019/09/girl-1-500x381.jpg' },
      { image: 'https://bestprofilepix.com/wp-content/uploads/2014/07/cute-girls-profile-pictures-for-facebook-with-apple-I-phone.jpg' },
      { image: 'https://i.pinimg.com/originals/3e/83/09/3e830954da061407fcf8576e704f6b98.jpg' }
    ],
    percent: 80,
    onPress: 'Detail'
  },
  {
    name: "Landing Page Design",
    description: "Ofspace is a Startup. Which is named...",
    days: 7,
    users: [
      { image: 'https://weneedfun.com/wp-content/uploads/2016/07/Cute-Girl-Profile-pictures-For-Facebook-2.jpg' },
      { image: 'https://i.pinimg.com/originals/00/1e/ea/001eea4de1bcd8124ed7823c951525b1.jpg' },
    ],
    percent: 73,
    onPress: 'Detail1'
  }
]

const Header = ({ option, onChange }) => {
  const size = wp('100%') / 3 + 30;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', zIndex: 1000 }}>
        <Text style={{ fontSize: 26, fontWeight: '600' }}>Dashboard</Text>
        <TouchableOpacity style={{ width: 80, height: 30, borderRadius: 5, backgroundColor: colors.GREY.SECONDARY, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text>Overall</Text>
          <Icon name="arrow-drop-down" type="material" size={18} color="#606474" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 40, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Svg width={size} height={size}>
          <Circle
            stroke={colors.GREY.LIGHT}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            {...{ strokeWidth }}
          />
          <Circle
            stroke={colors.RED.PRIMARY}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={`${circum} ${circum}`}
            strokeDashoffset={radius * Math.PI * 2 * (10 / 100)}
            strokeLinecap="round"
            transform={`rotate(-90, ${size / 2}, ${size / 2})`}
            {...{ strokeWidth }}
          />
          <Circle
            stroke={colors.YELLOW.PRIMARY}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={`${circum} ${circum}`}
            strokeDashoffset={radius * Math.PI * 2 * (40 / 100)}
            strokeLinecap="round"
            transform={`rotate(-90, ${size / 2}, ${size / 2})`}
            {...{ strokeWidth }}
          />
          <Circle
            stroke={colors.BLUE.PRIMARY}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={`${circum} ${circum}`}
            strokeDashoffset={radius * Math.PI * 2 * (60 / 100)}
            strokeLinecap="round"
            transform={`rotate(-90, ${size / 2}, ${size / 2})`}
            {...{ strokeWidth }}
          />
          <SVGText
            fontSize={32}
            fontWeight='bold'
            x={size / 2}
            y={size / 2}
            textAnchor="middle"
            fill={colors.BLACK}
          >
            {"26"}
          </SVGText>
          <SVGText
            fontSize={13}
            fontWeight='bold'
            x={size / 2}
            y={size / 2 + 20}
            textAnchor="middle"
            fill={colors.GREY.PRIMARY}
          >
            {"Total Project"}
          </SVGText>
        </Svg>
        <View style={{ width: '35%', height: wp('100%') / 3 + 30, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.pin, { backgroundColor: colors.RED.PRIMARY }]} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 21, fontWeight: '400' }}>41%</Text>
              <Text style={{ fontSize: 16, color: colors.GREY.PRIMARY }}>Done</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.pin, { backgroundColor: colors.YELLOW.PRIMARY }]} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 21, fontWeight: '400' }}>23%</Text>
              <Text style={{ fontSize: 16, color: colors.GREY.PRIMARY }}>To Do</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.pin, { backgroundColor: colors.BLUE.PRIMARY }]} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 21, fontWeight: '400' }}>35%</Text>
              <Text style={{ fontSize: 16, color: colors.GREY.PRIMARY }}>Pending</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
const Project = ({ onPress, key, item }) => {
  return (
    <TouchableOpacity key={key} style={styles.project} onPress={onPress}>
      <Text style={{ fontSize: 22, fontWeight: '500' }}>{item.name}</Text>
      <Text style={{ marginTop: 10, fontSize: 12, fontWeight: '700', color: colors.GREY.PRIMARY }}>{item.description}</Text>
      <Text style={{ marginTop: 20, fontWeight: '500' }}> {item.days} days left</Text>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', marginLeft: 15 }}>
          {item.users.map((user, imageKey) => {
            return (
              <View key={imageKey}>
                <Image style={styles.avatar} source={{ uri: user.image }} />
              </View>
            )
          })}
        </View>
        <ProgressCircle
          percent={item.percent}
          radius={17}
          borderWidth={3}
          color={colors.BLUE.PRIMARY}
          shadowColor={colors.GREY.SECONDARY}
          bgColor="#fff"
        >
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.BLUE.PRIMARY }}>{item.percent}%</Text>
        </ProgressCircle>
      </View>
    </TouchableOpacity>
  )
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      option: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header option={this.state.option} onChange={(item) => this.setState({ option: item })} />
        <ScrollView style={{ padding: 30 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 22, fontWeight: '600' }}>Pending Project</Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: '600', color: colors.GREY.PRIMARY, textDecorationColor: colors.GREY.PRIMARY, textDecorationLine: 'underline' }}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
            {projects.map((item, key) => {
              return (
                <Project item={item} key={key} onPress={() => this.props.navigation.navigate(item.onPress)} />
              )
            })}
          </View>
          <Text style={{ marginTop: 30, fontSize: 22, fontWeight: '600' }}>Recent Files</Text>
          <View style={styles.recent}>
            <View style={[styles.file, { borderBottomWidth: 1 }]}>
              <Icon name="file" type="material-community" size={30} color={colors.RED.SECONDARY} />
              <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Feedback of Logo Design</Text>
            </View>
            <View style={[styles.file, { borderBottomWidth: 1 }]}>
              <Icon name="file" type="material-community" size={30} color={colors.RED.SECONDARY} />
              <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Feedback of Landing Page Design</Text>
            </View>
            <View style={styles.file}>
              <Icon name="file" type="material-community" size={30} color={colors.RED.SECONDARY} />
              <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Feedback of Mobile Page Design</Text>
            </View>
          </View>
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREY.LIGHT
  },
  header: {
    width: wp('100%'),
    // height: 200,
    paddingTop: Platform.OS === 'ios' ? 80 : 30,
    paddingLeft: 30, paddingRight: 30, paddingBottom: 30,
    backgroundColor: colors.WHITE
  },
  pin: {
    marginTop: 8,
    width: 15, height: 15,
    borderRadius: 7.5,
    // backgroundColor: colors.RED.PRIMARY,
    borderWidth: 2,
    borderColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3
  },
  project: {
    paddingTop: 20, paddingBottom: 20,
    paddingLeft: 10, paddingRight: 10,
    width: wp('80%') / 2,
    // height: wp('80%') / 2 + 50,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: Platform.OS === 'ios' ? 10 : 5
  },
  avatar: {
    marginLeft: -15,
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5
  },
  recent: {
    marginTop: 20,
    padding: 10,
    width: '100%',
    // height: wp('80%') / 2 + 50,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: Platform.OS === 'ios' ? 10 : 5
  },
  file: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomColor: colors.GREY.SECONDARY
  }
});
