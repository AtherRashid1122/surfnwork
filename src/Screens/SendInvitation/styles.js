import {StyleSheet} from 'react-native';
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
  smalltext: {fontSize: 12, marginTop: 5, marginBottom: 10},
  headerltext: {fontSize: 16, marginTop: 5, marginBottom: 10},
});
export default styles;
