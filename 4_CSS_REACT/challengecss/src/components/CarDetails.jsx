import styles from './CarDetails.module.css';

const CarDetails = ({id, brand, km, color}) => {
  return (
    <div className={styles.cards}>
        <h2 className={styles.my_h1}>Detalhes do Carro</h2>
        <p > Marca: {brand}</p>
        <p >Km: {km}</p>
        <p >Color: {color}</p>
    </div>
  )
}

export default CarDetails