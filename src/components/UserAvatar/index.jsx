import axios from "axios";
import { useEffect, useState } from "react";
import './styles.scss'

const UserAvatar = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get("https://tagchatter.herokuapp.com/me");
        if (data) setUser(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchApi()
  }, []);
  return (
    <div className='user-avatar'>
      <img src={user.avatar} alt={user.name} />
    </div>
  );
}; 

export default UserAvatar;
