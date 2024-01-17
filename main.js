writeExp = (e) => {
    display.value += e.target.id
}
getResult = () => {
    if (display.value == "") {
        alert("Enter an expression")
    } else {
        try {
            display.value = eval(display.value)
        }
        catch {
            alert('enter valid expression!!')
            display.value = ""
        }
    }
}
allClear = () => {
    display.value = ""
}
backSpace =()=>{
    display.value = display.value.slice(0, -1);
}

