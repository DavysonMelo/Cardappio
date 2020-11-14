import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '8%',
    backgroundColor: '#FF6161',
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'DancingScript_700Bold',
    fontSize: 35,
    color: '#FFFFFF',
    alignSelf: 'center',
  },

  imageContainer: {
    position: 'absolute',
    alignSelf: 'center',
    right: 10,
  },

  arrowContainer: {
    position: 'absolute',
    alignSelf: 'center',
    left: 10,
  },
});

export default styles;