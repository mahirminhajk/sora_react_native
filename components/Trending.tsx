// @ts-nocheck
import { icons } from '@/constants';
import { Video, ResizeMode } from 'expo-av';
import { useRef, useState } from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';

const zoomIn = {
  0: {
    opacity: 0.8,
    scale: 0.9,
  },
  1: {
    opacity: 1,
    scale: 1.1,
  },
};

const zoomOut = {
  0: {
    opacity: 1,
    scale: 1,
  },
  1: {
    opacity: 0.8,
    scale: 0.9,
  },
};

const TrendingItem = ({item, activeItem}) => {

  const [play, setPlay] = useState(false);

  return (
    <Animatable.View className='mr-5' animation={activeItem === item.$id ? zoomIn : zoomOut} duration={500}>
      {play ? (
        <Video
          source={{uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
          className='w-52 h-72 rounded-[35px] mt-3 bg-white/10'
          resizeMode={ResizeMode.COVER}
          useNativeControls
          shouldPlay
          isMuted={false}
          onPlaybackStatusUpdate={(status) => {
            if(!status.isPlaying) {
              setPlay(false);
            }
          }}
        />
      ):(
        <TouchableOpacity  onPress={() => setPlay(true)} className='relative justify-center items-center'>
          <ImageBackground  source={{uri: item.thumbnail}} className='w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40' resizeMode='cover'/>
          <Image source={icons.play} className='w-12 h-12 absolute' resizeMode='contain' />
        </TouchableOpacity>
      )}
    </Animatable.View>
  )
};

const Trending = ({posts}) => {

  const [activeItem, setActiveItem] = useState(posts[1]);

  const viewableItemsChanged = ({ viewableItems }) => {
    if(viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      horizontal={true}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70
      }}
      contentInset={{right: 170}}
    />
  )
}

export default Trending