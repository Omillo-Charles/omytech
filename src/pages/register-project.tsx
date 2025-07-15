import React, { useState } from 'react';

const RegisterProject = () => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      // For now, just log the data. Replace with Appwrite DB logic later.
      console.log('Project Registered:', { name, details });
      setSuccess(true);
      setName('');
      setDetails('');
    } catch (err: any) {
      setError('Failed to register project.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <div className="bg-white/10 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Register Project</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-3 rounded bg-black/40 border border-cyan-500/30 text-white"
            placeholder="Project Name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            disabled={loading}
          />
          <textarea
            className="w-full p-3 rounded bg-black/40 border border-cyan-500/30 text-white"
            placeholder="Project Details"
            value={details}
            onChange={e => setDetails(e.target.value)}
            required
            disabled={loading}
            rows={4}
          />
          {error && <div className="text-red-400 text-sm">{error}</div>}
          {success && <div className="text-green-400 text-sm">Project registered!</div>}
          <button
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded font-semibold mt-2"
            disabled={loading}
            type="submit"
          >
            {loading ? 'Registering...' : 'Register Project'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterProject; 