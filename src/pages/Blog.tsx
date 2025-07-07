import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'Why AI Is Reshaping Frontend Development in 2025',
    excerpt: 'AI tools are now revolutionizing how we write, test, and optimize code on the frontend.',
    image: 'https://images.pexels.com/photos/8294591/pexels-photo-8294591.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Omillo Charles',
    date: '2025-06-28',
    readTime: '7 min read',
    category: 'Artificial Intelligence',
    featured: true
  };

  const posts = [
    {
      id: 2,
      title: 'Mastering React Native for Cross-Platform Success',
      excerpt: 'Why React Native continues to lead in mobile app development for startups and enterprises.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Sarah K. Mwangi',
      date: '2025-06-21',
      readTime: '6 min read',
      category: 'Mobile Development'
    },
    {
      id: 3,
      title: 'Dark Mode Design Tips That Improve UX',
      excerpt: 'Designing for dark mode requires more than just switching background colors. Learn the key rules.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Ian Otieno',
      date: '2025-06-18',
      readTime: '5 min read',
      category: 'UI/UX Design'
    },
    {
      id: 4,
      title: 'DevOps in 2025: Tools, Culture, and Automation',
      excerpt: 'A complete overview of how modern DevOps integrates AI and serverless infrastructure.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Linda Achieng',
      date: '2025-06-14',
      readTime: '8 min read',
      category: 'DevOps'
    },
    {
      id: 5,
      title: 'SEO for Developers: What Actually Matters in 2025',
      excerpt: 'Learn how developers can contribute directly to improving a site\'s discoverability on Google.',
      image: 'https://images.pexels.com/photos/6938596/pexels-photo-6938596.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Brian K. Mutua',
      date: '2025-06-10',
      readTime: '6 min read',
      category: 'Web Development'
    },
    {
      id: 6,
      title: 'Turning a Side Project Into a Funded Startup',
      excerpt: 'Real stories from Kenyan developers who turned their weekend hacks into funded companies.',
      image: 'https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Omillo Charles',
      date: '2025-06-05',
      readTime: '10 min read',
      category: 'Startups'
    },
    {
      id: 7,
      title: 'Tailwind CSS 4.0: What\'s New and What\'s Next',
      excerpt: 'Tailwind is evolving fast. Here\'s what\'s changed and how to prepare for upcoming features.',
      image: 'https://images.pexels.com/photos/6693659/pexels-photo-6693659.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Mary Wairimu',
      date: '2025-06-01',
      readTime: '4 min read',
      category: 'Frontend'
    }
  ];

  const categories = [
    'All',
    'Artificial Intelligence',
    'Mobile Development',
    'UI/UX Design',
    'DevOps',
    'Web Development',
    'Startups',
    'Frontend'
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and industry trends from our team of digital experts.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-64 lg:h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{featuredPost.author}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-full font-medium transition-all duration-200 bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{post.author}</div>
                        <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center space-x-1">
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            {/* Load More Articles button removed */}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">Get the latest insights and tutorials delivered straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-white/50 text-gray-900"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;