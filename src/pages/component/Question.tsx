import Background from '../../../public/turflo2.png';
import FrequentlyQuestion from "../../components/ui/Question";

const FAQSection = () => {
  const faqData = [
    {
      question: "What is Turflo and how does it work?",
      answer: "Turflo is a platform that helps you find and book sports venues near you, connect with like-minded players, and participate in sports challenges. Simply sign up, choose a venue, and start playing!",
    },
    {
      question: "When will the app be available for download?",
      answer: "The app is currently under development. Stay tuned to our website and social media channels for updates on the release date!",
    },
    {
      question: "Which cities will the app be available in?",
      answer: "We are initially launching in select major cities. Please check our website for the current list of supported locations. We plan to expand to more cities soon!",
    },
    {
      question: "How do I book a sports venue?",
      answer: "You can easily book a sports venue by browsing the available options on our platform, selecting your preferred date and time, and completing the booking process online.",
    },
    {
      question: "Can I find people to play with on the app?",
      answer: "Yes! Turflo allows you to connect with other players in your area who share your interests. You can join existing games or create your own and invite others to join.",
    },
  ];

  return (
    <div
      className="bg-cover bg-center text-white pb-[75px]"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h2 className="text-center pt-[67px] pb-[77px] text-[36px] font-bold text-[#FFFFFF]">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <FrequentlyQuestion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSection;