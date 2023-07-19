/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';

const useRequestData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios
            .get(`${BASE_URL}`)
            .then((response) => {
                setData(response.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                console.log(error.message);
                setIsLoading(false);
                setIsError(true);
            });
    }, []);
    return [data, isLoading, isError];
};
export default useRequestData;