import React, { useState }   from "react";
import axios from 'axios'
import Popup from "./components/Popup/Popup";
import Loader from "./components/Loader/Loader";
const App =()=>{
    const [response, setResponse]= useState({})
    const [trigger, setTrigger] = useState(false)
    const [loading, setLoading] = useState(false);
   const handleSubmit=async()=>{
       await axios.post('http://localhost:5000/api/predict', {"name":"debmalya"} ).then((res)=>{setResponse(res)}).catch((error)=>{console.log(error)})
       setLoading(true);
       setTimeout(() => {
         setLoading(false);
       }, 3000);
        setTrigger(true)
   }
   console.log(response)
//    console.log(response.data.prediction)
//       console.log(response.data.data);
    return (
      <div>
        <button onClick={() => handleSubmit()}>Submit</button>
        {loading ? (
          <>
            <Loader></Loader>
          </>
        ) : (
          <>
            <Popup
              data={response.data}
              trigger={trigger}
              setTrigger={setTrigger}
            />
          </>
        )}
        <p>Cancer Detection</p>
      </div>
    );
}

export default  App