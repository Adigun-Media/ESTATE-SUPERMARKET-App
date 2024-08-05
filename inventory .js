document.addEventListener('DOMContentLoaded', () => {
 let barcodeCounter = 202401;

 const form = document.getElementById('productForm');
 const tableBody = document.querySelector('#inventoryTable tbody');

 form.addEventListener('submit', (e) => {
     e.preventDefault();

     const productName = document.getElementById('productName').value;
     const quantity = document.getElementById('quantity').value;
     const unitPrice = document.getElementById('unitPrice').value;
     const dateOfInput = new Date().toLocaleDateString();

     const newRow = document.createElement('tr');
     newRow.innerHTML = `
         <td>${dateOfInput}</td>
         <td>${productName}</td>
         <td>${barcodeCounter}</td>
         <td>${quantity}</td>
         <td>${unitPrice}</td>
         <td><button class="delete">Delete</button></td>
     `;
     
     tableBody.appendChild(newRow);
     
     barcodeCounter++;

     form.reset();
 });

 tableBody.addEventListener('click', (e) => {
     if (e.target.classList.contains('delete')) {
         const row = e.target.closest('tr');
         tableBody.removeChild(row);
     }
 });
});
