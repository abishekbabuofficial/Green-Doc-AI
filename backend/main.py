import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
from PIL import Image
from ultralytics import YOLO
from dotenv import load_dotenv

# Load model
MODEL_PATH = os.getenv("MODEL_PATH", "best.pt")
model = YOLO(MODEL_PATH)

# API Key
# load_dotenv()
GROQ_API = os.getenv("GROQ_API_KEY")
client = Groq(api_key=GROQ_API)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024 * 1024

def chatbot_response(user_input):
    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant who assists with gardening queries accurately."},
                {"role": "user", "content": user_input}
            ],
            model="llama-3.3-70b-versatile",
        )
        return chat_completion.choices[0].message.content
    except:
        return "AI service temporarily unavailable."

def classify_plant_disease(image):
    results = model(image)
    probs = results[0].probs  # Get the probability object
    predicted_class_index = probs.top1  # Get index of the highest probability class
    predicted_class_name = results[0].names[predicted_class_index]
    confs = probs.top1conf.item()
    return predicted_class_name, confs

@app.route("/predict/<plant>", methods=["POST"])
def predict(plant):
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    img = Image.open(file.stream)
    print(type(img))
    # img = np.expand_dims(img, 0)
    
    # Perform prediction
    label, conf = classify_plant_disease(img)

    print("Predicted!!\n\nLabel:", label, "\nConfidence:", conf)

    prompt = f"What are the prevention, cure, and symptoms for the {label} disease in plants with two points in each?"
    detailed_response = chatbot_response(prompt)
    
    return jsonify({
        'class': label,
        'confidence': float(conf),
        'details': detailed_response
    })

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("question", "")

    if not user_input:
        return jsonify({"error": "No question provided"}), 400

    response = chatbot_response(user_input)
    return jsonify({"message": response})

# Uncomment to run in local
# if __name__ == "__main__":
#     app.run(host='localhost', port=8000, debug=True)
