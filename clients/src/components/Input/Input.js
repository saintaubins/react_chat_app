import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

.form {
    display: flex;
    border-top: 2px solid #D3D3D3;
}

.input {
    border: none;
    border-radius: 0;
    padding: 5%;
    width: 80%;
    font-size: 1.2em;
}

input:focus, textarea:focus, select:focus{
    outline: none;
}

.sendButton {
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979FF;
    padding: 20px;
    display: inline-block;
    border: none;
    width: 20%;
}

`;

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <Styles>
            <form>
                <input 
                className="input"
                type="text"
                placeholder="Type a message..."
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
                <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
            </form>
        </Styles>
    )
}

export default Input;