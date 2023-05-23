import React, { useState } from 'react';
import axios from 'axios';
import Popup from './components/Popup/Popup';
import Loader from './components/Loader/Loader';
import '../src/styles/home.scss'
const Home = () => {

    // State variables
  const [response, setResponse] = useState({});
  const [trigger, setTrigger] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(' ');

//   Image handler
  const handleImage = e => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

// Submission Handler
  const handleSubmit = async e => {
    e.preventDefault();
    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);
    formDatab.append('image', image);
    await axios
      .post('http://127.0.0.1:5000/predict', formDatab)
      .then(res => {
        setResponse(res);
      })
      .catch(error => {
        console.log(error);
      });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 60000);
    setTrigger(true);
  };
  console.log(response);
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-content">
          <div className="home-header">
            <h1>Cancer Prediction System</h1>
            <h3>
              Upload <span>Image</span>
            </h3>
          </div>
          <form onSubmit={e => handleSubmit(e)} className="">
            <input
              className="self-center"
              accept="image/png, image/gif, image/jpeg"
              type="file"
              id="file"
              name="file"
              onChange={handleImage}
            />
            <button
              className="bg-red-100 p-4 rounded-lg w-[10rem]"
              type="submit"
            >
              Submit
            </button>
          </form>

          {/* conditional loader */}
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
        </div>
      </div>
    </div>
  );
};

export default Home;
