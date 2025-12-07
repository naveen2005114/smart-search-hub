# 🔍 Smart Search Hub

Smart Search Hub is a powerful web-based intelligent search system that allows users to browse **movies, music, books, news, and more** from a single unified platform.  
It uses a Python Flask backend and a responsive HTML/CSS/JS frontend to deliver fast and accurate results.

---

## 🌟 Features

- 🔎 **Universal Smart Search** – Search movies, music, books, or any topic.
- ⚡ **Fast Real-Time Results** – Optimized backend API for quick responses.
- 🎵 **Category-Based Suggestions** – Movies, songs, books & more.
- 🌐 **Flask REST API** – Simple and fast Python backend.
- 📱 **Responsive Frontend** – Built with HTML, CSS, and JavaScript.
- 📂 **Expandable Database** – Easily add more items in `database.json`.
- 🔁 **Live Server + Ngrok / LocalTunnel Support** – Public access to your project.

---

## 📂 Project Structure

```
smart-search-hub/
│
├── backend/
│   ├── app.py
│   ├── database.json
│   ├── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── README.md
└── venv/
```

---

## 🚀 How It Works

### **Frontend:**
- User enters a search keyword (movie, music, book, etc.).
- JavaScript sends the query to the Flask backend using `fetch()`.

### **Backend (Flask):**
- Reads data from `database.json`.
- Matches the search term.
- Returns results as JSON.

### **Output:**
- Results appear instantly on the webpage.

---

## 🛠️ Installation Guide

### **1. Clone the Repository**
```bash
git clone https://github.com/naveen2005114/smart-search-hub.git
cd smart-search-hub
```

---

## 🔧 Backend Setup (Flask)

### **2. Create a virtual environment**
```bash
python -m venv venv
```

### **3. Activate it**
Windows:
```bash
venv\Scripts\activate
```

### **4. Install required packages**
```bash
pip install -r backend/requirements.txt
```

### **5. Run the backend**
```bash
python backend/app.py
```

The backend runs at:

```
http://127.0.0.1:5000
```

---

## 🎨 Frontend Setup

Just open `frontend/index.html` in your browser, OR use VS Code Live Server.

---

## 🌐 Make Your Website Public

You can expose your local server using:

### **Ngrok**
```bash
ngrok http 5000
```

### **LocalTunnel**
```bash
lt --port 5000
```

---

## 📦 Update the Database

All search items are stored here:

```
backend/database.json
```

To add more:

```json
{
  "type": "movie",
  "title": "Avengers Endgame",
  "year": 2019,
  "description": "Marvel superhero movie."
}
```

Save the file → restart backend → new results will appear.

---

## 🧪 Example Search Queries

| Search Keyword | What Happens |
|----------------|--------------|
| "music" | Shows music list |
| "movie" | Displays movie database |
| "Harry Potter" | Finds matching movies/books |
| "romantic songs" | Shows romantic playlist |
| "technology news" | Searches news database |

---

## 🧑‍💻 Author

**Naveen (Hari Saravanan)**  
GitHub: https://github.com/naveen2005114  

---

## ⭐ Support

If you like this project, please ⭐ star the repository on GitHub!

---

## 📝 License

This project is licensed under the MIT License.

