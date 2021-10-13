function say(msg) {
    alert(msg);
}


function promise_test() {

    //let resolve = msg => alert(msg)
    //resolve('hi')

    let promise = new Promise(function(resolve, reject) {
        // эта функция выполнится автоматически, при вызове new Promise

        //alert('in promise');

        // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
        //setTimeout(() => resolve("done"), 1000);
        setTimeout(() => resolve("done!!!"), 1000);
        //setTimeout(() => reject(new Error("Whoops!")), 1000);

    });

    promise.then(
        result => alert(result), // выведет "done!" через одну секунду
        error => alert(error) // не будет запущена
    );


}