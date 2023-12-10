import React from 'react';

function App() {

  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  }
  const onClickMinus = () => {
    setCount(Math.max(count - 1, 0));
  }

  return (
    <div className="App">

          Counter
          <button onClick={onClickMinus} className='minus'>-</button>
          <button onClick={onClickPlus} className='plus'>+</button>
          <br />
          {count}

    </div>
  );
}

export default App;
