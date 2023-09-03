

export default function useCookie() {
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  };
  
  const setCookie = (name, value, hours) => {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };
  

  const deleteCookie=(name)=>{
    // 将Cookie的过期时间设置为过去的日期
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }


  

  return {
    getCookie,
    setCookie,
    deleteCookie
  };
}
