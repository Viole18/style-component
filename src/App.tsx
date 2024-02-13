import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Btn } from './components/Btn.styled';



function App() {
  return (
    <div className="App">
      <Box>
        <Card>
          <img src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VeJzKgt8GdYnAlBDC1rwZOiNAKWYXjRxLK9LeQb3lWmp5Sj-hceB9bkmyMP9T42UQ-i48Mg~J7xH6nMxvqsLraEzq7ciNQUX9y89gy78zrAXSqtrQuZl5NHd7bvbNc1tJ~4DQ4zE9bN-5kO2b4zdlGCP3T6VyEr1C5p6~t3V6qMCoZLgpFEc0A0gztakzZg3yy8MB9CnIZxgBI2HGw39lw6FJnmkK0oGg2GS-KFl7lV7LqaVwfFb8CttyE6Iy5J0QJTjWHljZ3zNO7qCOp25Q6wgbDejWeWZTa-qWTfEmq~2pe2N11y4SIwlsfKTIKGsPkPfCYcH1H0yblRB3I9yCg__" alt="" />
          <h1>Headline</h1>
          <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
          <Btn firstBtn >See more</Btn>
          <Btn secondBtn color='#4E71FE'>Save</Btn>
        </Card>
      </Box>
    </div>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Card = styled.div`
  position: relative;
  background: rgb(255, 255, 255);
  width: 300px;
  height: 350px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);

  img {
    position: absolute;
    width: 280px;
    height: 170px;
    left: 10px;
    right: 10px;
    top: 10px;
    bottom: 170px;
    border-radius: 10px;
  }

  h1 {
    position: absolute;
    width: 70px;
    height: 19px;
    left: 20px;
    right: 210px;
    top: 190px;
    bottom: 131px;
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;
  }

  p {
    position: absolute;
    width: 260px;
    height: 40px;
    left: 20px;
    right: 20px;
    top: 220px;
    bottom: 71px;
    color: rgb(171, 179, 186);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
  }
`





export default App;
