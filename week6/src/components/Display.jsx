// 계산 결과/ 입력 보여주는 화면
//입력값 또는 결과를 보여주는 단순 컴포넌트
import './Display.css';

function Display({value,expression}){
    return(
      <>
        <div className='container-expression'>{expression}</div>
        <div className="container-display">{value}</div>
      </>    
    );
}

export default Display;

//과제에 대한 설명 못하면 패널티!