import { useCallback, useState } from 'react';
import {observer} from 'mobx-react';
import styles from './index.module.scss';
import { Drawer, Button, Table } from 'antd';
import { User } from '@ai-basic-demo/user';

interface IProps {
    MB?: boolean;
}
const user = new User();
const Card: React.FC<IProps> = observer(({MB}) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const tryRequest = useCallback(() => {
        user.getUserInfo();
    }, []);

    const changeName = useCallback(() => {
        const newName = String(Math.random() * 10);
        console.log(newName);
        user.changeName(newName);
    }, []);

    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <div className={styles['container']}>
            <div className={styles.module}>
                <h2>测试 传参在宿主环境的表现</h2>
                是否有参数 MB？ {MB ? '有' : '无'}
            </div>
            <div className={styles.module}>
                <h2>测试 antd 抽屉组件在宿主环境的表现</h2>
                <Button type="primary" onClick={showDrawer}>
                    open
                </Button>
            </div>
            <div className={styles.module}>
                <h2>测试 请求在宿主环境的表现，是否走宿主环境的 host</h2>
                <Button type="primary" onClick={tryRequest}>
                    发起请求
                </Button>
            </div>
            <div className={styles.module}>
                <h2>引用model，测试打包效果</h2>
                <h3>user类的name：{user.name}</h3>
                <Button type="primary" onClick={changeName}>随机改变 name</Button>
                <Button type="primary" onClick={user.resetName}>重置 name</Button>
            </div>
            <div className={styles.module}>
                <h2>测试 antd Table组件在宿主环境的表现</h2>
                <Table
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    style={{ width: '100%' }}
                />
            </div>

            <Drawer
                title="Basic Drawer"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={open}
            >
                <p>抽</p>
                <p>屉</p>
                <p>抽屉</p>
            </Drawer>
        </div>
    );
})

export default Card;
