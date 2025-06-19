챌린지 1 of 5: 입력 문자열이 사라지는 것 고치기
이 예시에서 버튼을 누르면 메시지를 보여줍니다. 하지만 버튼을 누르는 것은 또한 원치 않게 state를 초기화합니다. 왜 이런 현상이 일어날까요? 버튼을 눌러도 입력 문자열이 초기화되지 않도록 고쳐보세요.

import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);

    return (
      <div>
        {showHint && <p><i>Hint: Your favorite city?</i></p>}
        <Form />
        <button onClick={() => {
          setShowHint(!showHint);
        }}>
          {showHint ? 'Hide hint' : 'Show hint'}
        </button>
      </div>
    );
  }

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}


챌린지 2 of 5: 두 필드를 맞바꾸기 
다음 폼은 first name과 last name을 입력받습니다. 또한 어떤 필드가 앞에 가는지를 조절하는 체크 박스로 있습니다. 체크 박스를 선택하면 “Last name” 필드가 “First name” 필드 앞에 나타납니다.

거의 모든 작업에는 버그가 있습니다. “First name”에 입력을 하고 체크 박스를 선택해도 문자열은 “Last name”이 된 첫 번째 인풋에 그대로 있습니다. 순서를 바꿀 때 입력 문자열도 이동하도록 수정해보세요.
import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

  return (
    <>
      {reverse ? (
        <>
          <Field label="Last name" text={lastName} onTextChange={setLastName} />
          <Field label="First name" text={firstName} onTextChange={setFirstName} />
        </>
      ) : (
        <>
          <Field label="First name" text={firstName} onTextChange={setFirstName} />
          <Field label="Last name" text={lastName} onTextChange={setLastName} />
        </>
      )}
      {checkbox}
    </>
  );
}

function Field({ label, text, onTextChange }) {
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => onTextChange(e.target.value)}
      />
    </label>
  );
}


챌린지 3 of 5: 폼 세부내용을 초기화하기 
여기 수정 가능한 연락처 목록이 있습니다. 연락처 상세 정보를 수정하고 “Save”를 눌러 갱신하거나 “Reset”을 눌러 수정한 것을 되돌릴 수 있습니다.

Alice와 같이 다른 연락처를 선택했을 때 state는 갱신되지만, 폼은 여전히 이전 내용을 보여줍니다. 다른 연락처를 선택했을 때 폼이 초기화되도록 수정해보세요.

//App.js
import { useState } from 'react';
import ContactList from './ContactList.js';
import EditContact from './EditContact.js';

export default function ContactManager() {
  const [
    contacts,
    setContacts
  ] = useState(initialContacts);
  const [
    selectedId,
    setSelectedId
  ] = useState(0);
  const selectedContact = contacts.find(c =>
    c.id === selectedId
  );

  function handleSave(updatedData) {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedId}  
        initialData={selectedContact}
        onSave={handleSave}
      />
    </div>
  )
}

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];


챌린지 4 of 5: 이미지가 로딩될 동안 이미지가 안 보이게 하기 
“Next”를 누르면 브라우저는 다음 이미지를 불러오기 시작합니다. 하지만 같은 <img> 태그에서 보이기 때문에 기본적으로 다음 이미지를 불러오기 전까지 기존 이미지가 나옵니다. 만약 설명과 이미지가 항상 일치해야 한다면 이것은 바람직하지 않은 동작입니다. “Next”를 누르는 순간 이전 이미지가 안 보이도록 바꾸어보세요.

import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const hasNext = index < images.length - 1;
  const image = images[index];

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setIsLoading(true);
  }


   return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <img
        src={image.src}
        style={{ display: isLoading ? 'none' : 'block' }}
        onLoad={() => setIsLoading(false)}
      />
      <p>{image.place}</p>
    </>
  );
}

let images = [
  { place: 'Penang, Malaysia', src: 'https://i.imgur.com/FJeJR8M.jpg' },
  { place: 'Lisbon, Portugal', src: 'https://i.imgur.com/dB2LRbj.jpg' },
  { place: 'Bilbao, Spain', src: 'https://i.imgur.com/z08o2TS.jpg' },
  { place: 'Valparaíso, Chile', src: 'https://i.imgur.com/Y3utgTi.jpg' },
  { place: 'Schwyz, Switzerland', src: 'https://i.imgur.com/JBbMpWY.jpg' },
  { place: 'Prague, Czechia', src: 'https://i.imgur.com/QwUKKmF.jpg' },
  { place: 'Ljubljana, Slovenia', src: 'https://i.imgur.com/3aIiwfm.jpg' }
];


챌린지 5 of 5: 배열에서 잘못 지정된 state 고치기 
다음 예시에서 배열의 각 Contact는 “Show email”이 눌렸는지에 대한 state를 갖고 있습니다. Alice의 “Show email”을 누르고 “Show in reverse order” 체크 박스를 선택해보세요. 아래쪽으로 내려간 Alice의 이메일은 닫혀있고 대신 _Taylor_의 이메일이 열려있는 것을 볼 수 있습니다.

순서와 관계없이 확장 state가 각 연락처와 연관되도록 고쳐보세요.

import { useState } from 'react';
import Contact from './Contact.js';

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact, i) =>
          <li key={contact.id}>   {/*id 키로 사용*/}
            <Contact contact={contact} />
          </li>
        )}
      </ul>
    </>
  );
}

const contacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];