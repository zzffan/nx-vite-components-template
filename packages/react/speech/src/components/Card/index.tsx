import { useState } from 'react';
import styles from './index.module.scss';
import {Drawer, Button} from 'antd';

export function Card() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles['container']}>
            <h1>Welcome to Speech Card!</h1>
            <Button type="primary" onClick={showDrawer}>open</Button>
            <Drawer
                title="Basic Drawer"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={open}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
}

export default Card;
