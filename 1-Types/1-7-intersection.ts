{
    /**
     * Intersection Types: &  다양한 타입들을 하나로 묶어서 사용가능하다 
     */
    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        empolyeeId: number;
        work:() => void;
    }
    function interWork(person: Student & Worker) {
        console.log(person.name, person.empolyeeId, person.work());
        
    }
    interWork({
        name:'ojae',
        score: 1,
        empolyeeId:123,
        work() {
            
        },
    })
}