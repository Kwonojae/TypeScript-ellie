{
    /**
     * Union Types: OR 굉장히 많이씀
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction:Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    //function: login > success, fail
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    function login (): LoginState{
        return {
            response: {
                body: 'logged in!',
            }
        }
    }
    function fail (): LoginState{
        return {
            response: {
                body: 'logged in!',
            }
        }
    }

    function printLoginState(state: LoginState){
        if ('response' in state) {
            console.log(`성공이야${state.response.body}`);
        }else {
            console.log(`실패야${state.reason}`);
        }
    }
    printLoginState({reason:'logged fail'})
    
    
}