import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  splashStyle: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
export default styles;
