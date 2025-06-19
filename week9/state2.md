State 구조 선택하기
https://ko.react.dev/learn/choosing-the-state-structure 기반 실습 정리 2


챌린지 1 of 4: 업데이트되지 않는 컴포넌트 수정하기 

export default function Clock(props) {
  return (
    <h1 style={{ color: props.color }}>
      {props.time}
    </h1>
  );
}



챌린지 2 of 4: 깨진 포장 목록 수정하기 

import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(title) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ]);
  }

  function handleChangeItem(nextItem) {
    setItems(items.map(item => {
      if (item.id === nextItem.id) {
        return nextItem;
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(itemId) {
    setItems(
      items.filter(item => item.id !== itemId)
    );
  }

  const total = items.length;
  const packed = items.filter(item => item.packed).length;
  return (
    <>
      <AddItem
        onAddItem={handleAddItem}
      />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>{packed} out of {total} packed!</b>
    </>
  );
}



챌린지 3 of 4: 선택 사라짐 수정하기 

import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetterId, setHighlightedLetterId] = useState(null);

  function handleHover(letter) {
    setHighlightedLetterId(letter.id);
  }

  function handleStar(starred) {
    setLetters(letters.map(letter => {
      if (letter.id === starred.id) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedLetterId
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}


챌린지 4 of 4: 다중 선택 구현 

import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    if (selectedIds.includes(toggledId)) {
    //이미 선택된 경우 제거
    setSelectedIds(selectedIds.filter(id => id !== toggledId));
  } else {
    //새로 선택 추가
    setSelectedIds([...selectedIds, toggledId]);
  }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}