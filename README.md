# Bitcoin Mining Calculator 

## Introduction 

This project is a Bitcoin Mining Calculator that allows users to input mining parameters and receive profitability estimates. The application consists of a frontend built with React and Tailwind CSS, and a backend API built with FastAPI.

## Setup Instructions 

### Prerequisites 
 
- **python3**
 
- **Node.js**  and **npm**
 
- **Git**  installed on your machine

### Clone the Repository 


```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### Backend Setup 
 
1. **Navigate to the backend directory:** 

```bash
cd backend
```
 
2. **Create and activate a virtual environment:** 

```bash
python3 -m venv venv
source venv/bin/activate  # For Windows use `venv\Scripts\activate`
```
 
3. **Install backend dependencies:** 

```bash
pip install -r requirements.txt
```
 
4. **Run the backend server:** 

```bash
uvicorn main:app --reload
```
The backend API should now be running at `http://127.0.0.1:8000`.

### Frontend Setup 
 
1. **Open a new terminal window/tab**  (since the backend is running in the current one).
 
2. **Navigate to the frontend directory:** 

```bash
cd frontend
```
 
3. **Install frontend dependencies:** 

```bash
npm install
```
 
4. **Run the frontend application:** 

```bash
npm start
```
The frontend should now be running at `http://localhost:3000`.

### Notes 
 
- **Ensure the backend server is running**  before starting the frontend application.
 
- The frontend application communicates with the backend API at `http://127.0.0.1:8000`.
 
- If you encounter CORS issues, ensure that the backend's CORS settings allow requests from `localhost:3000`.

## User-Centric Design and Functionality Approach 

In designing this Bitcoin Mining Calculator, I focused on creating a user-friendly and intuitive interface that provides clear and actionable information to the user. Here's how I approached user-centric design and functionality:
1. **Clear and Intuitive Input Fields**  
- **Descriptive Labels and Placeholders:**  Each input field includes a clear label and placeholder text to guide the user on what data to enter (e.g., "Hash Rate (TH/s)", "e.g., 100").
 
- **Validation and Default Values:**  Input fields are pre-populated with default values and include validation to prevent invalid entries, ensuring a smooth user experience.
2. **Responsive and Accessible Design**  
- **Responsive Layout:**  The application is designed to be responsive, providing a consistent experience across desktop and mobile devices.
 
- **Accessibility Considerations:**  Proper use of semantic HTML elements and focus states enhances accessibility for users relying on assistive technologies.
3. **Feedback and Error Handling**  
- **Loading Indicators:**  A spinner is displayed while calculations are being processed, keeping the user informed about the application's status.
 
- **Error Messages:**  Clear and concise error messages are shown if any issues arise (e.g., incomplete form fields), helping users quickly identify and correct problems.
4. **Comprehensive Results Presentation**  
- **Organized Display:**  Results are grouped logically and presented in a clean, easy-to-read format, using cards to separate different pieces of information.
 
- **Breakeven Analysis:**  A breakeven disclaimer is included to inform users about the time it will take to recoup their initial investment, adding valuable context to the results.
 
- **Number Formatting:**  Results are formatted for readability, using appropriate number formats and units (e.g., USD, BTC, days).
5. **Aesthetic and Engaging Interface**  
- **Consistent Styling:**  Tailwind CSS is used to maintain a consistent look and feel throughout the application.
 
- **Visual Enhancements:**  Gradients, hover effects, and transitions are applied to buttons and elements to create a more engaging user experience.
 
- **Typography and Spacing:**  Thoughtful use of typography, spacing, and alignment improves readability and aesthetic appeal.
6. **Simplified User Flow**  
- **Single-Page Interaction:**  Users can input data and view results on the same page without unnecessary navigation, streamlining the interaction process.
 
- **Clear Call-to-Action:**  The "Calculate" button is prominently displayed, encouraging users to initiate the calculation after entering their data.
7. **Technical Considerations**  
- **Efficient State Management:**  React hooks are used to manage state effectively, ensuring the application remains responsive and performant.
 
- **Modular Components:**  The application is built with reusable components (e.g., `InputField`, `BreakevenDisclaimer`) to promote maintainability and scalability.

### Conclusion 

By focusing on clarity, responsiveness, and user engagement, the Bitcoin Mining Calculator provides a seamless and informative experience. The design choices aim to empower users with the information they need, presented in a way that is both accessible and aesthetically pleasing.