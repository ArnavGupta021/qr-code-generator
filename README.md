# QR Code Generator (FastAPI + React.js)

This is a full-stack web application that allows users to generate QR codes from text or URLs. The application consists of a Python backend built with FastAPI and a modern frontend built with React.js.

### ✨ Features

  - **Instant Generation:** Generates QR codes in real-time as the user types.
  - **Image Download:** Provides an option to download the generated QR code as a PNG file.
  - **Responsive Design:** The interface is designed to work seamlessly on both desktop and mobile devices.
  - **Separation of Concerns:** A clear distinction between the frontend and backend allows for easier maintenance and scalability.

-----

### 🚀 Technologies Used

  - **Backend:**

      - **Python 3.10+**: The core programming language.
      - **FastAPI**: A modern, high-performance web framework for building APIs.
      - **Uvicorn**: An ASGI server to run the FastAPI application.
      - **`qrcode`**: A Python library for generating QR codes.
      - **`python-multipart`**: Library for handling form data in FastAPI.

  - **Frontend:**

      - **React.js**: A JavaScript library for building the user interface.
      - **Vite**: A fast and lightweight build tool for modern web development.
      - **HTML & CSS**: For the structure and styling of the components.

-----

### 🛠️ Prerequisites

Before you begin, ensure you have the following software installed on your machine:

  - **Python 3.10+**
  - **Node.js** (includes npm)
  - **pip** (Python package installer)

-----

### 📂 Setup and Installation

Follow these steps to set up the project on your local machine.

1.  **Clone the Repository (or create the folders):**

    ```bash
    # If you have a Git repository, clone it.
    git clone https://github.com/ArnavGupta021/qr-code-generator.git
    cd qr-code-generator
    ```

2.  **Backend Setup**
    Navigate to the `backend` directory, install dependencies, and save the provided `main.py` file.

    ```bash
    cd backend
    pip install "fastapi[all]" qrcode
    # Save the main.py file here.
    ```

3.  **Frontend Setup**
    Navigate to the `frontend` directory, create the React app, and save the provided `App.jsx` file.

    ```bash
    cd ../frontend
    npm create vite@latest . -- --template react
    npm install
    # Replace the content of src/App.jsx with the provided code.
    ```

-----

### ▶️ How to Run

You need to run both the backend and frontend servers simultaneously.

1.  **Start the Backend Server:**
    Open a new terminal window and navigate to the `backend` directory.

    ```bash
    cd backend
    uvicorn main:app --reload
    ```

    The server will be running at `http://127.0.0.1:8000`. Leave this terminal open.

2.  **Start the Frontend Server:**
    Open another terminal window and navigate to the `frontend` directory.

    ```bash
    cd frontend
    npm run dev
    ```

    The frontend will be available at `http://localhost:5173`.

-----

### 🚀 Usage

Open your web browser and go to `http://localhost:5173`. Enter the text or URL you want to encode into the input field and click "Generate". The QR code will appear on the screen, and you can click the "Download QR Code" button to save it.
