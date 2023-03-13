import { CaretDown } from "phosphor-react";

export default function WelcomeSection() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-5 font-bold">
        <div>
          <h1 className="text-7xl mbl:text-4xl">Olá! Sou Giovanni</h1>
        </div>
        <div>
          <span className="text-4xl text-red-500 mbl:text-2xl">Desenvolvedor Web</span>
        </div>
        <div className="flex flex-col justify-center gap-0 items-center mt-24 mbl:mt-12">
          <CaretDown className="mb-0" size={36} color="#cd5c5c" weight="bold" />
          <CaretDown className="mt-[-14px]" size={30} color="#cd5c5c" weight="bold" />
          <CaretDown className="mt-[-10px]" size={26} color="#cd5c5c" weight="bold" />
        </div>
      </div>
    </section>
  );
}
