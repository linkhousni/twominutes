$(function(){
    let valTimer = 120;
    let cdown;
    let audioPlayer1 = document.querySelector('#metalgong');
    let audioPlayer2 = document.querySelector('#shipbell');
    $('#btn-reset').hide();
    $('#cnber').text(valTimer);

    function startTimer(){
        cdown = setInterval(()=>{
            valTimer--;
            $('#cnber').text(valTimer);
            if(valTimer === 60){
                $('#cnber').css("color", "orange");
                audioPlayer1.play()
            }
            if(valTimer === 20){
                $('#cnber').css("color", "red");
                audioPlayer1.play()
            }
            if(valTimer === 0){
                stopTimer()
                audioPlayer2.play()
            }
        }, 1000)
    }
    function stopTimer(){
        clearInterval(cdown)
    }


    $('#btn-start').on('click', ()=>{        
            startTimer()
            audioPlayer1.play()
            $('#btn-start').hide()
            setTimeout(() => {
                $('#btn-reset').show();
            }, 5000)
    })

    $('#btn-reset').on('click', ()=>{
        stopTimer()
        valTimer = 15
        $('#cnber').text(valTimer);
        $('#btn-reset').hide()
        $('#btn-start').show()
        $('#cnber').css("color", "black");
    })

})