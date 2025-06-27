// Remplace ces valeurs par les tiennes
const serviceID = 'gmail_service_azarias';
const templateID = 'template_z23dhxy';
const publicKey = '5sa2THmB6_G97pB7b';

// Initialise EmailJS
emailjs.init(publicKey);

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  // Validation des champs
  if (!fullname || !email || !phone) {
    status.textContent = 'Merci de remplir tous les champs obligatoires.';
    status.className = 'text-red-600';
    return;
  }

  // Vérification email simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.textContent = 'Merci de saisir une adresse email valide.';
    status.className = 'text-red-600';
    return;
  }

  status.textContent = 'Envoi en cours...';
  status.className = 'text-gray-700';

  const templateParams = {
    fullname: fullname,
    email: email,
    phone: phone,
    message: message
  };

  // Envoi du formulaire via EmailJS
  emailjs.send(serviceID, templateID, templateParams)
    .then(() => {
      status.textContent = 'Message envoyé avec succès ! Merci de votre contact.';
      status.className = 'text-green-600';
      document.getElementById('contact-form').reset();
    })
    .catch((err) => {
      console.error('Erreur EmailJS:', err);
      status.textContent = 'Erreur lors de l\'envoi, veuillez réessayer plus tard.';
      status.className = 'text-red-600';
    });
});
