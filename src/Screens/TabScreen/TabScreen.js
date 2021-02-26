import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {Header, Divider} from 'react-native-elements';
import HeaderLeftComponent from '../../components/HeaderLeftComponent';
import HeaderCenterComponent from '../../components/HeaderCenterComponent';
import HeaderRight from '../../components/HeaderRight';
import theme from '../../theme';
import styles from './styles';
import {Fonts} from '../../utils/Fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {getjobs} from '../../Redux/Actions/AppAction';

class TabScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inbox: true,
      jobs: false,
      dataSource: [],
      // inboxData: [
      //   {
      //     id: 0,
      //     title: 'Need an interactive website built',
      //     des: 'I am avialable here for you.please tell me the details',
      //   },
      //   {
      //     id: 1,
      //     title: 'Need an interactive website built',
      //     des: 'I am avialable here for you.please tell me the details',
      //   },
      //   {
      //     id: 2,
      //     title: 'Need an interactive website built',
      //     des: 'I am avialable here for you.please tell me the details',
      //   },
      //   {
      //     id: 3,
      //     title: 'Need an interactive website built',
      //     des: 'I am avialable here for you.please tell me the details',
      //   },
      // ],
    };
  }

  componentDidMount = async () => {
    const res = await this.props.getjobs();
  };

  renderjobs = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.jobContainer}
        activeOpacity={1}
        key={index}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome5
            name="user-circle"
            size={35}
            color="gray"
            style={{alignSelf: 'center'}}
          />
          <View style={styles.jobDetailStyle}>
            <Text
              style={[
                styles.largeText,
                {color: '#000', color: theme.colors.primary},
              ]}>
              {item.job_title}
            </Text>
            <Text style={[styles.mediumText, {color: '#000'}]}>
              {item.job_details}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // asyn callApi=()=>{
  //   // return

  //   let resp=  await fetch('https://surfnwork.com/Authentication/get_jobs')
  //   // .then((response) => response.json())
  //   // .then((responseJson) => {
  //   //   this.setState({
  //   //     loading: false,
  //   //     dataSource: responseJson.job_title,
  //   //   });
  //   // })
  //   // .catch((error) => console.log(error));

  //   let respjson=await resp.json();
  //   console.warn()

  // }
  // getdata = async () => {
  //   try {
  //     console.log(getjobs);
  //     const formData = new FormData();

  //     formData.append('job_title', '');

  //     const res = await getjobs(formData);
  //     // alert(res);
  //     // setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //     // setLoading(false);
  //   }
  // };

  changeTab = (index) => {
    if (index === 1) {
      this.setState({
        inbox: true,
        jobs: false,
      });
    }
    if (index === 2) {
      this.setState({
        jobs: true,
        inbox: false,
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Header
          backgroundColor={theme.colors.primary}
          leftComponent={
            <HeaderLeftComponent navigation={this.props.navigation} />
          }
          centerComponent={<HeaderCenterComponent />}
          rightComponent={<HeaderRight />}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              this.changeTab(1);
            }}
            style={[
              styles.categoryContainer,
              {
                backgroundColor: this.state.inbox ? 'orange' : '#ddd',
              },
            ]}>
            <Text
              // onPress={this.getdata}
              // onPress={() => this.getdata()}
              style={[
                styles.mediumText,
                {color: this.state.inbox ? 'white' : 'black'},
              ]}>
              Inbox
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              this.changeTab(2);
            }}
            style={[
              styles.categoryContainer,
              {
                backgroundColor: this.state.jobs ? 'orange' : '#ddd',
              },
            ]}>
            <Text
              style={[
                styles.mediumText,
                {color: this.state.jobs ? 'white' : 'black'},
              ]}>
              Jobs
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.props.jobs}
          extraData={this.props}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderjobs}
          keyExtractor={(item, index) => item + index.toString()}
        />
        <TouchableOpacity onPress={() => this.getdata()}>
          <Text>Ather</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  const {jobs} = state.app;

  return {
    jobs,
  };
};
export default connect(mapStateToProps, {getjobs})(TabScreen);
