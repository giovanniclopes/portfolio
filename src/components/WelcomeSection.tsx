import { CaretDown } from "phosphor-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};


export default function WelcomeSection() {
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
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="flex flex-col items-center justify-center gap-5 font-bold">
        <div>
          <h1 className="text-7xl mbl:text-4xl">Olá! Sou Giovanni</h1>
        </div>
        <div>
          <span className="text-4xl text-red-500 mbl:text-2xl">
            Desenvolvedor Web
          </span>
        </div>
        <div className="flex flex-col justify-center gap-0 items-center mt-24 mbl:mt-12">
          <CaretDown className="mb-0" size={36} color="#cd5c5c" weight="bold" />
          <CaretDown
            className="mt-[-14px]"
            size={30}
            color="#cd5c5c"
            weight="bold"
          />
          <CaretDown
            className="mt-[-10px]"
            size={26}
            color="#cd5c5c"
            weight="bold"
          />
        </div>
      </div>
    </motion.section>
  );
}
