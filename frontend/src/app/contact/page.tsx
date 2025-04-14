import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Use Card for structure
import { Bot, Github, Linkedin, Mail, Phone, Smile } from "lucide-react"; // Added Github, Linkedin
import React from "react";
import { cn } from "@/lib/utils"; // Assuming cn utility

// Contact methods data
const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "7nguyennguyen3@gmail.com",
    href: "mailto:7nguyennguyen3@gmail.com",
    cta: "Send Email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "714-468-8426",
    href: "tel:1-714-468-8426", // Use RFC3966 format with country code
    cta: "Call Me",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/7nguyennguyen3", // Display text
    href: "https://www.linkedin.com/in/7nguyennguyen3",
    cta: "View Profile",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/7nguyennguyen3", // Display text
    href: "https://github.com/7nguyennguyen3",
    cta: "View Profile",
  },
];

const ContactPage = () => {
  return (
    <div className="scroll-mt-20">
      <MaxWidthWrapper className="py-20 md:py-24">
        <div className="flex flex-col items-center gap-8 md:gap-12 max-w-3xl mx-auto text-center">
          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities. Feel free to reach out!{" "}
              <Smile size={22} className="inline-block text-blue-500 -mt-1" />
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full pt-6">
            {contactMethods.map((method) => (
              // --- Make the entire Card the Link ---
              <a
                key={method.label}
                href={method.href}
                target={
                  method.label === "Email" || method.label === "Phone"
                    ? undefined
                    : "_blank"
                }
                rel={
                  method.label === "Email" || method.label === "Phone"
                    ? undefined
                    : "noopener noreferrer"
                }
                // Use group for coordinated hover, block for layout, focus-visible for accessibility
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
              >
                <Card className="h-full text-left transition-all duration-200 ease-in-out group-hover:shadow-md group-hover:border-primary/30 group-hover:-translate-y-1">
                  {" "}
                  {/* Apply hover effects to Card via group */}
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      {method.label}
                    </CardTitle>
                    <method.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />{" "}
                    {/* Icon color change on hover */}
                  </CardHeader>
                  <CardContent className="pt-0">
                    {/* Value is now plain text, link styling on hover added */}
                    <p className="md:text-lg md:font-medium text-foreground break-words transition-colors group-hover:text-primary">
                      {method.value}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="w-full mt-8 p-4 border rounded-lg bg-muted/50 text-center space-y-2">
            <Bot size={24} className="mx-auto text-primary" />
            <h3 className="font-semibold text-foreground">
              Have Quick Questions?
            </h3>
            <p className="text-sm text-muted-foreground">
              Feel free to ask my personal chatbot assistant (in the bottom
              right corner). I&apos;ve trained it to answer common questions
              about my background and skills!
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactPage;
