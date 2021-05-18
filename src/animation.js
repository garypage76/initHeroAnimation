const animation = () => {

    var tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });

    tl.from(".anim1", { y: -50, stagger: 0.6 })
        .from(".img-alt", { y: 50 }, "-=0.4")
        .from(".img-main", { xPercent: 100 }, "-=2")

    document.getElementById('button').addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    })

}

export default animation;