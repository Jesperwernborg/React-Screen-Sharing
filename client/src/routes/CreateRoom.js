import React from "react";
import { v1 as uuid } from "uuid";
import { auth, firestore } from "../firebase";

const CreateRoom = (props) => {
  const roomid = uuid();
  function create() {
    props.history.push(`/room/${roomid}`);

    //firestore.collection('users').doc(auth.currentUser).update(newRoomData);
    firestore.collection("users").doc(auth.currentUser.uid).collection('usersRooms').doc(roomid).set({roomid: roomid});
    
  }
  return <button onClick={create}>Create Room</button>;
};

export default CreateRoom;
