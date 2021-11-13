<template>
  <div class="aboutMe">
    <div class="rounded-img" id="myself"></div>
    <h1>Egon Holtz</h1>
    <h2>IT Analyst | Open Banking | Payments methods | Leadership | M.Sc. student</h2>
    <p>Olá, prazer, sou Egon Holtz. Obrigado pela visita. <br />
      <br />
        Lisboa, Portugal.<br />
      <br />
        Tecnólogo em analises e desenvolvimento de sistema, com 14 anos de experiencia na área de informatica, e uma carreira profissional solida e consolidada em empresas do setor financeiro (adquirente e bancos).<br />
      <br />
        Tenho paixão por trabalhar com I.T. Para mim, qualquer hora é um bom momento para falar sobre tecnologia.<br />
      <br />
        Em minha carreira, desenvolvi (criei e executei) alguns projetos para melhoraria processos e atualizações de sistema, que resultaram em mais agilidade e performance sistêmica. Em virtude desses projetos eu tive grande reconhecimento profissional, e isso é motivo de muito orgulho.<br />
      <br />
        Competências e Habilidades: Gestão de riscos, senso de urgência, liderança de equipe e atitude de propriedade.<br />
      <br />
        Atualmente, me dedico a aprender novas tecnologias como Angular e estou a me aprofundar no desenvolvimento utilizado Java Spring Framework.</p>
    <br />
    <h2>Experiências:</h2>
    <p>Full-stack developer - PrimeIT (2019-Actualmente)</p>
    <p>Tech Lead - Redecard (2014-2019)</p>
    <p>Treinee - Tata Consultancy Service (2012-2014)</p>
    <div class="imgs-frame">
      <div class="rounded-img" id="tata-img"></div>
      <div class="rounded-img" id="redecard-img"></div>
      <div class="rounded-img" id="prime-img"></div>
    </div>
    <br />
    <h2>Formação Acadêmica:</h2>
    <p>Mestrado em Engenharia Informática e Tecnologia Web - UTAD & Uab (2021-2023)</p>
    <p>Tecnólogo em Análise e desenvolvimento de Sistemas - FATEC (2010-2012)</p>
    <p>Técnico em Informática - ETEC (2007-2008)</p>
    <div class="imgs-frame">
      <div class="rounded-img" id="etec-img"></div>
      <div class="rounded-img" id="fatec-img"></div>
      <div class="rounded-img" id="utad-img"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#prime-img{
  background-image: url(../assets/primeIT.jpeg) !important;
  margin-right: 1em;
}
#redecard-img{
  background-image: url(../assets/rede.jpeg) !important;
  margin-right: 1em;
}
#tata-img{
  background-image: url(../assets/tata.jpeg) !important;
  margin-right: 1em;
}
#etec-img{
  background-image: url(../assets/etec.jpeg) !important;
  margin-right: 1em;
}
#fatec-img{
  background-image: url(../assets/fatec.jpeg) !important;
  margin-right: 1em;
}
#utad-img{
  background-image: url(../assets/utad.jpeg) !important;
  margin-right: 1em;
}
.imgs-frame {
  width: 80%;
  padding: 2em;
  margin: 0 auto;
}
#myself {
  background-image: url(../assets/myself.jpeg);
  width: 15em !important;
  height: 15em !important;
}


</style>