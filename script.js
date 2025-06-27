document.addEventListener('DOMContentLoaded', function() {
    // Dados dos eventos (aumentados)
    const events = [
        {
            title: "Culto de Celebração",
            date: "15/10/2023",
            time: "19:30",
            description: "Venha participar do nosso culto semanal de celebração e adoração com a presença especial do Coral Infantil.",
            location: "Sede Principal",
            image: "https://source.unsplash.com/random/600x400/?worship"
        },
        {
            title: "Estudo Bíblico Profundo",
            date: "18/10/2023",
            time: "20:00",
            description: "Estudo aprofundado do livro de Efésios com nosso pastor. Traga sua Bíblia e venha se alimentar da Palavra.",
            location: "Salão de Eventos",
            image: "https://source.unsplash.com/random/600x400/?bible"
        },
        {
            title: "Retiro Espiritual",
            date: "21-22/10/2023",
            time: "08:00",
            description: "Retiro de fim de semana para renovação espiritual com momentos de oração, louvor e comunhão. Inscrições abertas!",
            location: "Acampamento Monte Sinai",
            image: "https://source.unsplash.com/random/600x400/?retreat"
        },
        {
            title: "Ação Social - Amor ao Próximo",
            date: "25/10/2023",
            time: "14:00",
            description: "Distribuição de cestas básicas e agasalhos para famílias carentes da comunidade. Participe desta obra de amor!",
            location: "Comunidade Local",
            image: "https://source.unsplash.com/random/600x400/?charity"
        },
        {
            title: "Encontro de Jovens",
            date: "28/10/2023",
            time: "16:00",
            description: "Evento especial para jovens com música, palavra e muita integração. Traga seus amigos!",
            location: "Sede Principal",
            image: "https://source.unsplash.com/random/600x400/?youth"
        },
        {
            title: "Batismos",
            date: "29/10/2023",
            time: "10:00",
            description: "Cerimônia de batismos. Venha celebrar essa importante decisão de fé com nossos irmãos.",
            location: "Piscina Batismal",
            image: "https://source.unsplash.com/random/600x400/?baptism"
        }
    ];

   // Dados da galeria (aumentados)
const galleryPhotos = [
    "igreja001.png",
    "igreja002.png",
    "igreja003.png",
    "igreja004.png",
    "igreja005.png",
    "igreja006.png",
    "igreja007.png",
    "igreja008.png",
    "igreja009.png",
    "igreja010.png",
    "igreja011.png",
    "igreja012.png",
    "igreja013.png",
    "igreja014.png",
    "igreja015.png"
];

    // Carrega os eventos
    const eventsContainer = document.getElementById('events-container');
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        
        eventCard.innerHTML = `
            <div class="event-image" style="background-image: url('${event.image}')"></div>
            <div class="event-content">
                <div class="event-date">${event.date} • ${event.time}</div>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            </div>
        `;
        
        eventsContainer.appendChild(eventCard);
    });

    // Carrega a galeria
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryPhotos.forEach(photo => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.backgroundImage = `url('${photo}')`;
        galleryGrid.appendChild(galleryItem);
    });

    // Slider de fotos automático
    function initPhotoSlider() {
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        // Muda a foto a cada 5 segundos
        setInterval(nextSlide, 5000);
    }
    
    initPhotoSlider();

    // Audio Player
    const audio = document.getElementById('churchAudio');
    const playBtn = document.getElementById('playBtn');
    const volumeControl = document.getElementById('volumeControl');
    
    // Configura volume inicial
    audio.volume = volumeControl.value;
    
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    // Controle de volume
    volumeControl.addEventListener('input', function() {
        audio.volume = this.value;
        
        // Atualiza ícone do volume
        const volumeIcon = document.querySelector('.volume-icon i');
        if (this.value == 0) {
            volumeIcon.className = 'fas fa-volume-mute';
        } else if (this.value < 0.5) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-up';
        }
    });

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simulação de envio
        console.log('Formulário enviado:', { name, email, message });
        
        // Feedback visual
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada';
        submitBtn.style.backgroundColor = '#2ecc71';
        
        setTimeout(() => {
            submitBtn.innerHTML = 'Enviar Mensagem';
            submitBtn.style.backgroundColor = '';
            contactForm.reset();
        }, 3000);
    });

    // Efeito de rolagem suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Efeito parallax simples
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const parallaxSection = document.querySelector('.parallax-section');
        
        if (parallaxSection) {
            parallaxSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
});

// Sistema de Upload de Fotos
const correctPassword = "senha123"; // Altere para a senha que desejar
const galleryGrid = document.querySelector('.gallery-grid');
const loginModal = document.getElementById('loginModal');
const uploadModal = document.getElementById('uploadModal');
const uploadBtn = document.getElementById('uploadBtn');
const closeModals = document.querySelectorAll('.close-modal');

// Mostrar modal de login
uploadBtn.addEventListener('click', function() {
    if (!localStorage.getItem('loggedIn')) {
        loginModal.style.display = 'block';
    } else {
        uploadModal.style.display = 'block';
    }
});

// Fechar modais
closeModals.forEach(btn => {
    btn.addEventListener('click', function() {
        loginModal.style.display = 'none';
        uploadModal.style.display = 'none';
    });
});

// Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    
    if (password === correctPassword) {
        localStorage.setItem('loggedIn', 'true');
        loginModal.style.display = 'none';
        uploadModal.style.display = 'block';
    } else {
        alert('Senha incorreta!');
    }
});

// Simulação de upload (em um sistema real, você precisaria de backend)
document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const files = document.getElementById('photoUpload').files;
    
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.style.backgroundImage = `url('${event.target.result}')`;
                galleryGrid.prepend(galleryItem);
            };
            
            reader.readAsDataURL(files[i]);
        }
        
        alert(`${files.length} foto(s) adicionada(s) com sucesso!`);
        uploadModal.style.display = 'none';
    }
});

// Redimensionar a seção de contatos
document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.getElementById('contact');
    contactSection.style.padding = '20px'; // Reduz o padding
    contactSection.style.margin = '30px 0'; // Reduz a margem
    
    const contactContainer = document.querySelector('.contact-container');
    contactContainer.style.gap = '20px'; // Reduz o espaço entre as colunas
});