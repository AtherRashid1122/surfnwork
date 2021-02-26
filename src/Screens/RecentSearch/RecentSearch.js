import React, {Component} from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import HeaderLeftComponent from '../../components/HeaderLeftComponent';
import HeaderCenterComponent from '../../components/HeaderCenterComponent';
import HeaderRight from '../../components/HeaderRight';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme';
import styles from './styles';
import {Fonts} from '../../utils/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class RecentSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searches: [
        {
          id: 1,
          search: 'Graphic Design',
        },
        {
          id: 2,
          search: 'Web Development',
        },
        {
          id: 3,
          search: 'React native',
        },
        {
          id: 4,
          search: 'word press',
        },
        {
          id: 5,
          search: 'Php',
        },
        {
          id: 6,
          search: 'React native',
        },
        {
          id: 7,
          search: 'word press',
        },
        {
          id: 8,
          search: 'Php',
        },
      ],
      tagsearch: [
        {
          id: 1,
          search: 'Graphic Design',
        },
        {
          id: 2,
          search: 'Web Development',
        },
        {
          id: 3,
          search: 'React native',
        },
        {
          id: 4,
          search: 'word press',
        },
        {
          id: 5,
          search: 'Php',
        },
        {
          id: 6,
          search: 'word press',
        },
        {
          id: 7,
          search: 'Php',
        },
        {
          id: 8,
          search: 'Php',
        },
      ],
    };
  }
  renderItem = ({item, index}) => {
    return (
      <View style={{flex: 1}} key={index}>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',

              marginTop: 10,
            }}>
            <MaterialIcons name="search" size={20} color="grey" />
            <Text style={styles.largeText}>{item.search}</Text>
          </View>
        </View>
      </View>
    );
  };
  rendertag = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
        }}
        key={index}>
        <Text style={styles.TagText}>{item.search}</Text>
      </View>
    );
  };

  render() {
    const {value} = this.state;
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            top: 30,
            // backgroundColor: 'blue',
            marginBottom: 25,
          }}>
          <TouchableOpacity
            activeOpacity={0}
            style={{marginLeft: 5}}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Ionicons name="arrow-back-circle-sharp" size={30} color="grey" />
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.input,
            {
              marginTop: 5,
              elevation: 5,
              justifyContent: 'space-between',
            },
          ]}>
          <TextInput
            placeholder={'Search'}
            placeholderTextColor={'grey'}
            value={value}
            onChangeText={(value) => this.setState({value: value})}
          />
          <MaterialIcons
            style={{alignSelf: 'center'}}
            name="search"
            size={30}
            color="grey"
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            marginTop: 10,
            borderColor: 'lightgrey',
          }}>
          <Text
            style={{
              marginLeft: 10,
              fontFamily: Fonts.Quicksand_Bold,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Recent Searches
          </Text>
        </View>
        <FlatList
          style={{flex: 0.5}}
          data={this.state.searches}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            item + index.toString();
          }}
        />
        <FlatList
          style={{flex: 0.5, borderTopWidth: 1, borderColor: 'lightgrey'}}
          data={this.state.tagsearch}
          extraData={this.state}
          numColumns={2}
          renderItem={this.rendertag}
          keyExtractor={(item, index) => {
            item + index.toString();
          }}
        />
      </View>
    );
  }
}
