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

const designers = [
  {
    image: 'http://wikicraze.com/wp-content/uploads/2019/09/girl-1-500x381.jpg',
    name: "Elmer Strickland",
    time: "09 hr 30 min",
    percent: 81
  },
  {
    image: 'https://bestprofilepix.com/wp-content/uploads/2014/07/cute-girls-profile-pictures-for-facebook-with-apple-I-phone.jpg',
    name: "Stanley Knight",
    time: "10 hr 00 min",
    percent: 100
  },
  {
    image: 'https://i.pinimg.com/originals/00/1e/ea/001eea4de1bcd8124ed7823c951525b1.jpg',
    name: "Phillip Mckenzie",
    time: "08 hr 20 min",
    percent: 91
  },
]

const developments = [
  {
    image: 'https://www.adoreremo.co.uk/wp-content/uploads/2016/06/beautiful-girl-profile-caretofun.net-5.jpg',
    name: "Alexander Wilson",
    time: "03 hr 59 min",
    percent: 20
  },
  {
    image: 'https://freepikpsd.com/wp-content/uploads/2019/09/Cute-Girl-Picture-for-Profile-18.png',
    name: "Vernon Henry",
    time: "02 hr 00 min",
    percent: 12
  }
]

const Header = ({ onBack }) => {
  return (
    <View style={styles.header}>
      <View style={{ alignItems: 'flex-start', width: '100%', zIndex: 1000 }}>
        <Icon name="arrow-left" type="material-community" size={25} onPress={onBack} />
        <Text style={{ marginTop: 30, fontSize: 26, fontWeight: '600' }}>Ofspace Digital Agency Website</Text>
        <TouchableOpacity style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 70, borderRadius: 5, backgroundColor: colors.GREY.SECONDARY, paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#6F778D' }}>0</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: colors.BLACK }}>7</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6F778D' }}>H</Text>
            <Text style={{ marginLeft: 5, fontSize: 28, fontWeight: 'bold', color: colors.BLACK }}>49</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6F778D' }}>M</Text>
            <Text style={{ marginLeft: 5, fontSize: 28, fontWeight: 'bold', color: colors.BLACK }}>12</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6F778D' }}>S</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#5D36E2', justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="pause" type="material-community" size={20} color={colors.WHITE} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10, width: 30, height: 30, borderRadius: 15, backgroundColor: '#382553', justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="stop" type="material-community" size={20} color={colors.WHITE} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const Designer = ({ key, item, onPress }) => {
  return (
    <TouchableOpacity key={key} style={styles.designer} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={{ width: 40, height: 40, borderRadius: 5 }} source={{ uri: item.image }} />
        <View style={{ marginLeft: 10, }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ marginTop: 5, fontSize: 12, fontWeight: 'bold', color: colors.GREY.PRIMARY }}>{item.time}</Text>
        </View>
      </View>
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
    </TouchableOpacity>
  )
}

export default class Detail1 extends Component {
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={[styles.topButton, { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }]}>
              <Text style={{ fontWeight: 'bold', color: colors.BLACK }}>In Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topButton}>
              <Text style={{ fontWeight: 'bold', color: colors.GREY.PRIMARY }}>Assigned</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.topButton, { borderTopRightRadius: 10, borderBottomRightRadius: 10 }]}>
              <Text style={{ fontWeight: 'bold', color: colors.GREY.PRIMARY }}>Complete</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '600' }}>Design</Text>
            <TouchableOpacity>
              <Text style={{ marginLeft: 5, fontWeight: 'bold', color: '#5634CA' }}>(05:45:58)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recent}>
            {
              designers.map((item, key) => {
                return (
                  <View>
                    <Designer item={item} key={key} onPress={() => this.props.navigation.navigate('Status')} />
                    {key != 2 && (<View style={{ width: '100%', height: 0.5, backgroundColor: colors.GREY.PRIMARY }} />)}
                  </View>
                )
              })
            }
          </View>
          <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '600' }}>Development</Text>
            <TouchableOpacity>
              <Text style={{ marginLeft: 5, fontWeight: 'bold', color: '#5634CA' }}>(03:05:05)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recent}>
            {
              developments.map((item, key) => {
                return (
                  <View>
                    <Designer item={item} key={key} onPress={() => this.props.navigation.navigate('Status')} />
                    {key != 1 && (<View style={{ width: '100%', height: 0.5, backgroundColor: colors.GREY.PRIMARY }} />)}
                  </View>
                )
              })
            }
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
  topButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (wp('100%') - 63) / 3,
    height: 40,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5
  },
  recent: {
    marginTop: 20,
    paddingLeft: 10, paddingRight: 10,
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
  designer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingTop: 10, paddingBottom: 10,
    paddingLeft: 10, paddingRight: 10,
    width: '100%',
    height: 70,
  },
});
