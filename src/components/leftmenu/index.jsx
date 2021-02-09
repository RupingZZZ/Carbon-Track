import React,{Component} from "react";
import './index.less'
import { Menu, Icon,Avatar,Modal } from 'antd';
import { Link } from 'react-router-dom';
import menuList from '../../config/menuC'
import {withRouter} from 'react-router-dom';
import storageUtils from "../../utils/storageUtils";
import memoryUtils from "../../utils/memoryUtils";
import {reqUserName} from "../../api";
export class LeftMenu extends Component{
    state={

    }


    Logout=()=>{
        Modal.confirm({
            title: 'do you want to login out',
            onOk:()=> {
                console.log('OK',this)
                console.log("删除", storageUtils.removeUser())
                memoryUtils.username={};
                this.props.history.push('/login')
            },
            onCancel(){
            }
        });


    }

    getUserName =async (username=memoryUtils.username)=>{
        const user = await reqUserName(username);
        memoryUtils.user= user;
        this.setState({
            user
        })
    }



 getMenuItem=(menuList)=>{
     return menuList.map(item=>{
         return(
             <Menu.Item key={item.key} style={{height:"90px", lineHeight:"90px"}} >
                 <Link to={item.key}>
                     <Icon type={item.icon} />
                     <span>{item.title}</span>
                 </Link>
             </Menu.Item>
         )

     })
 }

    componentDidMount() {
        this.getUserName();
    }

    render() {
        const {user} = this.state;
        return (
            <div>
                <div className={"Avatardiv"}>
                    <Avatar size={64} icon="user" />
                    <span className={"username"}>{user}</span>
                </div>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>

                        {
                            this.getMenuItem(menuList)
                        }
                        <Menu.Item key="4" style={{height:"90px", lineHeight:"90px"}} onClick={this.Logout}>
                            <Icon type="export" />
                            <span  >Login out</span>
                        </Menu.Item>
                        <Menu.Item key="5" style={{height:"180px", lineHeight:"90px"}} >
                        </Menu.Item>

                    </Menu>
                </div>

        )
    }
}

export default withRouter(LeftMenu);