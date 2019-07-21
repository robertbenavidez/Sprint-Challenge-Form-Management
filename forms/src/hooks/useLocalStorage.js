import { useState } from 'react';


// function useLocalStorage(key, initialValue){
//     const [storedValue, setStoredValue] = useState(() =>{
//         const item = localStorage.getItem(key);
//         return item ? JSON.parse(item) : initialValue;
//     });
//     const setValue = value => {
//         setStoredValue(value);
//         localStorage.setItem(key, JSON.stringify(value));
//     }
//     return [storedValue, setValue]
// }

const useLocalStorage = (key, initialValue) => {
 const [storedValue, setStoredValue] = useState(() => {
   const item = localStorage.getItem(key);
   if(item){
       try{
           return JSON.parse(item)
       }catch{
           return item
       }
   }
   return initialValue;
 });
 const setValue = value => {
   localStorage.setItem(key, value);
   setStoredValue(value);

 };
 return [storedValue, setValue];
};

export default useLocalStorage;


// const fetchApi = async () => {
//  try {  
//      let {data} = await axios.get("url")
//       setData(data)}
    
//     catch(error) {
//         console.error(error)
//     }

// }