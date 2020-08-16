import Preloader from "../common/Preloader";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {LinkCard} from "../components/LinkCard";
export const DetailPage = () =>{
    const [link, setLink] = useState(null);
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp();
    const linkId = useParams().id;

    const getLink = useCallback(async ()=>{
        try{
            const fetched = await request(`/api/link/${linkId}`, "GET", null,{
                Authorization: `Bearer ${token}`
            })
            setLink(fetched)
        }catch (e) {}
    },[linkId,token,request]);

    useEffect(()=>{
        getLink()
    },[getLink]);

    if(loading){
        return <Preloader/>
    }
    return(
        <>
            {!loading && link && <LinkCard link = {link}/>}
        </>
    )


};