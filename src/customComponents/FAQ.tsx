import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"; // Adjust path if necessary
import Link from "next/link";

// FAQ Data Object with ReactNode for answers
const faqData = [
  {
    question: "How do I contribute to the library?",
    answer: (
      <>
        We welcome contributions! You can direactly contribute to the library by
        clicking{" "}
        <Link className="underline" href="/postcomponent">
          Create new component
        </Link>
        .
      </>
    ),
  },
  {
    question: "Can I use the components in my commercial project?",
    answer: (
      <>
        Yes, all of our components are open-source and can be used in commercial
        projects. They are licensed under the MIT License, providing flexibility
        for both personal and commercial use.
      </>
    ),
  },
  {
    question: "What technologies are used to build KodeBloxUI?",
    answer: (
      <>
        KodeBloxUI is built using modern web technologies including HTML5,
        Tailwind CSS, CSS3, and Javascript, ensuring a robust and scalable
        foundation.
      </>
    ),
  },
  {
    question: "How can I get started with KodeBloxUI?",
    answer: (
      <>
        To get started with KodeBloxUI, you can check out the documentation on
        our website. It contains all the necessary steps to set up and use our
        components in your project.
      </>
    ),
  },
  {
    question: "Is there a support team available?",
    answer: (
      <>
        Yes, our team is always available to assist you. You can reach us
        through our <Link href="/support">support page</Link>
        or through email for any inquiries.
      </>
    ),
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="px-4 py-10">
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Frequently Asked Questions (FAQ)
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-[#101518] text-lg font-bold text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#5c778a] text-sm font-normal leading-normal">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
