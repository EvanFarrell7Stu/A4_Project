document.addEventListener('DOMContentLoaded', () => {
    const phones = [
      { id: 1, name: "Samsung Galaxy S23", price: 799, image: "samsungS23.jpg" },
      { id: 2, name: "Samsung Galaxy Z Fold 5", price: 1799, image: "samsungZFold.jpg" },
      { id: 3, name: "Samsung Galaxy A54", price: 499, image: "samsungA54.jpg" },
      { id: 4, name: "Samsung Galaxy S22 Ultra", price: 1199, image: "SamsungS22Ultra.jpg" },
      { id: 5, name: "Samsung Galaxy Z Flip 5", price: 999, image: "samsungZFlip5.jpg" }
    ];
  
    const cart = [];
  
    function displayPhones() {
      const phoneList = document.getElementById('phone-list');
      phones.forEach(phone => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${phone.image}" alt="${phone.name}">
          <h3>${phone.name}</h3>
          <p>Price: $${phone.price}</p>
          <button data-id="${phone.id}">Add to Cart</button>
        `;
        phoneList.appendChild(card);
      });
  
      // Add event listeners for all "Add to Cart" buttons
      const buttons = phoneList.querySelectorAll('button');
      buttons.forEach(button => {
        button.addEventListener('click', (event) => {
          const phoneId = parseInt(event.target.getAttribute('data-id'));
          addToCart(phoneId);
        });
      });
    }
  
    function addToCart(id) {
      const phone = phones.find(p => p.id === id);
      if (phone) {
        cart.push(phone);
        updateCart();
      } else {
        console.error('Phone not found with ID:', id);
      }
    }
  
    function updateCart() {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(listItem);
      });
    }
  
    // Initialize the phone list on page load
    displayPhones();
  });
  