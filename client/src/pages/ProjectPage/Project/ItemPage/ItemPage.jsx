import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { itemSelector, isLoaderSelector } from '../../../../redux';
import Moment from 'moment';
import Loader from '../../../../components/Loader';
import STATUS from '../../../../consts/itemStatuses';
import routes from '../../../../configs/routes';
import Vector from '../../../../assets/images/ItemImages/Vector.png';
import styles from './ItemPage.module.scss';

const ItemPage = () => {
  const item = useSelector(itemSelector);
  const isLoader = useSelector(isLoaderSelector);

  return (
    isLoader ? <Loader /> :
      item ?
        <div className={styles.content}>
          <div className={styles.content__caption}>
            <Link to={routes.AuthRoutes.pathToDashboard}>&larr; Back</Link>
            <h1>{item.name}</h1>
          </div>
          <div className={styles.content__main}>
            <div className={styles.information}>
              <div className={styles.input}>
                <p>Data added</p>
                <p>{Moment(item.createdAt).format('DD.MM.YYYY')}</p>
              </div>
              <div className={styles.input}>
                <p>Cost</p>
                <p>${item.price}</p>
              </div>
              <div className={styles.input}>
                <p>Status</p>
                <button className={styles.statusApprove}>{STATUS[item.statusId]}</button>
              </div>
              <div className={styles.description}>
                <p>Description</p>
                <p>
                  {item.description}
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
                    <img src={Vector} alt='Vector image'/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> : 'Item not loaded'
  );
};

export default ItemPage;