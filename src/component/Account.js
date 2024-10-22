// src/components/Account.js
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { updateEmail, updatePassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Account = () => {
  const [user] = useAuthState(auth);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (user) {
      setNewEmail(user.email); // Pre-fill with current email
    }
  }, [user]);

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateEmail(user, newEmail);
      setSuccess('Email updated successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(user, newPassword);
      setSuccess('Password updated successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Account Information</h2>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}
      {user ? (
        <>
          <h4>Email: {user.email}</h4>
          <form onSubmit={handleEmailUpdate}>
            <div className="form-group">
              <label>New Email:</label>
              <input
                type="email"
                className="form-control"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Update Email</button>
          </form>

          <form onSubmit={handlePasswordUpdate} className="mt-3">
            <div className="form-group">
              <label>New Password:</label>
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Update Password</button>
          </form>
        </>
      ) : (
        <p>Please log in to view your account information.</p>
      )}
    </div>
  );
};

export default Account;
