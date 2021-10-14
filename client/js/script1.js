function say(msg) {
    alert(msg);
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