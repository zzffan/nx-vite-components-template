import styles from './index.module.scss';
import Card from '../../components/Card';
import {observer} from 'mobx-react';

interface IProps {
    MB?: boolean;
}

const Speech: React.FC<IProps> = observer(({MB}) => {
    return (
        <div className={styles['container']}>
            <h1>Welcome to Speech!</h1>
            <br />
            <h2>下面是测试引用组件</h2>
            <br />
            <Card MB={MB} />
        </div>
    );
})

export default Speech;
