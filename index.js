
window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a ');
  
    const scrollSection  = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          const activeNav = document.querySelector(`nav a[href="#${entry.target.id}"]`);
          activeNav.classList.add('active');
        }
      });
    };
    const observerOptions = {
      root: null,
      rootMargin: '10px',
      threshold: 0.6
    };
    const observer = new IntersectionObserver(scrollSection, observerOptions);
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
  
  
  function clicked(style) {
    var click = document.querySelectorAll('a')
  
    click.forEach(function(item) {
        item.classList.remove('active')
    })
    style.classList.add('active')
    console.log(style)
    return style
  }
  
  window.addEventListener('scroll', reveal);
  function reveal(){
    var reveals = document.querySelectorAll('.reveal');
  
    for(i=0 ; i< reveals.length; i++){
  
      var windowHeight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
  
      if(revealtop < windowHeight - revealpoint){
        reveals[i].classList.add('active');
      }else{
          reveals[i].classList.remove('active');
        
      }
    }
  
  }