import React from 'react'
import {Text,StyleSheet,Button} from 'react-native'

const TrackListScreen=({navigation})=>{
    return(
        <>
           <Text>TrackList Screen</Text>
           <Button
           title='go to Track detail'
           onPress={()=>navigation.navigate('TrackDetail')}
           />
        </>
    )
}

const styles=StyleSheet.create({

})

export default TrackListScreen