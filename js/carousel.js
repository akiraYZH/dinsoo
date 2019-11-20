onload=function(){
    new Carousel('carousel');
}

function Carousel(id){
    // var oCarousel = document.getElementById(id);
    // alert(oCarousel);


    // var _this=this;
    this.speed=1;
    this.img_bar = document.querySelector('#c_bar');
    this.oCtl_l = document.querySelector('#ctl-l');
    this.oCtl_r = document.querySelector('#ctl-r');
    this.timer=null;


    this.img_bar.innerHTML+= this.img_bar.innerHTML;
    this.img_bar.style.width=(this.img_bar.offsetWidth*2) + 'px';


    // this.imgs = this.img_bar.children;
    

    
    this.move(this)
    this.show(this);
    

    // alert(this.img_bar.children.length);

    



}


Carousel.prototype.move = function (Carousel){
    // var oC_bar = Carousel.img_bar;
    // var speed = speed;

    // alert((-oC_bar.offsetWidth/2));
    Carousel.oCtl_l.onclick=function () { 
        Carousel.speed=-Math.abs(Carousel.speed);
     }

     Carousel.oCtl_r.onclick=function () { 
        Carousel.speed=Math.abs(Carousel.speed);
     }

    Carousel.timer = setInterval(function(){
        
        if(parseInt(Carousel.img_bar.style.left) <= (-Carousel.img_bar.offsetWidth/2)){
            Carousel.img_bar.style.left=0 + 'px'
        } else if(parseInt(Carousel.img_bar.style.left)>=0) {
            Carousel.img_bar.style.left=(-Carousel.img_bar.offsetWidth/2) +'px';
        }
        console.log(Carousel.img_bar.style.left);
        Carousel.img_bar.style.left=Carousel.img_bar.offsetLeft;
        Carousel.img_bar.style.left=parseInt(Carousel.img_bar.style.left)+Carousel.speed+'px';

    }, 30)

    
    
}

Carousel.prototype.show = function(Carousel){
    // alert(Carousel.img_bar.children.length)
    
    for(i=0;i<Carousel.img_bar.children.length;i++){
        Carousel.img_bar.children[i].onmouseover = function(){
            clearInterval(Carousel.timer);
            this.style.transform = 'scale(2)';
            this.style.zIndex = '1';
            this.style.boxShadow = '1px 1px 4px rgba(0,0,0,0.5)';
        }
        Carousel.img_bar.children[i].onmouseout = function(){
            Carousel.move(Carousel);
            this.style.transform = 'scale(1)';
            this.style.zIndex = '0';
            this.style.boxShadow = 'none';
        }
    }
}
