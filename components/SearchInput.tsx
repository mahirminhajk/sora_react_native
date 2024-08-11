import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants";

interface ISearchInputProps {
  value: string;
  handleChangeText: (e: string) => void;
  otherStyle?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

const SearchInput: React.FC<ISearchInputProps> = ({
  value,
  handleChangeText,
  otherStyle,
  keyboardType = "default",
}) => {

  return (
    <View className="w-full h-16 px-4 bg-black-100 border-2 rounded-2xl focus:border-secondary-200 flex-row space-x-4">
      <TextInput
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        keyboardType={keyboardType}
        className="flex-1 text-white font-psemibold text-base mt-0.5"
      />

      <TouchableOpacity
        className="justify-center"
        onPress={() => {}}
      >
        <Image
          source={ icons.search}
          className="w-5 h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
