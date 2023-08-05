import React, {useState, useEffect} from 'react';
import './portfolio.css';

export default function Portfolio(props) {
  const [list, setList] = useState([
    {image: <img src={'https://i.ibb.co/vkg3QNp/IMG-4361-Medium.png'}></img>, name: 'Project Atelier', stack: 'Tech stack: React, Node.js, Express, Javascript, Jest', github: 'https://github.com/KenKurita/FEC'},
    {image: <img src={'https://i.ibb.co/ZcgLHDN/IMG-4362-Medium.png'}></img>, name: 'GamerCity', stack: 'Tech stack: React, Node.js, Express, Javascript, Mocha, PostgreSQL', github: 'https://github.com/KenKurita/boc-slate-fe'},
    {image: <img src={'https://i.ibb.co/Prv8L5q/IMG-4363-Medium.png'}></img>, name: 'Kivan', stack: 'Tech stack: React, Node.js, Express, Javascript, MySQL', github: 'https://github.com/KenKurita/Kivan'}])

    function showList() {
      const loopy = list.map((item, index) => {
        return (
          <li key={index} className="project-item">
            {item.image}
            <div>
              <h3 id='orange'>{item.name}</h3>
              <div>{item.stack}</div>
              <div>
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              </div>
            </div>
          </li>
        );
      });

      return <ul className="no-bullets">{loopy}</ul>;
    }


  return (
    <div className="container2">
      <h1>MY &nbsp; <div id='orange'>PORTFOLIO</div></h1>
      <div>{showList()}</div>
    </div>
  )
};