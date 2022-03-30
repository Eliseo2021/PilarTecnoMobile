import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#606060'
  },
  buttonSingIn: {
    marginTop: 50,
    fontSize: 22,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 5,
    backgroundColor: 'skyblue',
  },
  containerCard1: { flexDirection: 'column', width },
  containerCard2: { marginVertical: '10%' },
  containerCard3: { alignItems: 'center' },
})