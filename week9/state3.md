챌린지 1 of 2: 동기화된 입력 
아래 두 입력은 독립적입니다. 두 입력의 동기화 상태를 유지하세요. 한 입력을 수정하면 다른 입력도 같은 문구로 변경되어야 하며 반대 경우도 동일합니다.


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
예시에서 SearchBar는 텍스트 입력을 제어하는 자체 query state를 가집니다. 부모 컴포넌트 FilterableList는 List의 목록을 표시하지만 검색 질의를 고려하지 않습니다.

검색 질의에 따라 목록을 필터링하도록 filterItems(foods, query) 함수를 사용하세요. 수정한 것을 테스트하려면 검색창에 “s”를 입력했을 때 “Sushi”, “Shish kebab”, “Dim sum”이 목록에 표시되는지 확인하세요.

filterItems은 이미 구현 및 가져오기가 되었으므로 직접 작성할 필요가 없습니다!


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