
document.addEventListener('DOMContentLoaded', ()=> {
    const spotlight=document.querySelector('.galaxy-cursor');

    window.addEventListener('mousemove', (e)=> {
        spotlight.style.left=e.clientX + 'px';
        spotlight.style.top=e.clientY + 'px';
      });

    document.addEventListener('mousedown', ()=> {
        spotlight.style.width='40px';
        spotlight.style.height='40px';
      });

    document.addEventListener('mouseup', ()=> {
        spotlight.style.width='30px';
        spotlight.style.height='30px';
      });

    const navbar=document.querySelector('.navbar');

    window.addEventListener('scroll', ()=> {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        }

        else {
          navbar.classList.remove('scrolled');
        }
      });

    const sections=document.querySelectorAll('.content-section, .hero');

    const observer=new IntersectionObserver((entries)=> {
        entries.forEach(entry=> {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
      }

      , {
      threshold: 0.1
    });

  sections.forEach(section=> {
      observer.observe(section);
    });
});
