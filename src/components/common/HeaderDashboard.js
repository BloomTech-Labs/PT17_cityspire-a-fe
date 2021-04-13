import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

import cityspireLogo from '../../assets/imgs/cityspireLogo.png';
import {
  Row,
  Col,
  Menu,
  Dropdown,
  Avatar,
  Button,
  Image,
  Input,
  Space,
  Divider,
} from 'antd';
import { UserOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';

const { Search } = Input;
const onSearch = value => console.log(value);

const HeaderStyle = {
  alignItems: 'center',
  padding: '0.75rem 2vw',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateRows: '1fr',
  borderBottom: 'solid thin #eee',
  backgroundColor: 'white',
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
      <Menu.Item key="0" onClick={() => handleOnClick(userInfo.sub)}>
        User Dashboard
      </Menu.Item>
      <Menu.Item key="1" onClick={() => authService.logout()}>
        Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <Row style={HeaderStyle}>
      <Col>
        <a href="/">
          <Image
            preview={false}
            src={cityspireLogo}
            style={{ width: '120px' }}
          />
        </a>
      </Col>
      <Col>
        <Row>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: '100%' }}
          />
          {/*<Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />*/}
          {/*<Search placeholder="input search text" onSearch={onSearch} enterButton />*/}
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
                {userInfo ? userInfo.name : 'loading...'} <DownOutlined />
              </Space>
            </Dropdown>
          </Space>
        </Row>
      </Col>
    </Row>
  );
};

export default HeaderDashboard;
