let pos=[" "," "," "," "," "," "," "," "," ",]
let i=1
let mholder=document.getElementsByClassName('mhold')
let move=" "
let r =" "

document.addEventListener("click", e=>{
    if (e.target.matches('td')){
        let selection  = e.target.querySelector("p")
        if(i==1){
        move=selection.id
        selection.innerHTML="X"
        pos[move]="X"
        r=check()
        terminate(r)
        i+=1
        }
        else if(i==2){
            move=selection.id
            selection.innerHTML="O"
            pos[move]="O"
            r=check()
            terminate(r)
            i-=1
        }
      
    }

})
function check(){
    if(pos[0]==pos[1]&&pos[1]==pos[2]&&pos[1]=="X"){
        return "X"
    }
    if(pos[3]==pos[4]&&pos[4]==pos[5]&&pos[3]=="X"){
        return "X"
    }
    if(pos[6]==pos[7]&&pos[7]==pos[8]&&pos[6]=="X"){
        return "X"
    }
    if(pos[0]==pos[4]&&pos[4]==pos[8]&&pos[8]=="X"){
        return "X"
    }
    if(pos[6]==pos[4]&&pos[4]==pos[2]&&pos[2]=="X"){
        return "X"
    }
    if(pos[0]==pos[3]&&pos[3]==pos[6]&&pos[0]=="X"){
        return "X"
    }
    if(pos[1]==pos[4]&&pos[4]==pos[7]&&pos[1]=="X"){
        return "X"
    }
    if(pos[2]==pos[5]&&pos[5]==pos[8]&&pos[2]=="X"){
       return "X"
    }
    else if(pos[0]==pos[1]&&pos[1]==pos[2]&&pos[1]=="O"){
        return "O"
    }
    if(pos[3]==pos[4]&&pos[4]==pos[5]&&pos[3]=="O"){
        return "O"
    }
    if(pos[6]==pos[7]&&pos[7]==pos[8]&&pos[6]=="O"){
        return "O"
    }
    if(pos[0]==pos[4]&&pos[4]==pos[8]&&pos[8]=="O"){
        return "O"
    }
    if(pos[6]==pos[4]&&pos[4]==pos[2]&&pos[2]=="O"){
        return "O"
    }
    if(pos[0]==pos[3]&&pos[3]==pos[6]&&pos[0]=="O"){
        return "O"
    }
    if(pos[1]==pos[4]&&pos[4]==pos[7]&&pos[1]=="O"){
        return "O"
    }
    if(pos[2]==pos[5]&&pos[5]==pos[8]&&pos[2]=="O"){
       return "O"
    }
    else if (!(pos.includes(" "))){
      return "D"
    }
    
}
function terminate(r){
    if (r=="X"){
        document.location="p1win.html"
    }
    if (r=="O"){
        document.location="p2win.html"
    }
    if (r=="D"){
        document.location="draw.html"
    }
}