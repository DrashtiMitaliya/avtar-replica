import React from 'react';
import {Cards} from '../Components/Cards'
import {  fetchInformation } from '../features/AvatarSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'


export const Display = () => {
    const avtarInfoArray = useSelector((state)=>state.avtar)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch((fetchInformation()))
    }, [])
    return (
        <div className='container'>
            <div className='row m-auto'>
                {
                        avtarInfoArray.avtars.map((data) => {
                            if (data === undefined) {
                                return loading
                            }
                            return (<Cards key={data.id} users={data}/>)
                        })
                       }
            </div>

        </div>
    )
}
