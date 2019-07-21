import React from 'react';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Calculator>
        <Input />
        <Numbers>
          <button>9</button>
          <button>8</button>
          <button>7</button>
          <button>6</button>
          <button>5</button>
          <button>4</button>
          <button>3</button>
          <button>2</button>
          <button>1</button>
          <button>0</button>
        </Numbers>
        <Operators>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
          <button style={{ gridArea: '3 / 1 / 3 / 3' }}>Clear</button>
          <button style={{ gridArea: '4 / 1 / 4 / 3' }}>=</button>
        </Operators>
      </Calculator>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Calculator = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "input input input input input"
    "numbers numbers numbers operators operators";
  grid-gap: 0.25rem;
`;

const Input = styled.input`
  grid-area: input;
`;

const Numbers = styled.div`
  grid-area: numbers;

  /* Display numbers with flex instead of grid,
  so that we can reverse the order and
  create a good keyboard experience */
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;

  button {
    width: calc((100% - 0.5rem) / 3);

    &:not(:last-child) {
      /* If margin gets applied to button in the last row, 
      number buttons won't align with operator buttons */
      margin-bottom: 0.25rem;
    }
  }
`;

const Operators = styled.div`
  grid-area: operators;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.25rem;
`;

export default App;
