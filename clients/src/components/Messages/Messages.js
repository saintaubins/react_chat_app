import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled from 'styled-components';

import Message from './Message/Message';

const Styles = styled.div`
.messages {
    padding: 5% 0;
    overflow: auto;
    flex: auto;
  }
`;

const Messages = ({ messages, name }) => {
    return (
        <Styles>
            <ScrollToBottom className="messages">
                {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
            </ScrollToBottom>
        </Styles>
    )
}

export default Messages;