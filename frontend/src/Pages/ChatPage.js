import React, {useEffect, useState} from "react";
import axios from "axios";

const ChatPage = () => {

  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const {data} = await axios.get("/api/chat");
     setChats(data);
  };

  useEffect(() => {
      fetchChats();
      // console.log("In use effect"); //used this to confirm this useEffect was working
    }, [])

  
  return(
    <div>
      {chats.map((chat) => (
      <div key = {chat._id}> {chat.chatName} </div>
      ))}
    </div>
  );

};

export default ChatPage;
