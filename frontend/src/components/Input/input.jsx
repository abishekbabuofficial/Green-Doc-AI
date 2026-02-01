
const prevention = {
  "Apple___Apple_scab": {
      "Symptoms": "Dark scabby lesions on leaves and fruit, reduced fruit quality.",
      "Prevention": "Choose resistant apple varieties, maintain good sanitation, and use fungicides preventively.",
      "Cure": "Remove and destroy infected plant material, apply appropriate fungicides, and prune to improve air circulation."
  },
  "Apple_Black_rot": {
      "Symptoms": "Dark circular lesions on leaves and fruit, fringed margins.",
      "Prevention": "Prune for better air circulation, remove infected material, and use fungicides preventively.",
      "Cure": "Prune affected branches, apply fungicides, and maintain good sanitation."
  },
  "Grape_Black_rot": {
      "Symptoms": "Brown circular lesions on leaves and fruit, with black dots (pycnidia).",
      "Prevention": "Prune to improve air circulation, manage weeds, and use fungicides preventively.",
      "Cure": "Remove infected fruit, apply fungicides, and maintain proper vineyard hygiene."
  },
  "Citrus Greening (Huanglongbing)": {
      "Symptoms": "Yellowing of leaves, stunted growth, and bitter, misshapen fruit.",
      "Prevention": "Use disease-free plants, control insect vectors, and practice good orchard hygiene.",
      "Cure": "There is no cure; infected trees should be removed to prevent further spread."
  },
  "Tomato_Late_blight": {
      "Symptoms": "Brown lesions on leaves and fruit, rapid spread in wet conditions.",
      "Prevention": "Apply fungicides preventively, improve air circulation, and avoid overhead watering.",
      "Cure": "Remove infected plant parts, apply appropriate fungicides, and destroy infected debris."
  },
  "Squash_Powdery_mildew": {
      "Symptoms": "White powdery spots on leaves, reduced plant vigor.",
      "Prevention": "Plant resistant varieties, maintain proper spacing, and avoid overhead watering.",
      "Cure": "Apply fungicides, prune affected leaves, and increase air circulation."
  },
  "Potato_Early_blight": {
      "Symptoms": "Dark circular lesions on potato leaves, early defoliation.",
      "Prevention": "Rotate crops, space plants properly, and apply fungicides preventively.",
      "Cure": "Remove infected leaves, apply fungicides, and practice good field sanitation."
  },
  "Rose_Black_Spot": {
      "Symptoms": "Black spots with fringed edges on rose leaves, leading to defoliation.",
      "Prevention": "Plant disease-resistant rose varieties, maintain good air circulation, and avoid overhead watering.",
      "Cure": "Remove and destroy infected leaves, apply fungicides, and prune to improve air circulation."
  },
  "Tomato_Blossom_End_Rot": {
      "Symptoms": "Dark, sunken areas on the blossom end of tomatoes.",
      "Prevention": "Ensure consistent watering, maintain proper calcium levels in the soil, and avoid over-fertilization.",
      "Cure": "Correct calcium deficiencies by adding calcium-rich amendments and removing affected fruit."
  },
  "Citrus_Canker": {
      "Symptoms": "Raised, corky lesions on citrus leaves, fruit, and stems.",
      "Prevention": "Prune for air circulation, practice good sanitation, and avoid overhead watering.",
      "Cure": "Remove and destroy infected plant material, apply copper sprays, and maintain orchard cleanliness."
  },
  "Cucumber_Downy_Mildew": {
      "Symptoms": "Yellow lesions on cucumber leaves with grayish mold on the underside.",
      "Prevention": "Plant disease-resistant cucumber varieties, maintain good spacing, and avoid overhead watering.",
      "Cure": "Apply fungicides, remove affected leaves, and improve air circulation."
  },
  "Potato_Wart_Disease": {
      "Symptoms": "Warty, scabby growths on potato tubers.",
      "Prevention": "Use disease-free planting material, practice crop rotation, and avoid planting in affected soil.",
      "Cure": "There is no cure; prevent further infestation by planting in unaffected areas."
  },
  "Pear_Fire_Blight": {
      "Symptoms": "Blackened, scorched-looking leaves and branches on pear trees.",
      "Prevention": "Prune affected branches, avoid overhead watering, and apply antibiotics preventively.",
      "Cure": "Remove infected branches, apply antibiotics as soon as symptoms appear, and maintain orchard cleanliness."
  },
  "Squash_Vine_Borer": {
      "Symptoms": "Wilting and death of squash plants due to larvae tunneling in stems.",
      "Prevention": "Protect plants with row covers, check for eggs on stems, and practice crop rotation.",
      "Cure": "Remove and destroy infested stems, and use biological control methods."
  },
  "Blueberry_Anthracnose": {
      "Symptoms": "Dark, sunken lesions on blueberry fruit.",
      "Prevention": "Plant disease-resistant blueberry varieties, maintain good spacing, and prune for air circulation.",
      "Cure": "Remove and destroy infected fruit, apply fungicides, and maintain proper garden hygiene."
  },
  "Peach_Leaf_Curl": {
    "Symptoms": "Curling, reddish leaves on peach trees in spring.",
    "Prevention": "Apply fungicides before bud swell, prune for air circulation, and avoid overhead watering.",
    "Cure": "Remove and destroy affected leaves, and maintain orchard cleanliness."
},
"Grape_Powdery_Mildew": {
    "Symptoms": "White powdery growth on grape leaves and fruit.",
    "Prevention": "Plant disease-resistant grape varieties, maintain good spacing, and apply fungicides preventively.",
    "Cure": "Prune affected leaves, apply fungicides, and maintain vineyard cleanliness."
}
}

const preventionOnly = Object.fromEntries(
  Object.entries(prevention).map(([key, value]) => {
    if (value && value.Prevention) {
      return [key, value];
    }
  })
);

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./input.css";
import { LuUploadCloud } from "react-icons/lu";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import header from "../../img/header.png";

function Input() {
  const [image, setImage] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState('');
  const [prevent,setPrevent] = useState('');
  const [per, setPer] = useState([]);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState('potato');

  const onFileChange = (event) => {
    const uploadedImage = event.target.files[0];
    setSelectedFile(uploadedImage);
    if (!uploadedImage) return;
    setImage(URL.createObjectURL(uploadedImage));
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post(`${import.meta.env.VITE_API_URL}/predict/${url}`, formData)
      .then((response) => {
        console.log(response);
        const obj = response;
        console.log("Data Obtained: ", obj["data"])
        // setData(JSON.stringify(obj));
        setData(obj["data"].class);
        setPrevent(obj["data"].details);
        setPer(obj["data"].confidence);
      });
  };

  const clearData = () => {
    setSelectedFile(null);
    setImage(false);
    setData(null);
    setPer(null);
  };

  return (
    <>
      <h1 id="head">Give it a try </h1>
      <div className="homepage">
        <img id="one" src={header} alt="" />
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="box1"
        >
          {!image && (
            <div>
              <p style={{textAlign:"center"}}>Upload a photo of your <strong> disease plant leaf </strong></p>
              <div className="input-box">
                <span>
                  <LuUploadCloud />
                </span>
                <span id="up-text">Click Here for Upload image</span>
                <input
                  className="input"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={onFileChange}
                />
              </div>{" "}
            </div>
          )}
          {image && <img id="upload-img" src={image} alt="Uploaded plant" />}
          <div className="btn-box">
            <button id="btni" onClick={onFileUpload}>
              Identify
            </button>
            <button id="btni" onClick={clearData}>
              Clear Data
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="box2"
        >
          <div className="text2">
            <h1 id="h1">Result</h1>
            <span id="d">
              {" "}
              <strong>Disease :</strong> {data}
            </span>{" "}
            <br />
            <span id="c">
              {" "}
              <strong>Confidence :</strong> {(per * 100).toFixed(2)}%
            </span>
          </div>
          {/* {console.log(prevent)} */}
          
        </motion.div>
        <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="box3"
        >
          <div className="treat">
              <h1>Treatment</h1>
              <Markdown>{prevent}</Markdown>
            </div>
        </motion.div>
      </div>
    </>
  );
}

export default Input;
