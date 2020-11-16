import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  foodContainer: {
    alignSelf: 'center',
    marginTop: 10,
    width: '95%',
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  foodImgContainer: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  foodImg: {
    width: 68,
    height: 70,
    borderRadius: 15,
  },

  foodFont: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  containerTitleDesc: {
    width: '75%',
    paddingVertical: '3%',
    paddingHorizontal: '1%',
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
  },

  descriptionContainer: {
    flex: 1,
    marginTop: '1%',
    marginRight: '3%',
    width: '65%',
  },

  descriptionFont: {
    fontSize: 11,
    color: '#9A9A9A',
  },

  priceContainer: {
    height: '60%',
    width: '30%',
    // paddingTop: '3%',
  },

  priceFont: {
    fontSize: 18,
    color: '#000',
  },
});

export default styles;
