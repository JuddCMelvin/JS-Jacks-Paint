function configureListeners() {
    let images = document.getElementsByTagName('img');


    for (let i = 0; i < images.length; i++) { 
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false) 
    //     images[i].addEventListener('mouseover', function(event) {
    //         // Display the name when the mouse moves over the element
    //         console.log("Mouse over the element!"); ;
    //         }, false);    
    }
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    
    console.log('opacity')
    getProductInfo(event.target.id);     
}

// function removeOpacity(event) {
//      //remove appropriate CSS class

//     let element = document.getElementById('color-price');
//         element.textContent = '';
        
//     let color = document.getElementById('color-name');
//         color.textContent = ''; 

//     event.preventDefault();    
// }

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':   
            price = '$19.99'
            colorName = 'Lime Green'        
            updatePrice(colorName, price)       
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            break;   
        default:              
    }

function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name');
        color.textContent = colorName;
    }
    
}
