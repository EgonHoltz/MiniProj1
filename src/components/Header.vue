<template>
    <header>
        <div class="content">
            <ul>
                <li><router-link to="/">Quem sou eu</router-link></li>
                <li><router-link to="/activities">Actividades</router-link></li>
                <li><router-link to="/hobbies">Hobbies</router-link></li>
            </ul>
        </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
#header {
  position: fixed;
  top: 0;

}
.content {
    background-color: rgb(55, 62, 172);
}

header ul{
	height: 3em;
	width: 100%;		
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #404040;
	border: .1em solid black;
	padding-left: 4em;
    float: right;
}

ul li{
    margin: 0;
	font-family: "Open Sans Condensed", sans-serif;
	font-size: 1.2em;
    color: white;
    display: inline-flex;
    margin-left: 1rem;
    font-style: none;

}
</style>