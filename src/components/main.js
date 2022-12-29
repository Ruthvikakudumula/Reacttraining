import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Image, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from '../logo.svg';



const { Header, Content, Sider } = Layout;



const Main = () => {
    const navigate = useNavigate()
    const items = ["Movies", "NewMovies"].map(
        (each, index) => {
            return {
                key: `${each}`,
                icon: '',
                label: each,
                path: `/${each}`,

            };
        },
    );
    const navMenuItems = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        navigate(`${item.props.path}`)
    }
    return (
        <Layout>
            <Header className="header">
                <Image
                style={{height:'35px',width:'30px'}} src={Logo} />
                <span style={{color:'white'}}>Codexbox</span>
                {/* <Menu theme="dark" mode="horizontal" /> */}
            </Header>
            <Layout style={{ height: "100vh" }}>
                <Sider width={200} >
                    <Menu
                        onSelect={navMenuItems}
                        mode="inline"
                        style={{ height: '100%', borderRight: 0 }}
                        items={items}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                       
                     
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Main;