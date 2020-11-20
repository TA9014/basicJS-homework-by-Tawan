function drawAsterisk1() {
    let num1 = document.querySelector('#input1Q1').value;
    if (isNaN(num1)) {
        alert('Please enter an integer')
    } else {
        let asterisk1 = ""
        for (let i = 1; i <= num1; i++) {
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
        for (let i = 1; i <= num2; i++) {
            for (let j = 1; j <= num2; j++) {
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
        for (let i = 1; i <= num3; i++) {
            for (let j = 1; j <= num3; j++) {
                dn1 += `${j}`
            }
            dn1 += '<br>'
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
        for (let i = 1; i <= num4; i++) {
            for (let j = 1; j <= num4; j++) {
                dn2 += `${i}`
            }
            dn2 += '<br>'
        }
        document.querySelector('#inp4').innerHTML = `You enter number ${num4}`
        document.querySelector('#result4').innerHTML = dn2
    }
}

function drawNumber3() {
    let num5 = document.querySelector('#input1Q5').value;
    if (isNaN(num5)) {
        alert('Please enter an integer')
    } else {
        let dn3 = ""
        for (let i = 0; i < num5; i++) {
            for (let j = 1; j <= num5; j++) {
                dn3 += `${num5 - i}`
            }
            dn3 += '<br>'
        }
        document.querySelector('#inp5').innerHTML = `You enter number ${num5}`
        document.querySelector('#result5').innerHTML = dn3
    }
}

function drawNumber4() {
    let num6 = document.querySelector('#input1Q6').value;
    if (isNaN(num6)) {
        alert('Please enter an integer')
    } else {
        let dn4 = ""
        let m = 1
        for (let i = 1; i <= num6; i++) {
            for (let j = 1; j <= num6; j++) {
                dn4 += `${m}`;
                m++;
            }
            dn4 += '<br>';
        }
        document.querySelector('#inp6').innerHTML = `You enter number ${num6}`
        document.querySelector('#result6').innerHTML = dn4
    }
}

function drawNumber5() {
    let num7 = document.querySelector('#input1Q7').value;
    if (isNaN(num7)) {
        alert('Please enter an integer')
    } else {
        let dn5 = ""
        let m = num7 ** 2
        for (let i = 1; i <= num7; i++) {
            for (let j = 1; j <= num7; j++) {
                dn5 += `${m}`;
                m--;
            }
            dn5 += '<br>';
        }
        document.querySelector('#inp7').innerHTML = `You enter number ${num7}`
        document.querySelector('#result7').innerHTML = dn5
    }
}

function drawNumber6() {
    let num8 = document.querySelector('#input1Q8').value;
    if (isNaN(num8)) {
        alert('Please enter an integer')
    } else {
        let dn6 = "";
        let m = 0;
        for (let i = 1; i <= num8; i++) {
            dn6 += `${m}<br>`;
            m += 2;
        }
        document.querySelector('#inp8').innerHTML = `You enter number ${num8}`
        document.querySelector('#result8').innerHTML = dn6
    }
}

function drawNumber7() {
    let num9 = document.querySelector('#input1Q9').value;
    if (isNaN(num9)) {
        alert('Please enter an integer')
    } else {
        let dn7 = "";
        let m = 2;
        for (let i = 1; i <= num9; i++) {
            dn7 += `${m}<br>`;
            m += 2;
        }
        document.querySelector('#inp9').innerHTML = `You enter number ${num9}`
        document.querySelector('#result9').innerHTML = dn7
    }
}

function drawNumber8() {
    let num10 = document.querySelector('#input1Q10').value;
    if (isNaN(num10)) {
        alert('Please enter an integer')
    } else {
        let dn8 = "";
        for (let i = 1; i <= num10; i++) {
            for (let j = 1; j <= num10; j++) {
                dn8 += `${j * i}`;
            }
            dn8 += '<br>';
        }
        document.querySelector('#inp10').innerHTML = `You enter number ${num10}`
        document.querySelector('#result10').innerHTML = dn8
    }
}

function advExercise1() {
    let inpEx1 = document.querySelector('#input1Ex1').value;
    if (isNaN(inpEx1)) {
        alert('Please enter an integer')
    } else {
        let advEx1 = "";
        for (let i = 1; i <= inpEx1; i++) {
            for (let j = 1; j <= inpEx1; j++) {
                if (j === i) {
                    advEx1 += '-';
                } else {
                    advEx1 += '*';
                }
            }
            advEx1 += '<br>'
        }
        document.querySelector('#inpEx1').innerHTML = `You enter number ${inpEx1}`
        document.querySelector('#resultEx1').innerHTML = advEx1
    }
}

function advExercise2() {
    let inpEx2 = document.querySelector('#input1Ex2').value;
    if (isNaN(inpEx2)) {
        alert('Please enter an integer')
    } else {
        let advEx2 = "";
        for (let i = 1; i <= inpEx2; i++) {
            for (let j = inpEx2; j >= 1; j--) {
                if (j == i) {
                    advEx2 += '-';
                } else {
                    advEx2 += '*';
                }
            }
            advEx2 += '<br>'
        }
        document.querySelector('#inpEx2').innerHTML = `You enter number ${inpEx2}`
        document.querySelector('#resultEx2').innerHTML = advEx2
    }
}

function advExercise3() {
    let inpEx3 = document.querySelector('#input1Ex3').value;
    if (isNaN(inpEx3)) {
        alert('Please enter an integer')
    } else {
        let advEx3 = "";
        for (let i = 1; i <= inpEx3; i++) {
            for (let j = 1; j <= inpEx3; j++) {
                if (j > i) {
                    advEx3 += '-';
                } else {
                    advEx3 += '*';
                }
            }
            advEx3 += '<br>'
        }
        document.querySelector('#inpEx3').innerHTML = `You enter number ${inpEx3}`
        document.querySelector('#resultEx3').innerHTML = advEx3
    }
}

function advExercise4() {
    let inpEx4 = document.querySelector('#input1Ex4').value;
    if (isNaN(inpEx4)) {
        alert('Please enter an integer')
    } else {
        let advEx4 = "";
        for (let i = 1; i <= inpEx4; i++) {
            for (let j = 1; j <= inpEx4; j++) {
                if ((j + i) > (+inpEx4 + 1)) {
                    advEx4 += '-';
                } else {
                    advEx4 += '*';
                }
            }
            advEx4 += '<br>'
        }
        document.querySelector('#inpEx4').innerHTML = `You enter number ${inpEx4}`
        document.querySelector('#resultEx4').innerHTML = advEx4
    }
}

function advExercise5() {
    let inpEx5 = document.querySelector('#input1Ex5').value;
    if (isNaN(inpEx5)) {
        alert('Please enter an integer')
    } else {
        let advEx5 = "";
        for (let i = 1; i <= (+inpEx5 * 2) - 1; i++) {
            for (let j = 1; j <= inpEx5; j++) {
                if (i < inpEx5) {
                    if (j > i) {
                        advEx5 += '-';
                    } else {
                        advEx5 += '*';
                    }
                } else if (i === inpEx5) {
                    advEx5 += '*';
                } else {
                    if ((i + j - (+inpEx5)) > (+inpEx5)) {
                        advEx5 += '-';
                    } else {
                        advEx5 += '*';
                    }
                }
            }
            advEx5 += '<br>'
        }
        document.querySelector('#inpEx5').innerHTML = `You enter number ${inpEx5}`
        document.querySelector('#resultEx5').innerHTML = advEx5
    }
}

function advExercise6() {
    let inpEx6 = document.querySelector('#input1Ex6').value;
    if (isNaN(inpEx6)) {
        alert('Please enter an integer')
    } else {
        let advEx6 = "";
        for (let i = 1; i <= (+inpEx6 * 2) - 1; i++) {
            for (let j = 1; j <= inpEx6; j++) {
                if (i < inpEx6) {
                    if (j > i) {
                        advEx6 += '-';
                    } else {
                        advEx6 += `${i}`;
                    }
                } else if (i === inpEx6) {
                    advEx6 += `${i}`;
                } else {
                    if ((i + j - (+inpEx6)) > (+inpEx6)) {
                        advEx6 += '-';
                    } else {
                        advEx6 += `${(inpEx6 * 2) - i}`;
                    }
                }
            }
            advEx6 += '<br>'
        }
        document.querySelector('#inpEx6').innerHTML = `You enter number ${inpEx6}`
        document.querySelector('#resultEx6').innerHTML = advEx6
    }
}

function advExercise7() {
    let inpEx7 = document.querySelector('#input1Ex7').value;
    if (isNaN(inpEx7)) {
        alert('Please enter an integer')
    } else {
        let advEx7 = "";
        for (let i = 1; i <= inpEx7; i++) {
            for (let j = inpEx7; j >= 1; j--) {
                if (i < j) {
                    advEx7 += '-';
                } else {
                    advEx7 += '*';
                }
            }
            advEx7 += '<br>'
        }
        document.querySelector('#inpEx7').innerHTML = `You enter number ${inpEx7}`
        document.querySelector('#resultEx7').innerHTML = advEx7
    }
}

function advExercise8() {
    let inpEx8 = document.querySelector('#input1Ex8').value;
    if (isNaN(inpEx8)) {
        alert('Please enter an integer')
    } else {
        let advEx8 = "";
        for (let i = 1; i <= inpEx8; i++) {
            for (let j = 1; j <= inpEx8; j++) {
                if (i > j) {
                    advEx8 += '-';
                } else {
                    advEx8 += '*';
                }
            }
            advEx8 += '<br>'
        }
        document.querySelector('#inpEx8').innerHTML = `You enter number ${inpEx8}`
        document.querySelector('#resultEx8').innerHTML = advEx8
    }
}

function advExercise9() {
    let inpEx9 = document.querySelector('#input1Ex9').value;
    if (isNaN(inpEx9)) {
        alert('Please enter an integer')
    } else {
        let advEx9 = "";
        for (let i = 1; i <= ((inpEx9 * 2) - 1); i++) {
            if (i <= inpEx9) {
                for (let j = inpEx9; j >= 1; j--) {
                    if (j > i) {
                        advEx9 += '-';
                    } else {
                        advEx9 += '*';
                    }
                }
            } else {
                for (let j = 1; j <= inpEx9; j++) {
                    if ((i - j) > (inpEx9 - 1)) {
                        advEx9 += "-";
                    } else {
                        advEx9 += "*";
                    }
                }
            }
            advEx9 += '<br>'
        }
        document.querySelector('#inpEx9').innerHTML = `You enter number ${inpEx9}`;
        document.querySelector('#resultEx9').innerHTML = advEx9;
    }
}

function advExercise10() {
    let inpEx10 = document.querySelector('#input1Ex10').value;
    if (isNaN(inpEx10)) {
        alert('Please enter an integer')
    } else {
        let advEx10 = "";
        let m = 1;
        for (let i = 1; i <= (inpEx10 * 2) - 1; i++) {
            if (i <= inpEx10) {
                for (let j = inpEx10; j >= 1; j--) {
                    if (j > i) {
                        advEx10 += '-';
                    } else {
                        advEx10 += `${m}`;
                        m++;
                    }
                }
            } else {
                for (let j = 1; j <= inpEx10; j++) {
                    if ((i - j) > (inpEx10 - 1)) {
                        advEx10 += '-';
                    } else {
                        advEx10 += `${m}`;
                        m++;
                    }
                }
            }
            advEx10 += '<br>'
        }
        document.querySelector('#inpEx10').innerHTML = `You enter number ${inpEx10}`;
        document.querySelector('#resultEx10').innerHTML = advEx10;
    }
}

function advExercise11() {
    let inpEx11 = document.querySelector('#input1Ex11').value;
    if (isNaN(inpEx11)) {
        alert('Please enter an integer')
    } else {
        let advEx11 = "";
        for (let i = 1; i <= inpEx11; i++) {
            for (let j = 1; j <= (inpEx11 * 2) - 1; j++) {
                if (j >= (+inpEx11 - (i - 1)) && j <= (+inpEx11 + (i - 1))) {
                    advEx11 += '*';
                } else {
                    advEx11 += '-';
                }
            }
            advEx11 += '<br>'
        }
        document.querySelector('#inpEx11').innerHTML = `You enter number ${inpEx11}`;
        document.querySelector('#resultEx11').innerHTML = advEx11;
    }
}

function advExercise12() {
    let inpEx12 = document.querySelector('#input1Ex12').value;
    if (isNaN(inpEx12)) {
        alert('Please enter an integer')
    } else {
        let advEx12 = "";
        for (let i = 1; i <= inpEx12; i++) {
            for (let j = 1; j <= (inpEx12 * 2) - 1; j++) {
                if (j >= (+inpEx12 - (inpEx12 - i)) && j <= (+inpEx12 + (inpEx12 - i))) {
                    advEx12 += '*';
                } else {
                    advEx12 += '-';
                }
            }
            advEx12 += '<br>'
        }
        document.querySelector('#inpEx12').innerHTML = `You enter number ${inpEx12}`;
        document.querySelector('#resultEx12').innerHTML = advEx12;
    }
}

function advExercise13() {
    let inpEx13 = document.querySelector('#input1Ex13').value;
    if (isNaN(inpEx13)) {
        alert('Please enter an integer')
    } else {
        let advEx13 = "";
        for (let i = 1; i <= (inpEx13 * 2) - 1; i++) {
            if (i <= inpEx13) {
                for (let j = 1; j <= (inpEx13 * 2) - 1; j++) {
                    if (j >= (+inpEx13 - (i - 1)) && j <= (+inpEx13 + (i - 1))) {
                        advEx13 += '*';
                    } else {
                        advEx13 += '-';
                    }
                }
            } else {
                for (let j = 1; j <= (inpEx13 * 2) - 1; j++) {
                    if (j >= (+inpEx13 - (2*inpEx13 - i -1)) && j <= (+inpEx13 + (2*inpEx13 - i -1))) {
                        advEx13 += '*';
                    } else {
                        advEx13 += '-';
                    }
                }
            }
            advEx13 += '<br>'
        }
        document.querySelector('#inpEx13').innerHTML = `You enter number ${inpEx13}`;
        document.querySelector('#resultEx13').innerHTML = advEx13;
    }

}

function advExercise14() {
    let inpEx14 = document.querySelector('#input1Ex14').value;
    if (isNaN(inpEx14)) {
        alert('Please enter an integer')
    } else {
        let advEx14 = "";
        let m = 1;
        for (let i = 1; i <= (inpEx14 * 2) - 1; i++) {
            if (i <= inpEx14) {
                for (let j = 1; j <= (inpEx14 * 2) - 1; j++) {
                    if (j >= (+inpEx14 - (i - 1)) && j <= (+inpEx14 + (i - 1))) {
                        advEx14 += `${m}`;
                        m++
                    } else {
                        advEx14 += '-';
                    }
                }
            } else {
                for (let j = 1; j <= (inpEx14 * 2) - 1; j++) {
                    if (j >= (+inpEx14 - (2*inpEx14 - i -1)) && j <= (+inpEx14 + (2*inpEx14 - i -1))) {
                        advEx14 += `${m}`;
                        m++;
                    } else {
                        advEx14 += '-'; 
                    }
                }
            }
            advEx14 += '<br>'
        }
        document.querySelector('#inpEx14').innerHTML = `You enter number ${inpEx14}`;
        document.querySelector('#resultEx14').innerHTML = advEx14;
    }

}