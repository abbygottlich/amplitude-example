import React from "react";
import styled from "styled-components";

function ShowCompleted() {
  return <Completed>Completed!</Completed>;
}

const Completed = styled.p`
  color: #aa0000;
  font-family: "Helvetica";
  font-size: 36px;
  text-align: center;
  animation: fadeOut ease 3s;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      display: none;
    }
  }
`;

export default ShowCompleted;
