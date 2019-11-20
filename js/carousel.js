onload=function(){
    new Carousel('#carousel');
}

function Carousel(id){
    
    this.carousel_obj = document.querySelector(id);
    this.speed=1;
    this.img_bar = this.carousel_obj.querySelector('#c_bar');
    this.oCtl_l = this.carousel_obj.querySelector('#ctl-l');
    this.oCtl_r = this.carousel_obj.querySelector('#ctl-r');
    this.timer=null;


    this.img_bar.innerHTML+= this.img_bar.innerHTML;
    this.img_bar.style.width=(this.img_bar.offsetWidth*2) + 'px';


    
    
    
 
    this.move()
 
    
    var _this = this;
    for(i=0;i<this.img_bar.children.length;i++){

        this.img_bar.children[i].onmouseover = function(){
            
            _this.show(this);
        }
        this.img_bar.children[i].onmouseout = function(){
           
            _this.shrink(this);
            _this.move();
            
            
        }
    }

    



}


Carousel.prototype.move = function (){
    


    

    this.oCtl_l.onclick=function () { 
        this.speed=-Math.abs(this.speed);
        
     }.bind(this)

     this.oCtl_r.onclick=function () { 
        this.speed=Math.abs(this.speed);
     }.bind(this)

    this.timer = setInterval(function(){
        
        if(parseInt(this.img_bar.style.left) <= (-this.img_bar.offsetWidth/2)){
            this.img_bar.style.left=0 + 'px'
        } else if(parseInt(this.img_bar.style.left)>=0) {
            this.img_bar.style.left=(-this.img_bar.offsetWidth/2) +'px';
        }
        // console.log(this.imgc_bar.style.left);
        this.img_bar.style.left=this.img_bar.offsetLeft;
        this.img_bar.style.left=parseInt(this.img_bar.style.left)+this.speed+'px';

    }.bind(this), 30)

    
    
}

Carousel.prototype.show = function(img){
    // alert(this.img_bar.children.length)
    clearInterval(this.timer);
    img.style.transform = 'scale(1.5)';
    img.style.zIndex = '1';
    img.style.boxShadow = '1px 1px 4px rgba(0,0,0,0.5)';
    
}


Carousel.prototype.shrink= function(img){
    // alert(this.img_bar.children.length)
    // alert(this);
    
    img.style.transform = 'scale(1)';
    img.style.zIndex = '0';
    img.style.boxShadow = 'none';
    
}
