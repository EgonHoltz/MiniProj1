<template>
    <header>
        <div class="content">
            <ul>
                <li><router-link tag="li" to="/">Quem sou eu</router-link></li>
                <li><router-link tag="li" to="/activities">Actividades</router-link></li>
                <li><router-link tag="li" to="/hobbies">Hobbies</router-link></li>
            </ul>
        </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
header {
	height: 3em;
    position: fixed;
    top: 0;
    width: 100%;
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
    text-align: center;
}

ul li{
    margin: 0;
	font-family: "Open Sans Condensed", sans-serif;
	font-size: 1.2em;
    color: white;
    display: inline-flex;
    margin-left: 1rem;
    font-style: none;
    text-decoration: none !important;
}

ul li a{
    margin: 0;
	font-family: "Open Sans Condensed", sans-serif;
	font-size: 1.2em;
    color: white;
    display: inline-flex;
    margin-left: 1rem;
    font-style: none;
    text-decoration: none !important;
}

ul li a:hover{
    margin: 0;
	font-family: "Open Sans Condensed", sans-serif;
	font-size: 1.2em;
    color: red;
    display: inline-flex;
    margin-left: 1rem;
    font-style: none;
    text-decoration: none !important;
}

</style>