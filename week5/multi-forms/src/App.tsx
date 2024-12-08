import React from 'react';
import { SignupProvider } from './components/context/SignupContext';
import AppRoutes from './components/routes/AppRoutes';


const App: React.FC = () => {
  return (
    <SignupProvider>
      <AppRoutes />
    </SignupProvider>
  );
};

export default App;
