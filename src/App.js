import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
import PrivateRoute from './utils/PrivateRoute';
import AlertComponent from './components/AlertComponent/AlertComponent'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DocumentUploadPage from './components/DocumentUploadPage';
import DocumentListPage from './components/DocumentListPage';
import { OCRProvider } from './context/OCRContext';

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <OCRProvider>
      <Router>
        <div className="App">
          <Header title={title} />
          <div className="container d-flex align-items-center flex-column">
            <Routes>
              <Route path="/upload" element={<DocumentUploadPage />} />
              <Route path="/documents" element={<DocumentListPage />} />
              <Route path="/" exact="true">
                <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
              </Route>
              <Route path="/register">
                <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
              </Route>
              <Route path="/login">
                <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
              </Route>
              <PrivateRoute path="/home">
                <Home/>
              </PrivateRoute>
            </Routes>
            <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
          </div>
        </div>
      </Router>
    </OCRProvider>
  );
}

export default App;