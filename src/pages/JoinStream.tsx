import React from 'react';
import { Users, Search } from 'lucide-react';

const JoinStream = () => {
  const streams = [
    {
      id: 1,
      title: "Morning HIIT Workout",
      trainer: "Sarah Johnson",
      category: "HIIT",
      viewers: 1234,
      thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 2,
      title: "Yoga Flow",
      trainer: "Mike Chen",
      category: "Yoga",
      viewers: 856,
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 3,
      title: "Strength Training",
      trainer: "Alex Smith",
      category: "Strength",
      viewers: 2045,
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Streams</h1>
          <p className="text-xl text-gray-600">Join a workout session and train with others</p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-lg">
              <input
                type="text"
                placeholder="Search streams..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500">
                <option value="">All Categories</option>
                <option value="yoga">Yoga</option>
                <option value="hiit">HIIT</option>
                <option value="strength">Strength</option>
                <option value="cardio">Cardio</option>
              </select>
              <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500">
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="viewers">Most Viewers</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {streams.map((stream) => (
            <div key={stream.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">LIVE</span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                    <Users className="h-4 w-4 mr-1" />
                    {stream.viewers.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{stream.title}</h3>
                <p className="text-gray-600 text-sm mb-2">with {stream.trainer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-purple-600">{stream.category}</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                    Join Stream
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinStream;