# PrivateGroupChat
 This is a demo proof of concept 
 
Project Idea

Private Group Chat Online
Called HelloWorld…

There will be 3 user types 

Guest User 
-	Can only see the lobby
-	Can chat in the lobby and will be automatically assigned a random name 
-	Cannot access groups / private chats 

User
-	Chooses their nickname 
-	Optional (enter in a BIO, upload a profile pic)
-	They can create a chat group (random number)
-	They can set it to private and only allow certain users in

Admin 
-	This is the web-master. They can remove users from the global/lobby group
-	They can delete user accounts and see how much activity a user is generating
-	They also see the stats for the website itself


Security Risks
-	Attacker are able to intercept the traffic and see the messages the users are sending between each other 
-	Attackers are able to use the input boxes to inject malicious code (XSS) onto the web application 
-	Attackers are able to access the DB where the users info is stored. They are somehow able to read it. (not encrypted in a same manner)
-	Attackers are able to perform CSRF attacks and trick users into sending messages they did not plan too. 
-	Broken access control, attackers are able to bypass the login (username + password)
-	Use of outdated software, using old or outdated software may lead to data loss

