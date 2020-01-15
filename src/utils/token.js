const myToken = 'token';

export const setToken=(token)=>{
    localStorage.setItem(myToken, token);
}

export const getToken =()=>{
    localStorage.getItem(myToken);
}

export const removeToken=()=>{
    localStorage.removeItem(myToken);
}