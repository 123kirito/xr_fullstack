import React,{useState,useEffect} from 'react'
import {Row,Col,Menu} from 'antd'
import { HomeOutlined, YoutubeOutlined} from '@ant-design/icons';
import Router from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import servicePath from '../config/apiUrl'

const Header=()=>{
    const [navArray,setNavArray]=useState([])
    useEffect(()=>{
        const fetchData=async ()=>{
            const result=await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    },[])
    const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/')
        }else{
            Router.push('/list?id='+e.key)
        }
    }
    return(
        <div className="header">
        <Row type="flex" justify="center" >
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">
                    
                            <a> 阅漫屋</a>
                    </span>
                <span className="header-txt">专注于优秀国漫、日漫分享</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={10} xl={10}>
                <Menu mode="horizontal"onClick={handleClick}>
                    <Menu.Item key="0" >
                        <HomeOutlined />
                            首页
                    </Menu.Item>
                    {
                    navArray.map((item)=>{
                        return(
                            <Menu.Item key={item.Id}>
                                <YoutubeOutlined />
                                {item.typeName}
                            </Menu.Item>
                        )
                        }) 
                    }
                </Menu>
            </Col>
        </Row>
    </div>
    )
    
}

export default Header