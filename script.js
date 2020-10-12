window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "rgb(255, 92, 92)", 
        "rgb(247, 203, 10)", 
        "rgb(81, 255, 0)", 
        "rgb(114, 227, 255)", 
        "rgb(255, 44, 237)",
        "rgb(15, 119, 255)"
    ]

    // Lets get going with the sound
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            creatBubbles(index);
        });
    });

    document.addEventListener('keypress', e => {
        switch (e.code) {
            case 'KeyA':
                    pads[0].click();
                break;
            case 'KeyS':
                    pads[1].click(); 
                break;
            case 'KeyD':
                    pads[2].click(); 
                break;
            case 'KeyJ':
                    pads[3].click(); 
                break;
            case 'KeyK':
                    pads[4].click(); 
                break;
            case 'KeyL':
                    pads[5].click(); 
                break;
        
            default:
                break;
        }
    });

    // creating bubbles effect
    const creatBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            visual.removeChild(bubble);
        })
    }
});
