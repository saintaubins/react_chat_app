import React from 'react';
import styled from 'styled-components';

import onlineIcon from '../../icons/onlineIcon.png';

const Styles = styled.div`
.textContainer {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    color: white;
    height: 60%;
    justify-content: space-between;
  }
  
  .activeContainer {
    display: flex;
    align-items: center;
    margin-bottom: 50%;
  }
  
  .activeItem {
    display: flex;
    align-items: center;
  }
  
  .activeContainer img {
    padding-left: 10px;
  }
  
  .textContainer h1 {
    margin-bottom: 0px;
  }
  
  @media (min-width: 320px) and (max-width: 1200px) {
    .textContainer {
      display: none;
    }
  }

`;

const TextContainer = ({ users }) => {
    return (
        <Styles>
            <div className="textContainer">
                <div>
                <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
                <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
                <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
                </div>
                {
                    users
                    ? (
                        <div>
                        <h1>People currently chatting:</h1>
                        <div className="activeContainer">
                        <h2>
                            {users.map(({name}) => (
                                <div key={name} className="activeItem">
                                {name}
                                <img alt="Online Icon" src={onlineIcon}/>
                            </div>
                            ))}
                        </h2>
                        </div>
                    </div>
                    )
                    : null
                }
            </div>
        </Styles>
    )
};

export default TextContainer;