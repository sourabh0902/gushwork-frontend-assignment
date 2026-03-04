document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('site-header');
    const heroSection = document.querySelector('.hero-section');

    let lastScrollY = window.scrollY;

    // First fold calculation
    const getFoldHeight = () => {
        if (heroSection) {
            return heroSection.offsetHeight; // The entire first section completes the fold
        }
        return window.innerHeight;
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const foldHeight = getFoldHeight();

        const stickyBar = document.getElementById('sticky-bar');

        // Reveal sticky header if scrolled past fold AND scrolling down
        // "When user scrolls beyond first fold: Header appears... When scrolling back up: Header disappears"
        if (currentScrollY > foldHeight) {
            if (stickyBar) stickyBar.classList.add('is-active');

            if (currentScrollY > lastScrollY) {
                // Scrolling down past the fold
                header.classList.add('is-sticky');
                header.classList.remove('is-fixed');
                if (stickyBar) stickyBar.classList.add('is-below-header');
            } else {
                // Scrolling back up
                header.classList.remove('is-sticky');
                header.classList.add('is-fixed');
                if (stickyBar) stickyBar.classList.remove('is-below-header');
            }
        } else {
            // Above the fold - header should be absolute at top of page (as it scrolls naturally out of view)
            header.classList.remove('is-sticky', 'is-fixed');
            if (stickyBar) {
                stickyBar.classList.remove('is-active', 'is-below-header');
            }
        }

        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Quote Modal
    const quoteModalBackdrop = document.getElementById('quote-modal-backdrop');
    const openQuoteBtn = document.getElementById('open-quote-modal');
    const closeQuoteBtn = document.getElementById('close-quote-modal');

    // Datasheet Modal
    const datasheetModalBackdrop = document.getElementById('datasheet-modal-backdrop');
    const openDatasheetBtn = document.getElementById('open-datasheet-modal');
    const closeDatasheetBtn = document.getElementById('close-datasheet-modal');

    const openModal = (modal, e) => {
        if (e) e.preventDefault();
        modal.classList.add('is-active');
        document.body.classList.add('modal-open');
    };

    const closeModal = (modal) => {
        modal.classList.remove('is-active');
        document.body.classList.remove('modal-open');
    };

    const openQuoteBtnSticky = document.getElementById('open-quote-modal-sticky');

    // Quote Modal Listeners
    if (openQuoteBtn) openQuoteBtn.addEventListener('click', (e) => openModal(quoteModalBackdrop, e));
    if (openQuoteBtnSticky) openQuoteBtnSticky.addEventListener('click', (e) => openModal(quoteModalBackdrop, e));
    if (closeQuoteBtn) closeQuoteBtn.addEventListener('click', () => closeModal(quoteModalBackdrop));
    if (quoteModalBackdrop) {
        quoteModalBackdrop.addEventListener('click', (e) => {
            if (e.target === quoteModalBackdrop) closeModal(quoteModalBackdrop);
        });
    }

    // Datasheet Modal Listeners
    if (openDatasheetBtn) openDatasheetBtn.addEventListener('click', (e) => openModal(datasheetModalBackdrop, e));
    if (closeDatasheetBtn) closeDatasheetBtn.addEventListener('click', () => closeModal(datasheetModalBackdrop));
    if (datasheetModalBackdrop) {
        datasheetModalBackdrop.addEventListener('click', (e) => {
            if (e.target === datasheetModalBackdrop) closeModal(datasheetModalBackdrop);
        });
    }

    // Global Escape Key Listener for Open Modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (quoteModalBackdrop && quoteModalBackdrop.classList.contains('is-active')) {
                closeModal(quoteModalBackdrop);
            }
            if (datasheetModalBackdrop && datasheetModalBackdrop.classList.contains('is-active')) {
                closeModal(datasheetModalBackdrop);
            }
        }
    });

    // Industries Carousel
    const carouselTrack = document.getElementById('industries-track');
    const prevBtn = document.getElementById('industries-prev');
    const nextBtn = document.getElementById('industries-next');

    if (carouselTrack && prevBtn && nextBtn) {
        const cards = carouselTrack.querySelectorAll('.industries-card');
        const visibleCount = 4;
        let currentIndex = 0;
        const maxIndex = cards.length - visibleCount;

        const updateCarousel = () => {
            const gap = 24;
            const cardWidth = cards[0].offsetWidth;
            const offset = currentIndex * (cardWidth + gap);
            carouselTrack.style.transform = `translateX(-${offset}px)`;
            prevBtn.disabled = currentIndex <= 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        };

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('is-open');

            item.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', !isOpen);
        });
    });

    // Testimonials Draggable Carousel
    const testimonialsTrack = document.getElementById('testimonials-track');

    if (testimonialsTrack) {
        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;

        const cards = testimonialsTrack.querySelectorAll('.testimonial-card');
        const gap = 24;
        const getMaxScroll = () => {
            const totalWidth = Array.from(cards).reduce((sum, card) => sum + card.offsetWidth + gap, -gap);
            const containerWidth = testimonialsTrack.parentElement.offsetWidth;
            return Math.max(0, totalWidth - containerWidth);
        };

        const setTranslate = (value) => {
            const max = getMaxScroll();
            currentTranslate = Math.max(-max, Math.min(0, value));
            testimonialsTrack.style.transform = `translateX(${currentTranslate}px)`;
        };

        const onDragStart = (e) => {
            isDragging = true;
            startX = (e.type === 'touchstart') ? e.touches[0].clientX : e.clientX;
            prevTranslate = currentTranslate;
            testimonialsTrack.classList.add('is-dragging');
            testimonialsTrack.style.transition = 'none';
        };

        const onDragMove = (e) => {
            if (!isDragging) return;
            const x = (e.type === 'touchmove') ? e.touches[0].clientX : e.clientX;
            const diff = x - startX;
            setTranslate(prevTranslate + diff);
        };

        const onDragEnd = () => {
            if (!isDragging) return;
            isDragging = false;
            testimonialsTrack.classList.remove('is-dragging');
            testimonialsTrack.style.transition = 'transform 0.3s ease';
        };

        testimonialsTrack.addEventListener('mousedown', onDragStart);
        testimonialsTrack.addEventListener('mousemove', onDragMove);
        testimonialsTrack.addEventListener('mouseup', onDragEnd);
        testimonialsTrack.addEventListener('mouseleave', onDragEnd);

        testimonialsTrack.addEventListener('touchstart', onDragStart, { passive: true });
        testimonialsTrack.addEventListener('touchmove', onDragMove, { passive: true });
        testimonialsTrack.addEventListener('touchend', onDragEnd);

        testimonialsTrack.addEventListener('dragstart', (e) => e.preventDefault());
    }

    // Desktop Hover Zoom
    const heroGalleryDesktop = document.querySelector('.hero-gallery-desktop');
    if (heroGalleryDesktop) {
        const heroMainWrapper = heroGalleryDesktop.querySelector('.main-image-wrapper');
        const heroMainImage = heroGalleryDesktop.querySelector('.main-image');
        const zoomPreview = heroGalleryDesktop.querySelector('.zoom-preview');
        const zoomInner = heroGalleryDesktop.querySelector('.zoom-preview-inner');
        const heroZoomLens = heroGalleryDesktop.querySelector('.hero-zoom-lens');

        if (heroMainWrapper && heroMainImage && zoomPreview && zoomInner && heroZoomLens) {

            // Only enable zoom on desktop/larger screens where mouse is primary
            const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;

            heroMainWrapper.addEventListener('mouseenter', () => {
                if (!isDesktop()) return;
                zoomInner.style.backgroundImage = `url('${heroMainImage.src}')`;
                zoomPreview.classList.add('is-active');
            });

            heroMainWrapper.addEventListener('mousemove', (e) => {
                if (!isDesktop()) return;

                const rect = heroMainWrapper.getBoundingClientRect();
                let cursorX = e.clientX - rect.left;
                let cursorY = e.clientY - rect.top;

                // Calculate background position percentage based on raw cursor
                const xPercent = (cursorX / rect.width) * 100;
                const yPercent = (cursorY / rect.height) * 100;
                zoomInner.style.backgroundPosition = `${xPercent}% ${yPercent}%`;

                // Lens box dimensions (140x140 from CSS)
                const lensWidth = 140;
                const lensHeight = 140;

                // Clamp lens position so it doesn't overflow the image wrapper
                const lensX = Math.max(lensWidth / 2, Math.min(cursorX, rect.width - lensWidth / 2));
                const lensY = Math.max(lensHeight / 2, Math.min(cursorY, rect.height - lensHeight / 2));

                heroZoomLens.style.left = `${lensX}px`;
                heroZoomLens.style.top = `${lensY}px`;
                heroZoomLens.style.transform = `translate(-50%, -50%)`;
            });

            heroMainWrapper.addEventListener('mouseleave', () => {
                zoomPreview.classList.remove('is-active');
            });
        }
    }

});
