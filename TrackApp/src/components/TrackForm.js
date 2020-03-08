import React,{useContext} from 'react'
import {Context as LocationContext} from '../context/LocationContext'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'

const TrackForm = () => {
    const {state:{name,recording},
        startRecording,
        stopRecording,
        changeName}=useContext(LocationContext)
    return (
        <>
            <Spacer>
                <Input 
                placeholder='Enter name'
                onChangeText={changeName}
                />
            </Spacer>
            {recording?
            <Button title='Stop Recording' onPress={stopRecording}/>:
            <Button title='Start Recording' onPress={startRecording}/>} 
        </>
    )
}

export default TrackForm