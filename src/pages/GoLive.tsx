import React, { useState } from 'react';
import { Camera, Mic, Settings } from 'lucide-react';

const GoLive = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Go Live</h1>
          <p className="text-xl text-gray-600">Share your workout with the world</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <div className="bg-gray-800 rounded-lg flex items-center justify-center">
                <Camera className="h-16 w-16 text-gray-400" />
              </div>
            </div>

            <div className="flex justify-center space-x-4 mb-6">
              <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                <Camera className="h-5 w-5" />
                <span>Camera</span>
              </button>
              <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                <Mic className="h-5 w-5" />
                <span>Microphone</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </div>

            <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors">
              Start Streaming
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Stream Settings</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Stream Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Morning Workout Session"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  >
                    <option value="">Select a category</option>
                    <option value="yoga">Yoga</option>
                    <option value="hiit">HIIT</option>
                    <option value="strength">Strength Training</option>
                    <option value="cardio">Cardio</option>
                    <option value="pilates">Pilates</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Tell viewers about your stream..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Streaming Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ensure good lighting and clear audio</li>
                <li>• Test your equipment before going live</li>
                <li>• Interact with your viewers</li>
                <li>• Keep water nearby</li>
                <li>• Have your workout plan ready</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoLive;