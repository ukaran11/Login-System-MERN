import React from 'react';
import FileUpload from './FileUpload';

const LoggedInDashboard = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> 
    </h4>

    <FileUpload />
  </div>
);

export default LoggedInDashboard;
