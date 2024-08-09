import { View, Text, TouchableOpacity } from "react-native";

interface ICustomButtonProps {
  title: string;
  handlePress: () => void;
  containStyles?: string; 
  textStyles?: string; 
  isLoading?: boolean; 
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  title,
  handlePress,
  containStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containStyles} ${
        isLoading ? "opacity-50" : "opacity-100"
      }`}
    >
      <Text className={`text-primary text-lg font-psemibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
