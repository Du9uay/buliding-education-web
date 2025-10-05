import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import GlobalBackground from './components/GlobalBackground';
import PageVignette from './components/PageVignette';
import HomePage from './pages/HomePage';
import AutomationIndustryPage from './pages/course/AutomationIndustryPage';
import PLCBasicsPage from './pages/course/PLCBasicsPage';
import IOWiringPage from './pages/course/IOWiringPage';
import CourseTestPage from './pages/CourseTestPage';



const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <GlobalBackground />
        <PageVignette intensity="medium" />
        <Navigation />
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/bidding-lifecycle" element={<AutomationIndustryPage />} />
            <Route path="/course/bidding-process" element={<PLCBasicsPage />} />
            <Route path="/course/risk-control" element={<IOWiringPage />} />
            <Route path="/course-test" element={<CourseTestPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; 