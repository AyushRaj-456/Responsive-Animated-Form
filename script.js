   const username = document.querySelector('.username');
          
          const labelu = document.querySelector('.labelu');
          
          const labelp = document.querySelector('.labelp');
          
          const password = document.querySelector('.password');
           
          const form = document.querySelector('.form');
           
           
            
            labelu.onclick = function(){
               username.style.height = "40px";
               username.style.width = "100%";
               username.style.padding = "0px"; 
               labelu.style.transform = "translateY(0px)";
               username.classList.add('u');
               //labelp.style.transform = "translateY(20px)"               
               //password.style.transform = "translateY(20px)" 
                 username.disabled = false;
                
            }
            
            labelp.onclick = function(){
                password.style.height = "40px";
               // password.style.padding ="5px";           
               labelp.style.transform = "translateY(0px)";
                password.classList.add('uu');
                password.disabled = false;
            }
            