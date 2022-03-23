import  ActionType from "../constants/action-types"
console.log( "Action type " , ActionType)

export const SetData=(data)=>{
    console.log("Payload================>",data)
    return{
         type:"ADD_DATA",
         payload : data,
         
    };
}