const passwordLength = document.getElementById("passwordLength");
const includeLowerCase = document.getElementById("includeLowerCase");
const includeUpperCase = document.getElementById("includeUpperCase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const btnGeneratePassword = document.getElementById("generatePassword");
const passwordHolder = document.getElementById("passwordHolder");
const btnCopyPassword = document.getElementById("btnCopyPassword");
const message = document.getElementById("message");

btnGeneratePassword.addEventListener("click", (event) => {
    hideMessage();
    const array = [];
    event.preventDefault();

    if(anyBoxIsChecked())
    {
        for(i = 0; i < passwordLength.value; i++)
        {
            array.push(generatePasswordCharacter());
            
        }
        passwordHolder.value=array.join('');
    }
    else
    {
        showMessage('danger','Select at least 1 option for the password');
    }
});

btnCopyPassword.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordHolder.value);
    showMessage('success', 'Password copied')
});


function generatePasswordCharacter()
{
    const arrayCheckBoxes = [includeLowerCase, includeUpperCase, includeNumbers, includeSymbols];
    let index = getRndInteger(0,3);
    while(!arrayCheckBoxes[index].checked)
    {
        index = getRndInteger(0,3);
    }
    if(index == 0)
        return String.fromCharCode(getRndInteger(97,122));
    else if(index == 1)
        return String.fromCharCode(getRndInteger(65,90));
    else if(index == 2)
        return String.fromCharCode(getRndInteger(48,57));
    else
        return generatePasswordSymbol();
}

function generatePasswordSymbol()
{
    const range = {
        min: 0,
        max: 3
    };

    const sectorRange = getRndInteger(range.min, range.max);

    if(sectorRange == 0)
        return String.fromCharCode(getRndInteger(33,47));
    else if(sectorRange == 1)
        return String.fromCharCode(getRndInteger(58,64));
    else if(sectorRange == 2)
        return String.fromCharCode(getRndInteger(91,96));
    else if(sectorRange == 3)
        return String.fromCharCode(getRndInteger(123,125));

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function anyBoxIsChecked()
{
    if(includeLowerCase.checked || includeUpperCase.checked || includeNumbers.checked || includeSymbols.checked)
        return true;
    else
        return false;
}

function showMessage(messageType, messageText)
{
    message.classList.remove('alert-danger');
    message.classList.add('alert-' + messageType);
    message.innerText = messageText;
    message.classList.remove('hide');
    
}

function hideMessage()
{
    message.classList.add('hide');
}