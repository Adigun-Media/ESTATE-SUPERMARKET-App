document.addEventListener('DOMContentLoaded', function() {
 // Hide loader after 3 seconds
 setTimeout(() => {
     document.getElementById('loader').style.display = 'none';
 }, 3000);

 const salesForm = document.getElementById('salesForm');
 const salesTable = document.getElementById('salesTable').getElementsByTagName('tbody')[0];
 let totalSales = 0;

 salesForm.addEventListener('submit', function(event) {
     event.preventDefault();

     // Get form values
     const barcode = document.getElementById('barcode').value;
     const date = document.getElementById('date').value;
     const phone = document.getElementById('phone').value;
     const quantity = parseInt(document.getElementById('quantity').value, 10);
     const price = parseFloat(document.getElementById('price').value);
     const totalCost = quantity * price;

     // Update total cost field
     document.getElementById('total').value = totalCost;

     // Add a new row to the table
     const newRow = salesTable.insertRow();
     newRow.insertCell(0).textContent = barcode;
     newRow.insertCell(1).textContent = date;
     newRow.insertCell(2).textContent = phone;
     newRow.insertCell(3).textContent = quantity;
     newRow.insertCell(4).textContent = price.toFixed(2);
     newRow.insertCell(5).textContent = totalCost.toFixed(2);

     // Update total sales
     totalSales += totalCost;
     document.getElementById('totalSales').textContent = `TOTAL: ₦${totalSales.toFixed(2)}`;

     // Clear form fields
     salesForm.reset();
     document.getElementById('total').value = '';
 });
});
