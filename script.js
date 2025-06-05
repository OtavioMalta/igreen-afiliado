// Script simples para melhorar a experiência do usuário
document.addEventListener('DOMContentLoaded', function() {
    // Rolagem suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Formulário de contato (simulação de envio)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Simular um atraso de processamento
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Redirecionar para WhatsApp após envio
                window.location.href = 'https://wa.me/5599999999999?text=Olá!%20Vi%20o%20site%20da%20iGreen%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20desconto%20na%20conta%20de%20luz.';
            }, 1500);
        });
    }
});
