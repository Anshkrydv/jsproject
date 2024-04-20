const c = document.getElementById("coffee");
c.addEventListener("click", funcc);

function funcc() {
    const hc = `<div style="display:grid;grid-template-columns:33% 33% 33%;">
    <div>
        <img src="https://m.media-amazon.com/images/I/71O4reZ6UBL.jpg">
        <p>NESCAFE ICED LATTE</p>
        <p>Rs 35 , 250 ml</p>
        <button onclick="additem('NESCAFE ICED LATTE',35)">ADD TO CART</button>
        <button onclick="delitem('NESCAFE ICED LATTE',35)">DELETE</button>
    </div>
    <div>
        <img src="https://m.media-amazon.com/images/I/51qlCdu5xFS.AC_SS300.jpg">
        <p>STARBUCKS FRAPPUCCINO</p>
        <p>Rs 320 , 280 ml</p>
        <button onclick="additem('STARBUCKS FRAPPUCCINO',320)">ADD TO CART</button>
        <button onclick="delitem('STARBUCKS FRAPPUCCINO',320)">DELETE</button>
    </div>
    <div>
        <img src="https://m.media-amazon.com/images/I/5187kFE1PiL.jpg">
        <p>MOTHER DAIRY COLD COFFEE</p>
        <p>Rs 25 , 180 ml</p>
        <button onclick="additem('MOTHER DAIRY COLD COFFEE',25)">ADD TO CART</button>
        <button onclick="delitem('MOTHER DAIRY COLD COFFEE',25)">DELETE</button>
    </div>
    <div>
        <img src="https://m.media-amazon.com/images/I/51kEiVJsmpL.jpg">
        <p>SLEEPY OWL SALTED CARAMEL</p>
        <p>Rs 25 , 600 ml</p>
        <button onclick="additem('SLEEPY OWL SALTED CARAMEL',25)">ADD TO CART</button>
            <button onclick="delitem('SLEEPY OWL SALTED CARAMEL',25)">DELETE</button>
    </div>
    <div>
        <img src="https://www.jiomart.com/images/product/original/rvcpj2fhxg/pokka-ready-to-drink-cappuccino-coffee-240-ml-product-images-orvcpj2fhxg-p602099757-0-202306031153.jpg?im=Resize=(1000,1000)">
        <p>POKKA CAPPUCCINO</p>
        <p>Rs 42 , 350 ml</p>
        <button onclick="additem('POKKA CAPPUCCINO', 42 )">ADD TO CART</button>
            <button onclick="delitem('POKKA CAPPUCCINO', 42 )">DELETE</button>
    </div>
    <div>
        <img src="https://www.jiomart.com/images/product/original/rvdfebhbq7/rage-coffee-flavoured-ready-to-drink-cold-coffee-mocha-frappe-240-ml-bold-smooth-rich-coffee-pack-of-25-product-images-orvdfebhbq7-p601238765-1-202305070321.jpg?im=Resize=(420,420)">
        <p>RAGE MOCHA FRAPPE</p>
        <p>Rs 60 , 190 ml</p>
        <button onclick="additem('RAGE MOCHA FRAPPE',60)">ADD TO CART</button>
            <button onclick="delitem('RAGE MOCHA FRAPPE',60)">DELETE</button>
    </div>

</div>`;
document.getElementById("mid").innerHTML = hc;
}





        function additem(name, price) {
            const selectedItemsList = document.getElementById('sil');
            const selectedPricesList = document.getElementById('spl');
            const itemName = document.createElement('li');
            itemName.textContent = name;
            const itemPrice = document.createElement('li');
            itemPrice.textContent = price;
            selectedItemsList.appendChild(itemName);
            selectedPricesList.appendChild(itemPrice);
        }
        function delitem(name, price) {
            const selectedItemsList = document.getElementById('sil');
            const selectedPricesList = document.getElementById('spl');
            const items = selectedItemsList.getElementsByTagName("li");
            const prices = selectedPricesList.getElementsByTagName("li");
            for (let i = 0; i < items.length; i++) {
                 if (items[i].textContent.includes(name) && prices[i].textContent.includes(price)) {
                     items[i].remove();
                    prices[i].remove();
                    break;
                 }
            }
}
    function calculateBill() {
            const selectedItemsList = document.getElementById('sil');
            const selectedPricesList = document.getElementById('spl');
            const billTextElement = document.getElementById('bill-text');
            let totalPrice = 0;
            let billText = "Your Bill\n";
            for (let i = 0; i < selectedItemsList.children.length; i++) {
                const item = selectedItemsList.children[i].textContent;
                const price = parseFloat(selectedPricesList.children[i].textContent);
                const itemTotalPrice = price;
                totalPrice += itemTotalPrice;
                billText += `${item}: Rs${price.toFixed(2)}\n`;

            }
            billText += `Total: Rs${totalPrice.toFixed(2)}\n`;

            billTextElement.textContent = billText;
            const billContainer = document.getElementById('bill-container');
            billContainer.classList.remove('bill-container-hidden');
            billContainer.classList.add('bill-container-visible'); 
        }
        function checkout() {
            const selectedItemsList = document.getElementById('sil');
            const selectedPricesList = document.getElementById('spl');
            if (!selectedItemsList || !selectedPricesList) {
                console.error("Error: Selected items or prices list not found!");
                return;
            }
            const items = [];
            const prices = [];
            // Retrieve items and prices from the lists
            for (let i = 0; i < selectedItemsList.children.length; i++) {
                const itemText = selectedItemsList.children[i].textContent.trim();
                const priceText = selectedPricesList.children[i].textContent.trim();
                // Push item and price into respective array
                items.push(itemText);
                prices.push(priceText);
            }
            const params = new URLSearchParams();
            params.append('items', items.join(','));
            params.append('prices', prices.join(','));
            window.location.href = `checkout.html?${params.toString()}`;
        }
        