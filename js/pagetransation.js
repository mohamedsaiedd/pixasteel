import barba from '@barba/core';

barba.init({
    
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to("#home-nav", {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from("#project-nav", {
          opacity: 0
        });
        console.log('test');
      }
    }]
  });