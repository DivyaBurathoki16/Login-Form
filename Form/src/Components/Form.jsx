import React from 'react';
import './Form.css'

const Form = () => {
  return (
    <div className="main">
      <h1>Form</h1>
      <form action="#">
        <label htmlFor="Name">Full Name:</label>
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="Enter Your Full Name"
          required
        />
        <label htmlFor="Age">Age:</label>
        <input type="number"
         id="Age" 
         name="Age"
         placeholder="Enter your age"
         min="18" required />
        <label htmlFor="Birthdate">Birthdate:</label>
        <input type="date"
         id="Birthdate"
         placeholder="Enter Your Birthdate"
         name="Birthdate" required />
        <label htmlFor="gender">Select your gender:</label>
        <select id="gender" 
        name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="prefer-not-to-say">Other</option>
        </select>
        <label htmlFor="Address">Address:</label>
        <input
          type="text"
          id="Address"
          name="Address"
          placeholder="Enter Your Residential Address"
          required
        />
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          id="Email"
          name="Email"
          placeholder="Enter a valid Email"
          required
        />
        <label htmlFor="Contact_number">Contact Number:</label>
        <input
          type="tel"
          id="Contact_number"
          name="Contact_number"
          placeholder="Enter your Contact Number"
          required
        />
        <label htmlFor="confirmPassword">Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder='Enter your password'
          required
        />
        <input type="submit" id="Submit" name="Submit" />
      </form>
    </div>
  );
};

export default Form;
