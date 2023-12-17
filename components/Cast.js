import React from 'react'
import { Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'


const realName = "John Smith"
const characterName = "Keanu Reeves";
export default function Cast({navigation, casts }) {
    return (
        <View className="my-6">
            <Text className="text-white text-lg mx-4 mb-5">Top Casts</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    casts && casts.map((cast, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                className="mr-4 items-center"
                                onPress={() => navigation.navigate('Person',cast)}
                            >
                                <View
                                    className="overflow-hidden rounded-full h-20 w-30 items-center border border-neutral-500"
                                >
                                    <Image
                                        className="rounded-2xl h-24 w-20"
                                        source={require("../assets/images/castImage1.png")}
                                    />
                                </View>
                                <Text className="text-white text-xs mt-1">
                                    {characterName.length > 10 ? characterName.slice(0, 10) + "..." : characterName}
                                </Text>
                                <Text className="text-neutral-400 text-xs mt-1">
                                    {realName.length > 10 ? realName.slice(0, 10) + "..." : realName}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
