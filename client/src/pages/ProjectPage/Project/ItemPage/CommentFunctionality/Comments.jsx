import styles from '../ItemPage.module.scss';
import Vector from '../../../../../../src/assets/images/ItemImages/Vector.png';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateComments, fetchComments, fetchDeleteComment } from '../../../../../redux/requests/commentsRequests';
import { userSelector } from '../../../../../redux';
import DeleteIcon from '@mui/icons-material/Delete';

const Comments = (props) => {

  const dispatch = useDispatch();

  const [comments, setComments] = useState([]);

  const user = useSelector(userSelector);

  const [options, setOptions] = useState({
    content: '',
    createdAt: '',
    userId: '',
  });

  useEffect(async() => {
    const response = await dispatch(fetchComments(props.item));
    setComments(response.data);
  }, []);

  const handleCreateComment = async () => {
    await dispatch(fetchCreateComments(options));
    const response = await dispatch(fetchComments(props.item));
    setComments(response.data);
  };

  const handleDeleteComment = async (id) => {
    const confirmation = confirm('Are you sure you want to delete?');
    if (confirmation) {
      await dispatch(fetchDeleteComment(id));
      const response = await dispatch(fetchComments(props.item));
      setComments(response.data);
    }
  };

  const deleteComment = async (id) => {
    handleDeleteComment(id);
  };

  const sendComment = async () => {
    handleCreateComment();
  };

  const CommentOptions = (event) => {
    setOptions({
      content: event.target.value,
      userId: user.id,
      createdAt: new Date(), 
      itemId: props.item
    });
  };

  return (
    <div className={styles.comments }>
      <div className={styles.header}>
        <p>COMMENTS</p>
      </div>
      <div className={styles.dialog_wrapper}> 
        <div className={styles.dialog }>
          {comments?.map((comment, key) => {
            return <>
              <div key={key} className={styles.info}>
                <span>{comment.user.firstName}</span>
                <div className={styles.box}>
                  <p>{comment.content}</p>
                  <div className={styles.deleteIcon}>
                    <p> Posted: {new Date(comment.createdAt).toLocaleDateString()}</p>
                    <DeleteIcon className={styles.btnDelete} onClick={() => deleteComment(comment.id)}/>
                  </div>
                </div>
              </div>
            </>;
          })}
        </div>
        <div className={styles.inputField}>
          <input className={styles.send_item} type='text' 
            placeholder='Type message...' onChange={ (event) => CommentOptions(event)}/>
          <button onClick={sendComment}>
            <img src={Vector} alt='Vector image' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;