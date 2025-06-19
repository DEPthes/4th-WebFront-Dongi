챌린지 1 of 4: 업데이트되지 않는 컴포넌트 수정하기 
이 Clock 컴포넌트는 color와 time 두 가지 props를 받습니다. 선택 창에서 다른 색상을 선택하면 Clock 컴포넌트는 부모 컴포넌트에서 다른 color prop을 받습니다. 그러나 어떤 이유에서인지 표시된 색상이 업데이트되지 않습니다. 왜 그럴까요? 문제를 해결하세요.

export default function Clock(props) {
  return (
    <h1 style={{ color: props.color }}>
      {props.time}
    </h1>
  );
}



챌린지 2 of 4: 깨진 포장 목록 수정하기 
이 포장 목록에는 몇 개의 항목이 포장되었는지와 전체 항목 수를 보여주는 푸터가 있습니다. 처음에는 작동하는 것처럼 보이지만 버그가 있습니다. 예를 들어, 항목을 포장했다고 표시했다가 삭제하면 카운터가 올바르게 업데이트되지 않습니다. 항상 올바르게 작동하도록 카운터를 수정하세요.
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
State에 letters 목록이 있습니다. 특정 문자에 호버 또는 포커스하면 하이라이트 됩니다. 현재 하이라이트 된 문자는 highlightedLetter state 변수에 저장됩니다. 각각의 문자에 “별표”와 “별표 해제”를 할 수 있으며, 이는 state의 letters 배열을 업데이트합니다.

이 코드는 작동하지만, 작은 UI 버그가 있습니다. “별표” 또는 “별표 해제”를 누르면 하이라이트가 잠시 사라집니다. 그러나 포인터를 움직이거나 키보드로 다른 문자로 전환하면 바로 다시 나타납니다. 왜 이런 일이 발생할까요? 버튼 클릭 후 하이라이트가 사라지지 않도록 수정하세요.

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
이 예시에서 각 Letter는 isSelected prop와 선택된 것으로 표시하는 onToggle 핸들러를 갖고 있습니다. 이는 작동하지만 state는 selectedId (null 또는 ID)로 저장되므로 한 번에 하나의 문자만 선택할 수 있습니다.

다중 선택을 지원하도록 state 구조를 변경하세요. (어떻게 구조화할까요? 코드를 작성하기 전에 이에 대해 생각해 보세요.) 각 체크박스는 다른 체크박스와 독립적이어야 합니다. 선택된 문자를 클릭하면 선택이 해제되어야 합니다. 마지막으로, 푸터는 선택된 항목의 올바른 수를 보여야 합니다.
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