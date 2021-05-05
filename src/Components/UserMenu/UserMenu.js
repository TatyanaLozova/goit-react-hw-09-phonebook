import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from "../../redux/auth";
import ava from '../../images/ava.jpg'

const styles = {
avatar: {
      borderRadius: "50%",
  },
  btn: {
    borderRadius: "10%",
     marginLeft: 10,
  }
}
export default function UserMenu() {
   const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
 
  const onLogout = useCallback(
    () => {
      dispatch(authOperations.logout())
    },
    [dispatch]);

  return (
    <div>
        <img src={ava} alt="" width="40" style={styles.avatar}
         />
        <span>Welcome, {name}</span>
        <button type="button" onClick={onLogout} style={styles.btn}>Logout</button>
    </div>
  )
}

