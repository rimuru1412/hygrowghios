import React, { Component } from "react";
import { ImageBackground, View, Image, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import background from '../image/background.png';
import about1 from '../image/About-1.png';
import about2 from '../image/About-2.png';
import { width } from "@fortawesome/free-solid-svg-icons/faToggleOn";

class TabelPage extends Component {

    render() {
        return (
            <ScrollView>
                <ImageBackground source={background} style={styles.imagebackground}>
                    <View>
                        <Text style={styles.judul}>
                            Tabel Data Monitoring
                        </Text>
                    </View>
                    <View style={styles.row1}>
                        <View style={styles.wrappermerah}>
                            <Text style={styles.textjudul}>
                                Dosis
                            </Text>
                        </View>
                        <View style={styles.wrappermerah}>
                            <Text style={styles.textjudul}>
                                Kenaikan PPM
                            </Text>
                        </View>
                        <View style={styles.wrappermerah}>
                            <Text style={styles.textjudul}>
                                Waktu
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                1
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                200
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                10:00:00
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                0.8
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                100
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                11:23:12
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                0.5
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                59
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                11:49:57
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                1.2
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                240
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                12:32:07
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                0.7
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                80
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                13:14:29
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                0.9
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                170
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                14:32:18
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                0.3
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                42
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                15:21:43
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                0.7
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                130
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                15:52:33
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                1
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                200
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                16:29:19
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                1.4
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                242
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                17:48:37
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                0.5
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                100
                            </Text>
                        </View>
                        <View style={styles.wrapperungu}>
                            <Text style={styles.textisi}>
                                18:31:22
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
    row1: { flexDirection: 'row',marginTop: responsiveHeight(5), justifyContent:'center' },
    row2: { flexDirection: 'row', justifyContent: 'center' },
    judul: { textAlign: 'center', marginTop: responsiveHeight(2.1), fontSize: responsiveFontSize(2.01), fontFamily: 'Montserrat-ExtraBold', color: '#FFFFFF' },
    wrappermerah: {width:responsiveWidth(25), height:responsiveHeight(7.1), backgroundColor:'#F95E5E', borderColor:'#FFFFFF', borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,},
    wrapperungu: {width:responsiveWidth(25), height:responsiveHeight(5.6), backgroundColor:'#613EEA', borderColor:'#FFFFFF', borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,},
    textjudul: {fontSize: responsiveFontSize(1.7), fontFamily: 'Montserrat-ExtraBold', color: '#000000', textAlign: 'center', marginTop: responsiveHeight(0.7)},
    textisi: {fontSize: responsiveFontSize(1.3), fontFamily: 'Montserrat-ExtraBold', color: '#FFFFFF', textAlign: 'center', marginTop: responsiveHeight(1.5)}


})

export default TabelPage;