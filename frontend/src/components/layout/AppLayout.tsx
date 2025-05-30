import React from 'react';
import Header from '../common/Header';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="bg-white py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Pothole Detection System — Developed by <a href="https://github.com/GPadaka19" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GPadaka19</a> as part of a research project.
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;