let n=[];
n[0]="8.5";
length=10+1;
scale=25;
function update(){
    for(i=0;i<length;i++){
        let id=("n"+i);
        // let ele=document.getElementById(id).innerHTML;
        // console.log(ele);
        document.getElementById(id).style.height =document.getElementById(id).innerHTML*scale;
        // 
}
}
input();
update();

function Swap(j){
    document.getElementById("n"+j).style.order =j+1;
    document.getElementById("n"+(j+1)).style.order =j;
}

function input()
{
    for(i=0;i<length;i++){
        //console.log(i);
        n[i]=document.getElementById("n"+i).innerHTML;
        document.getElementById("n"+i).style.order =i;
    }
}

let items=[1,2,3];
//console.log(parseInt(items.length));
function bubbleSort(items) {
    var length = items.length;
    //Number of passes
    for (var i = 0; i <length; i++) { 
        //Notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) { 
            //Compare the adjacent positions
            if(items[j] > items[j+1]) {
                //Swap the numbers
                var tmp = items[j];  //Temporary variable to hold the current number
                items[j] = items[j+1]; //Replace current number with adjacent number
                items[j+1] = tmp; //Replace adjacent number with current number
                //update();
                //Swap(10);
                //
            }
        }        
    }
}

function sort()
{
    
    for(i=0;i<length;i++){
        for(j=0;j<length-1-i;j++){
            if(n[j]>n[j+1]){
                let t=n[j];
                n[j]=n[j+1];
                n[j+1]=t;
                //console.log(j);
                Swap(j);
                //update();
            }
        }
    }
    
}
//bubbleSort(items);