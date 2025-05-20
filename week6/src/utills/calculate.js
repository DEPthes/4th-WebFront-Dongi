//연산 로직 처리
    export default function calculate (prev, oper, curr){
        const prevNum = Number(prev);
        const currNum = Number(curr);
        
        let result;
        
            switch (oper){
                case "+":
                    result = prevNum + currNum;
                    break;
                case "-":
                    result = prevNum - currNum;
                    break;
                case "x":
                    result = prevNum * currNum;
                    break;
                case "%":
                    if (currNum ===0){
                        result = "0으로 나눌 수 없습니다"
                    } else{
                        result = prevNum / currNum; 
                    }
                    break;                 
            }
            return result;   
    }
    