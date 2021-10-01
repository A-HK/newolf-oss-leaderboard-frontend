import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

const leaderboardUrl = "https://oss-leaderboard-backend.herokuapp.com/";


function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
     getContributor();
  }, []);


  const getContributor = async () => {
    const response = await axios.get(leaderboardUrl);
    setUserData(response.data.leaderboard);
   console.log(userData);

  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Open Source September Leaderboard</h2>
      </header>

      <table class="styled-table">
          <thead>
              <tr>
                  <th>Rank</th>
                  <th>Avatar</th>
                  <th>Username</th>
                  <th>Merged PR Count</th>
                  <th>Score</th>
              </tr>
          </thead>
          <tbody>

                      {
                					userData.map((contributor_data, i) => {
                						return (
                              <tr>
                                <td>{i+1}</td>
                                <td><img src={contributor_data.avatar_url} height="50" width="50" alt="avatar" class="user-avatar"/></td>
                                <td><a href={contributor_data.profile_url} class="user-link">{contributor_data.login}</a></td>
                                <td>{contributor_data.pr_count}</td>
                                <td>{contributor_data.score}</td>
                              </tr>
                						);
                					})
                				}

          </tbody>
      </table>
    </div>
  );
}

export default App;
