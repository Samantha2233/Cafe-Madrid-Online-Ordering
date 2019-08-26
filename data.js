exports.dishes = [
    {
        name: 'Chicken Soup', 
        description:'Our Famous Homemade Chicken Soup', 
        amountAndPrice:[
            {amount:'Cup', price:'7'},
            {amount:'Bowl', price:'10'},
            {amount:'Quart', price:'16'},],
        addOns: [{addOn:'Warm Bacci Roll with Butter', price:'.75'}],
        category:'Soup'
    },
    {
        name: 'Mediterranean Salad', 
        description:'Organic Mixed Greens, Strawberries, Apples, Mandarin Orange, Raisins, Walnuts, Breaded Fried Brie, and Raspberry Vinaigrette', 
        amountAndPrice:[
            {amount:'Half Order', price:'11.50'},
            {amount:'Full Order', price:'13.50'}],
        category:'Salad'
    },
    {
        name: 'Caprese Salad', 
        description:'Organic Mixed Greens, Fresh Mozzarella, Tomatoes, Extra Virgin Olive Oil, Balsamic Reduction, Salt and Black Pepper', 
        amountAndPrice:[
            {amount:'Half Order', price:'10.50'},
            {amount:'Full Order', price:'12.50'}],
        category:'Salad'
    },
    {
        name: 'Gaudi Salad', 
        description:'Organic Mixed Greens topped with Breaded Crispy Chicken, Diced Black Forrest Ham, Bacon, Grilled Cheese, Avocados, Apples, Raisins, Croutons and Orange Chocolate Vinaigrette', 
        amountAndPrice:[
            {amount:'Half Order', price:'11.50'},
            {amount:'Full Order', price:'13.50'}],
        category:'Salad'
    },
    {
        name: 'Mixta Salad', 
        description:'Organic Mixed Greens  Garnished with Piquillo Peppers, Red Onions, Tomatoes, Green Olives, Grilled Asparagus, Extra Virgin Olive Oil and Balsamic Vinegar', 
        amountAndPrice:[
            {amount:'Half Order', price:'10.50'},
            {amount:'Full Order', price:'12.50'}],
        addOn: [{addOn:'Grilled Chicken', price:'5.00'},
                {addOn:'Shrimp', price:'6.00'},
                {addOn:'Salmon', price:'8.00'}],
        category:'Salad'
    },
    {
        name: 'Beef Tenderloin Sandwich', 
        description:'Beef Tenderloin with Our Famous Creamy Roquefort Cheese Sauce, Caramelized Onions, Balsamic Vinaigrette Reduction, Lettuce and Strawberry Fig Jam', 
        amountAndPrice:[
            {amount:'Bacci Roll', price:'10.00'},
            {amount:'Half Ciabatta', price:'10.00'},
            {amount:'Full Ciabatta', price:'13.50'}],
        category:'Sandwich'
    },
    {
        name: 'Mediterranean Chicken Pesto', 
        description:'Marinated Chicken Breast with melted Swiss, Pesto spread, Mustard Dressing & Baby Greens', 
        amountAndPrice:[
            {amount:'Bacci Roll', price:'8.00'},
            {amount:'Half Ciabatta', price:'8.00'},
            {amount:'Full Ciabatta', price:'12.00'}],
        category:'Sandwich'
    },
    {
        name: 'Grand Gaudi BLT', 
        description:'Bacon, Lettuce, Tomato with melted Swiss, Provolone, Mozzarella, Avocado, House Mustard Dressing', 
        amountAndPrice:[
            {amount:'Bacci Roll', price:'8.00'},
            {amount:'Half Ciabatta', price:'8.00'},
            {amount:'Full Ciabatta', price:'12.00'}],
        category:'Sandwich'
    },
    {
        name: 'BLT', 
        description:'Bacon, Lettuce, Tomato & Aioli', 
        amountAndPrice:[
            {amount:'Bacci Roll', price:'7.00'},
            {amount:'Half Ciabatta', price:'7.00'},
            {amount:'Full Ciabatta', price:'11.00'}],
        category:'Sandwich'
    },
    {
        name: 'Riser Breakfast Sandwich', 
        description:'Fresh baked Croissant, Fried or Scrambled Egg, Bacon, Chorizo, Provolone, Mozzarella, Tomato, Lettuce, & Aioli', 
        amountAndPrice:[
            {amount:'Bacci Roll', price:'8.00'},
            {amount:'Half Ciabatta', price:'8.00'},
            {amount:'Full Ciabatta', price:'12.00'}],
        addOn: [{addOn:'Avocado', price:'1.00'}],
        category:'Sandwich'
    },
    {
        name: 'Pork Tenderloin', 
        description:'Pork Tenderloin, Black Forrest Ham, Chorizo, Manchego, Tomato, Piquillo Peppers, Red Onions, Greens & Aioli', 
        amountAndPrice:[
            {amount:'Bacci Roll', price:'10.00'},
            {amount:'Half Ciabatta', price:'10.00'},
            {amount:'Full Ciabatta', price:'13.50'}],
        category:'Sandwich'
    },
    {
        name: 'Veggie Melt', 
        description:'Grilled Oyster Mushrooms, Piquillo Peppers, Swiss, Provolone, Mozzarella, Caramelized Onions, Lettuce, House Mustard Dressing', 
        amountAndPrice:[
            {amount:'Bacci Roll', price:'8.00'},
            {amount:'Half Ciabatta', price:'8.00'},
            {amount:'Full Ciabatta', price:'12.00'}],
        category:'Sandwich'
    },
    {
        name: 'Veggie Light', 
        description:'Grilled Oyster Mushrooms, Piquillo Peppers, Asparagus, Red Onions, Tomato, Lettuce, Extra Virgin Olive Oil & Balsamic', 
        amountAndPrice:[
            {amount:'Bacci Roll', price:'7.00'},
            {amount:'Half Ciabatta', price:'7.00'},
            {amount:'Full Ciabatta', price:'11.00'}],
        category:'Sandwich'
    },
    {
        name: 'Chicken Cordon Bleu', 
        description:'Breaded Chicken Breast, Black Forrest Ham, Melted Swiss & House Mustard Dressing', 
        amountAndPrice:[
            {amount:'Bacci Roll', price:'8.00'},
            {amount:'Half Ciabatta', price:'8.00'},
            {amount:'Full Ciabatta', price:'12.00'}],
        category:'Sandwich'
    },
    {
        name: 'Jamon Serrano & Chorizo', 
        description:'Imported Cured Serrano Ham, and Spanish Chorizo, over Olive Oil served on an Artisan Baguette', 
        amountAndPrice:[
            {amount:'Half Baguette', price:'8.00'},
            {amount:'Full Baguette', price:'12.00'}],
        addOn: [{addOn:'Manchego Cheese', price:'1.50'}],
        category:'Sandwich'
    },
    {
        name: 'Bocadillo de Albondigas Caseras', 
        description:'Homemade Spanish Meatballs Baguette with Parmesan Cheese', 
        amountAndPrice:[
            {amount:'Half Baguette', price:'8.25'},
            {amount:'Full Baguette', price:'13.50'}],
        category:'Sandwich'
    },
];