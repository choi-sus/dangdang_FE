import React from "react";
import styled from "styled-components";

const Spinner = () => {

  return (
    <Inner>
        <div>
          <span>댕</span>
          <span>댕</span>
          <span>한</span>
          <span>바</span>
          <span>퀴</span>
        </div>
    </Inner>
  );
};

export default Spinner;

const Inner = styled.div`
  width: 100%;  
  height: inherit;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  align-items: center;

  div > span {
  position: relative;
  top: 20px;
  display: inline-block;
  animation: bounce .3s ease infinite alternate;
  font-size: 45px;
  font-weight: ${({theme}) => theme.fontWeight.Bold};
  color: ${({ theme }) => theme.colors.main_3};
  text-shadow: 0 1px 0 #fde08e,
               0 2px 0 #fde08e,
               0 3px 0 #fde08e,
               0 4px 0 #fde08e,
               0 5px 0 #fde08e,
               0 6px 0 transparent,
               0 7px 0 transparent,
               0 8px 0 transparent,
               0 9px 0 transparent,
               0 10px 10px rgba(0, 0, 0, .4);
  }

  div > span:nth-child(2) { animation-delay: .1s; }
  div > span:nth-child(3) { animation-delay: .2s; }
  div > span:nth-child(4) { animation-delay: .3s; }
  div > span:nth-child(5) { animation-delay: .4s; }

  @keyframes bounce {
    100% {
      top: -20px;
      text-shadow: 0 1px 0 #fde08e,
                   0 2px 0 #fde08e,
                   0 3px 0 #fde08e,
                   0 4px 0 #fde08e,
                   0 5px 0 #fde08e,
                   0 6px 0 #fde08e,
                   0 7px 0 #fde08e,
                   0 8px 0 #fde08e,
                   0 9px 0 #fde08e,
                   0 50px 25px rgba(0, 0, 0, .2);
    }
  }
`