// 숫자, 연산 버튼 하나하나
import './Button.css';

export function NumButton({value, onClick}){
    return(
        <button onClick={() => onClick(value)} className="btn-num">{value}</button>
    );
}

export function OperatorButton({value, onClick}){
    return(
        <button onClick={() => onClick(value)} className="btn-operator">{value}</button>
    );
}

export function ControlButton({value, onClick}){
    return(
        <button onClick={() => onClick(value)} className="btn-control">{value}</button>
    );
}

export function EqualButton({value, onClick}){
    return(
        <button onClick={() => onClick(value)} className="btn-equal">{value}</button>
    );
}



//괄호에 type추가해서
//컴포넌트는 작게 작게 나누면 됨