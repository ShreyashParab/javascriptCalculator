let displayArea = document.getElementById('display')

function buttonClicked(x){
    if(displayArea.innerText.length >= 25)
    return

    if(x =='C') 
    {   
        displayArea.innerText = '0'
        return
    }

    if(x=='DEL')
    {
        if(displayArea.innerText.length == 1)
        {
            displayArea.innerText = 0
            return
        }
        displayArea.innerText = displayArea.innerText.slice(0,displayArea.innerText.length-1)
        return
    }

    if(x=='=')
    {
        if(displayArea.innerText[displayArea.innerText.length-1]=='+'|| displayArea.innerText[displayArea.innerText.length-1]=='-' || displayArea.innerText[displayArea.innerText.length-1]=='*' || displayArea.innerText[displayArea.innerText.length-1]=='/' || displayArea.innerText[displayArea.innerText.length-1]=='%' || displayArea.innerText[displayArea.innerText.length-1]=='.' || displayArea.innerText[displayArea.innerText.length-1]=='=')
        {
            displayArea.innerText = eval(displayArea.innerText.slice(0,displayArea.innerText.length-1))
            return
        }
        
        if((displayArea.innerText[displayArea.innerText.length-2]=='/' && displayArea.innerText[displayArea.innerText.length-1]=='0') || (displayArea.innerText[displayArea.innerText.length-3]=='/' && displayArea.innerText[displayArea.innerText.length-2]=='0' && displayArea.innerText[displayArea.innerText.length-1]=='0'))
        {
            displayArea.innerText = '0'
            return
        }

        displayArea.innerText = eval(displayArea.innerText)
        return          
    }


    if(displayArea.innerText == '0')
    {
        if(x == '00' && x=='0') 
        return

        if(x=='.' || x=='+' || x =='-' || x =='*' || x=='/' || x=='%') 
        {
            displayArea.innerText = '0' + x 
            return
        }
        displayArea.innerText = x 
    }
    else{        
        if((displayArea.innerText[displayArea.innerText.length-1]=='+'|| displayArea.innerText[displayArea.innerText.length-1]=='-' || displayArea.innerText[displayArea.innerText.length-1]=='*' || displayArea.innerText[displayArea.innerText.length-1]=='/' || displayArea.innerText[displayArea.innerText.length-1]=='%') && (x=='+' || x=='-' || x=='*' || x=='/' || x=='%'))
        {
            displayArea.innerText = displayArea.innerText.replace(displayArea.innerText[displayArea.innerText.length-1],x)
            return
        }
        
        if((displayArea.innerText[displayArea.innerText.length-1]=='+'|| displayArea.innerText[displayArea.innerText.length-1]=='-' || displayArea.innerText[displayArea.innerText.length-1]=='*' || displayArea.innerText[displayArea.innerText.length-1]=='/' || displayArea.innerText[displayArea.innerText.length-1]=='%') && x=='.')
        {
            displayArea.innerText +='0.'
            return
        }
        
        if(displayArea.innerText.includes('.') && x=='.')
        {
            if(displayArea.innerText.includes('+') || displayArea.innerText.includes('-') ||  displayArea.innerText.includes('*') || displayArea.innerText.includes('/') || displayArea.innerText.includes('%'))
            {
                displayArea.innerText += x
                return
            }
            displayArea.innerText += ''
            return
        }
        displayArea.innerText += x         
    }           
}