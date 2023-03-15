import SectionTitles from "./SectionTitles";

export default function Contact() {
  return (
    <section className="flex justify-center p-7 w-full mb-10">
      <div className="max-w-3xl w-full">
        <div className="flex items-center justify-center my-5 mb-12">
          <SectionTitles title="Contact" />
        </div>
        <form
          action="https://formsubmit.co/giovanniclopes@gmail.com"
          className="flex flex-col"
          method="post"
        >
          <label className="text-lg mb-1 mt-5" htmlFor="userName">
            Seu nome
          </label>
          <input
            className="bg-gray-400 rounded-sm p-2 text-lg text-white placeholder:text-white/20 placeholder:font-light placeholder:text-base focus:border focus:border-red-500 focus:outline-none"
            type="text"
            name="userName"
            id="userName"
            placeholder="Me diga seu nome"
            required
          />
          <label className="text-lg mb-1 mt-5" htmlFor="userEmail">
            Seu melhor e-mail
          </label>
          <input
            className="bg-gray-400 rounded-sm p-2 text-lg text-white placeholder:text-white/20 placeholder:font-light placeholder:text-base focus:border focus:border-red-500 focus:outline-none"
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Me diga seu e-mail"
            required
          />
          <label className="text-lg mb-1 mt-5" htmlFor="userMessage">
            Sua mensagem
          </label>
          <textarea
            className="bg-gray-400 rounded-sm p-2 text-lg text-white placeholder:text-white/20 placeholder:font-light placeholder:text-base focus:border focus:border-red-500 focus:outline-none"
            name="userMessage"
            id="userMessage"
            rows={5}
            placeholder="Olá! Eu gostaria de falar sobre {assunto}..."
            required
          ></textarea>
          <button className="mt-4 px-4 py-5 border-none bg-red-500 font-bold cursor-pointer rounded transiton-all hover:opacity-75">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
