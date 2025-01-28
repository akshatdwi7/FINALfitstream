import React from 'react';
import { Heart, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About FitStream</h1>
          <p className="text-xl text-gray-600">Building a healthier world through connected fitness</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              FitStream was born from a simple idea: make fitness more accessible and engaging by
              connecting people from around the world. We believe that working out shouldn't be a
              solitary experience, but rather a collaborative journey where we can motivate and
              inspire each other.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="People working out"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Passion</h3>
            <p className="text-gray-600">
              We're passionate about helping people achieve their fitness goals and live healthier lives.
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              Building meaningful connections through shared fitness experiences.
            </p>
          </div>
          <div className="text-center p-6">
            <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Goals</h3>
            <p className="text-gray-600">
              Helping you reach your fitness targets with support from our global community.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Join Our Community</h2>
          <p className="text-gray-600 text-center mb-6">
            Whether you're a fitness enthusiast looking to share your journey or someone just
            starting out, FitStream is the perfect place for you.
          </p>
          <div className="flex justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;