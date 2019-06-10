while(true)
{
    var spans = document.querySelectorAll("span[style='color: rgb(0, 180, 0);']");
    
    Array.from(spans).forEach(ele => {
        console.log(ele);
    });
}