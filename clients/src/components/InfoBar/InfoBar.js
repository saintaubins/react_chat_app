import React from 'react';
import styled from 'styled-components';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

const Styles = styled.div`

.infoBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2979FF;
    border-radius: 4px 4px 0 0;
    height: 60px;
    width: 100%;
}
  
.leftInnerContainer {
    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 5%;
    color: white;
}
  
.rightInnerContainer {
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    margin-right: 5%;
}
  
.onlineIcon {
    margin-right: 5%;
}

`;
const InfoBar = ( { room } ) => {
    return (
    <Styles>
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online png" />
                <h3>{ room }</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close png" /></a>
            </div>
        </div>
    </Styles>
    )

}

export default InfoBar;