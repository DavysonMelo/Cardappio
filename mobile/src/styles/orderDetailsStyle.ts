import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flex: 1,

    alignSelf: 'center',

    backgroundColor: '#FFF',
    marginBottom: 60,
    marginTop: 15,
    borderRadius: 5,

    paddingBottom: 20,
  },

  cropContainer: {
    width: '95%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 38,
  },

  total: {
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default styles;
