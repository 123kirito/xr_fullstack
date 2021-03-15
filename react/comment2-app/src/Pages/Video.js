import React from 'react';
import {Route,Link} from 'react-router-dom';
import Reactpage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'

function  Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to="/video/reactpage/">React视频教程</Link>
                    </li>
                    <li>
                        <Link to="/video/flutter/">Flutter视频教程</Link>
                    </li>
                    <li>
                        <Link to="/video/vue/">Vue视频教程</Link>
                    </li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <Route path="/video/reactpage/" component={Reactpage} />
                <Route path="/video/flutter/" component={Flutter} />
                <Route path="/video/vue/" component={Vue} />
            </div>
        </div>
    )
}
export default Video