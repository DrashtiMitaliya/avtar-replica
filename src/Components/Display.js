import React from 'react';
import { Cards } from '../Components/Cards'
import { fetchInformation } from '../features/AvatarSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'


export const Display = () => {
    
    /* This is a hook that is used to access the state of the store. */
    const avtarInfoArray = useSelector((state) => state.avtar)


    /* This is a hook that is used to dispatch an action. */
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch((fetchInformation()))
    }, [dispatch])


    return (
        /* This is a react component that is used to display the data that is fetched from the API. */
        <div className='container-fluid'>
            <div className='row  m-auto'>
                {
                    avtarInfoArray.avtars.map((data) => {
                        if (data === undefined) {
                            return "loading"
                        }
                        return (<Cards key={data.id} users={data} />)
                    })
                }
            </div>
        </div>
    )
}
