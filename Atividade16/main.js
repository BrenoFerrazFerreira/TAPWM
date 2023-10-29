window.onload = function() {
    document.getElementById('upper').addEventListener('change', function() {
        var texto = document.getElementById('text');
        if(this.checked) {
            texto.value = texto.value.toUpperCase();
            document.getElementById('lower').checked = false;
        }
    });

    document.getElementById('lower').addEventListener('change', function() {
        var texto = document.getElementById('text');
        if(this.checked) {
            texto.value = texto.value.toLowerCase();
            document.getElementById('upper').checked = false;
        }
    });
};