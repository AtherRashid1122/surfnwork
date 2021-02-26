import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: 'grey',
    color: 'grey',
    flexDirection: 'row',
  },

  mainContainer: {
    flex: 1,
  },
  largeText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
  },
  TagText: {
    fontSize: 16,
    alignSelf: 'center',
    backgroundColor: 'red',
    elevation: 6,
    margin: 10,
    width: '80%',
    textAlign: 'center',
    borderRadius: 5,
    padding: 5,
    color: 'black',
  },
  mediumText: {
    fontSize: 14,
    color: theme.colors.secondary,
    // fontFamily: Fonts.Quicksand_LightItalic,
  },
  smalltext: {fontSize: 12, marginTop: 5, marginBottom: 10},
  headerltext: {fontSize: 16, marginTop: 5, marginBottom: 10},
});
export default styles;
