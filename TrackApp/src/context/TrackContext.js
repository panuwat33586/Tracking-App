import createDataContext from './createDataContext'

const trackReducer=(state,action)=>{
    switch(action.type){
        default:
            return state
    }
}

const fetchTracks=dispatch=>()=>{}
const craeteTracks=dispatch=>()=>{}

export const {Provider,Context}=createDataContext(
    trackReducer,
    {fetchTracks,craeteTracks},
    []
)