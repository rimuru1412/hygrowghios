import React, { useEffect, useRef } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon, { Icons } from '../components/Icons';
import Colors from '../components/Colors';
import * as Animatable from 'react-native-animatable';
import Splash from "./Splash";
import MainMenu from "./MainMenu";
import IrigasiTetesPage from "./IrigasiTetesPage";
import NFTPage from "./NFTPage";
import MistingNFTPage from "./MistingNFTPage";
import AboutPage from "./AboutPage";
import MistingIrigasiPage from './MistingIrigasiPage';
import TabelPage from './TabelPage';


const TabArr = [
    { route: 'Tabel', label: 'Tabel', type: Icons.Feather, icon: 'activity', component: TabelPage },
    { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: MainMenu },
    { route: 'About', label: 'About', type: Icons.Feather, icon: 'info', component: AboutPage },
];

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate(animate1);
            circleRef.current.animate(circle1);
        } else {
            viewRef.current.animate(animate2);
            circleRef.current.animate(circle2);
        }
    }, [focused])

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}>
            <Animatable.View
                ref={viewRef}
                duration={1000}
                style={styles.container}>
                <View style={styles.btn}>
                    <Animatable.View
                        ref={circleRef}
                        style={styles.circle} />
                    <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} />
                </View>
                <Animatable.Text style={styles.text}
                    >
                    {item.label}
                </Animatable.Text>
            </Animatable.View>
        </TouchableOpacity>
    )
}

const TabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
            }} initialRouteName="Home"
        >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='TabBar' component={TabBar} />
                <Stack.Screen name='NFT' component={NFTPage} />
                <Stack.Screen name='IrigasiTetes' component={IrigasiTetesPage} />
                <Stack.Screen name='MistingNFT' component={MistingNFTPage} />
                <Stack.Screen name='MistingIrigasiTetes' component={MistingIrigasiPage} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 70,
        position: 'absolute',
        bottom: 9,
        right: 16,
        left: 16,
        borderRadius: 16,
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: Colors.white,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-15
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 25,
    },
    text: {
        fontSize: 10,
        textAlign: 'center',
        color: Colors.primary,
        fontFamily: 'Montserrat-ExtraBold',
    }
})

export default Router;