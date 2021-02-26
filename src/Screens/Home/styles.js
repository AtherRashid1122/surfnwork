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
  mediumText1: {
    fontSize: 14,
    color: theme.colors.gray,
    fontFamily: Fonts.Quicksand_Bold,
  },
  mediumText: {
    fontSize: 10,
    marginTop: -7,
    color: theme.colors.gray,
    fontFamily: Fonts.Quicksand_Bold,
  },
  categoryContainer: {
    flex: 0.5,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
  },
  cardContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
    // borderRadius: 40,
    // padding: 15,
    borderRadius: 20,
    height: 170,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#BDBDBD',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  backArrow: {
    height: 25,
    width: 25,

    borderRadius: 20,
    marginLeft: 30,

    justifyContent: 'center',
    alignItems: 'center',
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

  buttonStyle: {
    margin: 10,
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
  },
  dashboardItem: {
    padding: 10,
    height: 200,
    justifyContent: 'space-between',
    elevation: 10,
  },
  mediumText: {
    fontFamily: Fonts.Quicksand_Regular,
    fontSize: 14,
    color: theme.colors.lightGray,
    marginLeft: 3,
    alignSelf: 'center',
  },
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
    color: 'blue',
    fontSize: 14,
    color: theme.colors.lightGray,
    // marginLeft: 3,
    alignSelf: 'center',
  },
});

export default styles;
