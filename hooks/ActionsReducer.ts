
import type { allActions } from "../components/dataTypes";
type State = {
    LocalAuthOperation:string;
    user:any;
    wallets:any[]
  }

export default function ActionReducer(state:State,action:allActions) {

    switch (action.type) {
        case 'CREATE_WALLET':
            console.log('-------------------------------Create wallet was activated here-----------------------');
            return true
            break;

        case 'CREATE_ORDER':
            console.log('-------------------------------Create order was activated here-----------------------');
            break;

        case 'CONFIRM_ORDER':
            console.log('-------------------------------Confirmed order was activated here-----------------------');
            break;

        case 'SUSPEND_ORDER':
            console.log('-------------------------------Suspend order was initiated here-----------------------');
            break;
        
        case 'DELETE_ORDER':
            console.log('-------------------------------Delete order was initiated here-----------------------');
            break;

        case 'CREATE_USER':

             console.log('create user')

            break;

        case 'LOGIN_USER':
            console.log('login user')
            break;
            
        default:
            return state;
    }
}