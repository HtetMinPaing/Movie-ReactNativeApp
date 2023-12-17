import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? "": "mt-3";

const movieName = 'Ant-Man and the Wasp: Quantumania'


export default function MovieScreen () {

    const {params: item} = useRoute();

    const navigation = useNavigation();

    const [isFavourite, toogleFavourite] = useState(false);

    const [cast, setCast] = useState([1,2,3,4,5]);
    useEffect(() => {

    },[item])
  return (
    <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        className="flex-1 bg-neutral-900"
    >
        <View className="w-full">

            {/* Back icon and heart icon */}
            <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4"+topMargin}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                    <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toogleFavourite(!isFavourite)}>
                    <HeartIcon size={35} color={isFavourite? theme.background: "white"} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* Top image background */}
            <View>
                <Image
                    source={require('../assets/images/moviePoster2.png')}
                    style={{width, height:height*0.55}} 
                />
                {/*Gradient*/}
                <LinearGradient
                    colors={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
                    style={{width,height: height*0.40}}
                    start={{x:0.5, y:0}}
                    end={{x:0.5, y:1}}
                    className="absolute bottom-0"
                />
            </View>

            {/* Details and description */}
            <View style={{marginTop: -(height*0.09)}} className="space-y-3">
                
                {/* Title */}
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {movieName}
                </Text>

                {/* Detail */}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released * 2020 * 170 min
                </Text>

                {/* Genres */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">Action *</Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">Action *</Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">Action </Text>
                </View>

                {/* Description */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.
                </Text>

                <View>
                    <Cast navigation={navigation} casts={cast} />
                </View>
            </View>
        </View>
    </ScrollView>
  )
}