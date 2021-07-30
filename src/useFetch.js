import {useEffect , useState} from "react";
const useFetch =(url) =>{
    const [data , setData] = useState(null);
    const [isPending , setPending ] = useState(true);
    const [error , setError] = useState(null);

    // abort baraie un k safharo tond avaz mkrdim error mide
    useEffect(() =>{
        const abortConst = new AbortController();
            fetch(url , { signal: abortConst.signal })
                .then(res => {
                    if (!res.ok){
                        throw Error('Could not fetch the resource');
                    }
                    return res.json();
                })
                .then(data =>{
                    setData(data)
                    setPending(false);
                    setError(null);
                })
                .catch(err =>{
                    if (err.name === 'AbortError'){
                        console.log('fetch aborted');
                    }
                    else {
                        setError(err.message);
                        setPending(false);
                    }
                })
        return () => abortConst.abort();
    }, [url]);

    return{data , isPending , error};
}
export default useFetch;