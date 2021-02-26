import {StyleSheet} from 'react-native';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  input: {
    width: '90%',
    borderBottomWidth: 1,
    padding: 0,
    borderColor: 'white',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginRight: 20,
    marginBottom: 5,
  },
  jobDetailStyle: {
    flex: 1,
    margin: 10,
  },
  jobContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    elevation: 3,
    backgroundColor: '#ffff',
    borderRadius: 3,
  },
  largeText: {
    fontSize: 16,
    color: 'black',
  },
  mediumText: {
    fontSize: 14,
    color: theme.colors.gray,
    fontFamily: Fonts.Quicksand_Bold,
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
