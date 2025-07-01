import { Brain } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 bg-background">
      <div className="max-w-7xl min-h-[62px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center gap-2">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h1 className="font-semibold text-2xl">Access AI</h1>
      </div>
    </header>
  )
}

export default Header;

