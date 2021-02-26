import {StyleSheet} from 'react-native';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  largeText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Fonts.Quicksand_Bold,
    alignSelf: 'center',

    color: 'black',
  },
  question: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Fonts.Quicksand_Bold,
    // alignSelf: 'center',
    marginTop: '10%',
    color: 'black',
    width: '80%',
  },
  mediumText: {
    fontSize: 16,
    marginTop: 15,
    alignSelf: 'center',
    fontFamily: Fonts.Quicksand_Bold,
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
    marginTop: '5%',
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
