/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';

const useRequestData = (path) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}${path}`);
                response.data.results
                    ? setData(response.data.results)
                    : setData(response.data);
                // console.log(response.data);
                setIsLoading(false);
            } catch (error) {
                // console.log(error);
                setIsLoading(false);
                setIsError(true);
            }
        };

        fetchData();
    }, [path]);

    return [data, isLoading, isError];
};

export default useRequestData;
