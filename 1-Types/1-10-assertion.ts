{
    /**
     * Type Assertions 어떤 타입이 확실히 어떠한 타입일때 사용하는데. 사용하는게 그렇게 좋지는 않다 
     */
    function jsStrFunc(): any{
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length); //result는 string 타입이 맞는것을 장담한다
    console.log((<string>result).length);//똑같음


    // 100% 타입이 있다고 확실할때 사용한다 
    function findNumbers() : number[] | undefined{
        return undefined;
    }

    const numbers = findNumbers()!;
    numbers.push(2); 

    const button = document.querySelector('class')!;
    
}