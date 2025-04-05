from flask import Flask, request, jsonify, send_from_directory
from gtts import gTTS
import os
import uuid  # For generating unique filenames
from flask_cors import CORS  # For handling CORS

app = Flask(__name__)

# Enable CORS for all routes (or restrict to specific origins)
CORS(app)

# Folder where the audio files will be saved
AUDIO_FOLDER = 'audio_files'
if not os.path.exists(AUDIO_FOLDER):
    os.makedirs(AUDIO_FOLDER)

@app.route('/text-to-speech', methods=['POST'])
def text_to_speech():
    # Ensure that the incoming request is JSON
    if request.is_json:
        # Extract the text data from the JSON request
        text = request.json.get("text")
        
        if not text:
            return jsonify({"error": "No text provided"}), 400

        try:
            # Convert text to speech using gTTS
            tts = gTTS(text=text, lang='en')  # You can change the language here

            # Generate a unique filename using uuid
            filename = f"{uuid.uuid4()}.mp3"
            filepath = os.path.join(AUDIO_FOLDER, filename)

            # Save the audio file to the folder
            tts.save(filepath)

            # Return the relative file path as a JSON response (important: no full file path)
            return jsonify({"audio_file_path": f"/audio_files/{filename}"}), 200

        except Exception as e:
            # Handle errors if the text-to-speech conversion fails
            return jsonify({"error": f"Error converting text to speech: {str(e)}"}), 500
    else:
        return jsonify({"error": "Content-Type must be application/json"}), 415

# Route to serve audio files from the audio_files folder
@app.route('/audio_files/<filename>')
def serve_audio(filename):
    try:
        # Make sure the file exists and serve it
        return send_from_directory(AUDIO_FOLDER, filename, mimetype='audio/mpeg')
    except FileNotFoundError:
        return jsonify({"error": "Audio file not found"}), 404

if __name__ == "__main__":
    # Run the Flask app locally on port 5000
    app.run(host="0.0.0.0", port=5000)
