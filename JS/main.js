document.querySelectorAll("input").forEach((input) => {
  input.oninput = () => {
    if (input.value.length > input.maxLength)
      input.value = input.value.slice(0, input.maxLength);
  };
});

function onlyNumberKey(evt) {
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

function findTotal() {
  const userInput1 = document.getElementById("userInput1");
  let val1;
  val1 = userInput1.valueAsNumber;

  const userInput2 = document.getElementById("userInput2");
  let val2;
  val2 = userInput2.valueAsNumber;

  if ((userInput1.value == 0, userInput2.value == 0)) {
    document.getElementById("output1").innerHTML = 0;
  } else {
    document.getElementById("output1").innerHTML = val1 * val2;
  }
}

function printTotal() {
  const userInput3 = document.getElementById("userInput3");
  let val3;
  val3 = userInput3.valueAsNumber;

  const outputTable = document.getElementById("outputTable");
  outputTable.innerHTML = "";

  if (userInput3.value == "") {
    outputTable.innerHTML = "Ange en siffra mellan 1-99";
  } else {
    for (let i = 0; i <= 10; i++) {
      const resultTable = i * val3;

      const valOutput = document.createElement("div");
      valOutput.innerHTML = i + " X " + val3 + " = " + resultTable;

      outputTable.appendChild(valOutput);
    }
  }
}
