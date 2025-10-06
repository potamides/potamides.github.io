// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "A snapshot of publications I have contributed to.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-playground",
          title: "Playground",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/playground/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-reinforcement-learning-from-self-feedback-for-graphics-program-synthesis",
        
          title: "Reinforcement Learning from Self-Feedback for Graphics Program Synthesis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/rlsf/";
          
        },
      },{id: "post-building-a-usb-converter-for-a-vintage-siemens-pc16-11-keyboard",
        
          title: "Building a USB converter for a Vintage Siemens PC16-11 Keyboard",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/siemens/";
          
        },
      },{id: "post-vintage-itt-courier-110169-hall-effect-keyboard-usb-conversion",
        
          title: "Vintage ITT Courier 110169 Hall Effect Keyboard USB Conversion",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/itt/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-start-my-internship-at-the-national-institute-of-information-and-communications-technology-in-japan",
          title: 'I start my internship at the National Institute of Information and Communications Technology...',
          description: "",
          section: "News",},{id: "news-detikzify-was-accepted-at-neurips-2024-as-a-spotlight-paper",
          title: 'DeTikZify was accepted at NeurIPS 2024 as a spotlight paper!',
          description: "",
          section: "News",},{id: "news-i-start-my-internship-at-adobe-research-in-france",
          title: 'I start my internship at Adobe Research in France.',
          description: "",
          section: "News",},{id: "news-tikzero-was-accepted-as-a-highlight-paper-at-iccv-2025",
          title: 'TikZero was accepted as a highlight paper at ICCV 2025!',
          description: "",
          section: "News",},{id: "news-we-release-detikzifyv2-5-our-latest-model-for-graphics-program-synthesis-with-tikz-trained-with-reinforment-learning-from-self-feedback",
          title: 'We release DeTikZifyv2.5, our latest model for graphics program synthesis with TikZ, trained...',
          description: "",
          section: "News",},{id: "news-a-preprint-of-our-paper-multimat-multimodal-program-synthesis-for-procedural-materials-using-large-multimodal-models-is-available-on-arxiv",
          title: 'A preprint of our paper “MultiMat: Multimodal Program Synthesis for Procedural Materials using...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/potamides", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ut5IWKwAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/belouadi", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/jbelouadi", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%6E%61%73.%62%65%6C%6F%75%61%64%69@%75%6E%69-%6D%61%6E%6E%68%65%69%6D.%64%65", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
