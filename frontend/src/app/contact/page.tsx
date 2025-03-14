import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Bot, Smile, Mail, Phone } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <MaxWidthWrapper className="py-20">
      <div className="flex flex-col gap-8 max-w-[600px] mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Contact Info
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2">
          Let's Connect! <Smile size={28} className="text-blue-600" />
        </h2>

        {/* Contact Details */}
        <div className="flex flex-col gap-6 text-lg text-gray-600 dark:text-gray-400">
          {/* Email */}
          <div className="flex items-center justify-center gap-3">
            <Mail size={24} className="text-blue-600" />
            <a
              href="mailto:7nguyennguyen3@gmail.com"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              7nguyennguyen3@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-3">
            <Phone size={24} className="text-blue-600" />
            <span>714-468-8426</span>
          </div>
        </div>

        {/* Chatbot Info */}
        <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 flex items-center justify-center gap-2">
          If you have any other questions, feel free to ask the chatbot in the
          bottom right corner. I trained it to answer questions about me! 🤖
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactPage;
