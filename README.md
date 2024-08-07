# UNLOCK THE UNIVERSE
This is my first React project, made for SoftUni React JS course 2024.

# Used technologies
- Front-end: React, react-dom, react-router-dom, react-loader-spinner, tailwind, fontawesome
- Back-end: SoftUni practice server - `https://github.com/softuni-practice-server/softuni-practice-server`

# Installation
1. Clone the repository `https://github.com/IvayloTashev/unlock-the-universe.git`
2. Install dependencies: `npm i`
3. Start the server in new terminal: `cd server` and then `node server.js`
4. Start the client in new terminal: `cd client` and then `npm run dev`

# Features
- GUESTS have access to picture of the day, catalog page with all available information. They also can see the posts and their comments made from another Users, but they are not allowed to create posts or add commetns.
- USERS are allowed to create, edit and delete posts and comments. They also have access to own profile page with their posts.

# Home page (Guests and Users)
- Static home page with video background.

![image](https://github.com/user-attachments/assets/f3616224-24f2-4d4d-b41c-33c297a8f725)

# Catalog pege (Guests and Users)
- Dinamic catalog page.
  
![image](https://github.com/user-attachments/assets/f556d0da-03be-4bb5-84cd-52e73e6d680a)

# Picture of the day (Guests and Users)
- Daily changing information accompanied by photo or video.
- NASA Astronomy Picture of the Day API: `https://data.nasa.gov/Space-Science/Astronomy-Picture-of-the-Day-API/ez2w-t8ua/about_data`

![image](https://github.com/user-attachments/assets/4197ab8e-5039-4475-a9f2-2699c7762181)

# Post details page (Guests and Users)
- All coments are visible for both guests and users.
- Edit and delete buttons for both post and comments are visible only for the owner.
- Add comment section is visible only for Users.

![image](https://github.com/user-attachments/assets/1eec3b1a-9dfd-406a-9395-62deb561ba61)

# Profile page (Users)
- Profile page displays brief information about the users and their posts.

![image](https://github.com/user-attachments/assets/a3c9455b-b844-492a-947c-6eacbf0cb14c)
