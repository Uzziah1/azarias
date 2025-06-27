const langSwitch = document.getElementById('langSwitch');
let currentLang = 'fr';

const translations = {
  fr: {
    menu_home: "Accueil",
    menu_expert: "Expertises",
    menu_contact: "Me contacter",
    welcome: "BIENVENUE",
    intro: "Je m'appelle Tégawendé Azaria Kaboré.",
    role: "Je suis Développeur front-end, UI/UX Designer et Graphiste passionné par la création d'expériences digitales intuitives, esthétiques et performantes. Avec une approche centrée sur l’utilisateur, je conçois des interfaces modernes qui allient design soigné et technologies web réactives.",
    why: "Why I build",
    why_text: "Transformer les idées en solutions visuelles fonctionnelles, que ce soit pour des sites web, des applications mobiles ou des identités visuelles complètes.",
    remote: "Disponible en remote",
    cta: "Commençons à travailler ensemble"
  },
  en: {
    menu_home: "Home",
    menu_expert: "Expertise",
    menu_contact: "Contact me",
    welcome: "WELCOME",
    intro: "My name is Tégawendé Azaria Kaboré.",
    role: "I'm a front-end developer, UI/UX designer, and graphic artist passionate about creating intuitive, aesthetic, and high-performance digital experiences. I design modern interfaces focused on user experience, combining clean design with reactive web technologies.",
    why: "Why I build",
    why_text: "Turning ideas into functional visual solutions – from websites and mobile apps to complete visual identities.",
    remote: "Available remotely",
    cta: "Let’s start working together"
  }
};

langSwitch.addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    el.textContent = translations[currentLang][key];
  });
});
