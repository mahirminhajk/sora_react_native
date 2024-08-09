import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"

import { icons } from "@/constants";

interface IFormFieldProps {
    title: string;
    value: string;
    placeholder?: string;
    handleChangeText: (e: string) => void;
    otherStyle?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
};

const  FormField: React.FC<IFormFieldProps> = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyle,
    keyboardType = 'default'
}) => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyle}`}>
        <Text className="text-base text-gray-100">
            {title}
        </Text>
        <View className="w-full h-16 px-4 bg-black-100 border-2 rounded-2xl focus:border-secondary-200 flex-row">
            <TextInput
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                keyboardType={keyboardType}
                className="flex-1 text-white font-psemibold text-base"
                secureTextEntry={title === 'Password' && !showPassword}
            />

            {title === 'Password' && (
                <TouchableOpacity  className="justify-center" onPress={() => setShowPassword(!showPassword)}>
                    <Image source={!showPassword ? icons.eye : icons.eyeHide } className="w-6 h-6" resizeMode="contain" />
                </TouchableOpacity>
            )}

        </View>
    </View>
  )
}

export default FormField