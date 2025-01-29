import React, { useState } from "react";
import { Search, Calendar, User, Clock, ChevronRight } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "10 HIIT Workouts You Can Do At Home",
      excerpt:
        "Discover effective high-intensity interval training workouts that require no equipment and can be done in your living room.",
      category: "Workouts",
      author: "Sarah Johnson",
      date: "Feb 28, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 2,
      title: "Nutrition Tips for Better Performance",
      excerpt:
        "Learn about the best pre and post-workout nutrition strategies to maximize your fitness results and recovery.",
      category: "Nutrition",
      author: "Mike Chen",
      date: "Feb 26, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 3,
      title: "Building a Consistent Fitness Routine",
      excerpt:
        "Discover proven strategies to develop and maintain a sustainable fitness routine that fits your lifestyle.",
      category: "Lifestyle",
      author: "Alex Smith",
      date: "Feb 24, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
  ];

  const categories = [
    "all",
    "Workouts",
    "Nutrition",
    "Lifestyle",
    "Mental Health",
    "Success Stories",
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            FitStream Blog
          </h1>
          <p className="text-xl text-gray-600">
            Insights, tips, and stories from the fitness community
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${
                      selectedCategory === category
                        ? "bg-purple-600 text-white"
                        : "bg-white text-gray-600 hover:bg-purple-50"
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Featured post"
                  className="h-64 w-full object-cover md:h-full"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-purple-600 font-semibold">
                  Featured
                </div>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  The Future of Online Fitness: Trends to Watch in 2024
                </h2>
                <p className="mt-4 text-gray-600">
                  Explore how technology and community are reshaping the fitness
                  industry and creating new opportunities for connection and
                  growth.
                </p>
                <div className="mt-6 flex items-center">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-600">
                    By Emma Wilson
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-600">
                    Mar 1, 2024
                  </span>
                </div>
                <button className="mt-6 inline-flex items-center text-purple-600 font-medium hover:text-purple-700">
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium text-purple-600">
                    {post.category}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-600">
                      {post.author}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-600">
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6">
            Get the latest fitness tips and stories delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
            />
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
