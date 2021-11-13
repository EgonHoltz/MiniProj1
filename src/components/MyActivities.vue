<template>
    <div class="myActivities">
      <h1>Principais actividades</h1>
      <p>No momento estou a trabalhar para um projecto em uma instituição financeira francesa de investimentos.</p>
      <br />
      <p>Neste projeto, desenvolvo as seguintes actividades:</p>
      <br />
      <ul>
        <li>→ Suporte de aplicações em linguagens: Java EE 1.8 Spring com Hibernate, Javascript utilizando ExtJS 6.2 com framework Sencha, CSS, PL / SQL e IBM WTX como middleware</li>
        <li>→ Migração de SVN para Git e Jenkins Job para Pipeline</li>
        <li>→ Implementar soluções de negócio com base nos requisitos da equipe de BA</li>
        <li>→ Ciclo de Vida de Software utilizando a metodologia waterfall</li>
        <li>→ Design e execução do plano de teste e casos de teste usando a ferramenta HP ALM</li>
        <li>→ Configuração de build e deploy utilizando Jenkins para Java e WTX</li>
        <li>→ Participei da atualização do ExtJS da versão 4.2 para 6.2, encontrando e corrigindo erros devido a atualização</li>
        <li>→ Atualização de documentações relacionadas ao comportamento e regras de negócio da aplicação</li>
        <li>→ Suporte a equipe BA, fornecendo esclarecimentos às regras de negócio em relação ao que está presente no código da aplicação</li>
        <li>→ Levantamento de requisitos além dos já verificados pela equipe BA para detalhar as soluções</li>
      </ul>
      <div class="imgs-frame">
        <div class="rounded-img" id="java-img"></div>
        <div class="rounded-img" id="extjs-img"></div>
        <div class="rounded-img" id="oracle-img"></div>
      </div>
      <div>
        <div class="rounded-img" id="wtx-img"></div>
        <div class="rounded-img" id="jenkins-img"></div>
      </div>
      <br /><br />
      <h2>Estudos</h2>
      <p>Além do meu trabalho, estou a estudar para o Mestrado em Engenharia Informática e Tecnologia Web, ao qual me dedico nas horas em que não estou a trabalhar</p>
      <br />
      <p>As matérias ao qual estou a me dedicar neste momento são:</p>
      <ul>
        <li>→ Arquitetura e Padrões de Softwares</li>
        <li>→ Deep Learning Aplicado</li>
        <li>→ Integração de Sistemas</li>
        <li>→ Investigação operacional</li>
        <li>→ Programação Web Avançada</li>
      </ul>
      <p>Onde estou a utilizar as tecnologias abaixo.</p>
      <div class="imgs-frame">
        <div class="rounded-img" id="vue-img"></div>
        <div class="rounded-img" id="nodejs-img"></div>
        <div class="rounded-img" id="python-img"></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.myActivities ul li {
  text-align: left;
  width: 100%;
  padding: 5px
}
#vue-img{
  background-image: url(../assets/vue.png) !important;
  margin-right: 1em;
}
#nodejs-img{
  background-image: url(../assets/nodejs.png) !important;
  margin-right: 1em;
}
#python-img{
  background-image: url(../assets/python.jpg) !important;
  margin-right: 1em;
}
#java-img{
  background-image: url(../assets/java.jpg) !important;
  margin-right: 1em;
}
#extjs-img{
  background-image: url(../assets/extjs.jpg) !important;
  margin-right: 1em;
}
#oracle-img{
  background-image: url(../assets/oracle.jpeg) !important;
  margin-right: 1em;
}
#wtx-img{
  background-image: url(../assets/wtx.jpg) !important;
  margin-right: 1em;
}
#jenkins-img{
  background-image: url(../assets/jenkins.jpg) !important;
  margin-right: 1em;
}
</style>