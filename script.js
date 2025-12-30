// ========================================
// SMOOTH SCROLL NAVİQASİYA
// ========================================

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


// ========================================
// NAVİQASİYA SCROLL EFFEKTİ
// Scroll edəndə naviqasiyaya arxa fon əlavə olunur
// ========================================

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// ========================================
// PARALLAX EFFEKTİ (Hero arxa plan)
// Hero hissəsinin arxa planı yavaş hərəkət edir
// ========================================

const heroBg = document.getElementById('heroBg');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});


// ========================================
// LAYİHƏ KARTLARININ GÖRÜNMƏSİ
// Layihə kartları ekrana gəldikdə animasiya ilə görünür
// ========================================

const projectCards = document.querySelectorAll('.project-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Hər kart bir az gecikmə ilə görünür
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            
            // Bir dəfə görünəndən sonra müşahidəni dayandır
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Bütün layihə kartlarını müşahidə et
projectCards.forEach(card => observer.observe(card));


// ========================================
// BÜTÜN ANCHOR LİNKLƏRİ ÜÇÜN SMOOTH SCROLL
// # ilə başlayan bütün linklər hamar scroll edir
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ========================================
// SCROLL GÖSTƏRMƏSƏ ARXA PLANI DONDUR
// Mouse hərəkəti ilə parallax effekti
// ========================================

document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    if (heroBg && window.scrollY < window.innerHeight) {
        const moveX = (x - 0.5) * 20;
        const moveY = (y - 0.5) * 20;
        heroBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});


// ========================================
// SCROLL GÖSTƏRMƏSƏ SCROLL INDICATOR GIZLƏT
// ========================================

const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '0.6';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }
});


// ========================================
// SCROLL INDICATOR CLICK
// ========================================

if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const workSection = document.getElementById('work');
        if (workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}


// ========================================
// LAYİHƏ KARTLARINA HOVER EFFEKTİ
// ========================================

projectCards.forEach(card => {
    const link = card.querySelector('.project-link');
    
    if (link) {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            if (card.classList.contains('visible')) {
                card.style.transform = 'translateY(0)';
            }
        });
    }
});


// ========================================
// SƏHIFƏ YÜKLƏNDİKDƏ
// ========================================

window.addEventListener('load', () => {
    // Səhifə yüklənəndə scroll pozisiyasını yoxla
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    }
    
    console.log('Portfolio saytı yükləndi! ✨');
});