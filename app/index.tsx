import { Image, ScrollView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '@/constants'

const App = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-start items-center h-full px-4">
          <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain' />
          <Image source={images.cards}  className='max-w-[380px] w-full h-[300px]' resizeMode='contain'/>

          <View className="relative mt-5">
            <Text className='text-3xl font-bold text-white text-center'>
              Discover Endless{'\n'} Possibilities With{' '} 
              <Text className='text-secondary-200'>Sora</Text>
            </Text>
            <Image source={images.path} className='w-[136px] h-[15px] absolute -bottom-2 -right-8' resizeMode='contain' />
          </View>

          <Text className='text-sm font-pregular text-gray-100 text-center mt-7'>Where Creativity mees Innovation: 
            embark on a journey of endless possibilities with Sora.
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App