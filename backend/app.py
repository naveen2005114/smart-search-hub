from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/search", methods=["POST"])
def search():
    query = request.json['text']

    results = [
        {
            "name": "YouTube",
            "url": "https://youtube.com",
            "logo": "https://www.youtube.com/s/desktop/fe8/icons/brand.png"
        },
        {
            "name": "Wikipedia",
            "url": "https://wikipedia.org",
            "logo": "https://www.wikipedia.org/static/apple-touch/wikipedia.png"
        }
    ]

    return jsonify(results)

app.run(debug=True)
