import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 54.5,
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

  notifContainer: {
    position: 'relative',
  },

  notifMain: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2BD03C',
    right: 1,
  },

  notifNumber: {
    position: 'absolute',
    color: '#fff',
  },
});

export default styles;
