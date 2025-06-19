import styles from './index.module.scss';
import Card from '../../components/Card';

export function Test() {
    return (
        <div className={styles['container']}>
            <h1>Welcome to Test!</h1>
            <Card />
        </div>
    );
}

export default Test;
