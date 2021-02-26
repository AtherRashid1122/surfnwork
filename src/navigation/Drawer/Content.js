import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {DrawerItems} from 'react-navigation-drawer';
import theme from '../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { base_url } from '../../utils/Constants';
//redux

// import { getUserProfile } from '../../redux/actions/profile';
import {logo} from '../../aseets';
class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView
        style={styles.mainContainer}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <ImageBackground
          style={styles.drawerHeaderContainer}
          resizeMode={'cover'}
          source={logo}>
          <View style={styles.blurView}>
            <Image source={logo} style={styles.userIcon} />
            <Text style={[styles.largeText, {color: 'orange'}]}>
              {/* {this.props.userInfo ? this.props.userInfo.name : 'Kathrine'} */}
              Bilal Hassan
            </Text>
          </View>
        </ImageBackground>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.drawerItemsContainerStyle}>
          <DrawerItems {...this.props} />

          <TouchableOpacity onPress={this.onLogOut}>
            <View style={styles.item}>
              <View style={styles.iconContainer}>
                <AntDesign name="logout" size={22} color={theme.colors.gray} />
              </View>
              <Text style={styles.label}>Logout</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  drawerHeaderContainer: {
    height: Dimensions.get('window').height / 2.5,
    width: '100%',
  },
  drawerItemsContainerStyle: {
    flex: 0.6,
  },
  userIcon: {
    borderRadius: 70,
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  largeText: {
    fontSize: 14,
    marginTop: 10,
    color: theme.colors.lightGray,
    marginLeft: 8,
    alignSelf: 'center',
  },
  logOutStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    margin: 18,
    fontSize: 14,
    color: theme.colors.gray,
    fontWeight: 'bold',
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    tintColor: 'orange',
    alignItems: 'center',
  },
  blurView: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Content;
