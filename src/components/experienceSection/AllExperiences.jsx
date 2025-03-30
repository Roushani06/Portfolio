import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "MERN Stack Developer",
    company: "ModeLane",
    date: "2025",
    responsibilities: [
      "Created a website using React, Node.js, Express.js, and MongoDB.",
      "Implemented user authentication and authorization.",
      "Developed RESTful APIs for data retrieval and manipulation.",
      
    ],
  },
  {
    job: "DSA",
    company: "Algorithm",
    date: "2024 - Present",
    responsibilities: [
      "Participated many coding contest.",
      "Solved 200+ questions over leetcode",
    ],
  },
  {
    job: "OOPs",
    company: "SmartCartBillingSystem",
    date: "2025 - Present",
    responsibilities: [
      "Developed a billing system using OOP concepts.",
      "Implemented features like adding items, calculating total cost, and generating bills.",
     
      "Worked with file handling to save and retrieve billing data.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
