/* =============================================
   THE DISTORTED APERTURE — script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================
       DATA
       ============================================ */

    /*
     * PORTFOLIO IMAGES
     * These are your real film scans, optimised for web.
     * All files live in assets/images/
     * To update: change `title`, `desc`, or `category` for any entry.
     * Categories: 'street' | 'landscape' | 'portrait'
     */
    const works = [
        // — Alleppy, Kerala — Kodak VISION3 250D (35mm) —
        { src: 'assets/images/alleppy-vision3-35mm-01.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', desc: 'Alleppy, Kerala, India', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-02.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', desc: 'Alleppy, Kerala, India', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-03.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', desc: 'Alleppy, Kerala, India', category: 'portrait' },

        // — Bangkok — Kentmere 400 (35mm) —
        { src: 'assets/images/bangkok-kentmere400-35mm-01.jpg', title: 'Bangkok - Kentmere 400 (35mm)', desc: 'Bangkok, Thailand', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-02.jpg', title: 'Bangkok - Kentmere 400 (35mm)', desc: 'Bangkok, Thailand', category: 'street' },

        // — Bangkok — Fuji Pro 400H (120) —
        { src: 'assets/images/bangkok-fujipro400h-120-01.jpg', title: 'Bangkok - Fuji Pro 400H (120)', desc: 'Bangkok, Thailand', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-02.jpg', title: 'Bangkok - Fuji Pro 400H (120)', desc: 'Bangkok, Thailand', category: 'landscape' },

        // — Bangkok — Kodak VISION3 250D (35mm) —
        { src: 'assets/images/bangkok-vision3-35mm-01.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', desc: 'Bangkok, Thailand', category: 'street' },

        // — Bangkok — Berlin Kino B&W (120) —
        { src: 'assets/images/bangkok-berlinkino-120-01.jpg', title: 'Bangkok - Berlin Kino B&W (120)', desc: 'Bangkok, Thailand', category: 'portrait' },

        // — Bangkok — Kodak Gold 200 (120) —
        { src: 'assets/images/bangkok-kodakgold200-120-01.jpg', title: 'Bangkok - Kodak Gold 200 (120)', desc: 'Bangkok, Thailand', category: 'street' },

        // — Bodhgaya — Kodak Gold 200 (120) —
        { src: 'assets/images/bodhgaya-kodakgold200-120-01.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', desc: 'Bodhgaya, India', category: 'landscape' },
        { src: 'assets/images/bodhgaya-kodakgold200-120-02.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', desc: 'Bodhgaya, India', category: 'landscape' },

        // — Borobudur — Kodak Gold 200 (35mm) —
        { src: 'assets/images/borobudur-kodakgold200-35mm-01.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', desc: 'Borobudur, Indonesia', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-02.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', desc: 'Borobudur, Indonesia', category: 'landscape' },

        // — Chongqing — Kodak Colourplus 200 (35mm) —
        { src: 'assets/images/chongqing-colourplus200-35mm-01.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', desc: 'Chongqing, China', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-02.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', desc: 'Chongqing, China', category: 'street' },

        // — Gowargondi — Kodak Gold 200 (120) —
        { src: 'assets/images/gowargondi-kodakgold200-120-01.jpg', title: 'Gowargondi - Kodak Gold 200 (120)', desc: 'Gowargondi, India', category: 'landscape' },
        { src: 'assets/images/gowargondi-kodakgold200-120-02.jpg', title: 'Gowargondi - Kodak Gold 200 (120)', desc: 'Gowargondi, India', category: 'landscape' },

        // — Jaipur — Kodak Gold 200 (35mm) —
        { src: 'assets/images/jaipur-kodakgold200-35mm-01.jpg', title: 'Jaipur - Kodak Gold 200 (35mm)', desc: 'Jaipur, India', category: 'street' },
        { src: 'assets/images/jaipur-kodakgold200-35mm-02.jpg', title: 'Jaipur - Kodak Gold 200 (35mm)', desc: 'Jaipur, India', category: 'street' },

        // — Kochi — Kodak VISION3 250D (35mm) —
        { src: 'assets/images/kochi-vision3-35mm-01.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', desc: 'Kochi, India', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-02.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', desc: 'Kochi, India', category: 'street' },

        // — Mount Bromo — Kodak Gold 200 (35mm) —
        { src: 'assets/images/bromo-kodakgold200-35mm-01.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', desc: 'East Java, Indonesia', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-02.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', desc: 'East Java, Indonesia', category: 'landscape' },

        // — Mumbai — Kodak Eastman Double-X 5222 (35mm) —
        { src: 'assets/images/mumbai-doublex5222-35mm-01.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', desc: 'Mumbai, India', category: 'landscape' },
        { src: 'assets/images/mumbai-doublex5222-35mm-02.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', desc: 'Mumbai, India', category: 'street' },

        // — Patani — Kodak Gold 200 (35mm) —
        { src: 'assets/images/patani-kodakgold200-35mm-01.jpg', title: 'Patani - Kodak Gold 200 (35mm)', desc: 'Patani, Thailand', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-02.jpg', title: 'Patani - Kodak Gold 200 (35mm)', desc: 'Patani, Thailand', category: 'landscape' },

        // — Saigon — Fuji Pro 400H (120) —
        { src: 'assets/images/saigon-fujipro400h-120-01.jpg', title: 'Saigon - Fuji Pro 400H (120)', desc: 'Saigon, Vietnam', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-02.jpg', title: 'Saigon - Fuji Pro 400H (120)', desc: 'Saigon, Vietnam', category: 'street' },

        // — Sangkhla Buri — Kodak ProImage 100 (35mm) —
        { src: 'assets/images/sangkhla-primage100-35mm-01.jpg', title: 'Sangkhla Buri - Kodak ProImage 100 (35mm)', desc: 'Sangkhla Buri, Thailand', category: 'landscape' },

        // — Songkhla — Kodak Gold 200 (35mm) —
        { src: 'assets/images/songkhla-kodakgold200-35mm-01.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', desc: 'Songkhla, Thailand', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-02.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', desc: 'Songkhla, Thailand', category: 'street' },

        // — Udon Thani — Kodak Gold 200 (35mm) —
        { src: 'assets/images/udon-kodakgold200-35mm-01.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', desc: 'Udon Thani, Thailand', category: 'portrait' },
        { src: 'assets/images/udon-kodakgold200-35mm-02.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', desc: 'Udon Thani, Thailand', category: 'portrait' },

        // — Yogyakarta — Kodak VISION3 250D (35mm) —
        { src: 'assets/images/yogyakarta-vision3-35mm-01.jpg', title: 'Yogyakarta - Kodak VISION3 250D (35mm)', desc: 'Yogyakarta, Indonesia', category: 'portrait' },
    ];

    /*
     * DOCUMENTARY PROJECTS
     * Replace placeholder content with your actual projects:
     * - `cover`: image path or URL
     * - `title`: project name
     * - `year`: year or year range (e.g. '2022–2024')
     * - `tag`: short descriptor (e.g. 'Human Rights', 'Environment', 'Social')
     * - `desc`: 1–2 sentence description
     * - `link`: URL to an external project page, or '#' to leave it unlinked
     */
    /*
     * DOCUMENTARY PROJECTS
     * Update `title`, `year`, `tag`, and `desc` to match your actual projects.
     * Covers use your real film scans — swap any `cover` path to a different image if you prefer.
     */
    const docProjects = [
        {
            cover: 'assets/images/saigon-fujipro400h-120-01.jpg',
            title: 'The Moken Project',
            year: '2024',
            tag: 'Documentary · Human Rights',
            desc: 'The Moken are a sea nomadic people of the Mergui Archipelago, caught between centuries of maritime tradition and the pressures of modernity. This project documents their communities, their relationship with the sea, and the slow erosion of a way of life.',
            link: '#'
        },
        {
            cover: 'assets/images/bangkok-fujipro400h-120-01.jpg',
            title: 'Southeast Asia',
            year: '2023–2024',
            tag: 'Street · Travel',
            desc: 'Across Bangkok, Saigon, Patani, Sangkhla Buri, and Songkhla — a medium format exploration of Southeast Asian street life, shot on Fuji Pro 400H and Kodak Gold through the Mamiya 645.',
            link: '#'
        },
        {
            cover: 'assets/images/bodhgaya-kodakgold200-120-01.jpg',
            title: 'The Indian Subcontinent',
            year: '2023–2024',
            tag: 'Landscape · Portrait',
            desc: 'From the ghats of Bodhgaya to the backwaters of Alleppy and the streets of Mumbai and Jaipur — India on film, in colour and grain.',
            link: '#'
        },
    ];

    /*
     * PRINT SHOP
     * Sizes: list the size options you offer for each print.
     * stripeLink: paste the Stripe Payment Link URL here (https://buy.stripe.com/...)
     *   - Create Payment Links at: https://dashboard.stripe.com/payment-links
     *   - You can create one link per product (all sizes), or one per size if prices differ.
     *   - Replace '#stripe-link-placeholder' with your actual link.
     * badge: optional label (e.g. 'Limited Edition', 'Sold Out', 'New')
     */
    /*
     * PRINT SHOP
     * These use your real film scans as the product images.
     * Once you create Stripe Payment Links, paste each URL into `stripeLink`.
     * How to create a Stripe Payment Link:
     *   1. Go to dashboard.stripe.com → Payment Links → Create
     *   2. Add a product (e.g. "Vietnam I — Fine Art Print")
     *   3. Set the price, copy the link (https://buy.stripe.com/...)
     *   4. Paste it below, replacing '#stripe-link-placeholder'
     */
    const prints = [
        {
            src: 'assets/images/alleppy-vision3-35mm-01.jpg',
            title: 'Alleppy - Kodak VISION3 250D (35mm)',
            edition: 'Edition of 25',
            sizes: ['20×30 cm', '40×60 cm', '60×90 cm'],
            price: '£40',
            stripeLink: '#stripe-link-placeholder',
            badge: 'Limited Edition'
        },
        {
            src: 'assets/images/bangkok-fujipro400h-120-01.jpg',
            title: 'Bangkok - Fuji Pro 400H (120)',
            edition: 'Edition of 20',
            sizes: ['30×40 cm', '50×70 cm'],
            price: '£40',
            stripeLink: '#stripe-link-placeholder',
            badge: null
        },
        {
            src: 'assets/images/bodhgaya-kodakgold200-120-01.jpg',
            title: 'Bodhgaya - Kodak Gold 200 (120)',
            edition: 'Edition of 20',
            sizes: ['30×40 cm', '50×70 cm'],
            price: '£40',
            stripeLink: '#stripe-link-placeholder',
            badge: null
        },
        {
            src: 'assets/images/bromo-kodakgold200-35mm-01.jpg',
            title: 'Mount Bromo - Kodak Gold 200 (35mm)',
            edition: 'Edition of 25',
            sizes: ['20×30 cm', '40×60 cm'],
            price: '£40',
            stripeLink: '#stripe-link-placeholder',
            badge: 'New'
        },
        {
            src: 'assets/images/saigon-fujipro400h-120-01.jpg',
            title: 'Saigon - Fuji Pro 400H (120)',
            edition: 'Edition of 20',
            sizes: ['30×40 cm', '50×70 cm'],
            price: '£40',
            stripeLink: '#stripe-link-placeholder',
            badge: null
        },
        {
            src: 'assets/images/mumbai-doublex5222-35mm-01.jpg',
            title: 'Mumbai - Kodak Double-X 5222 (35mm)',
            edition: 'Edition of 25',
            sizes: ['20×30 cm', '40×60 cm'],
            price: '£40',
            stripeLink: '#stripe-link-placeholder',
            badge: null
        },
    ];


    /* ============================================
       NAVIGATION
       ============================================ */

    const views      = document.querySelectorAll('.view');
    const navLinks   = document.querySelectorAll('[data-view]');
    const navToggle  = document.getElementById('navToggle');
    const navDrawer  = document.getElementById('navDrawer');

    function switchView(viewId) {
        if (!viewId) return;

        views.forEach(v => v.classList.remove('active'));
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

        const target = document.getElementById(viewId);
        if (target) target.classList.add('active');

        const activeLink = document.querySelector(`.nav-links a[data-view="${viewId}"]`);
        if (activeLink) activeLink.classList.add('active');

        window.scrollTo(0, 0);

        // Close mobile drawer
        navDrawer.classList.remove('open');
        navToggle.classList.remove('open');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            const view = link.getAttribute('data-view');
            if (view) {
                e.preventDefault();
                switchView(view);
                window.history.pushState(null, '', `#${view}`);
            }
        });
    });

    window.addEventListener('popstate', () => {
        const hash = window.location.hash.replace('#', '');
        switchView(hash || 'home');
    });

    const initialHash = window.location.hash.replace('#', '');
    if (initialHash) switchView(initialHash);

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navDrawer.classList.toggle('open');
    });

    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();


    /* ============================================
       PORTFOLIO GALLERY
       ============================================ */

    const galleryContainer = document.getElementById('gallery-container');

    function buildGallery(filter) {
        if (!galleryContainer) return;
        galleryContainer.innerHTML = '';

        const filtered = filter === 'all' ? works : works.filter(w => w.category === filter);

        filtered.forEach((work, idx) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.dataset.index = idx;
            item.innerHTML = `
                <img src="${work.src}" alt="${work.title}" loading="lazy">
                <div class="gallery-item-overlay">
                    <div class="gallery-item-info">
                        <h3>${work.title}</h3>
                        <span>${work.desc}</span>
                    </div>
                </div>
            `;
            item.addEventListener('click', () => openLightbox(idx, filtered));
            galleryContainer.appendChild(item);
        });
    }

    buildGallery('all');

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            buildGallery(btn.dataset.filter);
        });
    });


    /* ============================================
       LIGHTBOX
       ============================================ */

    const lightbox       = document.getElementById('lightbox');
    const lightboxImg    = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose  = document.getElementById('lightboxClose');
    const lightboxPrev   = document.getElementById('lightboxPrev');
    const lightboxNext   = document.getElementById('lightboxNext');

    let currentLightboxSet = [];
    let currentLightboxIdx = 0;

    function openLightbox(idx, set) {
        currentLightboxSet = set;
        currentLightboxIdx = idx;
        updateLightboxImage();
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    function updateLightboxImage() {
        const item = currentLightboxSet[currentLightboxIdx];
        lightboxImg.src = item.src;
        lightboxImg.alt = item.title;
        lightboxCaption.textContent = `${item.title} — ${item.desc}`;
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
    });

    lightboxPrev.addEventListener('click', () => {
        currentLightboxIdx = (currentLightboxIdx - 1 + currentLightboxSet.length) % currentLightboxSet.length;
        updateLightboxImage();
    });

    lightboxNext.addEventListener('click', () => {
        currentLightboxIdx = (currentLightboxIdx + 1) % currentLightboxSet.length;
        updateLightboxImage();
    });

    document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lightboxPrev.click();
        if (e.key === 'ArrowRight') lightboxNext.click();
    });


    /* ============================================
       DOCUMENTARY
       ============================================ */

    const docContainer = document.getElementById('doc-container');

    if (docContainer) {
        docProjects.forEach(project => {
            const item = document.createElement('div');
            item.className = 'doc-item';
            item.innerHTML = `
                <div class="doc-item-image">
                    <img src="${project.cover}" alt="${project.title}" loading="lazy">
                    <div class="doc-item-image-overlay"></div>
                </div>
                <div class="doc-item-meta">
                    <span class="doc-item-year">${project.year}</span>
                    <span class="doc-item-tag">${project.tag}</span>
                </div>
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                ${project.link && project.link !== '#'
                    ? `<a href="${project.link}" class="doc-link" target="_blank" rel="noopener">View Project →</a>`
                    : `<span class="doc-link" style="color:var(--text-muted); border-color:var(--border); cursor:default;">Coming Soon</span>`
                }
            `;
            docContainer.appendChild(item);
        });
    }


    /* ============================================
       PRINT SHOP
       ============================================ */

    const shopContainer = document.getElementById('shop-container');

    if (shopContainer) {
        prints.forEach(product => {
            const sizesHTML = product.sizes.map((s, i) =>
                `<button class="size-option${i === 0 ? ' selected' : ''}" type="button">${s}</button>`
            ).join('');

            const badgeHTML = product.badge
                ? `<div class="shop-item-badge">${product.badge}</div>`
                : '';

            const item = document.createElement('div');
            item.className = 'shop-item';
            item.innerHTML = `
                <div class="shop-item-image">
                    <img src="${product.src}" alt="${product.title}" loading="lazy">
                    ${badgeHTML}
                </div>
                <div class="shop-item-info">
                    <h3>${product.title}</h3>
                    <div class="shop-item-meta">
                        <span class="edition">${product.edition}</span>
                    </div>
                    <div class="shop-item-sizes">${sizesHTML}</div>
                    <div class="shop-item-footer">
                        <span class="shop-price">${product.price}</span>
                        <a href="${product.stripeLink}" class="btn-buy" target="_blank" rel="noopener">
                            Buy Print
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 6H11M6 1L11 6L6 11" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            `;

            // Size selector behaviour
            item.querySelectorAll('.size-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    item.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                });
            });

            shopContainer.appendChild(item);
        });
    }


    /* ============================================
       CONTACT FORM
       ============================================ */

    const contactForm   = document.getElementById('contact-form');
    const formSuccess   = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', async e => {
            e.preventDefault();
            const data = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    contactForm.style.display = 'none';
                    if (formSuccess) formSuccess.style.display = 'block';
                } else {
                    alert('There was a problem sending your message. Please try again or email directly.');
                }
            } catch {
                alert('Network error. Please check your connection and try again.');
            }
        });
    }

});
