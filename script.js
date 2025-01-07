document.addEventListener('DOMContentLoaded', () => {
    const expenseName = document.getElementById('expenseName');
    const amount = document.getElementById('amount');
    const category = document.getElementById('category');
    const date = document.getElementById('date');
    const addExpenseBtn = document.getElementById('addExpenseBtn');
    const expenseTable = document.getElementById('expenseTable');
    const totalAmount = document.getElementById('totalAmount');

    let total = 0;

    addExpenseBtn.addEventListener('click', () => {
        const name = expenseName.value;
        const amt = parseFloat(amount.value);
        const cat = category.value;
        const dt = date.value;

        if (name && !isNaN(amt) && cat && dt) {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${name}</td>
                <td>$${amt.toFixed(2)}</td>
                <td>${cat}</td>
                <td>${dt}</td>
                <td>
                    <button class="btn btn-sm btn-primary edit-btn">Edit</button>
                    <button class="btn btn-sm btn-danger delete-btn">Delete</button>
                </td>
            `;

            expenseTable.appendChild(row);

            total += amt;
            totalAmount.textContent = total.toFixed(2);

            expenseName.value = '';
            amount.value = '';
            category.value = 'Food';
            date.value = '';

            row.querySelector('.delete-btn').addEventListener('click', () => {
                total -= amt;
                totalAmount.textContent = total.toFixed(2);
                expenseTable.removeChild(row);
            });

            row.querySelector('.edit-btn').addEventListener('click', () => {
                expenseName.value = name;
                amount.value = amt;
                category.value = cat;
                date.value = dt;
                total -= amt;
                totalAmount.textContent = total.toFixed(2);
                expenseTable.removeChild(row);
            });
        } else {
            alert('Please fill all fields');
        }
    });
});