import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  largeText: {
    fontSize: 16,
    color: 'black',
  },
  mediumText: {
    fontSize: 14,
    color: theme.colors.secondary,
    // fontFamily: Fonts.Quicksand_LightItalic,
  },
  backArrow: {
    height: 25,
    width: 25,

    borderRadius: 50,
    marginLeft: 30,

    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingLeft: 10,
    borderRadius: 10,
    width: '80%',
    fontFamily: 'geometriaBold',
    alignSelf: 'center',
    elevation: 10,
  },
  fieldContainer: {
    paddingVertical: 5,
    flex: 0.8,
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: theme.colors.secondary,
    padding: 10,
    borderRadius: 5,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default styles;
