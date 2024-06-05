var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-b")

document.addEventListener("mousemove",function(dets){
crsr .style.left=dets.x+30+"px"
crsr.style.top=dets.y+"px"
blur.style.left=dets.x -150+"px"
blur.style.top=dets.y-150+"px"
})



gsap.to("#nav",{
     backgroundColor : "#000",
    height : "100px",
    duration : 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:" top -10%",
        end:"top -11%",
        scrub:1
    }
 })

 var h4all=document.querySelectorAll("#nav h4")
 h4all.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            crsr.style.scale=3
            crsr.style.border="1px solid #fff"
            crsr.style.backgroundColor="transparent"

        })
        elem.addEventListener("mouseleave",function(){
            crsr.style.scale=1
            crsr.style.border="0px solid rgb(141, 144, 202)"
            crsr.style.backgroundColor="rgb(141, 144, 202)"

        })

 })

gsap.to("#main",{
    backgroundColor :"#000",
    duration:1,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:"true",
        start:" top -25%",
        end:"top -70%",
        scrub:2
    }
}) 

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3,

    }

})


// gsap.from(".card",{
//     scale:8,
//     opacity:0,
//     duration:2,
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         markers:true,
//         start:"top 70%",
//         end:"top 65%",
//         scrub:1,

//     }

// })

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 47%",
        scrub:4,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 47%",
        scrub:4,
    }
})
gsap.from("page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:4,
    }
})



























