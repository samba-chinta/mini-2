from flask import Flask, request
import face_recognition as fr
import cv2
import numpy as np
import os

app = Flask(__name__)

@app.route("/")
def home():
    return "Backend Server Started!"

@app.route("/recognize-faces", methods=['GET'])
def demo():
    postedImg = request.args.get('file')
    path = "./train/"
    known_names = []
    known_name_encodings = []
    images = os.listdir(path)

    for _ in images:
        image = fr.load_image_file(path + _)
        image_path = path + _
        encoding = fr.face_encodings(image)[0]
        known_name_encodings.append(encoding)
        known_names.append(os.path.splitext(os.path.basename(image_path))[0].capitalize() + "@gvpce.ac.in")
    print(known_names)

    test_image = "../server/uploads/{}".format(postedImg)
    image = cv2.imread(test_image)
    face_locations = fr.face_locations(image)
    face_encodings = fr.face_encodings(image, face_locations)
    name = []
    for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        matches = fr.compare_faces(known_name_encodings, face_encoding)
        face_distances = fr.face_distance(known_name_encodings, face_encoding)
        best_match = np.argmin(face_distances)
        if matches[best_match]:
            name.append(known_names[best_match])
    return {"peopleInImage": name}

if __name__ == "__main__":
    app.run(debug=True)