import React from "react";
import { Link } from "react-router-dom";
import { Users, Video, Trophy } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Train Together, Grow Together
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Join the world's largest fitness streaming community
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/go-live"
                className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors"
              >
                Start Streaming
              </Link>
              <Link
                to="/join"
                className="bg-white text-purple-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Join a Session
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose FitStream?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-gray-600">
                Connect with fitness enthusiasts from around the world
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Video className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Sessions</h3>
              <p className="text-gray-600">
                Stream your workouts or join others in real-time
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achievement System</h3>
              <p className="text-gray-600">
                Track your progress and earn rewards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Sessions Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Live Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-151783635746${item}-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
                  alt="Live session"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900">
                      Morning HIIT
                    </span>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                      LIVE
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Harsh • 1.2k watching</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
