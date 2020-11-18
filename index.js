function drawAsterisk1() {
    let num1 = document.querySelector('#input1Q1').value;
    if (isNaN(num1)) {
        alert('Please enter an integer')
    } else {
        let asterisk1 = ""
        for(let i=1; i<=num1; i++){
            asterisk1 += "* "
        }
        document.querySelector('#inp1').innerHTML = `You enter number ${num1}`
        document.querySelector('#result1').innerHTML = asterisk1
    }
}

function drawAsterisk2() {
    let num2 = document.querySelector('#input1Q2').value;
    if (isNaN(num2)) {
        alert('Please enter an integer')
    } else {
        let asterisk2 = ""
        for( let i=1; i<=num2; i++ ){
            for( let j=1; j<=num2; j++ ) {
                asterisk2 += "* "
            }
            asterisk2 += '<br>'
        }
        document.querySelector('#inp2').innerHTML = `You enter number ${num2}`
        document.querySelector('#result2').innerHTML = asterisk2
    }
}

function drawNumber1() {
    let num3 = document.querySelector('#input1Q3').value;
    if (isNaN(num3)) {
        alert('Please enter an integer')
    } else {
        let dn1 = ""
        for( let i=1; i<=num3; i++ ){
            for( let j=1; j<=num3; j++ ) {
                dn1 += `${j}`
            }
            dn1 +='<br>'
        }
        document.querySelector('#inp3').innerHTML = `You enter number ${num3}`
        document.querySelector('#result3').innerHTML = dn1 
    }
}

function drawNumber2() {
    let num4 = document.querySelector('#input1Q4').value;
    if (isNaN(num4)) {
        alert('Please enter an integer')
    } else {
        let dn2 = ""
        for( let i=1; i<=num4; i++ ){
            for( let j=1; j<=num4; j++ ) {
                dn2 += `${i}`
            }
            dn2 +='<br>'
        }
        document.querySelector('#inp4').innerHTML = `You enter number ${num4}`
        document.querySelector('#result4').innerHTML = dn2
    }
}