const users = [];
const rooms = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  // Errors (username or room name too long, set max to 20 characters)
  // username is already in use, room name is already in use
  if(!name || !room) return { error: 'Username and room are required.' };
  if(name.length > 20) return { error: 'Username too long...' };
  if(room.length > 20) return { error: 'Room name too long...' };
  if(existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };
  users.push(user);
    
    // if room does not exist add it to the list
    if(rooms.indexOf(user.room) === -1){
        rooms.push(user.room);
    } 

    // debug - counting rooms
    console.log('rooms:'+ rooms);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if(index !== -1) return users.splice(index, 1)[0];
  

  //find if other users are in this room
  //If not we will remove the room from the list



}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };