import { SelectedPage } from "@/shared/types";
import EvoAnchorLink from "@/shared/EvoAnchorLink";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 p-16 px-5 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="broder-2 rounded-full border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <EvoAnchorLink setSelectedPage={setSelectedPage}>
        Learn More
      </EvoAnchorLink>
    </motion.div>
  );
};

export default Benefit;
