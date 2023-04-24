import { IconBaseProps } from "react-icons";
import Icon from "phosphor-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface SkillBox {
  title: string;
  icon: IconBaseProps | Icon.IconProps;
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function SkillBlock(props: SkillBox) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="flex flex-row items-center content-center self-center justify-center gap-3 bg-gray-400 w-96 h-24 rounded-lg cursor-pointer transition-all hover:brightness-90">
        <div className="w-10 h-10">
          <>{props.icon}</>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{props.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
