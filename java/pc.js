document.getElementById('calculate').addEventListener('click', function() {
    const cpu = parseFloat(document.getElementById('cpu').value) || 0;
    const gpu = parseFloat(document.getElementById('gpu').value) || 0;
    const motherboard = parseFloat(document.getElementById('motherboard').value) || 0;
    const ram = parseFloat(document.getElementById('ram').value) || 0;
    const storage = parseFloat(document.getElementById('storage').value) || 0;

    const totalPrice = cpu + gpu + motherboard + ram + storage;

    document.getElementById('price').textContent = totalPrice.toFixed(2);
});
