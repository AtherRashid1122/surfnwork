import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import {Header, Divider} from 'react-native-elements';
import OptionsMenu from 'react-native-options-menu';
import ActiveInvitations from '../../Screens/ActiveInvitations';

import HeaderLeftComponent from '../../components/HeaderLeftComponent';
import {option} from '../../aseets';
import HeaderRight from '../../components/HeaderRight';
import theme from '../../theme';
import {BarChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';
import styles from './styles';
import {Fonts} from '../../utils/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HeaderCenterComponent from '../../components/HeaderCenterComponent';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      send: false,
      isModalVisible: false,
      data: [
        {id: 0, value: 0, text: 'Completed Projects'},
        {id: 1, value: 0, text: 'Ongoing Projects'},
        {id: 2, value: 0, text: 'Active Invitation'},
        {id: 3, value: 0, text: 'Earned this month'},
      ],
      invitations: [
        {
          id: 1,
          invite: 'Need an interactive website built',
          name: 'Tina',
          msg: 'Hi Tina, I have attachment my detailed proposal please view',
        },
      ],
    };
  }
  Change = (a) => {
    if (a === 1) {
      this.setState({
        active: true,
        send: false,
      });
    } else if (a === 2) {
      this.setState({
        active: false,
        send: true,
      });
    }
  };

  renderPages = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={styles.cardContainer}>
        <Text
          style={[
            styles.largeText,
            {
              // marginBottom: 10,
              // fontFamily: Fonts.Quicksand_Bold,
              fontSize: 90,
              fontWeight: 'bold',
              color: '#5BC0DE',
              // backgroundColor: 'red',
              // height: 100,
              // width: 80,
              textAlign: 'center',

              // justifyContent: 'flex-start',

              // justifyContent: 'center',
              // alignItems: 'center',
              // alignSelf: 'center',
            },
          ]}>
          {item.value}
        </Text>
        {/* <Divider
          style={{
            height: 1,
            width: '100%',
            backgroundColor: theme.colors.primary,
            opacity: 0.5,
          }}
        /> */}
        <Text
          numberOfLines={1}
          style={[
            styles.largeText,
            {
              fontFamily: Fonts.Quicksand_Bold,
              fontSize: 15,
              marginTop: 10,
              color: 'gray',
              fontWeight: 'bold',
              color: '#5BC0DE',
            },
          ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    const fill = `${theme.colors.primary}`;
    const data = [
      50,
      undefined,
      100,

      undefined,
      59,
      undefined,
      10,
      undefined,
      53,
      undefined,
      50,
    ];

    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          backgroundColor={theme.colors.primary}
          leftComponent={
            <HeaderLeftComponent navigation={this.props.navigation} />
          }
          centerComponent={
            <HeaderCenterComponent navigation={this.props.navigation} />
          }
          rightComponent={<HeaderRight />}
        />

        <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={[
                styles.largeText,
                {
                  fontSize: 30,
                  fontFamily: Fonts.MTCORSVA,
                  alignSelf: 'center',
                  marginVertical: 10,
                },
              ]}>
              Good Morning,
            </Text>
            <Text
              style={[
                styles.largeText,
                {
                  fontSize: 30,
                  fontFamily: Fonts.MTCORSVA,
                  alignSelf: 'center',
                  color: '#F08B61',
                  marginVertical: 10,
                },
              ]}>
              {''} Hasan
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            <View
              style={{
                backgroundColor: theme.colors.primary,
                padding: 10,
                opacity: 0.5,
                width: '20%',
                marginLeft: 10,
                borderWidth: 2,

                borderColor: theme.colors.primary,
              }}></View>
            <Text style={{marginLeft: 5}}>Profile View</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 220,
              margin: 5,
              marginTop: 10,
              padding: 5,
            }}>
            <YAxis
              data={data}
              contentInset={{top: 9, bottom: 4}}
              svg={{
                fill: 'grey',
                fontSize: 10,
              }}
              numberOfTicks={3}
              formatLabel={(value, index) => value}
            />
            <BarChart
              style={{flex: 1, marginLeft: 16}}
              data={data}
              svg={{fill: theme.colors.primary, fillOpacity: 0.2}}
              contentInset={{top: 1, bottom: 0}}>
              <Grid />
            </BarChart>
          </View>
          <XAxis
            data={data}
            numberOfTicks={4}
            formatLabel={(value, index) => value}
            contentInset={{left: 48, right: 10}}
            svg={{fontSize: 10, fill: 'black'}}
          />
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text
                  style={[
                    styles.mediumText1,
                    {
                      fontFamily: Fonts.Quicksand_Bold,
                      color: 'white',
                      fontWeight: 'bold',
                    },
                  ]}>
                  FEATURE PROFILE
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignSelf: 'center', marginTop: -10}}>
              <Text
                style={[
                  styles.largeText,
                  {
                    fontSize: 30,
                    marginLeft: 40,
                    color: 'grey',
                    fontFamily: Fonts.Quicksand_Bold,
                    alignSelf: 'center',
                  },
                ]}>
                -56%
              </Text>
              <Text style={{color: 'grey', fontSize: 10}}>
                COMPARED TO LAST MONTH
              </Text>
            </View>
          </View>
          <FlatList
            data={this.state.data}
            renderItem={this.renderPages}
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh}
            keyExtractor={(item, index) => item + index.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
          {this.state.isModalVisible && this.renderModal()}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 50,
              marginLeft: 30,
              marginRight: 30,
            }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                this.Change(1);
              }}
              style={[
                styles.categoryContainer,

                {
                  backgroundColor: this.state.active ? '#5BC0DE' : '#ddd',
                },
              ]}>
              <Text
                style={[
                  styles.mediumText,
                  {color: this.state.active ? 'white' : 'black'},
                ]}>
                Active invitation
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                this.Change(2);
              }}
              style={[
                styles.categoryContainer,
                {
                  backgroundColor: this.state.send ? '#5BC0DE' : '#ddd',
                },
              ]}>
              <Text
                style={[
                  styles.mediumText,
                  {color: this.state.send ? 'white' : 'black'},
                ]}>
                Sent Proposal
              </Text>
            </TouchableOpacity>
          </View>
          {/* <FlatList
            data={this.state.invitations}
            extraData={this.state}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderPages}
            keyExtractor={(item, index) => item + index.toString()}
          /> */}

          <View style={{flex: 1, marginTop: 10}}>
            <View
              style={{
                // borderBottomWidth: 1.5,
                // borderColor: 'tomato',
                width: '95%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={styles.largeText}>
                  Need an interactive website built
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#5BC0DE',
                      // marginLeft: 5,
                      // color: 'blue',
                      fontSize: 14,
                      // color: theme.colors.lightGray,
                      marginTop: -3,
                      alignSelf: 'center',
                    }}>
                    Tina
                  </Text>
                  <OptionsMenu
                    button={option}
                    buttonStyle={{
                      width: 20,
                      height: 14,
                      margin: 5,
                      resizeMode: 'contain',
                      // color: 'grey',
                    }}
                    destructiveIndex={1}
                    options={['Edit', 'Delete', 'Cancel']}
                    actions={[this.editPost, this.deletePost]}
                  />
                </View>
              </View>
              <Text style={styles.smalltext}>
                Hi Tina, I have attachment my detailed proposal please view
              </Text>
            </View>
          </View>
          <View style={{flex: 1, marginTop: 10}}>
            <View
              style={{
                // borderBottomWidth: 1.5,
                // borderColor: 'tomato',
                width: '95%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={styles.largeText}>
                  Need an interactive website built
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#5BC0DE',
                      // marginLeft: 5,
                      // color: 'blue',
                      fontSize: 14,
                      // color: theme.colors.lightGray,
                      marginTop: -3,
                      alignSelf: 'center',
                    }}>
                    Tina
                  </Text>
                  <OptionsMenu
                    button={option}
                    buttonStyle={{
                      width: 20,
                      height: 14,
                      margin: 5,
                      resizeMode: 'contain',
                      // color: 'grey',
                    }}
                    destructiveIndex={1}
                    options={['Edit', 'Delete', 'Cancel']}
                    actions={[this.editPost, this.deletePost]}
                  />
                </View>
              </View>
              <Text style={styles.smalltext}>
                Hi Tina, I have attachment my detailed proposal please view
              </Text>
            </View>
          </View>
          <View style={{flex: 1, marginTop: 10}}>
            <View
              style={{
                // borderBottomWidth: 1.5,
                // borderColor: 'tomato',
                width: '95%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={styles.largeText}>
                  Need an interactive website built
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#5BC0DE',
                      // marginLeft: 5,
                      // color: 'blue',
                      fontSize: 14,
                      // color: theme.colors.lightGray,
                      marginTop: -3,
                      alignSelf: 'center',
                    }}>
                    Tina
                  </Text>
                  <OptionsMenu
                    button={option}
                    buttonStyle={{
                      width: 20,
                      height: 14,
                      margin: 5,
                      resizeMode: 'contain',
                      // color: 'grey',
                    }}
                    destructiveIndex={1}
                    options={['Edit', 'Delete', 'Cancel']}
                    actions={[this.editPost, this.deletePost]}
                  />
                </View>
              </View>
              <Text style={styles.smalltext}>
                Hi Tina, I have attachment my detailed proposal please view
              </Text>
            </View>
          </View>
          <View style={{flex: 1, marginTop: 10}}>
            <View
              style={{
                // borderBottomWidth: 1.5,
                // borderColor: 'tomato',
                width: '95%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={styles.largeText}>
                  Need an interactive website built
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#5BC0DE',
                      // marginLeft: 5,
                      // color: 'blue',
                      fontSize: 14,
                      // color: theme.colors.lightGray,
                      marginTop: -3,
                      alignSelf: 'center',
                    }}>
                    Tina
                  </Text>
                  <OptionsMenu
                    button={option}
                    buttonStyle={{
                      width: 20,
                      height: 14,
                      margin: 5,
                      resizeMode: 'contain',
                      // color: 'grey',
                    }}
                    destructiveIndex={1}
                    options={['Edit', 'Delete', 'Cancel']}
                    actions={[this.editPost, this.deletePost]}
                  />
                </View>
              </View>
              <Text style={styles.smalltext}>
                Hi Tina, I have attachment my detailed proposal please view
              </Text>
            </View>
          </View>
          <View style={{flex: 1, marginTop: 10}}>
            <View
              style={{
                // borderBottomWidth: 1.5,
                // borderColor: 'tomato',
                width: '95%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={styles.largeText}>
                  Need an interactive website built
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#5BC0DE',
                      // marginLeft: 5,
                      // color: 'blue',
                      fontSize: 14,
                      // color: theme.colors.lightGray,
                      marginTop: -3,
                      alignSelf: 'center',
                    }}>
                    Tina
                  </Text>
                  <OptionsMenu
                    button={option}
                    buttonStyle={{
                      width: 20,
                      height: 14,
                      margin: 5,
                      resizeMode: 'contain',
                      // color: 'grey',
                    }}
                    destructiveIndex={1}
                    options={['Edit', 'Delete', 'Cancel']}
                    actions={[this.editPost, this.deletePost]}
                  />
                </View>
              </View>
              <Text style={styles.smalltext}>
                Hi Tina, I have attachment my detailed proposal please view
              </Text>
            </View>
          </View>
          <View style={{flex: 1, marginTop: 10}}>
            <View
              style={{
                // borderBottomWidth: 1.5,
                // borderColor: 'tomato',
                width: '95%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={styles.largeText}>
                  Need an interactive website built
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#5BC0DE',
                      // marginLeft: 5,
                      // color: 'blue',
                      fontSize: 14,
                      // color: theme.colors.lightGray,
                      marginTop: -3,
                      alignSelf: 'center',
                    }}>
                    Tina
                  </Text>
                  <OptionsMenu
                    button={option}
                    buttonStyle={{
                      width: 20,
                      height: 14,
                      margin: 5,
                      resizeMode: 'contain',
                      // color: 'grey',
                    }}
                    destructiveIndex={1}
                    options={['Edit', 'Delete', 'Cancel']}
                    actions={[this.editPost, this.deletePost]}
                  />
                </View>
              </View>
              <Text style={styles.smalltext}>
                Hi Tina, I have attachment my detailed proposal please view
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ActiveInvitations')}
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginBottom: 10,
            }}>
            <Text style={{color: '#5BC0DE', fontWeight: 'bold'}}>View All</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
