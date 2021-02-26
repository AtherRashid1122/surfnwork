import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Header} from 'react-native-elements';
import HeaderLeftComponent from '../../components/HeaderLeftComponent';
import HeaderCenterComponent from '../../components/HeaderCenterComponent';
import HeaderRight from '../../components/HeaderRight';
import theme from '../../theme';
import OptionsMenu from 'react-native-options-menu';
import styles from './styles';
import {option} from '../../aseets';
export default class SendInvitation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invitations: [
        {
          id: 1,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
        {
          id: 2,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
        {
          id: 3,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
        {
          id: 4,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
        {
          id: 5,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
        {
          id: 6,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
        {
          id: 7,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
        {
          id: 8,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
        {
          id: 9,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
        {
          id: 10,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
        {
          id: 11,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
        {
          id: 12,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
      ],
    };
  }
  renderItem = ({item, index}) => {
    return (
      <View style={{flex: 1}} key={index}>
        <View
          style={{
            // borderBottomWidth: 1.5,
            // borderColor: 'tomato',
            // width: '95%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.largeText}>{item.invite}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.mediumText}> {item.name} </Text>
              <OptionsMenu
                button={option}
                buttonStyle={{
                  width: 20,
                  height: 14,
                  margin: 5,
                  resizeMode: 'contain',
                }}
                destructiveIndex={1}
                options={['Edit', 'Delete', 'Cancel']}
                // actions={[this.editPost, this.deletePost]}
              />
            </View>
          </View>
          <Text style={styles.smalltext}>{item.msg}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          backgroundColor={theme.colors.primary}
          leftComponent={
            <HeaderLeftComponent navigation={this.props.navigation} />
          }
          centerComponent={<HeaderCenterComponent name="Send Invitations" />}
          rightComponent={<HeaderRight />}
        />
        <View
          style={{
            width: '100%',
            marginTop: -0.3,
            padding: 5,

            backgroundColor: theme.colors.primary,
            alignSelf: 'center',
          }}>
          {/* <Text style={[styles.headerltext, {color: 'white', marginLeft: 7}]}>
            Sent Proposals
          </Text> */}
        </View>
        <FlatList
          data={this.state.invitations}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            item + index.toString();
          }}
        />
      </View>
    );
  }
}
