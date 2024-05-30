import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Bot, Smile } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <MaxWidthWrapper className="py-20">
      <div className="flex flex-col gap-5 max-w-[320px]">
        <h1 className="gra-b-r font-bold text-4xl">My Contact Info</h1>
        <h2 className="font-semibold text-xl flex items-center gap-2">
          Please email or text me! <Smile size={28} className="text-blue-600" />
        </h2>
        <p className="text-lg">
          Email:{" "}
          <a href="mailto:hello@2nguyen.info" className="text-blue-600">
            hello@2nguyen.info
          </a>
        </p>
        <p className="text-lg">Phone: 714-468-8426</p>
        <p className="text-lg">
          If you have any other question, feel free to ask the chatbot that's on
          the bottom right of the screen. I trained it to answer questions about
          me! <Bot size={28} />
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactPage;
