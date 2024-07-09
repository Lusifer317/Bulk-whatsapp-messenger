document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched:', data);  // Add this line to debug
            const tbody = document.getElementById('dataBody');
            data.forEach(item => {
                const row = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.textContent = item.Name;
                row.appendChild(nameCell);

                const numberCell = document.createElement('td');
                numberCell.textContent = item.WhatsAppNumber;
                row.appendChild(numberCell);

                const messageCell = document.createElement('td');
                messageCell.textContent = item.Message;
                row.appendChild(messageCell);

                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});

function sendMessages() {
    const rows = document.querySelectorAll('#dataBody tr');
    rows.forEach(row => {
        const number = row.cells[1].textContent;
        const message = row.cells[2].textContent;
        const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
}
