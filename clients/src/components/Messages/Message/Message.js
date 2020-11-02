import React from 'react';
import styled from 'styled-components';

import ReactEmoji from 'react-emoji';

const Styles = styled.div`

.messageBox {
  background: #F3F3F3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
}
  
.messageText {
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
}
  
.messageText img {
  vertical-align: middle;
}
  
.messageContainer {
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
}
  
.sentText {
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
}
  
.pl-10 {
  padding-left: 10px;
}
  
.pr-10 {
  padding-right: 10px;
}

.justifyStart {
  justify-content: flex-start;
}
  
.justifyEnd {
  justify-content: flex-end;
}
  
.colorWhite {
  color: white;
}
  
.colorDark {
  color: #353535;
}
  
.backgroundBlue {
  background: #2979FF;
}
  
.backgroundLight {
  background: #F3F3F3;
}

`;
const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  //console.log('name= ', name )
  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
      isSentByCurrentUser = true;
  }

  return (
      isSentByCurrentUser
          ? (<Styles>
              <div className="messageContainer justifyEnd">
                  <p className="sentText pr-10">{trimmedName}</p>
                  <div className="messageBox backgroundBlue">
                      <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                  </div>
              </div>
            </Styles>
          )
          : (<Styles>
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                </div>
            </Styles>
          )
      
  )
}

export default Message;