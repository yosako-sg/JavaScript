// HTMLが読み込まれたら実行する
document.addEventListener("DOMContentLoaded", (e) => {
    // HTMLの要素を収得
    const text = document.getElementById("text");
    const button = document.getElementById("button");
    const result = document.getElementById("result");

    // 計算ボタンがクリックされた時
    button.addEventListener("click", () => {
        const afterAnalyzedText = analyzeText(text.value);

        // 戻り値がnullの場合
        if(afterAnalyzedText === null){
            return result.textContent = "計算式が不正です。";
        }

        // 戻り値が配列だった場合
        result.textContent = calculation(afterAnalyzedText);
    });
});

// テキストボックスを分析する関数
function analyzeText(text) {
    // 半角スペースで分割し、配列に代入
    const textArray = text.split(" ");

    // 配列をそれぞれ数字と演算子として代入
    const num1 = textArray[0];
    const operator = textArray[1];
    const num2 = textArray[2];

    // 配列の要素がそれぞれ条件を満たしているか確認、満たしていない場合、nullを戻り値とする
    if(textArray.length !== 3){ // 分割した要素が3つか
        return null;
    }else if(Number.isNaN(parseInt(num1)) || Number.isNaN(parseInt(num2))){ // 1つ目と2つ目の要素が数値(整数)か
        return null;
    }else if(operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/"){ // 演算子が正しいか
        return null;
    }

    // 条件を満たしている配列を作成
    const correctArray = [parseInt(num1), operator, parseInt(num2)];

    // 条件を満たしている配列を戻り値とする
    return correctArray;
};

//　計算を行う関数
function calculation(array) {
    const num1 = array[0];
    const operator = array[1];
    const num2 = array[2];

    if(operator === "+"){
        return num1 + num2;
    }else if(operator === "-"){
        return num1 - num2;
    }else if(operator === "*"){
        return num1 * num2;
    }else if(operator === "/"){
        return num1 / num2;
    }
}