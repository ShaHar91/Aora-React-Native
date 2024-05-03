import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, isSecure = false, ...props }) => {

    return (

        <View className="flex h-14 flex-row items-center space-x-4 w-full  px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
            <TextInput
                className="text-base h-full text-white flex-1 font-pregular"
                style={{ marginTop: 0, marginVertical: 0}}
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#7B7B8B"
                onChangeText={handleChangeText}
                {...props}
            />

            <TouchableOpacity>
                <Image
                    source={icons.search}
                    className="w-5 h-5"
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput