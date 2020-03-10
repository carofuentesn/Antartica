//<!----


function validate(theForm){
    busqueda = theForm.busqueda.value;
	
    if (busqueda.length < 3){
        alert ("Debe ingresar un criterio de busqueda mayor o igual a 3 caracteres.");
        return false;
    } else {
        return true;
    }
}
function validarBA(theForm){
    autor = theForm.autor.value;
    titulo = theForm.titulo.value;
    editorial = theForm.editorial.value;
    tema = theForm.tema.value;
    precio = theForm.precio.value;
    idioma = theForm.idioma.value;
    coleccion = theForm.coleccion.value;
    
    
    if(autor.length < 3 && titulo.length < 3 && editorial.length < 3 && tema.length < 3 && precio.length < 3 && idioma.length < 3 && coleccion.length < 3){
        alert ("Debe ingresar un criterio de busqueda mayor o igual a 3 caracteres.");
        return false;
    }
}
function modificarCriterio(formulario) {
	
    var indiceOpcion = formulario.categorias.selectedIndex;
    var opcion = formulario.categorias.options[indiceOpcion].value;
	
    switch ( opcion ) {
		
        case "libros":
            document.formularioBusqueda.criterio.options[0].text = "T�tulo";
            document.formularioBusqueda.criterio.options[1].text = "Autor";
            document.formularioBusqueda.criterio.options[2].text = "Editorial";
            document.formularioBusqueda.criterio.options[3].text = "ISBN";
            break;
		
        case "dvds":
            document.formularioBusqueda.criterio.options[0].text = "T�tulo";
            document.formularioBusqueda.criterio.options[1].text = "Reparto";
            document.formularioBusqueda.criterio.options[2].text = "Distribuidor";
            document.formularioBusqueda.criterio.options[3].text = "UPC";
            break;
		
        case "musica":
            document.formularioBusqueda.criterio.options[0].text = "Nombre Disco";
            document.formularioBusqueda.criterio.options[1].text = "Artista";
            document.formularioBusqueda.criterio.options[2].text = "Sello";
            document.formularioBusqueda.criterio.options[3].text = "C�digo";
            break;
		
        case "regalos":
            document.formularioBusqueda.criterio.options[0].text = "Producto";
            document.formularioBusqueda.criterio.options[1].text = "------";
            document.formularioBusqueda.criterio.options[2].text = "Marca";
            document.formularioBusqueda.criterio.options[3].text = "------";
            break;
		
        default:
            document.formularioBusqueda.criterio.options[0].text = "T�tulo";
            document.formularioBusqueda.criterio.options[1].text = "Autor";
            document.formularioBusqueda.criterio.options[2].text = "Editorial";
            document.formularioBusqueda.criterio.options[3].text = "ISBN";
            break;
    }
	
}
 
                        



function limpiarCombo(combo){
    while(combo.length > 0){
        combo.remove(combo.length -1);
    }
}
        
function revizarCambio(form){
    if (form.categorias.value == "regalos" && (form.criterio.options[2].selected || form.criterio.options[3].selected)){
        form.criterio.options[0].selected = true;
    }
}
$(document).ready(function(){
    
    $('#busqueda').autocomplete({
        source: function (request, response) {
            var autocompleteVar = [];
            $.getJSON("/antartica/ajax/?action=getByTitle&clave="+$('#busqueda').val(), function (data) {
                $(data).each(function (key, val) {
                    autocompleteVar.push(val);
                })
                response(autocompleteVar)
            })
        }
    })
})
// ---->