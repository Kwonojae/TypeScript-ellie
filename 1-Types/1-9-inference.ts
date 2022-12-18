
    /**
     * Type Inference 타입 추론  ts가 알아서 타입이 자동으로 결정되는것 
     * 왠만하면 타입을 명시해서 넣어주자
     */

let text = 'hello';
function print(message = 'hello') {
    console.log(message);
    
}
print('hello');

function add(x:number, y:number) :number{
    return x + y;
}
const result = add(1,3);