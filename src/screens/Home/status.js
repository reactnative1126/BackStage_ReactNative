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
import ProgressCircle from 'react-native-progress-circle';

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

const users = [
  { image: 'http://wikicraze.com/wp-content/uploads/2019/09/girl-1-500x381.jpg' },
  { image: 'https://bestprofilepix.com/wp-content/uploads/2014/07/cute-girls-profile-pictures-for-facebook-with-apple-I-phone.jpg' },
  { image: 'https://i.pinimg.com/originals/3e/83/09/3e830954da061407fcf8576e704f6b98.jpg' }
]

const designers = [
  {
    image: 'http://wikicraze.com/wp-content/uploads/2019/09/girl-1-500x381.jpg',
    name: "Empathize with the users",
    time: "by Clark Mike",
    percent: 61
  },
  {
    image: 'https://bestprofilepix.com/wp-content/uploads/2014/07/cute-girls-profile-pictures-for-facebook-with-apple-I-phone.jpg',
    name: "Define the problem",
    time: "by MX",
    percent: 100
  },
  {
    image: 'https://i.pinimg.com/originals/00/1e/ea/001eea4de1bcd8124ed7823c951525b1.jpg',
    name: "Generatina ideas for design",
    time: "08 hr 20 min",
    percent: 91
  },
]


const Header = ({ onBack }) => {
  return (
    <View style={styles.header}>
      <View style={{ alignItems: 'flex-start', width: '100%', zIndex: 1000 }}>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Icon name="arrow-left" type="material-community" size={25} onPress={onBack} />
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 100, height: 30, borderRadius: 5, backgroundColor: '#FFDF9C' }}>
            <Text style={{ fontWeight: 'bold' }}>In Progress</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 30, fontSize: 26, fontWeight: '600' }}>Ofspace Digital Agency Website UI</Text>
        <Text style={{ marginTop: 10, fontSize: 14, color: colors.GREY.PRIMARY }}>{'A Digital Agency building functional, simple, human-centered products-Branding, UX, UI & Front & Back End Development.'}</Text>
        <View style={{ marginTop: 20, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 250, height: 35, borderRadius: 5, backgroundColor: colors.GREY.SECONDARY }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="notifications-none" type="material" size={18} color="#606474" />
              <Text style={{ fontWeight: 'bold', color: '#606474' }}>Deadline: </Text>
              <Text style={{ fontWeight: 'bold' }}>Novemeber 12</Text>
            </View>
          </TouchableOpacity>
          <ProgressCircle
            percent={73}
            radius={17}
            borderWidth={3}
            color={colors.BLUE.PRIMARY}
            shadowColor={colors.GREY.SECONDARY}
            bgColor="#fff"
          >
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.BLUE.PRIMARY }}>73%</Text>
          </ProgressCircle>
        </View>
      </View>
    </View>
  )
}
const Designer = ({ key, item }) => {
  return (
    <TouchableOpacity key={key} style={styles.designer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {item.percent === 100 ?
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 36, height: 36, borderRadius: 18, borderWidth: 4, borderColor: colors.GREEN.PRIMARY }}>
            <Icon name="check-bold" type="material-community" size={18} color={colors.GREEN.PRIMARY} />
          </View> :
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
        }
        <View style={{ marginLeft: 10, }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ fontWeight: 'bold', color: colors.GREY.PRIMARY }}>{item.time}</Text>
        </View>
      </View>
      <Icon name="more-vertical" type="feather" size={20} />
    </TouchableOpacity>
  )
}

export default class Status extends Component {
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
        <Header onBack={() => this.props.navigation.goBack()} />
        <ScrollView style={{ padding: 30 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Team Members</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 20 }}>
            {users.map((user, imageKey) => {
              return (
                imageKey != 2 ?
                  <TouchableOpacity key={imageKey}>
                    <Image style={styles.avatar} source={{ uri: user.image }} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity key={imageKey} style={styles.add}>
                    <Icon name="plus" type="feather" size={20} />
                  </TouchableOpacity>
              )
            })}
          </View>
          <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Today's Tasks</Text>
          </View>
          {
            designers.map((item, key) => {
              return (
                <View>
                  <Designer item={item} key={key} />
                </View>
              )
            })
          }
          <View style={{ height: 100 }} />
        </ScrollView>
        <View style={{ position: 'absolute', bottom: 20, width: wp('100%'), flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.button}>
            <Icon name="edit" type="ant-design" size={25} color={colors.WHITE} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#362B48', marginLeft: 20 }]}>
            <Icon name="clock-time-three-outline" type="material-community" size={25} color={colors.WHITE} />
          </TouchableOpacity>
        </View>
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
  avatar: {
    marginLeft: -15,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5
  },
  add: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#606474",
    borderStyle: 'dashed'
  },
  designer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingTop: 10, paddingBottom: 10,
    paddingLeft: 10, paddingRight: 10,
    backgroundColor: colors.WHITE,
    width: '100%',
    height: 70,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: Platform.OS === 'ios' ? 10 : 5
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50, height: 50,
    backgroundColor: '#606474',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#606474',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10
  }
});
