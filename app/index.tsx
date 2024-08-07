import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-pblack'>Sora!</Text>
      <StatusBar style="auto" />
      <Link className='text-red-600 text-3xl' href="/home">Go To Home</Link>
    </View>
  )
}

export default App