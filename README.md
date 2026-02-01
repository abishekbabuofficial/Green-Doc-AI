# 🌿 Green-Doc-AI  
### AI-Powered Plant Disease Detection & Smart Gardening Assistant

Green-Doc-AI is a full-stack AI application that helps users identify plant diseases from images and receive intelligent gardening guidance. The system combines **deep learning image classification** with a **large language model assistant** to provide diagnosis, prevention, and care suggestions.

This project demonstrates the **complete AI pipeline** — from model training to deployment and user interaction.

---

## 🚀 Project Overview

Green-Doc-AI consists of **three major components**:

1. **Model Training (VGG-16 Transfer Learning)**  
2. **Backend AI Inference API (Flask)**  
3. **Frontend Web Application (React)**  

Users can upload plant images for disease detection and ask plant-related questions through an AI assistant.

---

## 🧠 Core Features

- **Plant Disease Detection**  
  Upload an image of a leaf → AI predicts disease class and confidence score.

- **AI Gardening Assistant**  
  Ask plant care questions and receive intelligent responses powered by an LLM.

- **End-to-End AI Workflow**  
  Includes both training notebook and deployed inference system.

- **Full-Stack Implementation**  
  React frontend + Flask backend + Deep Learning model.

---

## 🏗️ System Architecture


| Layer | Technology |
|------|-----------|
| Frontend | React, JavaScript |
| Backend | Flask, Python |
| Model Training | VGG-16 (Transfer Learning) |
| AI Assistant | Groq LLM |

---

## 📘 Model Training (VGG-16)

The notebook **`VGG16_Classifier_Model_Training.ipynb`** contains the full training workflow:

- Dataset loading & preprocessing  
- Image augmentation  
- Transfer learning using pretrained VGG-16  
- Training & validation evaluation  
- Accuracy and loss visualization  
- Model export for inference  

This notebook demonstrates how the plant disease classification model was built before deployment.

---

## 📦 Backend (Flask API)

The backend provides:

### Disease Prediction Endpoint

**POST** `/predict/<plant>`

- Input: Plant image file  
- Output:

```json
{
  "class": "Leaf Blight",
  "confidence": 0.94,
  "details": "Symptoms, prevention and cure..."
}
{
  "question": "How often should I water tomatoes?"
}
```


### ⚙️ Local Setup
Backend
- `cd backend`
= `pip install -r requirements.txt`


Create .env file:

- `GROQ_API_KEY=your_api_key_here`


Run server:

- `python main.py`

Frontend
 - `cd frontend`
 - `npm install`

To run the website: `npm run dev`
