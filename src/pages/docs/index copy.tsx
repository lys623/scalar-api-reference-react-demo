import React, { useState } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import LayoutWrap from '@theme/Layout'
import { ApiReferenceReact } from '@scalar/api-reference-react'
import './index.css'

import DocIntro from '@site/src/components/Api/intro.mdx'
import MenuCustom from './menu'
const JsonIntro = require('@site/src/components/Api/intro.json')


const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [activeKey, setActiveKey] = useState('sub4')
  function onClick(item) {
    console.log('item', item)
    setActiveKey(item.keyPath[1])
    const targetElement = document.getElementById(item.key);
    console.log('targetElement', targetElement)
    if (targetElement) {
      // 使用scrollIntoView方法实现平滑滚动
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }

  }
  const items: MenuProps['items'] = [
    {
      label: 'Navigation One',
      key: 'mail',
    },
    {
      label: 'MENU SYNC',
      key: 'app',
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];

  return (
    <LayoutWrap>
      <Layout hasSider className='shopeefoodDocWrap'>
        <Sider
          width={300}
          style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 60, bottom: 0, backgroundColor: 'white', }}
        >
          <div className="demo-logo-vertical" />
          {/* <Menu  mode="inline"
         items={items} onClick={onClick}
         defaultSelectedKeys={['9']}
         defaultOpenKeys={['sub4']}
        /> */}
        <MenuCustom />
        </Sider>
        <Layout style={{ marginLeft: 300 }}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial', background: '#fff' }}>
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
              id="contentWrap"
            >
              {/*  doc content start */}
              <DocIntro />
              {/* <ApiReferenceReact
                configuration={{
                  spec: {
                    content: JsonIntro
                  },
                  defaultOpenAllTags:true,
                  showSidebar: false
                }} /> */}
 <ApiReferenceReact
      configuration={{
        spec: {
          url: 'https://cdn.jsdelivr.net/npm/@scalar/galaxy/dist/latest.yaml',
        },
      }}
    />
                {/* doc content end */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutWrap>
  );
};

export default App;
