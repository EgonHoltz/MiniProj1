<template>
    <div class="hobbies">
      <h1>Hobbies</h1>
      <p>Para além de trabalhar e estudar, gosto de fazer outras coisas.</p>
      <br />
      <p>Meus hobbies são basicamente jogar jogos on-line e preparar diferentes refeições</p>
      <h2>Jogos</h2>
      <p>Foi devido aos jogos que resolvi entrar para a área de tecnologia. Aos 15 anos, configurei um servidor de jogos com base em instruções em diversos sites 
        e tive meus primeiros contactos com PHP, HTML, SQL Server, reversão de código C++ e configurações de rede.</p>
      <br />
      <p>Os jogos que mais me divertem hoje são:</p>
      <div class="list-imgs">
        <div class="flex-divide">
          <div class="squared-img" id="cs-img"><div class="transbox"> Counter Strike GO (Zumbie Mod)</div></div>
          <div class="squared-img" id="citiessky-img"><div class="transbox">Cities Skylines</div></div>
          <div class="squared-img" id="rdr-img"><div class="transbox">Red Dead Redemption 2</div></div>
          <div class="squared-img" id="lords-img"><div class="transbox">Lords Mobile</div></div>
        </div>
      </div>
      <br />
      <h2>Culinária</h2>
      <p>Isso foi um gosto que comecei a pegar cá em Portugal. Aqui tive tempo de poder experimentar e fazer diferentes receitas, pelas qual posso dizer:</p>
      <div class="list-imgs">
        <div class="flex-divide">
          <div class="squared-img" id="bacalhau-img"><div class="transbox">Bacalhau com natas</div></div>
          <div class="squared-img" id="bolas-img"><div class="transbox">Bolas de Berlin</div></div>
          <div class="squared-img" id="picanha-img"><div class="transbox">Picanha ao forno</div></div>
          <div class="squared-img" id="tarte-img"><div class="transbox">Tarte de limão</div></div>
          <div class="squared-img" id="strogonoff-img"><div class="transbox">Strogonoff de lombo</div></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#bacalhau-img{
  background-image: url(../assets/bacalhau.jpg) !important;
  margin: 1em;
}
#bolas-img{
  background-image: url(../assets/bolas.jpg) !important;
  margin: 1em;
}
#picanha-img{
  background-image: url(../assets/picanha.jpg) !important;
  margin: 1em;
}
#strogonoff-img{
  background-image: url(../assets/strogonoff.jpg) !important;
  margin: 1em;
}
#tarte-img{
  background-image: url(../assets/tarte.jpg) !important;
  margin: 1em;
}
#cs-img{
  background-image: url(../assets/cs.jpg) !important;
  margin: 1em;
}
#citiessky-img{
  background-image: url(../assets/citiessky.jpg) !important;
  margin: 1em;
}
#rdr-img{
  background-image: url(../assets/rdr.jpeg) !important;
  margin: 1em;
}
#lords-img{
  background-image: url(../assets/lords.jpeg) !important;
  margin: 1em;
}
.flex-devide{
  flex-grow: 2
}
.list-imgs {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

</style>