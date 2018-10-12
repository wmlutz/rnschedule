import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.99,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 999,
  },
  text_row: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  center: {
    paddingLeft: 10,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    alignItems:'center',
    justifyContent: 'center',
  },
  day_box: {
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  day: {
    margin: 0,
    padding: 0,
    fontWeight: 'bold',
    fontSize: 15,
  },
  dotw: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    fontSize: 10,
    paddingBottom: 1,
  },
  month: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: '300'
  },
  img: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  arrow_down: {
    paddingLeft: 15,
  },
  arrow_up: {
    paddingLeft: 15,
    transform:[{rotate: '180 deg'}]
  }
});

export default styles
