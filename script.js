document.addEventListener('DOMContentLoaded', function() {
    // Slideshow de fundo
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Mudar slide a cada 4 segundos
    setInterval(nextSlide, 4000);
    
    // Player de música
    const audioPlayer = document.getElementById('church-audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const volumeControl = document.getElementById('volume-control');
    
    playBtn.addEventListener('click', function() {
        audioPlayer.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'flex';
    });
    
    pauseBtn.addEventListener('click', function() {
        audioPlayer.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'flex';
    });
    
    volumeControl.addEventListener('input', function() {
        audioPlayer.volume = this.value;
    });
    
    // Esconder pause button inicialmente
    pauseBtn.style.display = 'none';
    
    // Formulário de inscrição
    const registrationForm = document.getElementById('event-registration');
    const sendWhatsappBtn = document.getElementById('send-whatsapp');
    const downloadPdfBtn = document.getElementById('download-pdf');
    const downloadExcelBtn = document.getElementById('download-excel');
    
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Inscrição enviada com sucesso!');
        this.reset();
    });
    
    sendWhatsappBtn.addEventListener('click', function() {
        const phoneNumber = 'SEUNUMERO'; // Substitua pelo número da igreja
        const message = 'Olá, gostaria de me inscrever para o evento da Igreja Batista Reconnect.';
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    });
    
    downloadPdfBtn.addEventListener('click', function() {
        // Criar PDF fictício para demonstração
        const pdfContent = `
            Nome: ${registrationForm[0].value}
            Email: ${registrationForm[1].value}
            Telefone: ${registrationForm[2].value}
            Evento: ${registrationForm[3].value}
        `;
        
        const blob = new Blob([pdfContent], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Inscricao_Reconnect.pdf';
        a.click();
        URL.revokeObjectURL(url);
    });
    
    downloadExcelBtn.addEventListener('click', function() {
        // Criar Excel fictício para demonstração
        const excelContent = `
            Nome,Email,Telefone,Evento
            ${registrationForm[0].value},${registrationForm[1].value},${registrationForm[2].value},${registrationForm[3].value}
        `;
        
        const blob = new Blob([excelContent], { type: 'application/vnd.ms-excel' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Inscricao_Reconnect.csv';
        a.click();
        URL.revokeObjectURL(url);
    });
    
    // Carregar galeria de fotos
    const photoGrid = document.getElementById('photo-grid');
    
    // Fotos de exemplo - na prática, viriam do backend
    const samplePhotos = [
        'assets/images/gallery/photo1.jpg',
        'assets/images/gallery/photo2.jpg',
        'assets/images/gallery/photo3.jpg',
        'assets/images/gallery/photo4.jpg',
        'assets/images/gallery/photo5.jpg',
        'assets/images/gallery/photo6.jpg',
        'assets/images/gallery/photo7.jpg',
        'assets/images/gallery/photo8.jpg'
    ];
    
    samplePhotos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = 'Evento da Igreja';
        img.addEventListener('click', function() {
            // Ampliar foto ao clicar
            const viewer = document.createElement('div');
            viewer.style.position = 'fixed';
            viewer.style.top = '0';
            viewer.style.left = '0';
            viewer.style.width = '100%';
            viewer.style.height = '100%';
            viewer.style.backgroundColor = 'rgba(0,0,0,0.9)';
            viewer.style.display = 'flex';
            viewer.style.justifyContent = 'center';
            viewer.style.alignItems = 'center';
            viewer.style.zIndex = '1000';
            viewer.style.cursor = 'pointer';
            
            const fullImg = document.createElement('img');
            fullImg.src = this.src;
            fullImg.style.maxWidth = '90%';
            fullImg.style.maxHeight = '90%';
            fullImg.style.objectFit = 'contain';
            
            viewer.appendChild(fullImg);
            viewer.addEventListener('click', function() {
                document.body.removeChild(viewer);
            });
            
            document.body.appendChild(viewer);
        });
        
        photoGrid.appendChild(img);
    });
    
    // Controles de transmissão ao vivo
    const startStreamBtn = document.getElementById('start-stream-btn');
    const youtubeStreamBtn = document.getElementById('youtube-stream');
    const websiteStreamBtn = document.getElementById('website-stream');
    const liveContainer = document.getElementById('live-container');
    
    startStreamBtn.addEventListener('click', function() {
        // Na prática, isso acionaria a API de transmissão
        alert('Funcionalidade de transmissão ao vivo será implementada no backend');
    });
    
    youtubeStreamBtn.addEventListener('click', function() {
        liveContainer.innerHTML = `
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/live_stream?channel=SEUCANAL" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        `;
    });
    
    websiteStreamBtn.addEventListener('click', function() {
        // Simulação de transmissão pelo site
        liveContainer.innerHTML = `
            <video width="100%" height="400" controls autoplay>
                <source src="assets/videos/live.mp4" type="video/mp4">
                Seu navegador não suporta vídeos HTML5.
            </video>
            <p class="stream-notice">Transmissão pelo site da igreja</p>
        `;
    });
    
    // Efeitos de hover nos botões
    const buttons = document.querySelectorAll('button, .departments-nav a, .admin-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// church-gallery.js - Único arquivo necessário

/**********************
 * CONFIGURAÇÕES GERAIS
 **********************/
const GALLERY_CONFIG = {
    storageKey: 'churchGalleryData',
    departments: ['geral', 'jovens', 'mulheres', 'criancas', 'pastor', 'eventos'],
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ['image/jpeg', 'image/png']
};

/**********************
 * CORE DA GALERIA
 **********************/
class ChurchGallery {
    constructor() {
        this.initStorage();
        this.setupEventListeners();
        this.loadContent();
    }

    initStorage() {
        if (!localStorage.getItem(GALLERY_CONFIG.storageKey)) {
            const initialData = {};
            GALLERY_CONFIG.departments.forEach(dept => {
                initialData[dept] = [];
            });
            localStorage.setItem(GALLERY_CONFIG.storageKey, JSON.stringify(initialData));
        }
    }

    getGalleryData() {
        return JSON.parse(localStorage.getItem(GALLERY_CONFIG.storageKey));
    }

    saveImage(department, imageData) {
        const gallery = this.getGalleryData();
        const imageId = 'img_' + Date.now() + Math.random().toString(36).substr(2, 5);
        
        gallery[department].unshift({
            id: imageId,
            data: imageData,
            timestamp: Date.now()
        });

        localStorage.setItem(GALLERY_CONFIG.storageKey, JSON.stringify(gallery));
        return imageId;
    }

    deleteImage(imageId) {
        const gallery = this.getGalleryData();
        let deleted = false;

        for (const department in gallery) {
            const initialLength = gallery[department].length;
            gallery[department] = gallery[department].filter(img => img.id !== imageId);
            if (gallery[department].length !== initialLength) deleted = true;
        }

        if (deleted) {
            localStorage.setItem(GALLERY_CONFIG.storageKey, JSON.stringify(gallery));
        }
        return deleted;
    }

    getImagesByDepartment(department) {
        return this.getGalleryData()[department] || [];
    }

    /**********************
     * INTERFACE DO USUÁRIO
     **********************/
    setupEventListeners() {
        // Upload de imagens (admin)
        if (document.getElementById('uploadArea')) {
            const uploadArea = document.getElementById('uploadArea');
            const fileInput = document.getElementById('fileInput') || document.createElement('input');
            fileInput.type = 'file';
            fileInput.multiple = true;
            fileInput.accept = 'image/jpeg,image/png';
            fileInput.style.display = 'none';
            
            uploadArea.addEventListener('click', () => fileInput.click());
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.style.borderColor = '#ffcc00';
            });
            uploadArea.addEventListener('dragleave', () => {
                uploadArea.style.borderColor = '#333333';
            });
            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.style.borderColor = '#333333';
                this.handleFiles(e.dataTransfer.files);
            });

            fileInput.addEventListener('change', () => this.handleFiles(fileInput.files));
            document.body.appendChild(fileInput);

            if (document.getElementById('uploadButton')) {
                document.getElementById('uploadButton').addEventListener('click', () => {
                    this.uploadImages();
                });
            }
        }

        // Tabs de departamentos
        document.querySelectorAll('.gallery-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const department = tab.dataset.department;
                this.showGallery(department);
            });
        });

        // Botões de deletar
        document.addEventListener('click', (e) => {
            if (e.target.closest('.delete-btn')) {
                const imageId = e.target.closest('.delete-btn').dataset.id;
                if (this.deleteImage(imageId)) {
                    this.showMessage('Imagem removida com sucesso!', 'success');
                    this.loadContent();
                }
            }
        });
    }

    handleFiles(files) {
        const preview = document.getElementById('imagePreview') || document.createElement('div');
        preview.innerHTML = '';
        
        if (files.length === 0) return;

        Array.from(files).forEach(file => {
            if (!GALLERY_CONFIG.allowedTypes.includes(file.type)) return;
            if (file.size > GALLERY_CONFIG.maxFileSize) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '150px';
                img.style.maxHeight = '150px';
                preview.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    }

    uploadImages() {
        const fileInput = document.getElementById('fileInput');
        const departmentSelect = document.getElementById('departmentSelect');
        
        if (!fileInput || !departmentSelect || fileInput.files.length === 0) {
            this.showMessage('Nenhuma imagem selecionada', 'error');
            return;
        }

        const department = departmentSelect.value;
        const files = fileInput.files;
        let uploaded = 0;

        Array.from(files).forEach(file => {
            if (!GALLERY_CONFIG.allowedTypes.includes(file.type)) {
                this.showMessage(`Tipo não suportado: ${file.name}`, 'error');
                return;
            }

            if (file.size > GALLERY_CONFIG.maxFileSize) {
                this.showMessage(`Arquivo muito grande: ${file.name}`, 'error');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                this.saveImage(department, e.target.result);
                uploaded++;
                
                if (uploaded === files.length) {
                    this.showMessage(`${uploaded} imagens salvas em ${department}`, 'success');
                    fileInput.value = '';
                    document.getElementById('imagePreview').innerHTML = '';
                    this.loadContent();
                }
            };
            reader.readAsDataURL(file);
        });
    }

    /**********************
     * EXIBIÇÃO DE CONTEÚDO
     **********************/
    loadContent() {
        // Slideshow na página inicial
        if (document.getElementById('main-slideshow')) {
            this.initSlideshow('main-slideshow', 'geral');
        }

        // Galerias em todas as páginas
        const currentDepartment = document.body.dataset.department || 'geral';
        this.showGallery(currentDepartment);

        // Admin gallery
        if (document.getElementById('admin-gallery')) {
            this.showGallery('geral', 'admin-gallery');
        }
    }

    showGallery(department, containerId = 'gallery-container') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const images = this.getImagesByDepartment(department);
        container.innerHTML = '';

        if (images.length === 0) {
            container.innerHTML = '<p class="no-images">Nenhuma imagem disponível</p>';
            return;
        }

        images.forEach(img => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <img src="${img.data}" alt="Foto da galeria">
                ${containerId.includes('admin') ? 
                    `<button class="delete-btn" data-id="${img.id}">
                        <i class="fas fa-trash"></i>
                    </button>` : ''
                }
            `;
            container.appendChild(item);
        });

        // Ativar tab selecionada
        document.querySelectorAll('.gallery-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.department === department);
        });
    }

    initSlideshow(containerId, department) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const images = this.getImagesByDepartment(department);
        let currentIndex = 0;

        function showSlide(index) {
            if (images.length === 0) {
                container.innerHTML = '<div class="slide-placeholder">Galeria vazia</div>';
                return;
            }

            currentIndex = (index + images.length) % images.length;
            container.innerHTML = `
                <div class="slide" style="background-image: url('${images[currentIndex].data}')"></div>
            `;
        }

        // Iniciar
        showSlide(0);
        
        if (images.length > 1) {
            setInterval(() => showSlide(currentIndex + 1), 5000);
        }
    }

    showMessage(text, type = 'info') {
        const existingMsg = document.querySelector('.gallery-message');
        if (existingMsg) existingMsg.remove();

        const msg = document.createElement('div');
        msg.className = `gallery-message ${type}`;
        msg.textContent = text;
        document.body.appendChild(msg);

        setTimeout(() => {
            msg.style.opacity = '0';
            setTimeout(() => msg.remove(), 500);
        }, 3000);
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    window.churchGallery = new ChurchGallery();
});