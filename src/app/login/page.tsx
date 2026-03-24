'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('hong.sophaline@institute.pnh.edu.kh');
  const [password, setPassword] = useState('supersecretpassword');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Connect your authentication logic here!
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-xl flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-12">
          Sign in
        </h1>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {/* Email Field */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs text-gray-500 font-medium">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3.5 bg-gray-100 text-gray-800 text-sm rounded-md focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-300 transition-all"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs text-gray-500 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3.5 bg-gray-100 text-gray-800 text-sm rounded-md pr-12 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-300 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-4 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm rounded-md shadow-sm transition-colors"
          >
            Login
          </button>
        </form>

        {/* Account help links */}
        <div className="mt-4">
          <a href="#" className="text-xs text-gray-600 underline hover:text-gray-800">
            Don't have an account?
          </a>
        </div>

        {/* Separator / CTA to Register */}
        <div className="mt-16">
          <button className="px-10 py-3 bg-orange-700 hover:bg-orange-800 text-white text-sm font-semibold rounded-md shadow-sm transition-colors">
            Create an account?
          </button>
        </div>
      </div>
    </div>
  );
}