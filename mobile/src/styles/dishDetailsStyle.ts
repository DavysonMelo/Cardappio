import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dishDetailsBoxContainer: {
    height: '57.6%',

    position: 'relative',
    bottom: '10%',
    alignItems: 'center',

    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 4,
    elevation: 5,
  },
  dishDetailsInfoContainer: {
    height: '100%',
    width: '86%',

    paddingTop: 20,
    paddingBottom: 30,
  },
  dishTitle: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  dishDescription: {
    width: '80%',
    color: '#505050',
  },
  dishCalories: {
    flexDirection: 'row',
    marginTop: 3,
  },

  checkboxContainer: {
    width: '95%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default styles;
