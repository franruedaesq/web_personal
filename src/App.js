import React, { useEffect, useState } from 'react';
import './App.css';
import CardUserInfo from './Components/CardUserInfo/CardUserInfo';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import {ProjectProvider} from './Context/ProyectContext'


function App() {

  const [gitHubData, setGitHubData] = useState({})
  const [userReps, setUserReps] = useState([])


  useEffect(() => {
    // fetchGitHubData()
    fetchData('https://api.github.com/users/franruedaesq', setGitHubData)
    fetchData('https://api.github.com/users/franruedaesq/repos', setUserReps)
  }, [])


  const fetchData = async(url, setter) => {
    const data = await fetch(url);
    const jsonData = await data.json()
    setter(jsonData)
  }


  const contextData = {
    userInfo: gitHubData,
    repos: userReps
  }

  return (
    <ProjectProvider value={contextData}>
      <div className="App">
        <NavBar/>
        <CardUserInfo/>
        <Projects/>
      </div>
    </ProjectProvider>
  );
}

export default App;
