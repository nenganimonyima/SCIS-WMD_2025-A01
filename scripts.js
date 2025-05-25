document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            window.location.href = this.getAttribute('href');
        });
    });
     // 2. Fixed Pagination (Now fully functional)
    const setupPagination = () => {
        const itemsPerPage = 6;
        const sermonItems = document.querySelectorAll('.sermon-item');
        const pageCount = Math.ceil(sermonItems.length / itemsPerPage);
        let currentPage = 1;

        const showPage = (page) => {
            sermonItems.forEach((item, index) => {
                item.style.display = 
                    (index >= (page-1)*itemsPerPage && index < page*itemsPerPage) 
                    ? 'block' : 'none';
            });
        };

        document.querySelectorAll('.pagination .page-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                if(this.textContent === 'Previous') currentPage--;
                else if(this.textContent === 'Next') currentPage++;
                else currentPage = parseInt(this.textContent);
                currentPage = Math.max(1, Math.min(currentPage, pageCount));
                showPage(currentPage);
                
                // Update active state
                document.querySelectorAll('.pagination .page-item').forEach(item => {
                    item.classList.remove('active');
                    if(item.textContent.trim() === currentPage.toString()) {
                        item.classList.add('active');
                    }
                });
            });
        });

        showPage(1); // Initialize
    };
    setupPagination();
});

    // Donation form validation
    const donationForm = document.querySelector('.donation-form form');
    if (donationForm) {
        donationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = donationForm.querySelector('input[name="amount"]').value;
            const name = donationForm.querySelector('input[name="name"]').value;
            const email = donationForm.querySelector('input[name="email"]').value;
            if (amount && amount > 0 && name && email) {
                alert('Thank you for your donation! A confirmation email will be sent.');
                donationForm.reset();
            } else {
                alert('Please fill in all fields with valid information.');
            }
        });
    }

    // Contact form validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[name="name"]').value;



            const email = contactForm.querySelector('input[name="email"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;
            if (name && email && message) {
                alert('Your message has been sent! We will respond soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
