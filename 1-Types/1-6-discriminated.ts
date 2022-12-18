{
     //function: login > success, fail
     type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail';
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    function login2 (): LoginState{
        return {
            result:'success',
            response: {
                body: 'logged in!',
            }
        }
    }
    function fail2(): LoginState{
        return {
                result:'fail',
                reason:'fail!',
            }
        }
    
    function printLoginState2(state: LoginState){
        if (state.result ==='success') {
            console.log(`성공이야${state.response.body}`);
        }else {
            console.log(`실패야${state.reason}`);
        }
    }
    // printLoginState2(fail2())

    
}