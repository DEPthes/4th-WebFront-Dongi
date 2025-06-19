State를 사용해 Input 다루기
https://ko.react.dev/learn/reacting-to-input-with-state 기반 실습 정리 1


Challenge 1 of 3: CSS 클래스를 추가하고 제거하기


import {useState} from 'react';

export default function Picture() {
  const [isPictureActive, setIsPictureActive] = useState(false);

  const handlePictureClick = () => {
    setIsPictureActive(true);
  }
  const handleBackgroundClick = () => {
    setIsPictureActive(false);
  }
  return (
    <div className={`background ${!isPictureActive ? 'background--active': ''}`}  onClick = {handleBackgroundClick}>
      <img
        className={`picture ${isPictureActive ? 'picture--active' : ''}`}
        onClick={(e)=>{
          e.stopPropagation(); //부모 div onClick 실행 X
          handlePictureClick();
        }}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}


Challenge 2 of 3: 프로필 편집기

import {useState} from 'react';
export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:{' '}
        {isEditing ? (
          <input 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}/>
      ) : (
        <b>{firstName}</b>
    )}
        
      </label>
      <label>
        Last name:{' '}
          {isEditing ? (
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}/>
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? 'Save Profile' : 'Edit Profile'}
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}



Challenge 3 of 3: 명령형 코드를 React 없이 리팩토링하기

let firstName = 'Jane';
let lastName = 'Jacobs';
let isEditing = false;

function handleFormSubmit(e) {
  e.preventDefault();
  setIsEditing(!isEditing);
}

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
}

function setFirstName(value) {
  firstName = value;
  updateDOM();
}

function setLastName(value) {
  lastName = value;
  updateDOM();
}

function setIsEditing(value) {
  isEditing = value;
  updateDOM();
}

function updateDOM() {
  editButton.textContent = isEditing ? 'Save Profile' : 'Edit Profile';
  if (isEditing) {
    show(firstNameInput);
    show(lastNameInput);
    hide(firstNameText);
    hide(lastNameText);
    // TODO: 인풋을 보여주고 텍스트는 숨깁니다.
  } else {
    button.textContent = 'Edit Profile';
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
    // TODO: 인풋을 숨기고 텍스트를 보여줍니다.
  }
  firstNameText.textContent = firstName;
  lastNameText.textContent = lastName;
  helloText.textContent = `Hello ${firstName} ${lastName}!`;
  // TODO: 텍스트 라벨을 업데이트합니다.
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

let form = document.getElementById('form');
let profile = document.getElementById('profile');
let editButton = document.getElementById('button');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
