import SingleSkill from "./SingleSkill";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCplusplus, SiExpress, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { DiJava, DiMongodb, DiPython } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";


const skills = [
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Tailwind",
    icon: RiTailwindCssFill,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "NodeJs",
    icon: FaNodeJs,
  },
  {
    skill: "ExpressJs",
    icon: SiExpress,
  },
  {
    skill: "MongoDB",
    icon: DiMongodb,
  },
  {
    skill: "C++",
    icon: SiCplusplus,
  },
  {
    skill: "Python",
    icon: DiPython,
  },
  {
    skill: "Java",
    icon: DiJava,
  },
  
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
