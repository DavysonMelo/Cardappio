import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dishDetailsBoxContainer: {
    position: 'relative',
    bottom: '6%',
    alignItems: 'center',

    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  dishDetailsInfoContainer: {
    width: '86%',
    paddingTop: 20,
    paddingBottom: 30,
  },
  dishTitle: {
    width: '80%',
    fontSize: 23,
    fontWeight: 'bold',
  },
  dishDescription: {
    width: '90%',
    color: '#505050',
  },
  dishCalories: {
    flexDirection: 'row',
    marginTop: 6,
  },

  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 10,
  },

  textInput: {
    height: 80,
    width: '100%',
    backgroundColor: '#F2F2F2',
    color: '#505050',
    padding: 10,
    textAlignVertical: 'top',
  },

  quantValueContainer: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  labelQuantValue: {
    fontSize: 17,
  },
});

export default styles;
