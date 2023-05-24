import React, { useEffect, useRef } from 'react';
import './style.scss';
const Popup = (props) => {
const dummyData = [
  {
    number: 0,
    type: 'Adenocarcinoma',
  },
  {
    number: 1,
    type: 'Large Cell Carcinoma',
  },
  {
    number: 2,
    type: 'Normal',
  },
  {
    number: 3,
    type: 'Squamous Cell Carcinoma',
  },
];


    console.log(props)
  const ref = useRef(null);
  useEffect(() => {
    const checkIfClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        props.setTrigger(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickOutside);
    };
  });
  return props.trigger ? (
    <>
      <div className="popup-wrapper">
        <div className="popup-content" ref={ref}>
          {/* <p> {props.data.prediction} </p> */}
          <p>
            {
                dummyData.filter((ele)=>{ return ele.number == props.data.prediction}).map((ele)=>{
                    return(
                        <>

                        {
                            ele.number != '2'?(

                              <p>Patient is suffering due to {ele.type} cancer </p>
                            ):(
                              <p>Patient is normal. No cancer is detected</p>
                            )
                        }
                        </>
                    )
                })
            }
          </p>
        </div>
      </div>
    </>
  ) : (
    ''
  );
};

export default Popup;
