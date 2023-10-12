# SONGLYRICZ
SongLyricZ is a web app to find songs lyrics. The API used in this project is "Genius - Song Lyrics" from [Rapid API](https://rapidapi.com/hub). This project built to implement some new knowledges that I've earned while learning Next.js

## Built With
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Getting Started

Here are steps to install and run this project to your computer locally :

### Prerequisites

1. Node.Js

    ```
      node --version
      npm --version
    ```
2. Git

   ```
     git --version
    ```
3. Get your API Key on [Rapid API](https://rapidapi.com/hub)
4. Subscribe ["Genius - Song Lyrics"](https://rapidapi.com/Glavier/api/genius-song-lyrics1/) API to enable access to endpoint with your Rapid API Key

### Installation

1. Clone the repo

    ```
      git clone https://github.com/R4Z121/songlyricz.git
    ```
2. Install NPM Packages

    ```
      npm install
    ```
3. Create .env.local file in root folder and write this following code :

   ```
   NEXT_PUBLIC_API_KEY="[YOUR_API_KEY]"
   ```
4. Run project in development mode. App will run on localhost:3000

    ```
      npm run dev
    ```
5. Build Project

    ```
      npm run build
    ```
