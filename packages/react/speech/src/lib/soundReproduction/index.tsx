import styles from './index.module.scss';
import Card from '../../components/Card';

export function Speech() {
    return (
        <div className={styles['container']}>
            <h1>Welcome to Speech!</h1>
            <Card />
        </div>
    );
}

export default Speech;
