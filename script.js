// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Join button functionality
    const joinBtn = document.getElementById('joinBtn');
    const applyBtn = document.getElementById('applyBtn');
    const usernameInput = document.getElementById('username');
    const messageDiv = document.getElementById('message');
    
    joinBtn.addEventListener('click', function() {
        document.getElementById('join').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    applyBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        
        if (username === '') {
            showMessage('Please enter your Nitro Type username', 'error');
            return;
        }
        
        // Simulate application process
        showMessage(`Application submitted for ${username}! We'll review your profile soon.`, 'success');
        usernameInput.value = '';
        
        // Reset message after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    });
    
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
    }
    
    // Animate stats counter
    const memberCount = document.getElementById('memberCount');
    const finalCount = 20;
    let currentCount = 0;
    const duration = 2000; // 2 seconds
    const increment = finalCount / (duration / 16); // 60fps
    
    function updateCount() {
        currentCount += increment;
        if (currentCount < finalCount) {
            memberCount.textContent = Math.floor(currentCount);
            requestAnimationFrame(updateCount);
        } else {
            memberCount.textContent = finalCount;
        }
    }
    
    // Start counter when stats section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCount();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.stats'));
    
    // Add hover effect to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
