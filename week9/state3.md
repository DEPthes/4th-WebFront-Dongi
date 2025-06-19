컴포넌트 간 State 공유하기
https://ko.react.dev/learn/sharing-state-between-components 기반 실습 정리 3

챌린지 1 of 2: 동기화된 입력 

import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');
  return (
    <>
      <Input label="First input" text={text} onTextChange={setText} />
      <Input label="Second input" text={text} onTextChange={setText} />
    </>
  );
}

function Input({ label, text, onTextChange }) {
  function handleChange(e) {
    onTextChange(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}


챌린지 2 of 2: 목록 필터링하기 

import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  const filteredItems = filterItems(foods, query);
  return (
    <>
      <SearchBar query={query} onQueryChange={setQuery} />
      <hr />
      <List items={filteredItems} />
    </>
  );
}

function SearchBar({ query, onQueryChange }) {
  function handleChange(e) {
    onQueryChange(e.target.value);
  }

  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      {items.map(food => (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      ))}
    </table>
  );
}