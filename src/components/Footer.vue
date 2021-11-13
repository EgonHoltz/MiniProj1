<template>
    <footer>
        <div class ="footer-content">
            <h2>Contactos</h2>
            <p><a href="https://github.com/EgonHoltz">GitHub</a></p>
            <p><a href="https://www.linkedin.com/in/egonholtz/">LinkedIn</a></p>
            <p class="copy">Copyright &copy; {{year}}</p>
        </div>
    </footer>
</template>

<script>
import {computed} from 'vue'
export default {
    setup(){
        const year = computed(() => new Date().getFullYear())
        return {year} 
    }
}
</script>

<style>
footer {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 5.5rem; 
	margin: 0 auto;
	color: white;
	z-index: 999;
}
.footer-content{
    background-color: #00001a;
    color: white;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 0px;
}
.copy{
    font-size: 0.9em;
    font-family: "Open Sans Condensed", sans-serif;
    color: gray;
}
footer a{
    margin: 0;
	font-family: "Open Sans Condensed", sans-serif;
	font-size: 1.2em;
    color: white;
    display: inline-flex;
    margin-left: 1rem;
    font-style: none;
    text-decoration: none !important;
}
footer a:hover{
    color: rgb(97, 96, 96);
}

</style>