
import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';


function App() {

  const { getUserData, getUserLanguages } = require('./utils/fetcher');
  const userName = 'henrimachado';

  const [userData, setUserData] = useState(null);
  const [userLanguages, setUserLanguages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let dados = await getUserData(userName);
      setUserData(dados);

      let linguagens = await getUserLanguages(userName);
      setUserLanguages(linguagens);
    }
    fetchData();
  }, [userName, getUserData, getUserLanguages]);

  if (!userData) {
    return (
      <div>
        Loading....
      </div>
    )
  }
  return (
    <Card
      avatar_url={userData.avatarUrl}
      name={userData.name}
      html_url={userData.profileUrl}
      public_repos={userData.reposCount}
      joined_at={userData.joinedAt}
      bio={userData.bio}
      company={userData.company}
      blog={userData.blog}
      location={userData.location}
      languages={userLanguages}
    />
  )
}

export default App;
