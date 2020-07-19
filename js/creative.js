
// Второе задание: функция сдвига элементов массива вправо на 3 шага (выводится в консоль)
stepNum([1, 2, 3, 4, 5], 3)
function stepNum(arr, k) 
{   
    console.log(arr)

    for (var i = 0; i < k; i++) 
    {
        arr.unshift(arr.pop());
    }

    console.log(arr)
    return arr;
}



// Третье задание: находит самую длинную общую последовательность в двух строках А и Б (выводит в консоль)
function searchWord(line1, line2) 
{
    var arr = [];
    line1.split('').reduce((last, item) => 
    {
        if (line2.indexOf(`${last}${item}`) !== -1) 
        {
            arr.push(`${last}${item}`);
            return `${last}${item}`;
        }
        else return item;
    }, '');
    return arr.sort((a, b) => b.length - a.length)[0];
}
console.log(searchWord('aababba', 'abbaabcd'));




// Четвертое задание: функция чекбоксов
function showOrHide(cb, cat) 
{
    cb = document.querySelector(`.${cb}`);
    cat = document.querySelector(`.${cat}`);
    if (!cb.checked) 
    {
        cat.style.display = "";
    }
    else 
    {
        cat.style.display = "none";
    }
}


// Четвертое задание: глобальный чекбокс - активирует все чекбоксы
function rootCheck(cat, cb) 
{
    cb = document.querySelectorAll(`.${cb}`);
    cat = document.querySelector(`.${cat}`);
    cb.forEach(element => 
        {
            element.checked = cat.checked;
            element.onchange();
        });
}

