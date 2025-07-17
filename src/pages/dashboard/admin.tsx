import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../../utils/appwrite';
import { Shield } from 'lucide-react';

const AdminDashboard = () => {
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    account.get().then(user => {
      let name = user.name || user.email || '';
      let first = name.split(' ')[0];
      if (!user.name && user.email) {
        first = user.email.split('@')[0];
      }
      setFirstName(first);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-950 via-black to-purple-950 pt-20 px-4">
      <div className="bg-black/80 border border-purple-900/30 shadow-2xl rounded-3xl p-10 max-w-lg w-full flex flex-col items-center text-center">
        <span className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6 shadow-lg">
          <Shield className="w-10 h-10 text-white" />
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Welcome, {firstName}!
        </h1>
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">You are signed in as an Admin</h2>
        <p className="text-base text-gray-300 mb-6">Manage projects, users, and more with your admin privileges.</p>
        <div className="mt-8 flex flex-col gap-4 items-center w-full">
          <button
            className="w-full max-w-xs bg-gray-800 hover:bg-gray-900 text-white py-3 rounded font-semibold transition"
            onClick={() => navigate('/admin/dashboard')}
          >
            View Dashboard
          </button>
          <button
            className="w-full max-w-xs bg-red-500 hover:bg-red-600 text-white py-3 rounded font-semibold transition"
            onClick={async () => {
              await account.deleteSession('current');
              navigate('/');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 