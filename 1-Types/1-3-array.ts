{
    //Array
    const fruits: string[] = ['aa','bb'];
    const scroes: Array<number>= [1,2,3];
    //전달된 인자를 함수 내부에서 변경하지 않도록 하는것 데이터를 읽을수만 있다 오브젝트의 불변성을 보장
    function printArray(fruits: readonly string[]){}

    //Tuple 서로다른 타입을 함께 가질수 있는 배열 사용하는것을 권장하지 않는다 .인덱스로 접근하는것은 가독성이 떨어진다 대체해서 사용할 것들 interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    student[0] //name
    student[1] // 123

   //Object destructuring   student배열의 첫번째 값이 name으로 2번째는 age로 할당됨 
    const [name, age] = student;
    
}