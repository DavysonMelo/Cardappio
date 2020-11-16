import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },

  foodInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  foodInfosFont: {
    fontSize: 18,
    padding: 15,
  },

  line: {
    borderBottomColor: '#D1CFCF',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },

  extraDishesContainer: { flex: 1 },
});

export default styles;
