import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import logoipb from '../image/logoipb.png';
import hygrow from "../image/Hygrow.png"
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions"

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('TabBar');
    }, 3000);
  })

  return (
    <View style={styles.container}>

      <View style={{ height: '40%', marginTop: responsiveHeight(10) }}>
        <Text style={styles.judul}>HYGROW</Text>
      </View>
      <View style={{ height: '20%', marginTop: responsiveHeight(-10) }}>
        <Image source={hygrow} style={styles.logo1} />
      </View>

      <View style={{ height: '40%', alignItems: 'center', marginTop: responsiveHeight(15) }}>

        <Text style={styles.text}>In Assosiation:</Text>
        <Image source={logoipb} style={styles.logo2} />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', alignItems: 'center', alignContent: 'center' },
  judul: { fontSize: responsiveFontSize(2.4), fontWeight: 'bold', fontFamily: 'PottaOne-Regular', color: '#000000' },
  text: { fontSize: responsiveFontSize(1.7), fontFamily: 'Poppins-Reguler', color: '#000000' },
  logo1: { width: 162, height: 108, resizeMode: 'contain' },
  logo2: { width: 129, height: 33, resizeMode: 'contain', marginTop: responsiveHeight(3) }
})

export default Splash;