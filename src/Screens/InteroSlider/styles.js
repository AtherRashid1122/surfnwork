import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.secondary,

    // justifyContent: 'center',
    // alignItems: 'center',
  },
  skipText: {
    fontSize: 16,
    fontFamily: Fonts.Quicksand_Light,
    // alignSelf: 'center',
    marginTop: 10,
    // fontWeight: 'bold',
  },
  skipText1: {
    fontSize: 14,
    fontFamily: Fonts.Quicksand_Light,
    // alignSelf: 'center',
    marginTop: 10,
    // fontWeight: 'bold',
  },
  backArrow: {
    height: 25,
    width: 25,

    borderRadius: 50,
    marginLeft: 30,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider1Style: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 170,
  },
  headingStyle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  detailStyle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    // fontWeight: 'bold',
  },

  nextBtnStyle: {
    padding: 5,
    // height: 30,
    width: 150,
    borderRadius: 4,
    borderColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    fontSize: 16,
    backgroundColor: 'white',
    fontFamily: Fonts.Quicksand_Light,
    elevation: 2,
    fontWeight: 'bold',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  buttonTextStyle: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: 'bold',
    // fontFamily: Fonts.Quicksand_LightItalic,
  },
  activeDotStyle: {
    backgroundColor: 'white',
  },
  Input: {
    margin: 10,
    backgroundColor: '#E8F0FF',
    padding: 10,
    borderRadius: 30,
    width: '75%',
    fontFamily: 'geometriaBold',
    textAlign: 'center',
    // justifyContent:'center',
    alignSelf: 'center',
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: theme.colors.primary,
    padding: 15,
    fontFamily: Fonts.Quicksand_Light,
    borderRadius: 30,
    // marginLeft:15,
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
