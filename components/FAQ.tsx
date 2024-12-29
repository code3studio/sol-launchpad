import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Navigate to our GitHub to get started with configuration. If you need further assistance view our guide.",
  },
  {
    question: "Do I need to use the ChatGPT API?",
    answer:
      "Yes, as of now this Agent uses ChatGPT 4o-mini. Priced at 15 cents per million input tokens and 60 cents per million output tokens",
  },
  {
    question: "Will you include other AI models?",
    answer:
      "We are currently building support for Claude and Sonnet models to focus on blockchain tasks.",
  },
  {
    question: "What is the $token used for?",
    answer:
      "Tokens will be used to unlock further token gated updates like a webUI, social media integration, and further AI support.",
  },
];

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FAQ() {
  return (
    <section className="px-[2em] lg:px-[4em] py-12 bg-gradient-to-b from-background to-slate-900">
      <h2 className="mb-8 text-3xl font-bold text-center text-teal-400 glitch-text">
        Frequently Asked Questions
      </h2>
      <motion.div
        variants={faqVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-teal-500">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-200">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
