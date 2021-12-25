import {FC, useEffect} from 'react'
import { useGetListsOfUserQuery } from '../../store/network/listApi'
export const ListNames : FC =() =>{
    const {data, error, isLoading} =useGetListsOfUserQuery('abc')
    useEffect(()=> {
        console.log(data);
    }, [isLoading])
return <>
{error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map( listElem => <h3 id={listElem.id}>{listElem.name} </h3>)}
          
        </>
      ) : null}
</>
}