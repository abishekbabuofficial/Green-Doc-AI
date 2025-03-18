import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
// import home1 from "../../img/home1.png";
import home2 from "../../img/hom2.gif";
// import Input from "./input";
// import Backdrop from "@mui/material/Backdrop";
// import CircularProgress from "@mui/material/CircularProgress";
// import { AiFillPlayCircle } from "react-icons/ai";
import { PiPlantFill } from "react-icons/pi";
import { GiPlantSeed, GiReceiveMoney } from "react-icons/gi";
// import { CgSearchFound } from "react-icons/cg";
// import About from "./About";
// import ContactPage from "./ContactPage";
import pattern2 from "../../img/pattern2.png";
// import pattern1 from "../../img/pattern1.png";
import header from "../../img/header.png";
// import tri from "../../img/tri.png";
import ScrollToTop from "../ScrollToTop";
import Footer from "../Footer";
import { motion } from "framer-motion";
// import Language from './Language'
function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      {/* <div id="google_translate_element"> */}
      <div className="container">
        <ScrollToTop />
        <img id="one" src={header} alt="" />
        {/* <img id="two" src={pattern1} alt="" /> */}
        <div className="first-box">
          <img src={pattern2} alt="pattern" />
          <div className="text">
            <motion.span
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Plant Health Companion: Predict, Protect, and Prosper
            </motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span>
              {" "}
              Fed up of{" "}
              <strong>
                Crop diseases <PiPlantFill />
              </strong>{" "}
              and{" "}
              <strong>
                Poor crops <GiPlantSeed />.
              </strong>
            </span>{" "}
            <br />
            Welcome to the Plant Health Companion, your trusted partner in safeguarding 
            the well-being of your plants. Our cutting-edge platform harnesses the power of artificial 
            intelligence to predict and prevent plant diseases. With us, you can enjoy a thriving,
             disease-free garden while learning and connecting with fellow enthusiasts.
          </motion.p>
          <span id="own">Know your plant a little better !</span>
          <div className="btns">
            <Link to="/Input">
              <button id="btn1">
                <span>Get Started</span>
              </button>
            </Link>
            
          </div>
        </div>
        <div className="card-co">
          <img
            src={home2}
            alt=""
          />
        </div>
      </div>
      <Footer />
      {/* </div> */}
    </>
  );
}

export default Home;
