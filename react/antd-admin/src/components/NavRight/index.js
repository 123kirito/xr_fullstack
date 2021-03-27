import React, { useState, useEffect } from 'react';
import { Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const NavRight = () => {
  const [tagList, setTagList] = useState([])
  const getTagAPIList = () =>{
    axios
      .get('/tags')
      .then(res => {
        console.log(res);
        setTagList(res.data.tagList)
      })
  }
  useEffect(() => {
    getTagAPIList()
  }, [])
  return (
    <div>
    </div>
  );
}

export default NavRight;