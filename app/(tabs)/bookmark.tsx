import { View, Text, Button } from 'react-native'
import React, { useRef, useState } from 'react'
import { ResizeMode, Video } from 'expo-av'

const Bookmark = () => {

  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View>
      <Text>Bookmark</Text>
      <Video
          ref={video}
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          // source={{uri: 'https://player.vimeo.com/video/949579770?h=897cd5e781'}}
          className='w-52 h-72 rounded-[35px] mt-3 bg-white/10'
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
        </View>
    </View>
  )
}

export default Bookmark