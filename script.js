const checkboxes = document.querySelectorAll('.service-checkbox');
const totalPriceDisplay = document.getElementById('totalPrice');
const bookingForm = document.getElementById('bookingForm');

function calculateTotal() {
    let total = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseFloat(checkbox.value);
        }
    });

    totalPriceDisplay.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', calculateTotal);
});

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let algumServicoSelecionado = false;
    checkboxes.forEach(cb => { if(cb.checked) algumServicoSelecionado = true; });

    if (!algumServicoSelecionado) {
        alert("Por favor, selecione pelo menos um serviço para sua reserva.");
    } else {
        alert("Cadeira reservada com sucesso! Aguardamos você no horário escolhido.");
        this.reset();
        calculateTotal(); 
    }
});