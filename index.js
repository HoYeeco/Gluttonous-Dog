function DogInitialization(){
    this.dom = {
        'button':document.getElementsByClassName('startGame')[0],
        'main':document.getElementsByClassName('gameArea')[0],
        'actScore':document.getElementsByClassName('actSore')[0],
    };
    this.timer1;
    this.tailPosition = {x:[],y:[]};
    this.bonePosition = {x:[],y:[]};
    this.detectPosition = {x:[],y:[]};
    this.currentDirect = "";
    this.bindStartEvent();
    this.score = 0;
}
DogInitialization.prototype.positiondectector = function(){
    var dogHead = document.getElementById('dogHead'),
        dogBlock = document.getElementById('dogBlock'),
        dogTail = document.getElementsByClassName('dogTail'),
        self = this;
    cashTimer = setInterval(function(){
        var x = parseInt(getComputedStyle(dogHead).left),
            y = parseInt(getComputedStyle(dogHead).top),
            Bx = parseInt(getComputedStyle(dogBlock).left),
            By = parseInt(getComputedStyle(dogBlock).top),
            len = dogBlock.children.length;
        if((x + Bx) < 0 || (x + Bx > 1200)){
            alert("小狗一共吃到了" + self.score + "根骨头");
            clearInterval(self.timer1);
            clearInterval(cashTimer);
        }else if((y + BY) < 0 || (y + BY) > 560){
            alert("小狗一共吃到了" + self.score + "根骨头");
            clearInterval(self.timer1);
            clearInterval(cashTimer);            
        }
            
        for(var i = 0; i < len; i++){
            self.detectPosition.x[i] = parseInt(getComputedStyle(dogBlock.children[i]).left);
            self.detectPosition.y[i] = parseInt(getComputedStyle(dogBlock.children[i]).top);
        }
        for(var i = 1; i < len; i++){
            if(x == self.detectPosition.x[i]){
                if(y == self.detectPosition.y[i]){
                    alert("小狗一共吃到了" + self.score + "根骨头");
                    clearInterval(self.timer1);
                    clearInterval(cashTimer);  
                }
            }
        }    
    },100)
}
DogInitialization.prototype.bindStartEvent = function(){
    var self = this;
    this.dom.button.addEventListener('click',function(){
        this.style.display = "none";
        self.init('right');
    },false);
}
DogInitialization.prototype.bindKeyEvent = function(){
    var dogHead = document.getElementById('dogHead'),
        dogBlock = document.getElementById('dogBlock'),
        dogTail = document.getElementsByClassName('dogTail'),
        len = dogTail.length,
        self = this;
        document.addEventListener('keydown',function(e){
            e.preventDefault();
            switch(e.key){
                case 'ArrowDown':
                    console.log(e.key);
                    if(self.currentDiret == "up" || self.currentDiret == "down"){
                        break;
                    }
                    self.move("down"); break;
                case 'ArrowUp' : 
                    if(self.currentDiret == "up" || self.currentDiret == "down"){
                        break;
                    }               
                    self.move("up"); break;
                case 'ArrowLeft' : 
                    if(self.currentDiret == "left" || self.currentDiret == "right"){
                        break;
                    }
                    self.move("left"); break;
                case 'ArrowRight' :
                    if(self.currentDiret == "left" || self.currentDiret == "right"){
                        break;
                    } 
                    self.move("right"); break;
            }
            return false;
        })
}
DogInitialization