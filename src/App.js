// import React, { useState } from "react";
// function App() {
//   const [Array, setArray] = useState([]);
  // const [Subject, setSubject] = useState("");
  // const [Note, setNote] = useState("");

  // const OnChangeSubject = (val) => {
  //   setSubject(val.target.value);
  // };

  // const OnChangeNote = (val) => {
  //   setNote(val.target.value);
  // };

//   const AddingData = () => {
//     setNote("");
//     setNote("");
//     setArray([
//       ...Array,
//       {
//         Subject: Subject,
//         Note: Note,
//       },
//     ]);
//   };
//   const DeleteData=(index)=>{
//     console.log("Delete Data run index",index);
//     const Filterarray=Array.filter((e1,item)=>item!==index);
//     setArray(Filterarray);
//   }
//   const EditingData=(index,element)=>{
//     const FilterEditingrray=Array.filter((e1,item)=>item===index);
//     console.log(FilterEditingrray);
//     setSubject(element.Subject);
//     setNote(element.Note);
//   }
//   return (
//     <div className="container">
//       <h4>Enter You Notes Here</h4>

      // <div className="mb-3">
      //   <label htmlFor="exampleFormControlInput1" className="form-label">
      //     Subject :
      //   </label>
      //   {/* =============================================Enter your SUBJECT Here============================================================ */}
      //   <input
      //     type="text"
      //     className="form-control"
      //     value={Subject}
      //     onChange={OnChangeSubject}
      //     id="exampleFormControlInput1"
      //     placeholder="Enter Your Book Name here "
      //   />
      // </div>
      // <div className="mb-3">
      //   <label htmlFor="exampleFormControlTextarea1" className="form-label">
      //     Enter Your Notes Here
      //   </label>
      //   {/* =============================================Enter your Note Here============================================================ */}
      //   <textarea
      //     onChange={OnChangeNote}
      //     value={Note}
      //     className="form-control"
      //     id="exampleFormControlTextarea1"
      //     rows="3"
      //   ></textarea>
      // </div>
      // <button
      //   type="submit"
      //   disabled={Subject === "" || Note===""}
      //   onClick={AddingData}
      //   className="btn btn-dark"
      // >
      //   Add
      // </button>
//       <div className="row my-3 ">
//         {Array.map((element,index) => {
//           return (
//             <>
//               <div className="col-md-3 mx-2 my-2">
//                 Data Number:{index+1}
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">{element.Subject}</h5>
//                     <p className="card-text">{element.Note}</p>
//                   </div>
//                   </div>
//                   <button
//         type="button"
//         disabled={Subject === ""}
//         onClick={()=>EditingData(index,element)}
//         className="btn btn-dark"
//       >
//         Edit  
//       </button>
//                   <button
//         type="button"
//         onClick={()=>DeleteData(index)}
//         className="btn btn-dark"
//       >
//         Delete 
//       </button>
                
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { SetData } from './redux/action/Products-Action';
// import ActionType from './redux/constants/action-types';


function App() {
  const [Subject, setSubject] = useState("");
  const [Note, setNote] = useState("");
  const {notesArray} = useSelector((state=>state.DataReducers));
  // console.log(notesArray,"wddddedewd")
  
  // console.log("This is my state 2222 =================> " , notesArray)
  const dispatch=useDispatch();
  const OnChangeSubject = (val) => {
    setSubject(val.target.value);
  };
  const OnChangeNote = (val) => {
    setNote(val.target.value);
  };
const EditData=(element)=>{
setNote(element.note);
setSubject(element.subject);
}

  // console.log("This is Array ====================> " , res?.notesArray)
  
  return (
   <>
   <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Subject :
        </label>
        {/* =============================================Enter your SUBJECT Here============================================================ */}
        <input
          type="text"
          className="form-control"
          value={Subject}
          onChange={OnChangeSubject}
          id="exampleFormControlInput1"
          placeholder="Enter Your Book Name here "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter Your Notes Here
        </label>
        {/* =============================================Enter your Note Here============================================================ */}
        <textarea
          onChange={OnChangeNote}
          value={Note}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={Subject === "" || Note===""}
        onClick={()=>
          dispatch(SetData({
          note : Note,
          subject : Subject
        
        }))}
        className="btn btn-dark"
      >
        Add
      </button>
      {notesArray.map((element)=>{
        return(<>
        <h2>Subject------{element.note}</h2>
        <h2>Note----------{element.subject}</h2>
        <button onClick={()=>EditData(element)} className="btn btn-primary">Edit</button>
        </>)
      })}
   </>
  )
}

export default App