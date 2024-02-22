import PhotoAboutMe from '/imagens/foto-sobre-mim.png';

export default function AboutMe() {
  return (
    <main className="text-white flex flex-wrap">
      <h1 className="w-screen text-center text-2xl my-8">
        Olá sou a Bianca!
      </h1>
      <article className="flex justify-center items-center text-justify mb-8">
        <div className="w-1/2 mr-12 text-lg indent-8">
          <p className='pb-0.5'>
            Minha história com programação começou quando meu primo me contou
            sempre da área de Sistemas de Informação e como cada pequeno detalhe
            era pensado para criar um programa ou resolver algum bug que
            acontecia na aplicação. Após finalizar meu ensino médio, fiz alguns
            cursos de lógica de programação, HTML5 e CSS3 na Alura e aprendi o
            básico de algumas linguagens, como JavaScript e Python, sem me
            aprofundar muito em cada uma delas. Com o passar desses cursos,
            percebi que era a área que queria trabalhar.
          </p>
          <p className='pb-0.5'>
            No ensino superior, escolhi cursar Análise e Desenvolvimento de
            Sistemas na FIAP (Faculdade de Informática e Administração
            Paulista). Lá tive a oportunidade de conhecer outras linguagens como
            Java, me aprofundar na lógica de programação com Python, na criação
            de páginas web com JavaScript e o framework React,
            adentrar nos conceitos de banco de dados e a como organizar as
            entregas em sprints, e a fazer a documentação da aplicação que
            estávamos criando ao longo do ano.
          </p>
          <p className='pb-0.5'>
            Aprendi também a criar projetos a partir de problemas que alguma
            organização junto com a faculdade colocava como desafio que tínhamos
            que fazer ao longo do ano, chamado Challenge. Era um desafio
            interdisciplinar onde eu tinha que aplicar os conceitos de back-end,
            front-end e banco de dados no projeto. E nesse projeto desenvolvi as
            habilidades de trabalho em equipe e como gerenciar a equipe.
          </p>
        </div>

        <img
          src={PhotoAboutMe}
          alt="Foto da bianca sorrindo"
        />
      </article>
    </main>
  );
}
