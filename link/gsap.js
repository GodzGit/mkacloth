gsap.from("header", { duration: 1, y: -100, opacity: 0 });
gsap.from("#hero h1, #hero h3, #hero button", { 
    duration: 1, 
    opacity: 0, 
    y: 50, 
    stagger: 0.2 
});
gsap.from("#features .feature-item", {
    scrollTrigger: "#features",
    duration: 1,
    opacity: 0,
    x: -100,
    stagger: 0.3
});
gsap.from(".product-gallery img", {
    scrollTrigger: "#product",
    duration: 1,
    opacity: 0,
    scale: 0.5,
    stagger: 0.3
});
