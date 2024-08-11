import { View, Text, FlatList } from 'react-native'

const Trending = ({posts}) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className=''>
          <Text className='text-3xl text-white'>{item.id}</Text>
        </View>
      )}
      horizontal={true}
    />
  )
}

export default Trending