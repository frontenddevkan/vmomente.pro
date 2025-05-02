// neural-animation.js
class NeuralFlow {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'neural-vortex';
        document.body.appendChild(this.container);
        
        this.cursorPos = { x: 0, y: 0 };
        this.particles = [];
        this.trail = [];
        this.init();
    }

    init() {
        // Создание краевых кластеров
        this.createEdgeClusters();
        
        // Инициализация следа
        document.addEventListener('mousemove', (e) => {
            this.cursorPos = { x: e.clientX, y: e.clientY };
            this.createTrail();
        });

        // Анимация
        this.animate();
    }

    createEdgeClusters() {
        // Кластеры в углах экрана
        const createCluster = (x, y) => {
            for(let i = 0; i < 15; i++) {
                const dot = document.createElement('div');
                dot.className = 'neuron-dot';
                
                Object.assign(dot.style, {
                    left: `${x + Math.random() * 100 - 50}px`,
                    top: `${y + Math.random() * 100 - 50}px`,
                    animationDelay: `${Math.random() * 2}s`
                });
                
                this.container.appendChild(dot);
                this.particles.push({
                    element: dot,
                    baseX: x,
                    baseY: y
                });
            }
        };

        // Создание 4 кластеров по углам
        createCluster(50, 50);
        createCluster(window.innerWidth - 50, 50);
        createCluster(50, window.innerHeight - 50);
        createCluster(window.innerWidth - 50, window.innerHeight - 50);
    }

    createTrail() {
        // Создание точки следа
        const trailDot = document.createElement('div');
        trailDot.className = 'neural-trail';
        
        Object.assign(trailDot.style, {
            left: `${this.cursorPos.x - 4}px`,
            top: `${this.cursorPos.y - 4}px`
        });
        
        this.container.appendChild(trailDot);
        this.trail.push(trailDot);
        
        // Автоудаление через 1 сек
        setTimeout(() => trailDot.remove(), 1000);
    }

    animate() {
        // Плавное движение кластеров к курсору
        this.particles.forEach(particle => {
            const dx = this.cursorPos.x - particle.baseX;
            const dy = this.cursorPos.y - particle.baseY;
            
            particle.element.style.transform = `translate(
                ${dx * 0.15}px, 
                ${dy * 0.15}px
            )`;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Инициализация
window.addEventListener('load', () => new NeuralFlow());