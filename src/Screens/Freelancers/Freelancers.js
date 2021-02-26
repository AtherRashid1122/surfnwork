import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import styles from './styles';
import theme from '../../theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header, Divider, Rating} from 'react-native-elements';
import HeaderLeftComponent from '../../components/HeaderLeftComponent';
import HeaderRight from '../../components/HeaderRight';
import {adjust, avatar} from '../../aseets';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../../utils/Fonts';

class Freelancers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freelancers: [
        {
          id: 0,
          title: 'Bilal Hasan',
          skills: 'Adobe Photoshop | Adobe Aillustrator | Animation',
          perhr: '$25/hr',
          rating: '1002',
          location: 'Islamabad,Pk',
        },
        {
          id: 1,
          title: 'Malik Mati',
          skills: 'Adobe Photoshop | Adobe Aillustrator | Animation',
          location: 'Islamabad,Pk',
          perhr: '$25/hr',
          rating: '1002',
        },
        {
          id: 2,
          title: 'Sufyan',
          skills: 'Adobe Photoshop | Adobe Aillustrator | Animation',
          location: 'Islamabad,Pk',
          perhr: '$25/hr',
          rating: '1002',
        },
        {
          id: 3,
          title: 'Rashid',
          skills: 'Adobe Photoshop | Adobe Aillustrator | Animation',
          location: 'Islamabad,Pk',
          perhr: '$25/hr',
          rating: '1002',
        },
      ],
    };
  }
  renderFreelancers = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.jobContainer}
        activeOpacity={1}
        key={index}>
        <View style={{flexDirection: 'row', flex: 0.7}}>
          <Image
            source={avatar}
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              marginLeft: 6,
              alignSelf: 'center',
            }}
          />
          <View style={styles.jobDetailStyle}>
            <Text
              style={[
                styles.largeText,
                {color: '#000', color: theme.colors.primary},
              ]}>
              {item.title}
            </Text>
            <Text style={[styles.mediumText, {color: '#000', fontSize: 12}]}>
              {item.skills}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: -8,
              }}>
              <Entypo
                name="location-pin"
                size={20}
                color={theme.colors.primary}
              />
              <Text style={[styles.mediumText, {color: '#000', fontSize: 12}]}>
                {item.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 3}}>
              <Rating
                imageSize={13}
                readonly
                style={{alignSelf: 'flex-start'}}
              />
              <Text
                style={[
                  styles.mediumText,
                  {
                    alignSelf: 'center',
                    marginLeft: 5,
                    marginTop: -2,
                    fontSize: 12,
                  },
                ]}>
                {item.rating}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 0.35,

            justifyContent: 'space-between',
            padding: 5,
          }}>
          <Entypo
            name="share"
            size={14}
            color={theme.colors.primary}
            style={{alignSelf: 'flex-end', maring: 10}}
          />
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: theme.colors.primary,
                  padding: 8,
                  borderRadius: 4,
                  marginVertical: 5,
                  elevation: 2,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Fonts.Quicksand_Bold,
                    color: 'white',
                  }}>
                  Contact
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 8,
                  borderRadius: 4,
                  marginVertical: 5,
                  elevation: 2,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Fonts.Quicksand_Bold,
                    color: theme.colors.primary,
                  }}>
                  Post Job
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.largeText, {alignSelf: 'center', margin: 4}]}>
              {item.perhr}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Header
          backgroundColor={theme.colors.primary}
          leftComponent={
            <HeaderLeftComponent navigation={this.props.navigation} />
          }
          centerComponent={
            <TouchableOpacity style={styles.input}>
              <TextInput
                editable={false}
                placeholder={'Search'}
                placeholderTextColor={'white'}
                style={{padding: 0, width: '90%', color: 'white'}}
              />
              <MaterialIcons name="search" size={16} color="white" />
            </TouchableOpacity>
          }
          rightComponent={<HeaderRight />}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 4,
          }}>
          <View style={{margin: 7}}>
            <TouchableOpacity
              style={[
                styles.input,
                {
                  backgroundColor: 'white',
                  elevation: 3,
                  // padding: 8,

                  width: '75%',
                  borderRadius: 2,
                },
              ]}>
              <TextInput
                placeholder={'Search'}
                placeholderTextColor={'gray'}
                style={{padding: 0, width: '80%', color: 'gray', marginLeft: 8}}
              />
              <MaterialIcons
                name="search"
                size={16}
                color="white"
                style={{backgroundColor: theme.colors.primary, padding: 10}}
              />
            </TouchableOpacity>
            <Text style={styles.mediumText}>7648 freelancers around</Text>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 3,
              backgroundColor: 'white',
              height: 32,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
              elevation: 3,
              marginTop: 10,
            }}>
            <Image
              source={adjust}
              style={{height: 30, width: 30, tintColor: theme.colors.primary}}
              reiszeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.freelancers}
          extraData={this.state}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderFreelancers}
          keyExtractor={(item, index) => item + index.toString()}
        />
      </SafeAreaView>
    );
  }
}

export default Freelancers;
