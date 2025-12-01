import React from "react";
import { Accordion } from "react-bootstrap";
import "./FAQAccordion.css";

const faqs = [
  {
    question: "What is MentAura?",
    answer: "MentAura is a skill-sharing hub that connects learners with mentors, helping you grow through guided learning and teaching opportunities."
  },
  {
    question: "How do I join a skill community?",
    answer: "Simply sign up, create your profile, and select the skills you want to learn or teach. You'll instantly be part of communities tailored to your interests."
  },
  {
    question: "Is MentAura free to use?",
    answer: "Yes, MentAura offers free basic membership with access to core features. Premium plans are available for advanced tools and personalized mentorship."
  },
];

export default function FAQAccordion() {
  return (
    <section id="faq" className="faqSection">
      <h2 className="faqHeading">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" className="faqAccordion">
        {faqs.map((faq, idx) => (
          <Accordion.Item eventKey={idx.toString()} key={idx}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}
