import styles from './HeaderPage.module.css';

const HeaderPage: React.FC = () => {
    return(
        <header className={styles.HeaderContainer}>
            <h2>Está disponivel Agora!</h2>
            <h1>Loki</h1>
        </header>
    )
}


export default HeaderPage;