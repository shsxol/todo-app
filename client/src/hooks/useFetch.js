import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (url) => {

    const [data, setData] = useState ([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
    

    useEffect( () => {
        let isMounted = false;
        setLoading(true);
        const fetchData = async () => {
            isMounted=true;
            try {
                const { data }= await axios(url);
                if (isMounted &&data) {
                    setLoading(false);
                    setData(data.data);
                }
            } catch(error) {
                setLoading(false);
                setError(error);
            }
        };
        fetchData();
        return () =>{
            isMounted = false;
        }
         
    },[url]);
    return {data,loading,error};

};

export default useFetch;