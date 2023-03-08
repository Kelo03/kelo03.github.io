
document.getElementById('Boton1dehabilidades').onclick = ('click', function mostrar1() {
   document.getElementById('Graficos_Habilidades1').style.display = 'unset';
   document.getElementById('Graficos_Habilidades2').style.display = 'unset';
   document.getElementById('Graficos_Habilidades3').style.display = 'unset';
   document.getElementById('NivelTexto1').style.display = 'unset';
   document.getElementById('NivelTexto2').style.display = 'unset';
   document.getElementById('NivelTexto3').style.display = 'unset';
   document.getElementById('Boton1dehabilidades').style.display = 'none';
   document.getElementById('ocultargraficos').style.display = 'unset';
})

document.getElementById('AgregarInformacion1').onclick = ('click', function Agregar1() {

})
document.getElementById('AgregarInformacion2').onclick = ('click', function Agregar2() {	
})


document.getElementById('ocultargraficos').onclick = ('click', function ocultar() {
   document.getElementById('Graficos_Habilidades1').style.display = 'none';
   document.getElementById('Graficos_Habilidades2').style.display = 'none';
   document.getElementById('Graficos_Habilidades3').style.display = 'none';
   document.getElementById('NivelTexto1').style.display = 'none';
   document.getElementById('NivelTexto2').style.display = 'none';
   document.getElementById('NivelTexto3').style.display = 'none';
   document.getElementById('ocultargraficos').style.display = 'none'
})