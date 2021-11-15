

function insert(num) 
{
document.form1.textview.value = document.form1.textview.value + num;
}


function equal()
{
var exp = document.form1.textview.value;
if(exp)
{
document.form1.textview.value = eval(exp)
}
}

function sin() 
    {
        var s = document.form1.textview.value;
        if (s)
        {
            document.form1.textview.value = Math.sin(s);
        }
    }

function cos() 
    {
        var x = document.form1.textview.value;
        if (x)
        {
            document.form1.textview.value = Math.cos(x);
        }
    }

function tan() 
    {
        var y = document.form1.textview.value;
        if (y)
        {
            document.form1.textview.value = Math.tan(y);
        }
    }

function fact()
    {
       var a, z, b;
       b=1;
        var z= document.form1.textview.value;
        for (a=1; a<=z; a++)
        {
            b= b*a;
        }
        document.form1.textview.value = b;
    }
   