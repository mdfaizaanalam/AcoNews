# 📰 Acowale News App

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/API-Express-lightgrey?logo=express)
![Firebase](https://img.shields.io/badge/Hosting-Firebase-orange?logo=firebase)
![Render](https://img.shields.io/badge/Backend%20Hosting-Render-purple?logo=render)
![License](https://img.shields.io/badge/License-MIT-blue)

Acowale News App is a dynamic, user-friendly news platform that fetches the latest articles from various sources. Built using React.js for the frontend and Node.js/Express.js for the backend, it provides a seamless news browsing experience.

## 📋 Table of Contents
- [🚀 Introduction](#-introduction)
- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [⚙️ Setup and Installation](#️-setup-and-installation)
- [🌐 Deployment](#-deployment)
- [😅 Challenges Faced](#-challenges-faced)
- [📖 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

## 🚀 Introduction
The Acowale News App is a comprehensive news portal designed to keep users informed with up-to-date news articles. This project was a fantastic learning journey, covering aspects of frontend design, backend API integration, and deployment.

## ✨ Features
- 📰 Fetches and displays the latest news articles from various sources.
- 📱 Responsive design using Tailwind CSS for a seamless experience across devices.
- 🔄 Real-time news updates using live news APIs.
- 🌐 Backend built with Node.js and Express.js, deployed on Render.
- 📤 Frontend deployed on Firebase Hosting.

## 🛠️ Technologies Used
- **Frontend:** ![React](https://img.shields.io/badge/-React-61DAFB?logo=react) HTML, CSS, Tailwind CSS
- **Backend:** ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js) ![Express](https://img.shields.io/badge/-Express-000000?logo=express)
- **API:** News API
- **Deployment:** ![Firebase](https://img.shields.io/badge/-Firebase-FFCA28?logo=firebase) ![Render](https://img.shields.io/badge/-Render-764ABC?logo=render)
- **Tools:** npm, Git

## ⚙️ Setup and Installation

### Prerequisites
- Node.js and npm installed
- Firebase CLI installed (`npm install -g firebase-tools`)

### Backend Setup
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/acowale-news-app.git
    ```
2. **Navigate to the backend folder:**
    ```bash
    cd acowale-news-app/backend
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Create a `.env` file to store your API keys and environment variables:**
    ```env
    NEWS_API_KEY=your_api_key_here
    ```
5. **Start the backend server:**
    ```bash
    npm start
    ```

### Frontend Setup
1. **Navigate to the frontend folder:**
    ```bash
    cd ../frontend
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Create a `.env` file in the frontend directory for API URL:**
    ```env
    REACT_APP_API_URL=https://aconews-lhp5.onrender.com
    ```
4. **Start the frontend server:**
    ```bash
    npm start
    ```

## 🌐 Deployment

### Backend Deployment on Render
1. **Sign up or log in to [Render](https://render.com/).**
2. **Create a new Web Service, connect your backend repository, and specify the start command (`npm start`).**
3. **Add environment variables in Render to match those in your local `.env` file (e.g., `NEWS_API_KEY`).**
4. **Deploy the service and obtain the live URL of the backend.**

### Frontend Deployment on Firebase
1. **Install Firebase CLI (if not already installed):**
    ```bash
    npm install -g firebase-tools
    ```
2. **Log in to Firebase:**
    ```bash
    firebase login
    ```
3. **Initialize Firebase in the frontend directory:**
    ```bash
    firebase init
    ```
4. **Select "Hosting" and choose the existing Firebase project.**
5. **Set the build directory to `build`.**
6. **Build your React app:**
    ```bash
    npm run build
    ```
7. **Deploy the frontend to Firebase:**
    ```bash
    firebase deploy
    ```

## 😅 Challenges Faced
- **Backend Deployment:** Initial configuration issues arose during deployment on Render. Adjusting environment variables and server settings resolved these issues.
- **Frontend Firebase Deployment:** Incorrect build paths and routing configurations caused initial deployment failures. Updating Firebase settings to handle single-page application routing fixed the problems.

## 📖 Usage
- **Visit the deployed frontend URL (e.g., `https://your-app.web.app`) to explore the latest news.**
- **Articles are fetched in real-time from the backend API.**

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository, open an issue, or submit a pull request.

## 📜 License
This project is licensed under the MIT License.
