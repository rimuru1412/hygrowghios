import React, { Component } from "react";
import { ImageBackground, View, Dimensions, Image, Text, ScrollView, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import database from '@react-native-firebase/database';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons/faToggleOn'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons/faToggleOff'
import background from '../image/background.png'
import back from '../image/back.png'
import GrafikIrigasi from "./GrafikIrigasi";

class IrigasiTetesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SuhuAir: ' ',
            SuhuLahan: ' ',
            PH: ' ',
            PPM: ' ',
            Button1: 0,
            Button2: 0,
            Button3: 0
        }
    }

    componentDidMount() {
        database()
            .ref('SuhuAir/realtime')
            .on('value', snapshot => {
                this.setState({
                    SuhuAir: snapshot.val()
                })
            })

        database()
            .ref('DHTdrip/SuhuDalam')
            .on('value', snapshot => {
                this.setState({
                    SuhuLahan: snapshot.val()
                })
            })

        database()
            .ref('PH/realtime')
            .on('value', snapshot => {
                this.setState({
                    PH: snapshot.val()
                })
            })

        database()
            .ref('PPM/realtime')
            .on('value', snapshot => {
                this.setState({
                    PPM: snapshot.val()
                })
            })

        database()
            .ref('Button/bt1')
            .on('value', (snapshot) => {
                const Button1 = snapshot.val();
                this.setState({ Button1 });
            })

        database()
            .ref('Button/bt2')
            .on('value', (snapshot) => {
                const Button2 = snapshot.val();
                this.setState({ Button2 });
            })


        database()
            .ref('Button/bt3')
            .on('value', (snapshot) => {
                const Button3 = snapshot.val();
                this.setState({ Button3 });
            })


    }

    TombolButton1 = () => {
        const newButton1 = this.state.Button1 === 0 ? 1 : 0;
    
        // Matikan tombol 2 dan 3 jika tombol 1 diaktifkan
        const newButton2 = newButton1 === 1 ? 0 : this.state.Button2;
        const newButton3 = newButton1 === 1 ? 0 : this.state.Button3;
    
        database()
            .ref('Button/bt1')
            .set(newButton1);
    
        // Jika tombol 1 diaktifkan, matikan tombol 2 dan 3
        // Jika tombol 1 dimatikan, sesuaikan tombol 2 dan 3
        database()
            .ref('Button/bt2')
            .set(newButton1 === 1 ? 0 : newButton2);
    
        database()
            .ref('Button/bt3')
            .set(newButton1 === 1 ? 0 : newButton3);
    
        this.setState({
            Button1: newButton1,
            Button2: newButton1 === 1 ? 0 : newButton2,
            Button3: newButton1 === 1 ? 0 : newButton3,
        });
    
        if (newButton1 === 0) {
            Alert.alert(
                'Button Vegetatif Mati',
                'Ketuk sekali lagi untuk menyalakan button Vegetatif',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        } else {
            Alert.alert(
                'Button Vegetatif Menyala',
                'Ketuk sekali lagi untuk mematikan button Vegetatif',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        }
    };
    
    // Sisanya sama dengan yang sebelumnya
    

    TombolButton2 = () => {
        const newButton2 = this.state.Button2 === 0 ? 1 : 0;
    
        // Matikan tombol 1 dan 3 jika tombol 2 diaktifkan
        const newButton1 = newButton2 === 1 ? 0 : this.state.Button1;
        const newButton3 = newButton2 === 1 ? 0 : this.state.Button3;
    
        database()
            .ref('Button/bt2')
            .set(newButton2);
    
        // Jika tombol 2 diaktifkan, matikan tombol 1 dan 3
        // Jika tombol 2 dimatikan, sesuaikan tombol 1 dan 3
        database()
            .ref('Button/bt1')
            .set(newButton2 === 1 ? 0 : newButton1);
    
        database()
            .ref('Button/bt3')
            .set(newButton2 === 1 ? 0 : newButton3);
    
        this.setState({
            Button1: newButton2 === 1 ? 0 : newButton1,
            Button2: newButton2,
            Button3: newButton2 === 1 ? 0 : newButton3,
        });
    
        if (newButton2 === 0) {
            Alert.alert(
                'Button Generatif Mati',
                'Ketuk sekali lagi untuk menyalakan button Generatif',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        } else {
            Alert.alert(
                'Button Generatif Menyala',
                'Ketuk sekali lagi untuk mematikan button Generatif',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        }
    };
    
    TombolButton3 = () => {
        const newButton3 = this.state.Button3 === 0 ? 1 : 0;
    
        // Matikan tombol 1 dan 2 jika tombol 3 diaktifkan
        const newButton1 = newButton3 === 1 ? 0 : this.state.Button1;
        const newButton2 = newButton3 === 1 ? 0 : this.state.Button2;
    
        database()
            .ref('Button/bt3')
            .set(newButton3);
    
        // Jika tombol 3 diaktifkan, matikan tombol 1 dan 2
        // Jika tombol 3 dimatikan, sesuaikan tombol 1 dan 2
        database()
            .ref('Button/bt1')
            .set(newButton3 === 1 ? 0 : newButton1);
    
        database()
            .ref('Button/bt2')
            .set(newButton3 === 1 ? 0 : newButton2);
    
        this.setState({
            Button1: newButton3 === 1 ? 0 : newButton1,
            Button2: newButton3 === 1 ? 0 : newButton2,
            Button3: newButton3,
        });
    
        if (newButton3 === 0) {
            Alert.alert(
                'Button Panen Mati',
                'Ketuk sekali lagi untuk menyalakan button Panen',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        } else {
            Alert.alert(
                'Button Panen Menyala',
                'Ketuk sekali lagi untuk mematikan button Panen',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        }
    };
    
    render() {
        return (
            <ScrollView>
                <ImageBackground source={background} style={styles.imagebackground}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                                <Image source={back} style={styles.backbutton} />
                            </TouchableOpacity>

                            <Text style={styles.judul}>Sistem Monitor Irigasi Tetes</Text>
                        </View>
                        <View style={{ marginLeft: responsiveWidth(5) }}>
                            <GrafikIrigasi />
                        </View>
                        <View style={styles.row1}>
                            <View style={styles.wrapperhijau}>
                                <Text style={styles.judulwrapper}>
                                    Nilai TDS
                                </Text>
                                <Text style={styles.isiwrapper}>{this.state.PPM} ppm</Text>

                            </View>

                            <View style={styles.wrapperbiru}>
                                <Text style={styles.judulwrapper}>
                                    pH Air
                                </Text>
                                <Text style={styles.isiwrapper}>{this.state.PH}</Text>

                            </View>
                        </View>

                        <View style={styles.row2}>

                            <View style={styles.wrapperbiru}>
                                <Text style={styles.judulwrapper}>
                                    Suhu Air
                                </Text>
                                <Text style={styles.isiwrapper}>{this.state.SuhuAir} °C</Text>

                            </View>
                            <View style={styles.wrapperhijau}>
                                <Text style={styles.judulwrapper}>
                                    Suhu Lahan
                                </Text>
                                <Text style={styles.isiwrapper}>{this.state.SuhuLahan} °C</Text>

                            </View>

                        </View>
                        <View style={styles.rowbutton}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textbutton}>Vegetatif</Text>
                                <TouchableOpacity onPress={this.TombolButton1}>
                                    {this.state.Button1 === 1 ? <FontAwesomeIcon style={styles.fontawesome} icon={faToggleOn} size={60} /> : <FontAwesomeIcon icon={faToggleOff} style={styles.fontawesome} size={60} />}
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textbutton}>Generatif</Text>
                                <TouchableOpacity onPress={this.TombolButton2}>
                                    {this.state.Button2 === 1 ? <FontAwesomeIcon style={styles.fontawesome} icon={faToggleOn} size={60} /> : <FontAwesomeIcon icon={faToggleOff} style={styles.fontawesome} size={60} />}
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textbutton}>Panen</Text>
                                <TouchableOpacity onPress={this.TombolButton3}>
                                    {this.state.Button3 === 1 ? <FontAwesomeIcon style={styles.fontawesome} icon={faToggleOn} size={60} /> : <FontAwesomeIcon icon={faToggleOff} style={styles.fontawesome} size={60} />}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imagebackground: { width: Dimensions.get("window").width, height: Dimensions.get("window").height },
    row1: { flexDirection: 'row', justifyContent: 'space-evenly', marginTop: responsiveHeight(5) },
    row2: { flexDirection: 'row', justifyContent: 'space-evenly', marginTop: responsiveHeight(5) },
    rowbutton: { flexDirection: 'row', marginTop: responsiveHeight(3), justifyContent: 'space-evenly' },
    judul: { marginLeft: responsiveWidth(9), marginTop: responsiveHeight(2.1), fontSize: responsiveFontSize(2.01), fontFamily: 'Montserrat-ExtraBold', color: '#FFFFFF' },
    backbutton: { marginLeft: responsiveWidth(3), marginTop: responsiveHeight(1.2) },
    wrapperhijau: { width: responsiveWidth(40), height: responsiveHeight(15), backgroundColor: '#0C8B76', borderRadius: 15 },
    wrapperbiru: { width: responsiveWidth(40), height: responsiveHeight(15), backgroundColor: '#5CB6BD', borderRadius: 15 },
    judulwrapper: { fontSize: responsiveFontSize(1.8), fontFamily: 'Montserrat-ExtraBold', color: '#FFFFFF', marginLeft: responsiveWidth(2.5), marginTop: responsiveHeight(0.8) },
    isiwrapper: { fontSize: responsiveFontSize(2.4), fontFamily: 'Montserrat-ExtraBold', color: '#FFFFFF', marginLeft: responsiveWidth(2.5), marginTop: responsiveHeight(0.9) },
    textbutton: { color: '#000000', fontSize: responsiveFontSize(1.6), marginBottom: responsiveWidth(0.3), fontFamily: 'Montserrat-ExtraBold' },
    fontawesome: { color: '#000000' }



})

export default IrigasiTetesPage;