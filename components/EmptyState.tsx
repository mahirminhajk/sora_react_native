import { View, Text, Image } from "react-native";

import { images } from "@/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <View>
        <Text className="text-xl text-center font-psemibold text-white">{title}</Text>
        <Text className="font-pmedium text-sm text-gray-100 mt-2">{subtitle}</Text>
      </View>

      <CustomButton title="Creaet video" handlePress={() => router.push('/create')} containStyles="w-full my-5" />
    </View>
  );
};

export default EmptyState;
