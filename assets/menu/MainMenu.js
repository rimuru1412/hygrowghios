import React, { Component } from "react";
import { ImageBackground, View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import lahanirigasitetes from '../image/LahanIrigasiTetes.png'
import lahannft from '../image/LahanNFT.png'
import mistingirigasitetes from '../image/MistingIrigasiTetes.png'
import mistingnft from '../image/MistingNFT.png'
import background from '../image/background.png'


class MainMenu extends Component {


    render() {

        return (
            <View>
                <ImageBackground source={background} style={styles.imagebackground}>
                    <View>
                        <View style={styles.row1}>
                            <View style={styles.wrapperhijau}>
                                <Text style={styles.judul}>Lahan Irigasi Tetes</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('IrigasiTetes')}>
                                    <Image source={lahanirigasitetes} style={styles.logo}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperbiru}>
                                <Text style={styles.judul}>Lahan NFT</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('NFT')}>
                                    <Image source={lahannft} style={styles.logo}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <View style={styles.row2}>
                        <View style={styles.wrapperbiru}>
                                <Text style={styles.judul}>Misting NFT</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('MistingNFT')}>
                                    <Image source={mistingnft} style={styles.logo}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wrapperhijau}>
                                <Text style={styles.judul}>Misting Irigasi Tetes</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('MistingIrigasiTetes')}>
                                    <Image source={mistingirigasitetes} style={styles.logo}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground >
            </View>
        )
    }
}


const styles = StyleSheet.create({
    imagebackground: { width: Dimensions.get("window").width, height: Dimensions.get("window").height },
    row1: { flexDirection: 'row', justifyContent: 'space-evenly', marginTop: responsiveHeight(20) },
    row2: { flexDirection: 'row', justifyContent: 'space-evenly', marginTop: responsiveHeight(4.8) },
    judul: { color: '#FFFFFF', marginTop: responsiveHeight(1), fontSize: responsiveFontSize(1.4), fontFamily: 'Montserrat-ExtraBold',},
    wrapperhijau: { height: responsiveHeight(21.2), width: responsiveWidth(36), backgroundColor: '#0C8B76', borderRadius: 15, alignItems: 'center' },
    wrapperbiru: { height: responsiveHeight(21.2), width: responsiveWidth(36), backgroundColor: '#5CB6BD', borderRadius: 15, alignItems: 'center' },
    logo: { marginTop: responsiveHeight(0.3), resizeMode: 'contain' }


})



export default MainMenu;