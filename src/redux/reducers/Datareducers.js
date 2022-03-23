
const initialstate={
    notesArray : []
}
const DataReducers=(state=initialstate,action)=>{
    switch(action.type){
        case "ADD_DATA" : return {
            ...state,
            notesArray : state?.notesArray?.concat(action?.payload)
        }
     default : return state
    }
}
export default DataReducers ;