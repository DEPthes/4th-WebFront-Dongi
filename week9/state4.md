State를 보존하고 초기화하기
https://ko.react.dev/learn/preserving-and-resetting-state 기반 실습 정리 4

챌린지 1 of 5: 입력 문자열이 사라지는 것 고치기

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