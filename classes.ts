interface PointInterface
{
    x: number;
    y: number;

    draw:()=>void;
}

class PointClass
{
    /*
    private x: number;
    private y: number;

    constructor with optional params
    constructor(x?: number, y?: number)
    {
        this.x=x;
        this.y=y;
    }
    
   constructor(private x?: number, private y?: number){}

   get X(){return this.x;}

   set X(value)
   {
       if(value<0) throw new Error('value cannot be less than 0');
       else this.x=value;
   }
   */

   //using properties
   constructor(private _x?: number, private _y?: number){}

   get x(){return this._x;}

   set x(value)
   {
       if(value<0) throw new Error('value cannot be less than 0');
       else this._x=value;
   }

   get y(){return this._y;}

   set y(value)
   {
       if(value<0) throw new Error('value cannot be less than 0');
       else this._y=value;
   }

    draw()
    {
        console.log('x:'+this._x+' - y:'+this._y);
    }



    getDistance(another: PointClass){}
}

//test
let point1=new PointClass(20, 30);
point1.draw();

let point2=new PointClass();
