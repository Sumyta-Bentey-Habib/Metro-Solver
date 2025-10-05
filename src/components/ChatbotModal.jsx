import React from 'react';
import { X, Send, Paperclip, ChevronDown, CheckCheck, MessageSquareText } from 'lucide-react';

// --- Chat Message Components ---
// Message from the Bot (Left-aligned, purple)
const BotMessage = ({ text, time }) => (
  <div className="flex justify-start mb-4">
    <div className="max-w-[85%] rounded-xl rounded-tl-none bg-[#6C22E1] p-3 text-white shadow-lg">
      <p className="text-sm">{text}</p>
      <div className="flex justify-end items-center mt-1 text-xs text-white/70">
        <span className="mr-1">Seen</span>
        <CheckCheck size={14} />
      </div>
    </div>
  </div>
);

// Message from the User (Right-aligned, dark blue)
const UserMessage = ({ text, time, status }) => (
  <div className="flex justify-end mb-4">
    <div className="max-w-[85%] rounded-xl rounded-br-none bg-[#1E2331] p-3 text-white shadow-lg">
      <p className="text-sm">{text}</p>
      <div className="flex justify-end items-center mt-1 text-xs text-gray-400">
        {status === 'Seen' && <span className="mr-1">Seen</span>}
        {status === 'Delivery' && <span className="mr-1">Delivery</span>}
        <CheckCheck size={14} className={status === 'Seen' ? 'text-gray-400' : 'text-[#6C22E1]'} />
      </div>
    </div>
  </div>
);

// --- Main Chatbot Modal Component ---
const ChatbotModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-end p-4 sm:p-6 lg:p-10 pointer-events-none">
      <div 
        className="w-full max-w-sm h-[80vh] sm:h-[600px] bg-[#0A0713] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col pointer-events-auto border border-white/10"
        style={{ backdropFilter: 'blur(10px)' }} // Optional: add a blur effect if needed
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#0A0713] border-b border-white/5">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#6C22E1] flex items-center justify-center text-white font-bold text-sm">
              Ai
            </div>
            <h2 className="text-white text-lg font-semibold">Chat with Ai!</h2>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <button onClick={() => console.log('Minimize')} className="p-1 hover:bg-white/10 rounded-full">
              <ChevronDown size={20} />
            </button>
            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Chat Body (Messages) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {/* Example Messages from the Image */}
          <BotMessage text="Welcome our Agency." time="2:30 PM" />
          <UserMessage text="Hello" time="2:23 PM" status="Seen" />
          <BotMessage text="Welcome our Agency." time="2:30 PM" />
          <UserMessage text="Hello" time="2:23 PM" status="Delivery" />
          
          {/* Add padding at the bottom to ensure the last message isn't cut off by the input */}
          <div className="h-4"></div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center bg-[#1E2331] rounded-full p-2">
            <button className="text-gray-400 hover:text-white p-1">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              placeholder="Write here..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-3"
            />
            <button className="bg-[#6C22E1] p-2 rounded-full text-white ml-2 hover:bg-[#5a1dc2]">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;