import React, { useEffect, useRef } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
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
                    return (
                      <>
                        {ele.number != '2' ? (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              flexDirection:"column",
                              alignItems: 'center',
                            }}
                          >
                            <p>
                              Patient is suffering due to {ele.type} cancer{' '}
                            </p>
                            <Link to={'/doctor-directory'}>
                              <button
                                style={{
                                  background: 'white',
                                  color: '#cc66ff',
                                  padding:"10px",
                                  borderRadius:"6px"
                                }}
                              >
                                Consult doctor
                              </button>
                            </Link>
                          </div>
                        ) : (
                          <p>Patient is normal. No cancer is detected</p>
                        )}
                      </>
                    );
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
