import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import {ProyextProvider} from './Context/ProyectContext'


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
    console.log(jsonData)
    setter(jsonData)
  }

  // const fetchGitHubData = async () => {
  //   const data = await fetch('https://api.github.com/users/franruedaesq');
  //   const JSONdata = await data.json();
  //   await setGitHubData(JSONdata)

  //   await fetchUserRepos(JSONdata.repos_url)
  // }

  // const fetchUserRepos = async (url) => {
  //   const data = await fetch(url);
  //   const JSONdata = await data.json();

  //   await setUserReps(JSONdata)
  // }


  return (
    <ProyextProvider value={userReps}>
      <div className="App">
        <NavBar/>
        <Projects/>
      </div>
    </ProyextProvider>
  );
}

export default App;
