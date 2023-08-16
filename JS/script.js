const inputAlas = document.getElementById("alas-input");
const inputTinggi = document.getElementById("tinggi-input");
const elementHasilLuas = document.getElementById("hasil-luas");
const inputSisi1 = document.getElementById("sisi-input1");
const inputSisi2 = document.getElementById("sisi-input2");
const inputSisi3 = document.getElementById("sisi-input3");
const elementHasilKeliling = document.getElementById("hasil-Keliling");

function peringatan() {
  const alas = parseFloat(inputAlas.value);
  const tinggi = parseFloat(inputTinggi.value);
  const result = (1 / 2) * alas * tinggi;

  elementHasilLuas.innerHTML = result;
}

function reset() {
  inputAlas.value = "";
  inputTinggi.value = "";
  elementHasilLuas.innerHTML = 0;
}

function peringatankeliling() {
    const Sisi1 = parseFloat(inputSisi1.value);
    const Sisi2 = parseFloat(inputSisi2.value);
    const Sisi3 = parseFloat(inputSisi3.value);
    const result = Sisi1 + Sisi2 + Sisi3;

    elementHasilKeliling.innerHTML = result;
}

function resetkeliling() {
    inputSisi1.value = "";
    inputSisi2.value = "";
    inputSisi3.value = "";
    elementHasilKeliling.innerHTML = 0;
}