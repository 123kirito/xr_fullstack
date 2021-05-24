import {Avatar,Divider} from 'antd'
import {WeiboCircleOutlined,WechatOutlined,QqOutlined } from '@ant-design/icons';
const Author=()=>{
    return(
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2183719465,1095124388&fm=26&gp=0.jpg"/>
            </div>
            <div className="author-introduction">
            各位亲爱的小伙伴们你们好呀！我是你们的推番工具人！希望阅漫屋今后能为你们推荐更多优质动漫！
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<WeiboCircleOutlined/>} className="account" />
                <Avatar size={28} icon={<QqOutlined/>} className="account" />
                <Avatar size={28} icon={<WechatOutlined/>} className="account" />
            </div>
        </div>
    )
}

export default Author
