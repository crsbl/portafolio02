import logo from "./logo.svg";
import "./App.css";
import "./styles/constant.css";
import Header from "./components/header/index";
import Main from "./components/main/index";
import React, { useState } from "react";
import Nav from "./components/nav/index";
import Footer from "./components/footer";
import { useDispatch,useSelector } from "react-redux";
import Model from "./components/model/index";

function App() {
  let stateScroll = null;
  const dispatch = useDispatch();
  const [stateModal, setStateModal] = useState({ modelImgPdfStatus: false });





    const selector = useSelector((state) => state.ModelReducer);


  return (
    <>
      <div className="App">
        {/*  <Nav />  */}
        <div
          onScroll={(e) => {
            let heightScroll =
              e.currentTarget.scrollHeight - e.currentTarget.offsetHeight;
            let scroll00 = heightScroll / 100;
            let scrol01 = e.currentTarget.scrollTop / scroll00;
            stateScroll = scrol01;

            console.log(stateScroll);

            if (stateScroll > 10) {
              console.log("hola");
              dispatch({
                type: "PROFILE_MOVI00",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
            }

            if (stateScroll > 25) {
              console.log("xd");
              dispatch({
                type: "PROFILE_MOVI01",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
            }

            if (stateScroll > 40) {
              dispatch({
                type: "PROFILE_MOVI02",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
            }
            if (stateScroll > 60) {
              dispatch({
                type: "PROFILE_MOVI03",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
            }
            if (stateScroll > 70) {
              dispatch({
                type: "TECHNOLOGIES_MOVI00",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
            }
          }}
          className="containerApp"
        >
     {selector.stateModel ? <Model /> : <React.Fragment/>}     
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
