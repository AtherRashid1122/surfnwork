// import React, {Component} from 'react';
// import {View, Text, SafeAreaView} from 'react-native';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <MainNav />
//       </View>
//     );
//   }
// }
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MainNav from './src/navigation';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persister, store} from './src/Redux/Store';
import {ThemeProvider} from 'react-native-elements';
import theme from './src/theme';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.disableYellowBox = true;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Provider store={store}>
          <PersistGate persistor={persister}>
            <ThemeProvider theme={theme}>
              <MainNav />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </View>
    );
  }
}
