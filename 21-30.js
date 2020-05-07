
function countEvens(x){
    y=0;
    for(var i=0;i<=x.length;i++){
        if(x[i]%2==0){
            y=y+1;
        }
    }
    return y;
}

function countHi(x){
    y=0;
    for(var i=0;i<=x.length;i++){
        if(x[i]=="h" &&  x[i+1]=="i"){
            y=y+1;
        }
    }
    return y;
}

function no14(x){
    y=0;
    z=0;
    for(var i=0;i<=x.length;i++){
        if(x[i]==1){
            y=y+1;
            }
        if(x[i]==4){
            z=z+1;
        }
    }
    if(y==0 || z==0){
        return true;
    }else{
        return false;
    }
}

function either24(x){
    y=0;
    z=0;
    for(var i=0;i<=x.length;i++){
        if(x[i]==2 && x[i+1]==2){
            y=1;
        }
        if(x[i]==4 && x[i+1]==4){
            z=1;
        }
    }
    if((y==1 && z==1) || (y==0 && z==0)){
        return false;
    }else{
        return true;
    }
}

function makeChocolate(x, y, z){
    var a=5*y;
    if(z-a<=x){
        if(z-a>=0){
            return z-a;
        }else{
            if(z%5<=x){
                return z%5;
            }else{
                return -1;
            }
        }
    }else{
        return -1;
    }
}

function luckySum(x,y,z){
    if(x==13){
        x=0;
        y=0;
        z=0;
    }
    if(y==13){
        y=0;
        z=0;
    }
    if(z==13){
        z=0;
    }
    return x+y+z;
}

function maxBlock(x){
    var a = "";
    var b = 1;
    var c = 0;
    for(var i=0; i<x.length; i++){
        a = x.substring(i,i+1);
        for(var j=i+1; i<x.length; j++){
            if(x.substring(j,j+1) == a){
                b=b+1;
            }else{
                break;
            }
        }
        if(b>c){
            c=b;
        }
        b = 1;
    }
    return c;
}

function linearIn(x,y){
    var vx = 0;
    for(var i=0;i<=x.length;i++){
        if(x[i]==y[vx]){
            vx=vx+1
        }
        if(vx==y.length+1){
            return true;
        }
    }
    return false;
}

function countTriple(x){
    var y = -1;
    for(var i=0;i<=x.length;i++){
        if(x.substring(i,i+1)==x.substring(i+1,i+2)  && x.substring(i+1,i+2)==x.substring(i+2,i+3)){
            y=y+1;
        }
    }
    return y;
}

function sameEnds(x) {

    var start = "";

    for(var i = 0; i <= x.length-1; i++){
        if(x.substring(0, i) == x.substring(x.length-i,x.length) && i<=x.length-i){
            start = x.substring(0,i);
        }
    }

    return start;
}