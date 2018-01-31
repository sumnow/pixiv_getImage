function getUrl() {
    let ResultArr = [];
    let UrlArr = [];
    document.querySelectorAll('._work').forEach((v, i) => {
        UrlArr.push(v.getAttribute('href'));
    })
    let i = 0;
    console.log(UrlArr);
    function NewToGet() {
        let newFrame = document.createElement('iframe');
        newFrame.src = UrlArr[i];
        newFrame.name = `newFrame${i}`
        // newFrame.id = 'newFrame'
        document.body.appendChild(newFrame);
        setTimeout(function () {
            let mel = window[`newFrame${i}`].document.querySelector('.original-image')
            if(mel) {
                ResultArr.push(mel.dataset.src);
                console.warn(`${i+1} => ${mel.dataset.src}`);
            } else {
                console.log(`%c${i+1} failed`," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em")
            }
            if(i< UrlArr.length-1) {
                i++;
                NewToGet();
            } else {
                console.log(ResultArr);
            }
            // document.body.removeChild(newFrame);
        }, 3000)
    }
    NewToGet();
}