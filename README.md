# 🏡 House Price Prediction – React + TensorFlow.js

This project is a simple **Machine Learning + React** application that predicts house prices using **TensorFlow.js** inside the browser.

---

## 🚀 Features
- React frontend
- TensorFlow.js ML model
- Form to input house data (sqft, BHK, location, etc.)
- Live price prediction
- Clean folder structure
- Easy to run on any computer

---

# 📦 Project Structure



/src
├── components/
│ ├── Header.jsx
│ ├── PredictForm.jsx
│ └── Result.jsx
├── ml/
│ ├── model.js
│ ├── preprocess.js
│ └── sampleData.js
├── App.jsx
├── index.js
└── styles.css


---

# 🛠️ Installation & Setup

Follow these steps to run the project.

---

# 1️⃣ Install Node.js
Download & install Node.js from:
https://nodejs.org/

To confirm installation:
```sh
node -v
npm -v

2️⃣ Clone the Project

If using GitHub:

git clone https://github.com/santhoshofcl/House-Price-React-TensorFlow.git
cd house-price-react


If downloaded as ZIP:

Extract the folder

Open it in VS Code

Open terminal

3️⃣ Install Dependencies

Inside project folder:

npm install


If TensorFlow.js is missing:

npm install @tensorflow/tfjs

4️⃣ Start Development Server

Run:

npm start


React app will open automatically:

http://localhost:3000

5️⃣ Fixing Common Errors
❗ Error: Module not found – App.jsx

Rename the file correctly:

If the file is APP.jsx

Rename to App.jsx

React is case-sensitive.

❗ Error: port already in use

Run:

npm start --port 3001