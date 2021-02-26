import {StyleSheet} from 'react-native';
import {Fonts} from '../../utils/Fonts';
import theme from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  categoryContainer: {
    flex: 0.5,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
  },
  jobDetailStyle: {
    flex: 1,
    padding: 10,
  },
  jobContainer: {
    flex: 1,
    margin: 10,
    elevation: 3,
    backgroundColor: '#f5f5f5',
    padding: 4,
    borderRadius: 3,
  },
  largeText: {
    fontFamily: Fonts.Quicksand_Bold,

    // textAlign: 'justify',
    fontSize: 16,
    padding: 0,
  },
  mediumText: {
    fontFamily: Fonts.Quicksand_Regular,
    fontSize: 14,
    color: theme.colors.lightGray,
    marginLeft: 3,
    alignSelf: 'center',
  },
});
export default styles;
