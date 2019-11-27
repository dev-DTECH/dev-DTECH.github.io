function divide()
{

    var display=document.getElementById("display");
    display.innerHTML += " / ";


}
function multiply()
{

    var display=document.getElementById("display");
    display.innerHTML += " * ";


}
function cancel()
{

    var display=document.getElementById("display");
    display.innerHTML = "";


}
function nine()
{

    var display=document.getElementById("display");
    display.innerHTML += "9";


}
function eight()
{

    var display=document.getElementById("display");
    display.innerHTML += "8";


}
function seven()
{

    var display=document.getElementById("display");
    display.innerHTML += "7";


}
function minus()
{

    var display=document.getElementById("display");
    display.innerHTML += " - ";


}
function six()
{

    var display=document.getElementById("display");
    display.innerHTML += "6";


}
function five()
{

    var display=document.getElementById("display");
    display.innerHTML += "5";


}
function four()
{

    var display=document.getElementById("display");
    display.innerHTML += "4";


}
function plus()
{

    var display=document.getElementById("display");
    display.innerHTML += " + ";


}
function three()
{

    var display=document.getElementById("display");
    display.innerHTML += "3";


}
function two()
{

    var display=document.getElementById("display");
    display.innerHTML += "2";


}
function one()
{

    var display=document.getElementById("display");
    display.innerHTML += "1";


}
function dec()
{

    var display=document.getElementById("display");
    display.innerHTML += ".";


}
function zero()
{

    var display=document.getElementById("display");
    display.innerHTML += "0";


}
function equals()
{
    var eq=document.getElementById("display");
    var eqar=eq.innerHTML.split(" ");
    var l=eqar.length;
    var c=2;
    for(i = 0; i <l; i++)
        {
            if(eqar[i]=="/")
                {
                    eqar[i-1]/=eqar[i+1];
                    for(j = i; j <l-2; j++)
                        {
                            eqar[j]=eqar[j+2];               
                        }
                    i--;
                    for(j = l-c; j <l; j++)
                        {
                            eqar[j]="";
                        }
                    var r = document.createElement('div');
                    r.className = 'result';
                    var text = document.createTextNode('result');
                    r.appendChild(text);
                    document.body.appendChild(r);
                    r.innerHTML=eqar;
                    c+=2;
                    
                    
                }
        }
    for(i = 0; i <l; i++)
        {
            if(eqar[i]=="*")
                {
                    eqar[i-1]*=eqar[i+1];
                    for(j = i; j <l-2; j++)
                        {
                            eqar[j]=eqar[j+2];               
                        }
                    i--;
                    for(j = l-c; j <l; j++)
                        {
                            eqar[j]="";
                        }
                    var r = document.createElement('div');
                    r.className = 'result';
                    var text = document.createTextNode('result');
                    r.appendChild(text);
                    document.body.appendChild(r);
                    r.innerHTML=eqar;
                    c+=2;
                    
                    
                }
        }
    for(i = 0; i <l; i++)
        {
            if(eqar[i]=="+")
                {
                    eqar[i-1]=parseFloat(eqar[i-1])+parseFloat(eqar[i+1]);
                    for(j = i; j <l-2; j++)
                        {
                            eqar[j]=eqar[j+2];               
                        }
                    i--;
                    for(j = l-c; j <l; j++)
                        {
                            eqar[j]="";
                        }
                    var r = document.createElement('div');
                    r.className = 'result';
                    var text = document.createTextNode('result');
                    r.appendChild(text);
                    document.body.appendChild(r);
                    r.innerHTML=eqar;
                    c+=2;
                    
                    
                }
        }
    for(i = 0; i <l; i++)
        {
            if(eqar[i]=="-")
                {
                    eqar[i-1]-=eqar[i+1];
                    for(j = i; j <l-2; j++)
                        {
                            eqar[j]=eqar[j+2];               
                        }
                    i--;
                    for(j = l-c; j <l; j++)
                        {
                            eqar[j]="";
                        }
                    var r = document.createElement('div');
                    r.className = 'result';
                    var text = document.createTextNode('result');
                    r.appendChild(text);
                    document.body.appendChild(r);
                    r.innerHTML=eqar;
                    c+=2;
                    
                    
                }
        }
}