$(document).ready(function(){

	$('.js-back').hide(); //

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

function printNews(){
	$("#nuevas-recetas").text("NUEVAS RECETAS");
}
printNews();
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	recipesArray.forEach(function(elements){
		if(elements.highlighted == true){
			renderRecipe(elements);
		}  
	})
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	$(".title-recipe").append(` <a class="item-recipe" href="#">
                                        <span class="attribution">
                                            <span class="title-recipe"> TITULO DE LA RECETA (ATRIBUTO "title" ) </span>
										    <span class="metadata-recipe">
										      <span class="author-recipe"> NOMBRE DEL AUTO DE LA RECETA (ATRIBUTO "source.name") </span>
										      <span class="bookmarks-recipe">
										        <span class="icon-bookmark"></span> 
										      </span>
										    </span>
                                        </span>
                                </a>`)
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


