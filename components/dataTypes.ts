
type CreateWallet = {
    type: 'CREATE_WALLET';
};

type CreateUser = {
    type: 'CREATE_USER';
    payload:{email:string,password:string,country:string,FirstName:string,LastName:string}
};

type LoginUser = {
    type: 'LOGIN_USER';
    payload:{email:string,password:string}
};

type ConfirmOrder = {
    type: 'CONFIRM_ORDER';
};

type SuspendOrder = {
    type: 'SUSPEND_ORDER';
};

type DeleteOrder = {
    type: 'DELETE_ORDER';
};

type CreateOrder = {
    type: 'CREATE_ORDER';
};

type DecreaseQuantity = {
    type: 'DECREASE_QUANTITY';
    payload: string; // Assuming payload is the item ID to be removed
};

export type allActions = (CreateWallet | LoginUser | CreateUser | ConfirmOrder | CreateOrder | SuspendOrder | DeleteOrder |DecreaseQuantity);

export type dispatchActions =
  | { type: 'CREATE_WALLET'}
  | { type: 'CONFIRM_ORDER'}
  | { type: 'SUSPEND_ORDER'}
  | { type: 'DELETE_ORDER'}
  | { type: 'CREATE_ORDER'}
  | { type: 'CREATE_USER'; payload:{email:string,password:string,country:string,FirstName:string,LastName:string}}
  | { type: 'LOGIN_USER'; payload:{email:string,password:string}};