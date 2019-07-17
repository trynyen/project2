$(document).ready(function () {

    //Create a new card every time a new meal is added
    function createMealCard(mealData) {

    }
    //when Eat button is clicked, handleMeals function is called
    $("#et").on("click", renderMeals);

    //Render page with the list of all meals
    function renderMeals(mealData) {
        $.get("/api/meals", function(mealData){
            var mealsToAdd = [];
            for(var i = 0; i < mealData.length; i++){
                mealsToAdd.push(createMealCard(mealData[i]))
            }
            
        })
    }

});