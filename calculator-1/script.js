// SELECTORS
const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const allSections = document.querySelectorAll('section');
const delete_icon = document.getElementById("delete_icon");

menu.addEventListener('click', () => nav.classList.toggle('active'));

navLinks[0].classList.add('nav_active');

for (let i = 1; i < allSections.length; i++) {
    allSections[i].style.display = 'none';
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('nav_active'));
        allSections.forEach(section => section.style.display = 'none');
        allSections[i].style.display = 'block';
        navLinks[i].classList.add('nav_active');
        nav.classList.remove('active');
    })
}

delete_icon.addEventListener("click", function(e) {
    calc_input.value = calc_input.value.slice(0, calc_input.value.length-1);
})

//calculator
const calc_input = document.getElementById('calc_input');
const calc_equal = document.getElementById('calc_equal');

document.getElementById('calculator').onsubmit = e => e.preventDefault();

calc_equal.addEventListener('click', () => {
    if (calc_input.value == 'undefined') calc_input.value = null;
})

// number_divisors
const divisors_input = document.querySelector('.number_divisors input[type=number]');
const divisors_submit = document.querySelector('.number_divisors input[type=submit]');
const divisors_answer = document.querySelector('.number_divisors #answer');

divisors_submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!divisors_input.value) {
        input.focus();
        return;
    }

    if (divisors_input.value == '0') {
        divisors_answer.innerHTML = '';
        divisors_input.value = null;
        divisors_input.focus();
        return;
    }

    if (divisors_input.value == '1') {
        divisors_answer.innerHTML = '';
        divisors_input.value = null;
        divisors_input.blur();

        const answerHead = document.createElement('p');
        answerHead.classList.add('answerHead');
        answerHead.innerText = '1 թվի բաժանարարն է`';
        divisors_answer.appendChild(answerHead);

        const answerDoc = document.createElement('p');
        answerDoc.classList.add('answerDoc');
        answerDoc.innerText = '1';
        divisors_answer.appendChild(answerDoc);

        return;
    }

    divisors_answer.innerHTML = '';

    const answerHead = document.createElement('p');
    answerHead.classList.add('answerHead');
    answerHead.innerText = divisors_input.value + ' թվի բաժանարարներն են`';
    divisors_answer.appendChild(answerHead);

    const answerDoc = document.createElement('p');
    answerDoc.classList.add('answerDoc');
    let divisors = '';
    for (let i = 1; i <= divisors_input.value / 2; i++) {
        if (divisors_input.value % i == 0) divisors += i + ', ';
    }
    answerDoc.innerText = divisors + divisors_input.value;
    divisors_answer.appendChild(answerDoc);

    divisors_input.value = null;
    divisors_input.blur();
})

//prime_numbers
const prime_input = document.querySelector('.prime_numbers input[type=number]');
const prime_submit = document.querySelector('.prime_numbers input[type=submit]');
const allFromInp = document.querySelector('.prime_numbers .all_numbers .all_from_input');
const allToInp = document.querySelector('.prime_numbers .all_numbers .all_to_input');
const allSubmit = document.querySelector('.prime_numbers .all_numbers .all_submit');
const prime_answer = document.querySelector('.prime_numbers #answer');

prime_submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!prime_input.value) {
        prime_input.focus();
        return;
    }

    prime_answer.innerHTML = '';

    const answerDoc = document.createElement('p');
    answerDoc.classList.add('answerDoc');
    if (prime_input.value == 0) {
        answerDoc.innerText = '0-ն չի կարող բաժանվել ինքնին, քանի որ արդյունքն անորոշ է:';
        prime_input.blur();
    } else if (prime_input.value[0] == 0) {
        answerDoc.innerHTML = 'Թիվը 0-ից մի սկսիր գրել';
        prime_input.blur();
    } else if (prime_input.value < 0) {
        answerDoc.innerText = '0-ից ցածր թվերը չեն կարող լինել պարզ կամ բաղադրյալ:';
        prime_input.blur();
    } else if (prime_input.value == 1) {
        answerDoc.innerText = '1 թիվը կարելի է բաժանել ինքնին (1/1=1): Այնուամենայնիվ, որպեսզի թիվը համարվի պարզ, այն պետք է ունենա 2 տարբեր բաժանարարներ: Թիվ 1-ն ունի միայն մեկ բաժանարար, ուստի այն ոչ պարզ է, ոչ էլ բաղադրյալ:';
        prime_input.blur();
    } else {
        if (isSimple(prime_input.value)) {
            answerDoc.innerText = prime_input.value + '-ը պարզ թիվ է';
            prime_input.blur();
        } else {
            answerDoc.innerText = prime_input.value + '-ը բաղադրյալ թիվ է';
            prime_input.blur();
        }
    }
    prime_answer.appendChild(answerDoc);

    prime_input.value = null;
    prime_input.blur();
})

allSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    prime_answer.innerHTML = '';

    const answerHead = document.createElement('p');
    answerHead.classList.add('answerHead');
    prime_answer.appendChild(answerHead);

    const answerDoc = document.createElement('p');
    answerDoc.classList.add('answerDoc');
    prime_answer.appendChild(answerDoc);

    if (!allFromInp.value || !allToInp.value) {
        prime_answer.innerHTML = '';
        allFromInp.focus();
        allToInp.blur();
        return;
    } else if (allFromInp.value == allToInp.value) {
        allFromInp.value = null;
        allToInp.value = null;
        allFromInp.blur();
        allToInp.blur();
        return answerDoc.innerText = 'Երկու դաշտերում, նույն թվային արժեքը չի կարող լինել';
    } else if ((allFromInp.value < 2) || (allToInp.value < 2)) {
        allFromInp.value = null;
        allToInp.value = null;
        allFromInp.blur();
        allToInp.blur();
        return answerDoc.innerText = 'Պարզ թվերի հաշվարկը սկսվում է 2-ից';
    };

    let primes = '';
    let count = 0;

    if (+allFromInp.value < +allToInp.value) {
        for (let i = +allFromInp.value; i <= +allToInp.value; i++) {
            if (isSimple(i)) {
                primes += i + ', ';
                count++;
            }
        }

        let index = primes.length - 2;
        answerDoc.innerText = primes.substr(0, index);
    } else {
        for (let i = +allFromInp.value; i >= +allToInp.value; i--) {
            if (isSimple(i)) {
                primes += i + ', ';
                count++;
            }
        }

        let index = primes.length - 2;
        answerDoc.innerText = primes.substr(0, index);
    }

    answerHead.innerHTML = `${allFromInp.value}-ից մինչև ${allToInp.value} բոլոր պարզ թվերը <br> (${count} թիվ)`;

    allFromInp.value = null;
    allToInp.value = null;
    allFromInp.blur();
    allToInp.blur();
})

function isSimple(num) {
    let bool = true;

    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            bool = false;
            break;
        }
    }

    return bool;
}

//pow_number
const pow_input1 = document.querySelector('.pow_number #pow1');
const pow_input2 = document.querySelector('.pow_number #pow2');
const pow_submit = document.querySelector('.pow_number input[type=submit]');
const pow_answer = document.querySelector('.pow_number #answer');

pow_submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!pow_input1.value || !pow_input2.value) {
        pow_input1.focus();
        return;
    }

    pow_answer.innerHTML = '';

    const answerHead = document.createElement('p');
    answerHead.classList.add('answerHead');
    answerHead.innerText = `${pow_input1.value} - թվի ${pow_input2.value} աստիճանն է՝`;
    pow_answer.appendChild(answerHead);

    const answerDoc = document.createElement('p');
    answerDoc.classList.add('answerDoc');
    answerDoc.innerText = Math.pow(pow_input1.value, pow_input2.value);
    pow_answer.appendChild(answerDoc);

    pow_input1.value = null;
    pow_input2.value = null;
    pow_input1.blur();
    pow_input2.blur();
})


//percent
const percent_input1 = document.querySelector('.percent #perc1');
const percent_input2 = document.querySelector('.percent #perc2');
const percent_submit = document.querySelector('.percent input[type=submit]');
const percent_answer = document.querySelector('.percent #answer');

percent_submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!percent_input1.value || !percent_input2.value) {
        percent_input1.focus();
        return;
    }

    percent_answer.innerHTML = '';

    const answerHead = document.createElement('p');
    answerHead.classList.add('answerHead');
    answerHead.innerText = `${percent_input1.value} - թվի ${percent_input2.value} տոկոսն է՝`;
    percent_answer.appendChild(answerHead);

    const answerDoc = document.createElement('p');
    answerDoc.classList.add('answerDoc');
    answerDoc.innerText = percent_input1.value * percent_input2.value / 100;
    percent_answer.appendChild(answerDoc);

    const answerSolution = document.createElement('span');
    answerSolution.classList.add('answerSolution');
    answerSolution.innerText = `Լուծում՝ (${percent_input1.value} x ${percent_input2.value}) : 100`;
    percent_answer.appendChild(answerSolution);

    percent_input1.value = null;
    percent_input2.value = null;
    percent_input1.blur();
    percent_input2.blur();
})    