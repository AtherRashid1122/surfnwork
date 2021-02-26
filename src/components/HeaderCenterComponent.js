import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../theme';
import {Fonts} from '../utils/Fonts';

class HeaderCenterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      route: '',
    };
  }
  //   componentWillReceiveProps(nextProps) {
  //     // update original states
  //     this.setState({
  //       latitude: nextProps.latitude,
  //     });
  // }

  handleSearch = (index) => {
    this.toggleModal();
    switch (index) {
      case 0:
        alert(index);
        break;
      case 1:
        this.props.navigation.navigate('RecentSearch');
        break;
      case 2:
        this.props.navigation.navigate('Freelancers');
        break;

      default:
        return;
    }
  };
  renderModal = () => {
    return (
      <Modal
        isVisible={this.state.isModalVisible}
        coverScreen={true}
        hasBackdrop={true}
        animationIn="slideInUp"
        onSwipeComplete={() => this.toggleModal()}
        swipeDirection="up">
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 4,
            height: Dimensions.get('window').height / 4,
          }}
          contentContainerStyle={{flex: 0.4}}>
          <AntDesign
            name="close"
            size={24}
            color={theme.colors.primary}
            onPress={this.toggleModal}
            style={{padding: 10}}
          />
          <Text
            onPress={() => {
              this.handleSearch(0);
            }}
            style={[
              styles.mediumText,
              {margin: 10, fontFamily: Fonts.Quicksand_Bold},
            ]}>
            Search Projects
          </Text>
          <Divider
            style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}
          />
          <Text
            onPress={() => {
              this.handleSearch(1);
            }}
            style={[
              styles.mediumText,
              {margin: 10, fontFamily: Fonts.Quicksand_BoldItalic},
            ]}>
            Search Services
          </Text>
          <Divider
            style={{
              width: '100%',
              height: 1,
              backgroundColor: 'lightgray',
            }}
          />
          <Text
            onPress={() => {
              this.handleSearch(2);
            }}
            style={[
              styles.mediumText,
              {margin: 10, fontFamily: Fonts.Quicksand_Bold},
            ]}>
            Search Freelancers
          </Text>
        </View>
      </Modal>
    );
  };
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.input}
          onPress={() => {
            this.toggleModal();
          }}>
          <TextInput
            // contentContainerStyle={{paddingVertical: 0}}
            editable={false}
            placeholder={'Search'}
            placeholderTextColor={'white'}
            style={{
              padding: 0,
              width: '90%',
              color: 'white',
              marginTop: 2,

              fontFamily: Fonts.Quicksand_Bold,
              paddingVertical: 0,
            }}
          />
          <MaterialIcons
            style={{marginTop: 5}}
            name="search"
            size={20}
            color="white"
          />
        </TouchableOpacity>
        {this.state.isModalVisible && this.renderModal()}
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    padding: 0,
    borderColor: 'white',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginRight: 20,
    marginBottom: 5,
  },
});
export default HeaderCenterComponent;
