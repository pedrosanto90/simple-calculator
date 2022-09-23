const button = document.getElementById('button');
const operators = ["+", "-", "*", "/"];

function calc(){
    const userExpression = document.getElementById('expression').value;
    const strLen = userExpression.length;

    function indexOperator() {
        for (let element of operators) {
            //console.log(element);
            //console.log(userExpression);
            let foo = userExpression.indexOf(element);
            if (foo != -1) {
                return foo;
            }
        }
    }
    const usrOp = indexOperator();

    function firstNumber() {
        let firstNumber = '';

        for (let i = 0; i < usrOp; i++) {
            firstNumber = firstNumber.concat(userExpression[i]);
        }
        firstNumber = parseInt(firstNumber);
        return firstNumber;
    }

    function secondNumber() {
        let secondNumber = '';
        
        for (let e = usrOp + 1; e <= strLen - 1; e++) {
            secondNumber = secondNumber.concat(userExpression[e]);
        }
        secondNumber = parseInt(secondNumber);
        return secondNumber; 
    }

    const operator = userExpression[usrOp];
    const fNum = firstNumber();
    const sNum = secondNumber();
    
    switch (operator) {
        case '+':
            let sum = fNum + sNum;
            document.getElementById('result').innerHTML = `Result: ${sum}`;
            break
        case '-':
            let sub = fNum - sNum;
            document.getElementById('result').innerHTML = `Result: ${sub}`;
            break
        case '*':
            let mult = fNum * sNum;
            document.getElementById('result').innerHTML = `Result: ${mult}`;
            break
        case '/':
            let div = fNum / sNum;
            document.getElementById('result').innerHTML = `Result: ${div}`;
            break
    }
};

button.addEventListener('click', calc);
