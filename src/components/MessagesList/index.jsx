import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.scss";

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get(
          "https://tagchatter.herokuapp.com/messages"
        );
        console.log(data);
        if (data) setMessages(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchApi();
  }, []);
  return (
    <section className="list">
      {messages.map((message) => (
        <div className="message" key={message.id}>
          <img src={message.author.avatar} alt={message.author.name} />
          <div>
            <strong>{message.author.name}</strong>
            <p>{message.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MessagesList;
