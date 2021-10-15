function say(msg) {
    // alert(msg);
    log(msg);
}


function promise_test() {

    //let resolve = msg => alert(msg)
    //resolve('hi')

    // Промис имеет аргументом функцию с двумя аргументами-функциями
    //
    let promise = new Promise(
        function(resolve, reject) {

            // Выполняется либо resolve() тогда аргумент передаётся в функцию,
            // которая будет первым аргументом метода промиса .then
            resolve("done!!!");

            // либо reject() тогда аргумент передаётся в функцию,
            // которая будет
            //  аргументом метода промиса .catch,
            //  либо вторым аргументом метода промиса .then
            reject("Whoops!");
        }
    );

    promise.then(
        result => alert(result),    // выведет "done!"
        error => alert(error)       // в данном примере не будет запущена,
                                              // но если бы выполнилась reject("Whoops!")
                                              // то вывела бы "Whoops!"
    );

    promise.catch(
        error => alert(error)       // не будет запущена
                                              // но если бы выполнилась reject("Whoops!")
                                              // то вывела бы "Whoops!"
    );

    promise.finally(                          // выполняется всегда при завершении
        () => alert("Промис завершён")        // аргумент - функция без аргументов
    );

}

function printNumbers(from, to) {

    log(`printNumbers(${from}, ${to})`);

    let id = setInterval(() => {

        log(from++);
        if (from > to) {
            clearInterval(id);
        }
    }, 1000);

//    for(let i=from; i<=to; i++) {    }

}

function printNumbers2(from, to) {

    setTimeout(function printOne() {

        log('...' + from++);

        if (from <= to) {
            setTimeout(printOne, 1000);
        }

    }, 1000);
}

// primise по памяти, есть контакт
function prom() {

    let prom = new Promise(function prox(resolve, reject) {
        reject(new Error('resolve not done'));
        resolve('resolve done');
    })
    .then((msg) => {log(msg); return msg;})
    .catch(log)
}


// Лог
function log(msg) {
    document.getElementById('log').innerHTML += msg + '<br>';
}

// let z = 111;
// log('z='+z);
// printNumbers(z, 117);
// //printNumbers2(511, 517);
// setTimeout(() => log('z='+z), 10000);

prom();