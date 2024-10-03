
document.addEventListener("DOMContentLoaded", slide_to_top); 


function slide_to_top() {
  const boxes = document.querySelectorAll('.jobs');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Check if the element is intersecting
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        // Get the position of the element relative to the viewport
        const rect = entry.boundingClientRect;

        // Check if the element is more than 50px outside the viewport
        if (rect.top > window.innerHeight + 50 || rect.bottom < -50) {
          entry.target.classList.remove('visible');
        }
      }
    });
  }, {
    threshold: 0.25 // Trigger when any part of the element is in view
  });

  boxes.forEach(box => {
    observer.observe(box);
  });

  // Manual check on scroll
  window.addEventListener('scroll', () => {
    boxes.forEach(box => {
      const rect = box.getBoundingClientRect();
      if (rect.top > window.innerHeight + 50 || rect.bottom < -50) {
        box.classList.remove('visible');
      }
    });
  });
}

/*

function slide_to_top() {
    const boxes = document.querySelectorAll('.jobs');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
        else if (entry.intersectionRatio < 0.2 ) {
            entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible
  
    boxes.forEach(box => {
      observer.observe(box);
    });
  }


  */
  