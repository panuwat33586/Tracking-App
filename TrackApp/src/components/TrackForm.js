import React, { useContext } from 'react'
import { Context as LocationContext } from '../context/LocationContext'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { hasStartedLocationUpdatesAsync } from 'expo-location'

const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName } = useContext(LocationContext)
    return (
        <>
            <Spacer>
                <Input
                    placeholder='Enter name'
                    onChangeText={changeName}
                />
            </Spacer>
            <Spacer>
                {recording ?
                    <Button title='Stop Recording' onPress={stopRecording} /> :
                    <Button title='Start Recording' onPress={startRecording} />}
            </Spacer>
            <Spacer>
            {!recording && locations.length ?
                <Button title='Save Recording' />
                : null
            }
            </Spacer>
        </>
    )
}

export default TrackForm