export default function About() {
  var myBirthDate = new Date("07/21/2005");
  var monthDiff = Date.now() - myBirthDate.getTime();
  var myAgeDateFormat = new Date(monthDiff);
  var currentYear = myAgeDateFormat.getUTCFullYear();
  var myCurrentAge = Math.abs(currentYear - 2005);

  return (
    <section className="px-10 my-24">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <div className="flex items-center justify-center m-5">
          <h2 className="text-5xl text-red-500 font-bold">Sobre mim</h2>
        </div>
        <p className="text-xl w-[85%]">
          Opa, bem vindo ao meu portfólio! Prazer, sou Giovanni Lopes e
          tenho {myCurrentAge} Anos.
          <br />
          Sou uma pessoa curiosa e sempre buscando desafios. Acredito ser uma
          pessoa talentosa e dedicada, com habilidades em <span className="text-red-500 font-semibold">problem solving</span> e
          <span className="text-red-500 font-semibold"> pensamento crítico</span>. Estou empenhado em continuar a aprender e crescer
          na minha área de interesse, e acredito que posso trazer valor para
          qualquer empresa ou projeto em que possa fazer parte. Estou animado com
          as oportunidades que o futuro pode me oferecer.
        </p>
      </div>
    </section>
  );
}
