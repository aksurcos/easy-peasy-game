	
        var buttons =
        [
            {'name': 'Rock', 'icon': '✊🏻', 'beats': {'Scissors': 'crushed', 'Lizard': 'crushed'}},
            {'name': 'Paper', 'icon': '✋🏻', 'beats': {'Rock': 'covered', 'Spock': 'disproved'}},
            {'name': 'Scissors', 'icon': '✌🏻', 'beats': {'Paper': 'cut', 'Lizard': 'decapitated'}},
            {'name': 'Lizard', 'icon': '🤏🏻', 'beats': {'Spock': 'poisoned', 'Paper': 'ate'}},
            {'name': 'Spock', 'icon': '🖖🏻', 'beats': {'Scissors': 'smashed', 'Rock': 'vaporized'}}
        ];
        
        for(let i = 0; i < buttons.length; i++)
        {
            let button = document.createElement('button');
            button.appendChild(document.createTextNode(buttons[i].icon));
            document.getElementById('game-area').appendChild(button);
            button.addEventListener('click', function() { choice(i); });
        }
        
        function choice(index)
        {
            let you = buttons[index];
            let computer = buttons[Math.floor(Math.random() * buttons.length)];
            let outcome = document.getElementById('outcome');
            
            if(you.beats.hasOwnProperty(computer.name))
            {
                increase('win');
                outcome.innerHTML = 'You beat the computer! <i class="fa-solid fa-heart"></i><br>';
                outcome.innerHTML += [you.icon, you.name, you.beats[computer.name], computer.name, computer.icon].join(' ');
            }
            else if(computer.beats.hasOwnProperty(you.name))
            {
                increase('lose');
                outcome.innerHTML = 'The computer beat you! <i class="fa-solid fa-heart-crack"></i>  <br>';
                outcome.innerHTML += [computer.icon, computer.name, computer.beats[you.name], you.name, you.icon].join(' ');
            }
            else
            {
                increase('draw');
                outcome.innerHTML = 'Draw! <i class="fa-solid fa-handshake"></i><br>';
                outcome.innerHTML += [computer.icon, 'You both chose the same!', you.icon].join(' ');
            }
        }
        
        function increase(id)
        {
            let element = document.getElementById(id);
            element.innerHTML = Number(element.innerHTML) + 1;
        }

       
    
   