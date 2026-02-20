
function triggerEffects() {
    const playConfettiSequence = (times) => {
        if (times > 0) {
            // School pride colors confetti
            confetti({
                particleCount: 80,
                spread: 100,
                origin: { y: 0.5 },
                colors: ['#f7e500', '#002e5d', '#0052cc', '#ffd700', '#003d99']
            });
            
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    spread: 120,
                    origin: { x: 0, y: 0.8 },
                    colors: ['#f7e500', '#ffd700', '#002e5d']
                });
            }, 150);

            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    spread: 120,
                    origin: { x: 1, y: 0.8 },
                    colors: ['#002e5d', '#0052cc', '#f7e500']
                });
            }, 300);

            setTimeout(() => playConfettiSequence(times - 1), 800); 
        }
    };

    playConfettiSequence(3); 

    
    const audio = document.getElementById("confettiSound");
    audio.currentTime = 0;
    audio.play().catch(() => console.log('Audio play failed'));
}

function relateToSeven() {
    
    const userInput = document.getElementById("userInput").value.trim();
    
    let number;  
    let steps = [];  

    
    if (!isNaN(userInput) && userInput !== "") {
        number = parseInt(userInput);
    } else if (userInput !== "") {
        
        number = userInput.length;
        steps.push(`Length of "${userInput}" is ${number}`);
    } else {
        
        document.getElementById("outputText").innerText = "Please enter something!";
        return;
    }
    
    
    while (number > 9) {
        let sum = 0;
        let digits = number.toString().split('');
        
        
        for (let digit of digits) {
            sum += parseInt(digit);
        }

        
        steps.push(`Sum of digits of ${number} is ${sum}`);
        
        
        number = sum;
    }

    
    steps.push(`You got: ${number}`);

    
    let message;
    switch (number) {
        case 0:
            message = "You got Zero, but Thala got 5 IPL and 2 CLT20 titles, so 0+5+2 = 7 !";
            break;
        case 1:
            message = "You got 1 and Thala finished it off in style with a SIX!, making it 7 !";
            break;
        case 2:
            message = "You got 2, and Thala got 5 IPL trophies, making it 7 !";
            break;
        case 3:
            message = "You got 3, and CSK won the 2023 IPL with a FOUR! What a Match BC, making it 7 !";
            break;
        case 4:
            message = "You hit a 4, and Thala won 3 ICC Trophies, bro its 7 !";
            break;
        case 5:
            message = "Well bro you got 5 Trophies, but Thala won 2 CLT20 titles as well for CSK, making it 7 !";
            break;
        case 6:
            message = "You hit a 6! and Thala won 1 World Cup with it, making it 7 !";
            break;
        case 7:
            message = "Just Perfect 7 !, I told ya!";
            break;
        case 8:
            message = "You got 8 and we lost 2015 ODI WC under Thala's captaincy, ignoring that makes it 8-1 = 7 !";
            break;
        case 9:
            message = "You got 9, and Thala sadly lost 2 ODI world cups, ignoring that makes it 9-2 = 7 !";
            break;
        default:
            message = "Something went wrong, like a missed catch in a crucial match!";
            break;
    }

    
    function typeText(text, elementId, callback) {
        let index = 0;
        const speed = 15; 
        const element = document.getElementById(elementId);
        element.innerHTML = ''; 
        
        function type() {
            if (index < text.length) {
                let char = text.charAt(index);
                
                
                if (char === '\n') {
                    element.innerHTML += '<br><br>';
                } else {
                    element.innerHTML += char;
                }
                
                index++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        
        type();
    }

    
    const fullText = `${steps.join('\n\n')}\n\n${message}\n\n✨ THALA FOR A REASON !! ✨`;
    
    
    typeText(fullText, 'outputText', showRandomGif); 
}

function showRandomGif() {
    const gifElement = document.getElementById('randomGif');
    
    
    const gifs = [
        './media/gif1.gif',
        './media/gif2.gif',
        './media/gif4.gif',
        './media/gif5.gif',
        './media/gif6.gif'
    ];

    
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    
    
    gifElement.onload = function() {
        console.log('GIF loaded successfully:', randomGif);
        gifElement.style.display = 'block';
    };
    
    gifElement.onerror = function() {
        console.error('Failed to load GIF:', randomGif);
        gifElement.style.display = 'none';
    };
    
    gifElement.src = randomGif;
    
    console.log('Loading GIF:', randomGif);
    
    triggerEffects();
}
