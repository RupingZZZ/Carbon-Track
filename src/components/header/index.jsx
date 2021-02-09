import React,{Component} from "react";
import {Icon,Button} from 'antd'
import {withRouter} from 'react-router-dom'
import menuList from "../../config/menuC";
import './index.less'

 class Header extends Component{
    constructor(props){
        super(props);
    }
    state = {
        collapsed: false
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
        this.props.handle(this.state.collapsed);
    };

    getTitle=()=>{
        const  path = this.props.location.pathname
        let  title
        menuList.forEach(item=>{
            if(item.key==path){
                title=item.title
            }
        })
        return title;

    }
    render() {
        const title = this.getTitle();
        return(
            <div className={'header'}>
                <Button type="primary" onClick={this.toggle} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <span style={{marginLeft:'40px', fontSize:'20px'}}>{title}</span>
            </div>
        )
    }
}
export default withRouter(Header)