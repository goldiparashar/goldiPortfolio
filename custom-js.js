var copyBtn = document.querySelector('.copy-btn');
        copyBtn.addEventListener('click', function(){
            var copyMail= document.querySelector('.copy-mail');
            copyMail.focus();
            copyMail.select();

            try{
                var successful= document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
            }
            catch(err){
                console.log('Oops, unable to copy');
            }
        })

    // function checkScroll() {
    //     var socialIcons= document.querySelector('.top-social-icons');
    //     console.log(window.scrollY);
    //     if (window.scrollY >= 300) {
    //         socialIcons.style.display = "none";
    //     }
    //     else{
    //         socialIcons.style.display = "block";
    //     }
    //   }
    //  document.addEventListener('scroll', () => {
    //     checkScroll();
    //  })

    gsap.set(".cursorball", {xPercent: -50, yPercent: -50});
    const ball = document.querySelector(".cursorball");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", e => {    
    mouse.x = e.x;
    mouse.y = e.y;  
    });

    gsap.ticker.add(() => {
    
    // adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
    
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
    });

    // var scroller = new SmoothScroll({
    //     target: document.querySelector(".wrapper"),
    //     scrollEase: 0.02,
    //   });
