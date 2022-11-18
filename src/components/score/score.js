import React from "react";

import "./score.css";


const Score = () => {
  
  return (
    <div className="container summary row">
      <table>
        <tr>
          <th>Intra</th>
          <th>Score</th>
          <th>Points</th>
        </tr>
        <tr>
          <td>Patric</td>
          <td>402</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Sem</td>
          <td>101</td>
          <td>2</td>
        </tr>
      </table>
    </div>
  );
};

export default Score;
