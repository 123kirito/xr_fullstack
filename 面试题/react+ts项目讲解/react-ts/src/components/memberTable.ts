import React,{useState,useEffect} from 'react'
import {MemberEntity} from '../models/member'
import {getmemberCollection} from '../api/memberApi'
const memberTable=()=>{
    const [members,setMembers]=useState([])
    useEffect(()=>{
        getmemberCollection()
        .then(data=>{
            console.log(data)
        })
    },[])
    return{}
}

export default memberTable