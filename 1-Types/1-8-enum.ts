{
    /**
     * Enum  여러가지 관련된 상수 값들을 한곳에 모아서 관리하는 타입 
     * 사용 하지말자 이거 사용하면 타입이 정확하게 보장되지 않는다 
     * union type으로 대체되어서 사용이 가능하므로 사용하자 
     */
    //JavaScript 
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNSEDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY":0, "TUESDAY":1, "WEDNSEDAY":2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript
    type DaysOfweek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        //숫자를 지정하지 않으면 자동으로 0부터 시작하고 지정하면 그다음 숫자를 출력한다
        // Monday = 1,
        // Tuesday, //2
        // Wednseday, //3
        // Thursday, //4
        // Friday, //5
        // Satarday, // 6
        // Sunday,//7
        //문자열은 다음에 모가 올줄모르기때문에 지정해줘야됨
        Monday = 'monday',  
        Tuesday = 'tuseday', 
        Wednseday = 'wednseday',
        Thursday = 'thursday', 
        Friday = 'friday', 
        Satarday = 'satarday', 
        Sunday = 'sunday',
    }
    console.log(Days.Monday);
    let day: Days = Days.Satarday;
    day = Days.Tuesday;
    console.log(day);
    
    let daysOfweek: DaysOfweek = 'Monday';
    daysOfweek = 'Wednesday';
    
}