import {  View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '@/constants'
import FormField from '@/components/FormField'
import { useState } from 'react'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image source={images.logo} className='w-[115px] h-[35px]' resizeMode='contain' />
          <Text className='text-2xl mt-10 font-psemibold text-white'>Log in To Sora</Text>
          <FormField title='Email' placeholder='Enter your email' value={form.email} handleChangeText={(e) => setForm({...form, email: e})}  otherStyle="mt-7" keyboardType="email-address" />

          <FormField title='Password' placeholder='Enter your Password' value={form.password} handleChangeText={(e) => setForm({...form, password: e})}  otherStyle="mt-7"  />
        
        <CustomButton title='Sign In' handlePress={submit} containStyles='mt-7' isLoading={loading} />
        
        <View className='justify-center pt-5 flex-row gap-2'> 
          <Text className='text-lg text-gray-100 font-pregular'>
            Don't have account ?
          </Text>
          <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
        </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn