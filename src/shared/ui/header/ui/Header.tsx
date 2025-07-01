"use client";

import React, { useState } from 'react';
import { Brain, Github, X, Menu } from "lucide-react";
import Button from "@/src/shared/ui/button/index";

const Header: React.FC = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  return (
    <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Access AI
                </span>
              <p className="text-xs text-gray-500">웹 접근성 진단 도구</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">기능</a>
            <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">데모</a>
            <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors">문서</a>
            <Button variant="outline" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </nav>

          <Button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">기능</a>
              <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">데모</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors">문서</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header;

