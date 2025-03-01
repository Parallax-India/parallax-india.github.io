// Register GSAP Plugins (Fixes Missing Plugin Warning)
gsap.registerPlugin(ScrollTrigger);

const lenisFunction = () => {
  const lenis = new Lenis({
    smooth: true,
    smoothWheel: true, // Correct property
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};
const navAniamtionOnScroll = () => {
  let lastScrollY = window.scrollY;
  const nav = document.querySelector("header");
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          gsap.to("header", {
            y: "-100%",
            duration: 0.3,
            ease: "power2.inOut",
          });
        } else {
          gsap.to("header", {
            y: "0%",
            duration: 0.3,
            ease: "power2.inOut",
          });
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });

      ticking = true;
    }
  });
};
// projects section
function showCategory(category, element) {
  var contents = document.getElementsByClassName("category-content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  document.getElementById(category).style.display = "flex";

  var buttons = document.getElementsByClassName("category-btn");
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].classList.remove("active");
  }

  element.classList.add("active");
}

new Swiper(".card-wrapper", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

// GSAP Horizontal Scroll Animation
function HorizontalAnmationCode() {
  const ourCompanySection = document.querySelector("#ourcompany");
  const centerLine = document.querySelector(".centerline");
  const infoWrappers = gsap.utils.toArray(
    "#ourcompany .centerline .info-wrapper"
  );

  // ScrollTrigger ko refresh event se sync karne ke liye
  ScrollTrigger.refresh();

  let scrollTween = gsap.to(infoWrappers, {
    xPercent: -100 * (infoWrappers.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ourCompanySection,
      pin: true,
      scrub: 1,
      end: "+=3000",
      start: "top 15%",
      invalidateOnRefresh: true, // Refresh par recalculate karne ke liye
    },
  });

  infoWrappers.forEach((infoWrapper) => {
    let info = infoWrapper.querySelectorAll(".info");
    let infoTitle = infoWrapper.querySelectorAll(".info-title");

    // Info elements ka animation
    gsap.from(info, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out", // Better easing function
      stagger: 0.1,
      scrollTrigger: {
        trigger: infoWrapper,
        containerAnimation: scrollTween, // scrollTween ke sath sync
        start: "left center",
        toggleActions: "play none none reverse", // Better animation control
      },
    });

    // Info title ka animation
    gsap.from(infoTitle, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.1,
      scrollTrigger: {
        trigger: infoWrapper,
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reverse",
      },
    });
  });
}
function menuclose() {
  const menuClose = document.querySelector(" #menuIcon .ri-close-line");

  const navMenulistItem = document.querySelectorAll(".menuItem");

  const logo = document.querySelector(".logo");

  logo.addEventListener("click", function () {
    gsap.to("#navMenu", {
      top: "-120%",
      height: "0vh",
      duration: 0.5,
      delay: 0.2,
    });

    gsap.to(" #menuIcon .ri-menu-2-line", {
      display: "initial",
      delay: 0,
      duration: 0,
    });
    gsap.to(" #menuIcon .ri-close-line", {
      display: "none",
      delay: 0,
      duration: 0,
    });
  });

  navMenulistItem.forEach((item) =>
    item.addEventListener("click", function () {
      gsap.to("#navMenu", {
        top: "-120%",
        height: "0vh",
        duration: 0.5,
        delay: 0.2,
      });

      gsap.to(" #menuIcon .ri-menu-2-line", {
        display: "initial",
        delay: 0,
        duration: 0,
      });
      gsap.to(" #menuIcon .ri-close-line", {
        display: "none",
        delay: 0,
        duration: 0,
      });
    })
  );

  menuClose.addEventListener("click", function () {
    gsap.to("#navMenu", {
      top: "-120%",
      height: "0vh",
      duration: 0.5,
      delay: 0.2,
    });

    gsap.to(" #menuIcon .ri-menu-2-line", {
      display: "initial",
      delay: 0,
      duration: 0,
    });
    gsap.to(" #menuIcon .ri-close-line", {
      display: "none",
      delay: 0,
      duration: 0,
    });
  });
}
function menuOpen() {
  const menuIcon = document.querySelector("#menuIcon .ri-menu-2-line");
  const main = document.querySelector("#mainContainer");

  menuIcon.addEventListener("click", function () {
    gsap.to("#navMenu", {
      top: "0%",
      height: "100vh",
      duration: 0.5,
      delay: 0.2,
    });
    gsap.to(" #menuIcon .ri-menu-2-line", {
      display: "none",
      delay: 0,
      duration: 0,
    });
    gsap.to(" #menuIcon .ri-close-line", {
      display: "initial",
    });
  });
}
function heroAnimation() {
  gsap.from(".content", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });

  gsap.from(".headline", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "power2.out",
  });

  gsap.from(".subheadline", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "power2.out",
  });

  gsap.from(".image-section", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.7,
    ease: "power2.out",
  });
}
// Add this new function
function navigateToService(serviceName) {
  // URL mein service name as parameter add kar denge
  window.location.href = `services.php?service=${encodeURIComponent(serviceName)}`;
}

// Service page pe content load karne ke liye ye function
function loadServiceContent() {
// Debug lines add kiye hain
console.log('Current URL:', window.location.href);
console.log('Search string:', window.location.search);
  // URL se service name get karenge
  const urlParams = new URLSearchParams(window.location.search);
  console.log('URL Params:', urlParams);
  const serviceName = urlParams.get('service');
  console.log('Service Name:', serviceName);

    // Agar service name nahi mila toh
    if (!serviceName) {
      console.log('No service parameter found in URL');
      return;
  }
  // Service ke according content ka object
  const serviceContent = {
      'graphic-design': {
          title: 'Graphic Design Services',
          description: 'Professional graphic design solutions for your business...',
          features: ['Logo Design', 'Branding', 'Print Design'],
          // Add more content as needed
      },
      'zoho': {
          title: 'Zoho Services',
          description: 'Complete Zoho implementation and customization...',
          features: ['Zoho CRM', 'Zoho Books', 'Zoho Workplace'],
      },
      'web-development': {
          title: 'Web Development Services',
          description: 'Custom web development solutions using latest technologies...',
          features: ['Frontend Development', 'Backend Development', 'E-commerce Solutions', 'Web Applications'],
      },
      'performance-marketing': {
          title: 'Performance Marketing Services', 
          description: 'Data-driven digital marketing strategies for better ROI...',
          features: ['SEO', 'PPC Campaigns', 'Social Media Marketing', 'Content Marketing'],
      },
      'video-editing': {
          title: 'Video Editing Services',
          description: 'Professional video editing and post-production services...',
          features: ['Commercial Videos', 'Social Media Content', 'Motion Graphics', 'Color Grading'],
      },
      '3d-modeling': {
          title: '3D Modeling Services',
          description: 'High quality 3D modeling and visualization services...',
          features: ['Product Modeling', 'Architectural Visualization', 'Character Modeling', 'Animation'],
      },
      // Add more services here
  };

  // Content update karo page pe
  if (serviceContent[serviceName]) {
    console.log('Loading content for service:', serviceName);
      document.getElementById('service-title').textContent = serviceContent[serviceName].title;
      document.getElementById('service-description').textContent = serviceContent[serviceName].description;
      document.getElementById('feature1').textContent = serviceContent[serviceName].features[0];
      document.getElementById('feature2').textContent = serviceContent[serviceName].features[1];
      document.getElementById('feature3').textContent = serviceContent[serviceName].features[2];
      document.getElementById('feature4').textContent = serviceContent[serviceName].features[3];
      // Update other elements as needed
  }else {
    console.log('Service not found:', serviceName);
}
}
HorizontalAnmationCode();
menuOpen();
menuclose();
lenisFunction();
navAniamtionOnScroll();
window.addEventListener("load", heroAnimation);
document.addEventListener('DOMContentLoaded', function() {
  loadServiceContent();
});
