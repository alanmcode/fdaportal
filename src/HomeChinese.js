import React from "react";
import {Link} from "react-router-dom"
import './style.css'
import Button from "./Components/Button";

function HomeChinese(){
    return(
        <div>       
            <div id="home_profile">    
                <h2>Adya Aggarwal</h2>
                <Link id="edit_det_btn" to='/profile_edit'>编辑我的详细信息</Link>
                <h4>编辑我的详细信息:</h4><p>adya123</p>
                <h4>电子邮件:</h4><p>adya.aggarwal@fdm.com</p>
                <h4>电话号码:</h4><p>9283529873</p>
                <h4>地址:</h4><p>Flat 6, ABC Street <br></br>XYZ Road <br></br>London</p>       
                <Link id="edit_det_btn" to= '/Resetpass'>重设密码</Link>
                           
            </div>

            <Link class = 'links' id = 'link_dashboard' to = "/dashboard"><h2>重设密码</h2>单击此处查看更新</Link>

            <Link class = 'links' id = 'link_chatbot' to = "/chatbot">
                <h2>询问新查询</h2>  
                <Button text = '一般查询'></Button>
                <Button text = '技术查询'></Button>
            </Link>

            <Link class = 'links' id = 'link_prev_queries' to = "/prev_queries"><h2>以前的查询</h2>点击这里查看以前的查询</Link>
            
            <Link class = 'links' id = 'link_request_leave' to = "/request_leave"><h2>请求休假</h2>点击这里申请休假</Link>
            <Link class = 'links' id = 'link_search' to = "/search"><h2>寻找同事</h2></Link>
            
            
        </div>
    )
}

export default HomeChinese;