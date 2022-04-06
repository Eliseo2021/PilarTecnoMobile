import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    width,
    height,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  content: { margin: width / 20, height: width / 2.5, width: width / 2.5, borderRadius: 15, justifyContent: 'center', },
  markerIcon: { position: 'absolute', zIndex: 2, right: '1%', margin: width / 8, flexDirection: 'row', backgroundColor: 'white', borderRadius: 100, width: width / 10, alignSelf: 'flex-end', margin: 20, marginRight: 30, alignItems: 'center', justifyContent: 'center' },
  markerFixed: { zIndex: 2, left: '50%', marginLeft: -24, marginTop: -48, position: 'absolute', top: '50%' },
  map: { ...StyleSheet.absoluteFillObject, width, height, alignSelf: 'center', top: 70, },
  marker: { height: 48, width: 48 },
  footer: { backgroundColor: 'rgba(0, 0, 0, 0.5)', bottom: 80, position: 'absolute', width: '100%' },
  region: { color: '#fff', lineHeight: 20, margin: 20, alignSelf: 'center' },
  mapButtonView: { flexDirection: 'row', justifyContent: 'center', margintop: 10, top: 80, position: 'absolute', width: '100%' },
  mapButtonContent: { paddgingRight: 5, paddingLeft: 5, },
  mapButtonStandard: { backgroundColor: "#442484", },
  mapButtonSatellite: { backgroundColor: "#a65273", },
  mapButtonSaveLocation: { backgroundColor: "#41A316", },

})
