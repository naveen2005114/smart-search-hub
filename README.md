🧠 Smart Search Hub
An intelligent website recommendation system powered by semantic search & AI embeddings.
🚀 About the Project

Smart Search Hub is an AI-powered search assistant that recommends the most relevant websites based on user queries.
Instead of traditional keyword matching, it uses Sentence Transformer embeddings + Cosine Similarity to understand meaning and context.

Whether a user searches for music, movies, makeup, electronics, games, sports, shopping, education, or anything else — Smart Search Hub returns accurate, intelligent, multi-site recommendations.

✨ Features
🔍 AI-Driven Semantic Search

Understands meaning, not just keywords

Uses all-MiniLM-L6-v2 model for embeddings

Ranks websites using cosine similarity

🌐 Multi-Category Recommendations

Supports categories like:

🎵 Music

🎬 Movies

🎮 Games

🍔 Food

🎓 Education

📱 Electronics

🛒 Shopping

💄 Makeup

⚽ Sports

And many more…

⚡ Fast & Accurate Suggestions

Returns top 5 sites per search

Uses precomputed embeddings for speed

Gives multi-site output for each keyword

🖥️ Beautiful UI

Multi-colored UI

Crystal buttons

3D animated components

Modern, responsive search interface

🧩 Modular Code

Fully separated:

backend/

frontend/

database.json

compute_embeddings.py

📂 Project Structure
smart-search-hub/
│── backend/
│   ├── app.py
│   ├── embeddings.npy
│   ├── database.json
│── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│── compute_embeddings.py
│── README.md
│── venv/ (ignored)

🛠️ Tech Stack
Backend

Python

Flask

Flask-CORS

Sentence Transformers

NumPy

Scikit-Learn

Frontend

HTML5

CSS3 (3D animated UI + modern styling)

JavaScript (Fetch API)

AI Model

all-MiniLM-L6-v2 (Sentence Transformer)

🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/naveen2005114/smart-search-hub.git
cd smart-search-hub

2️⃣ Create a virtual environment
python -m venv venv
venv\Scripts\activate

3️⃣ Install dependencies
pip install -r requirements.txt

4️⃣ Generate embeddings (run once)
python compute_embeddings.py

5️⃣ Start backend
python backend/app.py

6️⃣ Open frontend

Open frontend/index.html in your browser.

🌍 Deploying Globally

You can expose your local backend using:

🟣 Ngrok
ngrok http 5000

🔵 LocalTunnel
lt --port 5000

📌 Future Upgrades

🔊 Voice-based search

🌎 Multi-language search

🔥 Auto-learning recommendations

👤 User profiles

📊 Analytics dashboard

📱 Mobile app version

🧑‍💻 Developer

Naveen M
India
AI Enthusiast | Web Developer | Student

GitHub: https://github.com/naveen2005114

⭐ Support

If you like this project, please ⭐ star the repository — it helps a lot!
