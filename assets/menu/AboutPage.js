import React, { Component } from "react";
import { ImageBackground, View, Image, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import background from '../image/background.png';
import about1 from '../image/About-1.png';
import about2 from '../image/About-2.png';

class AboutPage extends Component {

    render() {
        return (
            <ScrollView>
                <ImageBackground source={background} style={styles.imagebackground}>
                    <View>
                        <Text style={styles.judul}>
                        About
                        </Text>
                    </View>
                    <View style={styles.row1}>
                        <View style={styles.wrapperbiru}>
                            <Text style={styles.p1biru}>
                                Hygrow adalah aplikasi inovatif yang dirancang khusus untuk memonitor dan mengontrol sistem hidroponik dengan tingkat presisi tinggi. Dengan fokus utama pada otomatisasi nutrisi dan pH tanaman hidroponik, serta pengelolaan otomatis misting, Hygrow membawa revolusi dalam pertanian modern.
                            </Text>
                            <Text style={styles.p2biru}>
                                Fitur unggulan Hygrow meliputi kemampuan untuk memantau kondisi lingkungan secara real-time, memberikan data yang akurat dan terkini kepada pengguna. Dengan antarmuka yang intuitif, pengguna dapat dengan mudah mengakses informasi terkini tentang tingkat nutrisi dan pH tanaman mereka, serta mengatur parameter misting sesuai kebutuhan.
                            </Text>
                        </View>
                        <Image source={about1} style={styles.gambar1} />
                    </View>

                    <View style={styles.row2}>
                        <Image source={about2} style={styles.gambar2} />
                        <View style={styles.wrapperhijau}>
                            <Text style={styles.p1hijau}>
                                Dengan Hygrow, para petani hidroponik dapat memantau dan mengontrol tanaman mereka dengan efisien, meningkatkan hasil panen dan mengurangi risiko kesalahan manusia. Aplikasi ini tidak hanya memberikan solusi terkini untuk kebutuhan pertanian modern, tetapi juga membantu dalam menjaga keseimbangan nutrisi dan kondisi lingkungan untuk hasil panen yang optimal.
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imagebackground: { width: Dimensions.get("window").width, height: Dimensions.get("window").height },
    row1: { flexDirection: 'row', justifyContent: 'space-around', marginTop: responsiveHeight(3) },
    row2: { flexDirection: 'row', justifyContent: 'space-around' },
    judul: { textAlign: 'center', marginTop: responsiveHeight(2.1), fontSize: responsiveFontSize(2.01), fontFamily: 'Montserrat-ExtraBold', color: '#FFFFFF' },
    p1biru: { fontSize: responsiveFontSize(1.2), fontFamily: 'Montserrat-MediumItalic', color: '#FFFFFF', textAlign: 'center', marginTop: responsiveHeight(1.1) },
    p2biru: { fontSize: responsiveFontSize(1.2), fontFamily: 'Montserrat-MediumItalic', color: '#FFFFFF', textAlign: 'center', marginTop: responsiveHeight(0.9) },
    p1hijau: { fontSize: responsiveFontSize(1.2), fontFamily: 'Montserrat-MediumItalic', color: '#FFFFFF', textAlign: 'center', marginTop: responsiveHeight(2.2) },
    gambar1: { resizeMode: 'contain' },
    gambar2: { resizeMode: 'contain', marginTop: responsiveHeight(4.2) },
    wrapperbiru: { height: responsiveHeight(44), width: responsiveWidth(44), backgroundColor: '#5CB6BD', borderRadius: 15 },
    wrapperhijau: { height: responsiveHeight(32), width: responsiveWidth(37), backgroundColor: '#0C8B76', borderRadius: 15, marginTop: responsiveHeight(-7) },

})

export default AboutPage;