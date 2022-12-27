
var id = 0;

async function infoBanner()
{
    const info = [
        document.getElementById("info-1"),
        document.getElementById("info-2"),
        document.getElementById("info-3"),
        document.getElementById("info-4")
    ];

    var info_range = [];
    var largest = 0;

    for(var i = 0; i<=info.length-1; i++)
    {
        info_range.push(parseInt(info[i].innerHTML));
        if(largest < parseInt(info[i].innerHTML)){
            largest = parseInt(info[i].innerHTML);
        }
    }
    console.log(info_range);
    
    for(var i = 0; i<=largest; i++)
    {
        for(var j = 0; j<info.length; j++)
        {
            await pause(id);
            add_info(info_range, info, i, j)
        }
    }
    
}

function add_info(info_range, info, i, j){
    if(i <= info_range[j]){
        info[j].innerHTML = i;
    }
}

function pause(id) {
    return new Promise(resolve => setTimeout(() => {
      console.log(`pause ${id} is over`);
      resolve();
    }, 10)); 
}