{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null , undeifind
     * Object: function, array...
     * 
     */

    //number
    const num:number = -6;

    //string
    const str:string = 'hello';

    //boolean
    const boal:boolean = true;

    //undefined 값이 있는지 없는지 값이 결정되어 있지 않은상태
    let name: undefined; // 단독으로 사용안함
    let age:number | undefined //데이터 타입이 있거나 없거나
    age = undefined;
    age = 1;

    function find():number | undefined {
        return undefined;
    }

    //null 이미 결정된 값이 빈값 
    let person : null; //사용안함 
    let person2: string | null; //값이 있거나 없거나 

    //unknown 알수없는 아직결정되지않음  가능하면 사용 안함 
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    //any 어떤것이든 담을수있음 사용안함 
    let anything: any = 0;
    anything = 'hello';

    //void 함수에서 아무것도 리턴하지 않으면 void타입이됨 생략이 가능하다 
    function print():void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined;// 사용안함 

    //never 함수에서 절대  리턴되지 않는경우에 사용 | 에러를 던지던지 끝나지 않는 코드를 작성 
    function throwError(message: string): never{
        //message -> server (log)
        throw new Error(message);
        while(true){}
    }
    let neverEnding: never; //이러면 안됨

    //object 어떠한 오프젝트타입을 전달할수 있다 쓰지 않는것이 좋다 
    let obj: object;
    function acceptSomeObject(obj: object){}
    acceptSomeObject({name:'ellie'});
    acceptSomeObject({name:'dog'});

}