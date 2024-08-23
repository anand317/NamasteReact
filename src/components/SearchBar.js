import React, { useState, useEffect } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);

  const handleChange = (e) => {
    const changedValue = e.target.value;
    console.log(changedValue);
    setInputValue(changedValue);
    //fetchData();
  };

  const fetchData = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`
    );
    const json = await data.json();
    setData(json);

    console.log(json);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchData(), 200);
    console.log(timer);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const handleFocus = () => {
    setShowSuggestionBox(true);
  };

  const HandleFocusOut = () => {
    setShowSuggestionBox(false);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => handleChange(e)}
        placeholder="Search something"
        onFocus={handleFocus}
        onBlur={HandleFocusOut}
      />
      {showSuggestionBox && (
        <div style={{ background: 'grey', position: 'absolute' }}>
          <ul>
            {data?.map((u) => {
              return (
                <li
                  key={u.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => console.log('clicked')}
                >
                  {u.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
