//Function to choose randomly one of the three choices using an array
function computerPlay() {
    const values = ["Rock", "Paper", "Scissor"];
    const finalValue = (values[Math.floor(Math.random() * values.length)])
    console.log(Math.random())
    alert(finalValue);

}