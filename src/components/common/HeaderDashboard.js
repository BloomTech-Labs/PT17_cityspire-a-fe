import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

import cityspireLogo from '../../assets/imgs/cityspireLogo.png';
import { Row, Col, Menu, Dropdown, Avatar, Image, Space } from 'antd';
import {
  UserOutlined,
  DownOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';

import { SearchComponent } from './SearchComponent';

const HeaderStyle = {
  alignItems: 'center',
  padding: '0.75rem 1.5vw',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateRows: '1fr',
  gridGap: '1rem',
  borderBottom: 'solid thin #eee',
  backgroundColor: 'white',
};

const LogoStyle = {
  marginBottom: '0',
};

const HeaderDashboard = () => {
  const { authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  const { push } = useHistory();

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
          localStorage.setItem('token', info.sub);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  const handleOnClick = id => {
    push(`/profile/${id}/dashboard`);
  };

  const menu = (
    <Menu>
      {/*<Menu.Item key="0" onClick={() => handleOnClick(userInfo.sub)}>*/}
      {/*  User Dashboard*/}
      {/*</Menu.Item>*/}
      <Menu.Item key="1" onClick={() => authService.logout()}>
        Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <Row style={HeaderStyle}>
      <Col>
        <h1 style={LogoStyle}>
          <a href="/">
            {/*<Image*/}
            {/*  preview={false}*/}
            {/*  src={cityspireLogo}*/}
            {/*  style={{ width: '120px' }}*/}
            {/*/>*/}
            CitySpire
          </a>
        </h1>
      </Col>
      <Col>
        <Row>
          <SearchComponent />
        </Row>
      </Col>
      <Col>
        <Row>
          <Space size="large">
            <Dropdown overlay={menu} trigger={['click']}>
              <Space
                size="small"
                onClick={e => e.preventDefault()}
                style={{ cursor: 'pointer' }}
              >
                <Avatar size="small" icon={<UserOutlined />} />
                {userInfo ? userInfo.name : 'loading...'}
                <EllipsisOutlined />
              </Space>
            </Dropdown>
          </Space>
        </Row>
      </Col>
    </Row>
  );
};

export default HeaderDashboard;
