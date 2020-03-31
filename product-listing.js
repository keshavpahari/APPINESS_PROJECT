/* Import statement */
var categories = require('./categories.json');
var products = require('./products.json');
var readline = require('readline');

/* For reading from console and write to console */
var prompts = readline.createInterface(process.stdin, process.stdout);

var category = categories.map(category => category.category_name).join('\n');

prompts.question("Select category of your choice \n" + category + "\n", function(categoryName){

    /* Exception handling */
    try{

        /* To category id */
        var categoryId = categories.filter(category => category.category_name === categoryName)

        /* Products Under Category */
        var productsUnderCategory = products.reduce((productName, product) => {
            if (product.category_id === categoryId[0].category_id) {
                productName.push(product.product_name);
            }
            return productName;
          }, []);
        console.log("Products under selected category "+categoryName)
        console.log(productsUnderCategory)
        process.exit()
    }
    catch(error){
        console.log("Invalid input")
        process.exit()
    }
   
})

