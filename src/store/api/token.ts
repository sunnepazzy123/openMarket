
export const getToken = ()=>{
    const token =  localStorage.getItem('openMarket') ? localStorage.getItem('openMarket') : null
    return token;
  }
  
  