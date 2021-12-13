import { Link } from 'react-router-dom';
import routes from '../../../../configs/routes';
import Vector from '../../../../img/Vector.png';
import styles from './ItemPage.module.scss';

const { pathToDashboard } = routes;

const ItemPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__caption}>
        <Link to={pathToDashboard}>&larr; Back</Link>
        <h1>#1 | Cement</h1>
      </div>
      <div className={styles.content__main}>
        <div className={styles.information}>
          <div className={styles.input}>
            <p>Data added</p>
            <p>10.11.2021</p>
          </div>
          <div className={styles.input}>
            <p>Cost</p>
            <p>$238</p>
          </div>
          <div className={styles.input}>
            <p>Status</p>
            <button className={styles.statusApprove}>Approved</button>
          </div>
          <div className={styles.description}>
            <p>Description</p>
            <p>Cement is a dry powdery substance made by calcining lime and clay,
              mixed with water to form mortar or mixed with sand, gravel and water
              to make concrete. It is a binder material. Once hardened, cement
              delivers sufficient strength to erect large industrial structures.
              Cement is corrosive to metals and therefore any metals in contact
              with cement should be corrosion resistant.
            </p>
          </div>
        </div>
        <div className={styles.comments}>
          <div className={styles.header}>
            <p>COMMENTS</p>
          </div>
          <div className={styles.dialog}>
            <div className={styles.info}>
              <p>
                Admin Yuliia
              </p>
              <div className={styles.box}>
                <p>
                  Hello, Peter! Do you have any questions about this item? I`d be glad to assist.
                </p>
              </div>
            </div>
            <div className={styles.info}>
              <p>
                Peter Parker
              </p>
              <div className={styles.box}>
                <p>
                  Hi, Yuliia! I want to ask about cement`s sustainability.
                  Is it save my house from natural disasters?
                </p>
              </div>
            </div>
            <div className={styles.inputField}>
              <input type='text' placeholder='Type message...'/>
              <button>
                <img src={Vector}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;