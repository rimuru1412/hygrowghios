import React, { Component } from "react";
import { ImageBackground, View, Dimensions, Image, Text, ScrollView, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons/faToggleOn';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons/faToggleOff';
import background from '../image/background.png';
import back from '../image/back.png';
import { db } from './FirebaseNFT';


let buttonmisting = db.ref('ButtonNft/misting')
let buttonotomatis = db.ref('ModeNft/otomatis')
let buttonmanual = db.ref('ModeNft/manual')
let kondisi = db.ref('PompaNft/Kondisi')
let suhudalam = db.ref('DHTNft/SuhuDalam')
let suhuluar = db.ref('DHTNft/SuhuLuar')
let kelembapandalam = db.ref('DHTNft/KelembapanDalam')
let kelembapanluar = db.ref('DHTNft/KelembapanLuar')

class MistingNFTPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ButtonMisting: 0,
            ButtonOtomatis: 0,
            ButtonManual: 0,
            Kondisi: ' ',
            SuhuDalam: ' ',
            SuhuLuar: ' ',
            KelembapanDalam: ' ',
            KelembapanLuar: ' '
        }
    }

    componentDidMount() {

        suhudalam.on('value', (snapshot) => {
            const SuhuDalam = snapshot.val();
            this.setState({ SuhuDalam });
        })

        suhuluar.on('value', (snapshot) => {
            const SuhuLuar = snapshot.val();
            this.setState({ SuhuLuar });
        })

        kelembapandalam.on('value', (snapshot) => {
            const KelembapanDalam = snapshot.val();
            this.setState({ KelembapanDalam });
        })

        kelembapanluar.on('value', (snapshot) => {
            const KelembapanLuar = snapshot.val();
            this.setState({ KelembapanLuar });
        })

        buttonmisting.on('value', (snapshot) => {
            const ButtonMisting = snapshot.val();
            this.setState({ ButtonMisting });
        })

        buttonotomatis.on('value', (snapshot) => {
            const ButtonOtomatis = snapshot.val();
            this.setState({ ButtonOtomatis });
        })

        buttonmanual.on('value', (snapshot) => {
            const ButtonManual = snapshot.val();
            this.setState({ ButtonManual });
        })

        kondisi.on('value', (snapshot) => {
            const Kondisi = snapshot.val();
            this.setState({ Kondisi });
        })


    }

    PressMisting = () => {
        const newbuttonMisting = this.state.ButtonMisting === 0 ? 1 : 0;
        buttonmisting.set(newbuttonMisting);

        {
            this.state.ButtonMisting === 0 && (
                Alert.alert(
                    'Pompa Misting Menyala',
                    'Ketuk sekali lagi untuk mematikan pompa misting',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            )
        }
        {
            this.state.ButtonMisting === 1 && (
                Alert.alert(
                    'Pompa Misting Mati',
                    'Ketuk sekali lagi untuk menyalakan pompa misting',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            )
        }
    }

    PressButtonOtomatis = () => {
        const newbuttonOtomatis = this.state.ButtonOtomatis === 0 ? 1 : 0;
        buttonotomatis.set(newbuttonOtomatis);
    }

    PressButtonManual = () => {
        const newbuttonManual = this.state.ButtonManual === 0 ? 1 : 0;
        buttonmanual.set(newbuttonManual);
    }

    render() {
        return (
            <ScrollView>
                <ImageBackground source={background} style={styles.imagebackground}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                                <Image source={back} style={styles.backbutton} />
                            </TouchableOpacity>
                            <Text style={styles.judul}>Sistem Misting NFT</Text>
                        </View>
                        <View style={styles.row1}>
                            <View style={styles.wrapperbiru}>
                                <Text style={styles.judulwrapper}>
                                    Kelembapan GreenHouse
                                </Text>
                                <Text style={styles.isiwrapper}>{this.state.KelembapanDalam} %</Text>
                            </View>
                            <View style={styles.wrapperhijau}>
                                <Text style={styles.judulwrapper}>
                                    Suhu      GreenHouse
                                </Text>
                                <Text style={styles.isiwrapper}>{this.state.SuhuDalam} °C</Text>
                            </View>
                        </View>

                        <View style={styles.row2}>
                            <View style={styles.wrapperhijau}>
                                <Text style={styles.judulwrapper}>
                                    Suhu Luar GreenHouse
                                </Text>
                                <Text style={styles.isiwrapper}>{this.state.SuhuLuar} °C</Text>
                            </View>
                            <View style={styles.wrapperbiru}>
                                <Text style={styles.judulwrapper}>
                                    Kelembapan Luar GreenHouse
                                </Text>
                                <Text style={styles.isiwrapper}>{this.state.KelembapanLuar} %</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', marginTop: responsiveHeight(3) }}>
                            <Text style={styles.textmode}>Mode Misting</Text>
                        </View>

                        <View style={{ marginTop: responsiveHeight(3) }}>
                            {this.state.ButtonManual === 1 && this.state.ButtonOtomatis === 0 ? (
                                <View>
                                    <View style={{ alignItems: 'center' }}>
                                        <TouchableOpacity onPress={this.PressButtonManual}>
                                            {this.state.ButtonManual === 1 ? <FontAwesomeIcon style={styles.button} icon={faToggleOn} size={60} /> : <FontAwesomeIcon icon={faToggleOff} style={styles.button} size={60} />}
                                        </TouchableOpacity>
                                        <Text style={styles.textbutton}>Manual</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: responsiveHeight(2), marginLeft: responsiveWidth(4) }}>
                                        <View style={{ alignItems: 'center', marginTop: responsiveHeight(-1) }}>
                                            <TouchableOpacity onPress={this.PressMisting}>
                                                {this.state.ButtonMisting === 1 ? <FontAwesomeIcon style={styles.button} icon={faToggleOn} size={60} /> : <FontAwesomeIcon icon={faToggleOff} style={styles.button} size={60} />}
                                            </TouchableOpacity>
                                            <Text style={styles.textbutton}>Misting</Text>
                                        </View>
                                        <View style={{ marginTop: responsiveHeight(0.1), alignItems: 'center' }}>
                                            <View style={styles.wrapperkondisi}>
                                                <Text style={styles.textkondisi}>{this.state.Kondisi}</Text>
                                            </View>
                                            <Text style={styles.textmisting}>Kondisi Misting</Text>
                                        </View>
                                    </View>
                                </View>

                            ) : this.state.ButtonOtomatis === 1 && this.state.ButtonManual === 0 ? (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: responsiveHeight(4) }}>
                                    <View style={{ alignItems: 'center', marginTop: responsiveHeight(-0.8) }}>
                                        <TouchableOpacity onPress={this.PressButtonOtomatis}>
                                            {this.state.ButtonOtomatis === 1 ? <FontAwesomeIcon style={styles.button} icon={faToggleOn} size={60} /> : <FontAwesomeIcon icon={faToggleOff} style={styles.button} size={60} />}
                                        </TouchableOpacity>
                                        <Text style={styles.textbutton}>Otomatis</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <View style={styles.wrapperkondisi}>
                                            <Text style={styles.textkondisi}>{this.state.Kondisi}</Text>
                                        </View>
                                        <Text style={styles.textmisting}>Kondisi Misting</Text>
                                    </View>
                                </View>

                            ) :
                                <View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity onPress={this.PressButtonManual}>
                                                {this.state.ButtonManual === 1 ? <FontAwesomeIcon style={styles.button} icon={faToggleOn} size={60} /> : <FontAwesomeIcon icon={faToggleOff} style={styles.button} size={60} />}
                                            </TouchableOpacity>
                                            <Text style={styles.textbutton}>Manual</Text>
                                        </View>

                                        <View style={{ alignItems: 'center', marginRight: responsiveWidth(1) }}>
                                            <TouchableOpacity onPress={this.PressButtonOtomatis}>
                                                <Text>{this.state.ButtonOtomatis === 1 ? <FontAwesomeIcon style={styles.button} icon={faToggleOn} size={60} /> : <FontAwesomeIcon icon={faToggleOff} style={styles.button} size={60} />}</Text>
                                            </TouchableOpacity>
                                            <Text style={styles.textbutton}>Otomatis</Text>
                                        </View>
                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: responsiveHeight(2) }}>
                                        <View style={styles.wrapperkondisi}>
                                            <Text style={styles.textkondisi}>{this.state.Kondisi}</Text>
                                        </View>
                                        <Text style={styles.textmisting}>Kondisi Misting</Text>
                                    </View>
                                </View>
                            }
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imagebackground: { width: Dimensions.get("window").width, height: Dimensions.get("window").height },
    judul: { marginLeft: responsiveWidth(15), marginTop: responsiveHeight(2.1), fontSize: responsiveFontSize(2.01), fontFamily: 'Montserrat-ExtraBold', color: '#FFFFFF' },
    backbutton: { marginLeft: responsiveWidth(3), marginTop: responsiveHeight(1.2) },
    row1: { flexDirection: 'row', justifyContent: 'space-evenly', marginTop: responsiveHeight(10) },
    row2: { flexDirection: 'row', justifyContent: 'space-evenly', marginTop: responsiveHeight(5) },
    wrapperhijau: { width: responsiveWidth(40), height: responsiveHeight(15), backgroundColor: '#0C8B76', borderRadius: 15 },
    wrapperbiru: { width: responsiveWidth(40), height: responsiveHeight(15), backgroundColor: '#5CB6BD', borderRadius: 15 },
    judulwrapper: { fontSize: responsiveFontSize(1.8), fontFamily: 'Montserrat-ExtraBold', color: '#FFFFFF', marginLeft: responsiveWidth(2.5), marginTop: responsiveHeight(0.8) },
    isiwrapper: { fontSize: responsiveFontSize(2.4), fontFamily: 'Montserrat-ExtraBold', color: '#FFFFFF', marginLeft: responsiveWidth(2.5), marginTop: responsiveHeight(0.9) },
    textbutton: { color: '#000000', fontSize: responsiveFontSize(1.6), marginBottom: responsiveWidth(0.3), fontFamily: 'Montserrat-ExtraBold' },
    fontawesome: { color: '#000000' },
    textkondisi: { textAlign: 'center', marginTop: responsiveHeight(2.1), fontSize: responsiveFontSize(1.7), fontFamily: 'Montserrat-ExtraBold', color: '#000000' },
    textmode: { fontSize: responsiveFontSize(1.8),  fontFamily: 'Montserrat-ExtraBold', marginBottom: responsiveHeight(-2), color: '#000000' },
    wrapperkondisi: { width: responsiveHeight(11), height: responsiveHeight(7), backgroundColor: '#5CB6BD', borderRadius: 15 },
    textmisting: { color: '#000000', fontSize: responsiveFontSize(1.6), fontWeight: 'bold', fontFamily: 'Montserrat-ExtraBold', marginTop: responsiveWidth(2) }



})

export default MistingNFTPage;