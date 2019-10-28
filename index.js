
function createNode(element) {
    return document.createElement(element); 
}

function append(parent, el) {
    return parent.appendChild(el); 
}
function fetching(url){
    const pic = document.getElementById('ima');
    const title = document.getElementById('title');
    const category = document.getElementById('category');
    const instructions = document.getElementById('instructions');
    const tags = document.getElementById('tags');
    const vid = document.getElementById('vid');
    const ul = document.getElementById('ingredients');

    fetch(url)
        .then((resp) => resp.json()) 
        .then(function(data) {
            let receipts = data.meals;
            return receipts.map(function(receipt) {
                pic.src = receipt.strMealThumb;
                title.textContent=receipt.strMeal;
                category.textContent = `Category: ${receipt.strCategory}`;
                instructions.textContent=receipt.strInstructions;
                tags.textContent= `Tags: ${receipt.strTags}`;
                vid.src = receipt.strYoutube.replace("watch?v=","embed\/");
                let nameIn="";
                let nameMe="";
                while(ul.firstChild) ul.removeChild(ul.firstChild);
                for(let i=1;i<=20;i++){
                    nameIn="strIngredient"+i;
                    nameMe="strMeasure"+i;
                    if(receipt[nameIn]!=null && receipt[nameIn]!=""){
                        let li = createNode('li');
                        li.setAttribute('id',`- ${receipt[nameIn]} - ${receipt[nameMe]}`);
                        append(li, document.createTextNode(`- ${receipt[nameIn]} - ${receipt[nameMe]}`));
                        append(ul, li);
                    }                   
                }              
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}
function main() {

    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'; 
    fetching(url);

    document.getElementById("btn1").onclick = () => {
        fetching(url);
    }
}