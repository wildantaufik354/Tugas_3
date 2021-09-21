function tambah(){
    var angka1 = parseFloat(document.querySelector('#angka1').value);
    var angka2 = parseFloat(document.querySelector('#angka2').value);
    var hasil = angka1 + angka2
    document.querySelector('#hasil').value = hasil
}
function kurang(){
    var angka1 = parseFloat(document.querySelector('#angka1').value);
    var angka2 = parseFloat(document.querySelector('#angka2').value);
    var hasil = angka1 - angka2
    document.querySelector('#hasil').value = hasil
}
function kali(){
    var angka1 = parseFloat(document.querySelector('#angka1').value);
    var angka2 = parseFloat(document.querySelector('#angka2').value);
    var hasil = angka1 * angka2
    document.querySelector('#hasil').value = hasil
}
function bagi(){
    var angka1 = parseFloat(document.querySelector('#angka1').value);
    var angka2 = parseFloat(document.querySelector('#angka2').value);
    var hasil = angka1 / angka2
    document.querySelector('#hasil').value = hasil
}