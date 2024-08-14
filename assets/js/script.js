"use strict";

const initCursorShadow = () => {
  var shadow = document.createElement('div');
  shadow.classList.add('shadow');
  document.body.appendChild(shadow);

  let currentHoveredEl = null;

  let mouseX = 0;
  let mouseY = 0;
  let shadowX = 0;
  let shadowY = 0;

  const contentEls = document.querySelectorAll('#projects-container .project');
  
  contentEls.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      if (currentHoveredEl !== el) {
        el.appendChild(shadow);
        shadow.classList.add('on-content');
      }
      currentHoveredEl = el;
    });

    el.addEventListener('mouseleave', () => {
      currentHoveredEl = null;
      shadow.classList.remove('on-content');
      document.body.appendChild(shadow);
    });
  });

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    shadowX += (mouseX - shadowX) * 0.05; // easing factor (less = slower)
    shadowY += (mouseY - shadowY) * 0.05;

    shadow.style.left = `${shadowX}px`;
    shadow.style.top = `${shadowY}px`;

    // calls the function, before the next browser paint
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
    requestAnimationFrame(animate);
  }

  animate();
}

const initSkillsHoverEffect = () => {
  const container = document.querySelector('#skills-container');
  const skills = document.querySelectorAll('.skill');
  const radius = 150; // radius for the hover distance

  function isMouseWithinRadius(mouseX, mouseY, element) {
    const rect = element.getBoundingClientRect();
    const elementX = rect.left + rect.width / 2;
    const elementY = rect.top + rect.height / 2;
    const distance = Math.sqrt((mouseX - elementX) ** 2 + (mouseY - elementY) ** 2);
    return distance <= radius;
  }

  function handleMouseMove(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    skills.forEach(skill => {
      if (isMouseWithinRadius(mouseX, mouseY, skill)) {
        skill.classList.add('hovered');
      } else {
        skill.classList.remove('hovered');
      }
    });
  }

  container.addEventListener('mousemove', handleMouseMove);
}

const initMenuToggle = () => {
  const menuToggle = document.querySelector('#menu .menu-toggle');
  const fullscreenMenu = document.querySelector('#menu .fullscreen-menu');

  menuToggle.addEventListener('click', () => {
    // if contains active class, close the nav.
    if (fullscreenMenu.classList.contains('active')) {
      closeNav();
    } else {
      openNav();
    }
  });

  function closeNav(fn=null) {
    console.debug('close nav');

    fullscreenMenu.classList.remove('active');
    fullscreenMenu.classList.add('closing');
    menuToggle.classList.remove('open');

    document.body.style.overflow = 'auto';

    // remove the 'closing' class after animation finishes
    setTimeout(() => {
      fullscreenMenu.classList.remove('closing');
      if (fn !== null) {
        console.log('running after fn');
        fn();
      }
    }, 500);
  }

  function openNav() {
    console.debug('open nav');
    fullscreenMenu.classList.remove('closing');
    fullscreenMenu.classList.add('active');
    menuToggle.classList.add('open');

    document.body.style.overflow = 'hidden';
  }

  fullscreenMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (ev) => {
      const ref = link.getAttribute('href');    

      ev.preventDefault();

      if (!ref.startsWith('#')) {
        closeNav(() => {
          window.location.href = ref;
        });
        return;
      }     

      closeNav(() => {
        if (ref === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.querySelector(ref).scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });

  // Show hide the menu button, based on scroll pos: up or down
  // hide on scroll down, show on scroll up
  let lastScrollTop = 0;
  let navbar = document.querySelector('#menu .menu-toggle');
  let timeoutId;

  window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop;

    clearTimeout(timeoutId);

    if (scrollTop > lastScrollTop) {
      // scrolling down: hide the nav
      navbar.style.display = 'none';
      
      // Hide navbar after delay
      timeoutId = setTimeout(() => {
        navbar.style.display = 'none';
      }, 200);

    } else {
      // scrolling up: Show nav
      navbar.style.display = 'flex';
    }

    lastScrollTop = scrollTop;
  });
}

const initprojectsSectionScroll = () => {
  const progressEl = document.getElementById('projects-bg-progress');
  const progressMin = parseInt(progressEl.getAttribute('min'));
  const progressMax = parseInt(progressEl.getAttribute('max'));

  document.addEventListener('scroll', function() {
    const projectsEl = document.getElementById('projects-container');
    const elHeight = projectsEl.scrollHeight;
    const windowScrollTop = window.scrollY;

    // console.debug({
    //   'elementOffsetTop': elementOffsetTop,
    //   'elHeight': elHeight,
    //   'windowScrollTop': windowScrollTop,
    //   'scrolledpx': windowScrollTop - elHeight,
    // });
  
    if (windowScrollTop < elHeight || (windowScrollTop - elHeight) > elHeight) {
      // console.debug('#projects scroll Out of bounds');
      progressEl.classList.add('hidden');
      return;
    }

    const scrolledpx = windowScrollTop - elHeight;  
    const scrollPercentage = Math.floor((scrolledpx / elHeight) * 100);
    
    if (scrollPercentage > progressMin && scrollPercentage < progressMax) {
      progressEl.value = scrollPercentage;
      progressEl.classList.remove('hidden');
    } else {
      progressEl.classList.add('hidden');
    }

    // console.debug('Scrolled Through px:', scrolledpx);
    // console.debug('Scrolled Through %:', scrollPercentage);
  }, { passive: true });  
}

initCursorShadow();
initMenuToggle();
