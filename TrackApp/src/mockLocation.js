import * as Location from 'expo-location'

const tenMetersWithDegrees=0.0001

const getLocation=increment=>{
    return {
        timestamp:100000000,
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            altitudeAccuracy:5,
            altitude:5,
            longitude:100.483175+increment*tenMetersWithDegrees,
            latitude:13.7751959+increment*tenMetersWithDegrees
        }
    }
}

let counter=0
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)
    })
    counter++
},1000)