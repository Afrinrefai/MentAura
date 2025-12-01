import React, { useState } from 'react';
import { Users, BookOpen, Calendar, MessageCircle, Star, TrendingUp, Award, Zap } from 'lucide-react';

const SkillSharingHub = () => {
  const [currentView, setCurrentView] = useState('home');
  const [userMode, setUserMode] = useState('learner'); // learner or mentor
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const skillCategories = {
    tech: { color: 'from-cyan-400 to-blue-500', icon: '💻' },
    creative: { color: 'from-pink-400 to-purple-500', icon: '🎨' },
    business: { color: 'from-yellow-400 to-orange-500', icon: '💼' },
    wellness: { color: 'from-green-400 to-emerald-500', icon: '🧘' },
    language: { color: 'from-red-400 to-rose-500', icon: '🗣️' }
  };

  const mentors = [
    {
      id: 1,
      name: 'Sarah Chen',
      avatar: '👩‍💻',
      skills: ['React', 'TypeScript', 'UI/UX'],
      category: 'tech',
      rating: 4.9,
      sessions: 127,
      matchScore: 95,
      bio: 'Senior Frontend Developer with 8 years of experience'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      avatar: '🎨',
      skills: ['Digital Art', 'Illustration', 'Procreate'],
      category: 'creative',
      rating: 4.8,
      sessions: 89,
      matchScore: 88,
      bio: 'Professional illustrator and digital artist'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      avatar: '💼',
      skills: ['Marketing', 'Branding', 'Social Media'],
      category: 'business',
      rating: 5.0,
      sessions: 156,
      matchScore: 92,
      bio: 'Marketing strategist for Fortune 500 companies'
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      avatar: '🧘',
      skills: ['Yoga', 'Meditation', 'Mindfulness'],
      category: 'wellness',
      rating: 4.9,
      sessions: 203,
      matchScore: 85,
      bio: 'Certified yoga instructor and wellness coach'
    }
  ];

  const SignUpView = () => {
    const [formData, setFormData] = useState({
      name: '',
      skills: [],
      interests: [],
      bio: ''
    });

    const availableSkills = [
      'React', 'Python', 'Design', 'Marketing', 'Yoga', 
      'Photography', 'Writing', 'Music', 'Cooking', 'Languages'
    ];

    const handleSubmit = () => {
      if (!formData.name || formData.skills.length === 0 || formData.interests.length === 0 || !formData.bio) {
        alert('Please fill in all fields');
        return;
      }
      setCurrentUser({
        ...formData,
        avatar: '🚀',
        sessionsCompleted: 0,
        hoursLearned: 0,
        skillsShared: 0
      });
      setCurrentView('dashboard');
    };

    const toggleSkill = (skill, type) => {
      setFormData(prev => ({
        ...prev,
        [type]: prev[type].includes(skill)
          ? prev[type].filter(s => s !== skill)
          : [...prev[type], skill]
      }));
    };

    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Join Skill Sharing Hub
            </h1>
            <p className="text-gray-400 text-lg">Learn from others, share your expertise</p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <label className="block text-lg font-semibold mb-3 text-cyan-400">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <label className="block text-lg font-semibold mb-3 text-purple-400">Skills You Can Share</label>
              <div className="flex flex-wrap gap-2">
                {availableSkills.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill, 'skills')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      formData.skills.includes(skill)
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <label className="block text-lg font-semibold mb-3 text-pink-400">Skills You Want to Learn</label>
              <div className="flex flex-wrap gap-2">
                {availableSkills.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill, 'interests')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      formData.interests.includes(skill)
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <label className="block text-lg font-semibold mb-3 text-orange-400">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none h-32"
                placeholder="Tell us about yourself..."
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Create Profile & Start Learning
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Dashboard = () => {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Mode Toggle */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, {currentUser.avatar} {currentUser.name}</h1>
              <p className="text-gray-400">Your learning journey continues</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setUserMode('learner')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  userMode === 'learner'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <BookOpen className="inline mr-2" size={20} />
                Learner Mode
              </button>
              <button
                onClick={() => setUserMode('mentor')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  userMode === 'mentor'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Users className="inline mr-2" size={20} />
                Mentor Mode
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl"></div>
              <div className="relative">
                <TrendingUp className="text-cyan-400 mb-4" size={32} />
                <div className="text-3xl font-bold mb-1">{currentUser.hoursLearned}h</div>
                <div className="text-gray-400">Hours Learned</div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
              <div className="relative">
                <Award className="text-purple-400 mb-4" size={32} />
                <div className="text-3xl font-bold mb-1">{currentUser.sessionsCompleted}</div>
                <div className="text-gray-400">Sessions Completed</div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-2xl"></div>
              <div className="relative">
                <Zap className="text-pink-400 mb-4" size={32} />
                <div className="text-3xl font-bold mb-1">{currentUser.skillsShared}</div>
                <div className="text-gray-400">Skills Shared</div>
              </div>
            </div>
          </div>

          {/* Current Mode Content */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">
              {userMode === 'learner' ? '🎯 Your Learning Path' : '👨‍🏫 Your Teaching Dashboard'}
            </h2>
            
            {userMode === 'learner' ? (
              <div className="space-y-4">
                <div className="bg-black rounded-xl p-6 border border-gray-800">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400">Learning: {currentUser.interests[0] || 'No skills selected'}</h3>
                      <p className="text-gray-400 text-sm mt-1">With Sarah Chen • Next session: Tomorrow 3pm</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">45%</div>
                      <div className="text-gray-500 text-sm">Progress</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentView('browse')}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  Find More Mentors
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-black rounded-xl p-6 border border-gray-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-purple-400">Teaching: {currentUser.skills[0] || 'No skills selected'}</h3>
                      <p className="text-gray-400 text-sm mt-1">3 active learners • 12 sessions completed</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">4.9★</div>
                      <div className="text-gray-500 text-sm">Rating</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                    View Learner Requests
                  </button>
                  <button className="bg-gray-800 text-white font-semibold py-3 rounded-xl hover:bg-gray-700 transition-all">
                    Manage Schedule
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Skills Showcase */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Your Skills</h2>
            <div className="flex flex-wrap gap-3">
              {currentUser.skills.map((skill, i) => (
                <div key={i} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-full px-6 py-3 text-purple-300 font-medium">
                  {skill}
                </div>
              ))}
              {currentUser.interests.map((skill, i) => (
                <div key={i} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-full px-6 py-3 text-cyan-300 font-medium">
                  {skill} (Learning)
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const BrowseMentors = () => {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-2">Find Your Perfect Mentor</h1>
              <p className="text-gray-400">Discover experts who match your learning goals</p>
            </div>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition-all"
            >
              Back to Dashboard
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mentors.map(mentor => {
              const category = skillCategories[mentor.category];
              return (
                <div key={mentor.id} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-500`}></div>
                  
                  <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl">{mentor.avatar}</div>
                        <div>
                          <h3 className="text-xl font-bold">{mentor.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Star className="text-yellow-400 fill-yellow-400" size={16} />
                            <span className="text-yellow-400 font-semibold">{mentor.rating}</span>
                            <span className="text-gray-500">• {mentor.sessions} sessions</span>
                          </div>
                        </div>
                      </div>
                      <div className={`bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full font-bold text-lg`}>
                        {mentor.matchScore}% Match
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{mentor.bio}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {mentor.skills.map((skill, i) => (
                        <span key={i} className={`bg-gradient-to-r ${category.color} bg-opacity-20 border border-opacity-50 rounded-full px-3 py-1 text-sm font-medium`}>
                          {category.icon} {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setSelectedMentor(mentor);
                          setCurrentView('schedule');
                        }}
                        className={`flex-1 bg-gradient-to-r ${category.color} text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all`}
                      >
                        <Calendar className="inline mr-2" size={18} />
                        Schedule Session
                      </button>
                      <button className="bg-gray-800 text-white px-4 py-3 rounded-xl hover:bg-gray-700 transition-all">
                        <MessageCircle size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const ScheduleSession = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [topic, setTopic] = useState('');

    const handleSchedule = () => {
      if (!selectedDate || !selectedTime || !topic) {
        alert('Please fill in all fields');
        return;
      }
      alert(`Session scheduled with ${selectedMentor.name} on ${selectedDate} at ${selectedTime}!`);
      setCurrentView('dashboard');
    };

    const category = skillCategories[selectedMentor.category];

    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setCurrentView('browse')}
            className="mb-8 text-gray-400 hover:text-white transition-all"
          >
            ← Back to Mentors
          </button>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-6xl">{selectedMentor.avatar}</div>
              <div>
                <h1 className="text-3xl font-bold mb-2">Schedule with {selectedMentor.name}</h1>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="text-yellow-400 font-semibold">{selectedMentor.rating}</span>
                  <span className="text-gray-500">• {selectedMentor.sessions} sessions completed</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold mb-3 text-cyan-400">Choose a Skill</label>
                <div className="flex flex-wrap gap-2">
                  {selectedMentor.skills.map((skill, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setTopic(skill)}
                      className={`px-4 py-2 rounded-full font-medium transition-all ${
                        topic === skill
                          ? `bg-gradient-to-r ${category.color} text-white`
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3 text-purple-400">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3 text-pink-400">Select Time</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-pink-400 focus:outline-none"
                  required
                >
                  <option value="">Choose a time slot</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>

              <button
                onClick={handleSchedule}
                className={`w-full bg-gradient-to-r ${category.color} text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all`}
              >
                Confirm Session
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HomeScreen = () => {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="max-w-4xl text-center">
          <div className="mb-8">
            <div className="text-8xl mb-6">🚀</div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skill Sharing Hub
            </h1>
            <p className="text-2xl text-gray-400 mb-12">
              Learn from experts. Share your knowledge. Grow together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Learn Skills</h3>
              <p className="text-gray-400">Connect with expert mentors in any field</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">Share Expertise</h3>
              <p className="text-gray-400">Teach others and build your reputation</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-pink-400">Track Progress</h3>
              <p className="text-gray-400">Monitor your learning journey in real-time</p>
            </div>
          </div>

          <button
            onClick={() => setCurrentView('signup')}
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white text-xl font-bold px-12 py-5 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {currentView === 'home' && <HomeScreen />}
      {currentView === 'signup' && <SignUpView />}
      {currentView === 'dashboard' && currentUser && <Dashboard />}
      {currentView === 'browse' && currentUser && <BrowseMentors />}
      {currentView === 'schedule' && selectedMentor && <ScheduleSession />}
    </>
  );
};

export default SkillSharingHub;