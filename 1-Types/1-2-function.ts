{
    // //JavaScript
    // function jsAdd(num1,num2) {
    //     return num1 + num2;
    // }


    // //TypeScript  숫자를받고                숫자를 리턴한다 
    // function add(num1:number, num2:number): number {
    //     return num1 + num2
    // }

    // //JavaScript 
    // function jsFetchNum(id) {
    //     //code ....
    //     //code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // //TypeScript    인자를 스트링으로받고   프로미스를 리턴하고 fetch완료된후 숫자를 리턴한다
    // function fetchNum(id: string):Promise<number> {
    //     //code ....
    //     //code ...
    //     return new Promise((resolve,reject) => {
    //         resolve(100);
    //     });
    // }

    //JavaScript => TypeScript
    //Optional parameter 인자를 전달해도 되고 안해도 되는 스트링 타입이 될수도 undefined일수도 
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    } 
    printName('Steve','Jobs');
    printName('ojae');
    printName('Anna',undefined);

    //Default parameter 전달하지 않으면 기본값 설정
    function printMessage(message:string = 'default message') {
        console.log(message);
    }
    printMessage();

    //Rest parameter 모든 인자들을 배열 형태로 받아올수 있다. 
    function addNumbers(...numbers:number[]):number {
        return numbers.reduce((a,b) => a+ b)
    }
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,23,4,5,));
    console.log(addNumbers(1,2,3,4,5,6,7,8));
    
    
}