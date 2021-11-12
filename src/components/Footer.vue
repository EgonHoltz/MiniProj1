<template>
    <footer>
        <div class ="footer-content">
            <h2>Contactos</h2>
            <p>LinkedIn</p>
            <p>Github</p>
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
#footer {
	position: fixed;
	bottom: 0;
	min-width: 100%;
	height: 3em;
	margin: 0 auto;
	color: white;
	z-index: 999;
}
.footer-content{
    background-color: #00001a;
    color: white;
}
.copy{
    font-size: 0.9em;
    font-family: "Open Sans Condensed", sans-serif;
    color: gray;
}
</style>