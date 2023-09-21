'use strict';

// Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания — в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

void function (){
    function getRandomNumber (){
        const usedNumbers = [];
        
        function generateNumber(){
            const randomNum = Math.ceil(Math.random() * 100);

            if (usedNumbers.includes(randomNum)){
                return generateNumber();
            } else{
                usedNumbers.push(randomNum);
                return randomNum; 
            }
        }
        return generateNumber();
    }
    
    const randomNumber = getRandomNumber();
    for(let i = 0; i <= 99; i++){
        console.log(getRandomNumber());
    }
}()