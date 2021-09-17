const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
document.getElementById('submit').addEventListener('click', function() {
    allLang()
    chkLang(langArray)
    

})

function allLang(){
    const lang0 = document.getElementsById('lang0').value.split(',')
    const lang1 = document.getElementsById('lang1').value.split(',')
    const lang2 = document.getElementsById('lang2').value.split(',')
    const lang3 = document.getElementsById('lang3').value.split(',')
    const lang4 = document.getElementsById('lang4').value.split(',')
    const lang5 = document.getElementsById('lang5').value.split(',')
    const lang6 = document.getElementsById('lang6').value.split(',')
    const lang7 = document.getElementsById('lang7').value.split(',')

let langArray = [...lang0, ...lang1, ...lang2, ...lang3, ...lang4, ...lang5, ...lang6, ...lang7].sort()

document.getElementsByTagName('input').innerText = langArray.join(', ')
}

function chkLang(langs) {
    let result = false

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages
    langs.forEach(langArray => {
        if (langArray.value === lang)
        result = true        
    });

    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}