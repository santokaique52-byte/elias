// Animação simples e suave
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Galeria do pequeno artista carregada!');
    
    // Animação de entrada das fotos
    const photoFrames = document.querySelectorAll('.photo-frame');
    
    photoFrames.forEach((frame, index) => {
        // Configuração inicial
        frame.style.opacity = '0';
        frame.style.transform = 'translateY(50px)';
        
        // Animação com delay
        setTimeout(() => {
            frame.style.transition = 'all 0.6s ease-out';
            frame.style.opacity = '1';
            frame.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Efeito de clique nas fotos
    photoFrames.forEach(frame => {
        frame.addEventListener('click', function() {
            // Efeito de pressionar
            this.style.transform = 'scale(0.95)';
            
            // Criar efeito de partícula
            createClickEffect(this);
            
            // Voltar ao normal
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    });
    
    // Função para efeito de clique
    function createClickEffect(element) {
        const effect = document.createElement('div');
        effect.style.cssText = `
            position: absolute;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            animation: clickEffect 0.6s ease-out forwards;
        `;
        
        element.appendChild(effect);
        
        // Remover após animação
        setTimeout(() => {
            effect.remove();
        }, 600);
    }
    
    // Adicionar CSS para o efeito de clique
    const style = document.createElement('style');
    style.textContent = `
        @keyframes clickEffect {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Efeito no título de boas-vindas
    const welcomeTitle = document.querySelector('.welcome-title');
    let bounceCount = 0;
    
    welcomeTitle.addEventListener('click', function() {
        bounceCount++;
        this.style.animation = 'none';
        
        setTimeout(() => {
            this.style.animation = 'bounce 2s infinite';
        }, 10);
        
        // Mensagens diferentes no console
        const messages = [
            '✨ Que site incrível!',
            '🎨 Hora da criatividade!',
            '🌟 Arte pura!',
            '🖌️ Vamos pintar o mundo!'
        ];
        
        console.log(messages[bounceCount % messages.length]);
    });
});

// Efeito de carregamento
window.addEventListener('load', function() {
    console.log('✅ Galeria pronta para receber as pinturas!');
    
    // Pequeno delay para mostrar que carregou
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Configurar opacidade inicial
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';