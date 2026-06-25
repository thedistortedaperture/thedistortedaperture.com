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
        // — Vietnam, Mamiya 645 · Fuji Pro 400H —
        { src: 'assets/images/vietnam-01.jpg', title: 'Vietnam I',   desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/vietnam-02.jpg', title: 'Vietnam II',  desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/vietnam-03.jpg', title: 'Vietnam III', desc: 'Mamiya 645 · Fuji Pro 400H', category: 'portrait' },
        { src: 'assets/images/vietnam-04.jpg', title: 'Vietnam IV',  desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/vietnam-05.jpg', title: 'Vietnam V',   desc: 'Mamiya 645 · Fuji Pro 400H', category: 'portrait' },
        { src: 'assets/images/vietnam-06.jpg', title: 'Vietnam VI',  desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/vietnam-07.jpg', title: 'Vietnam VII', desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/vietnam-08.jpg', title: 'Vietnam VIII',desc: 'Mamiya 645 · Fuji Pro 400H', category: 'portrait' },
        { src: 'assets/images/vietnam-09.jpg', title: 'Vietnam IX',  desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/vietnam-10.jpg', title: 'Vietnam X',   desc: 'Mamiya 645 · Fuji Pro 400H', category: 'landscape' },
        { src: 'assets/images/vietnam-11.jpg', title: 'Vietnam XI',  desc: 'Mamiya 645 · Fuji Pro 400H', category: 'landscape' },
        { src: 'assets/images/vietnam-12.jpg', title: 'Vietnam XII', desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },

        // — Bangkok, Mamiya 645 · Fuji Pro 400H —
        { src: 'assets/images/bangkok-01.jpg', title: 'Bangkok I',   desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/bangkok-02.jpg', title: 'Bangkok II',  desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/bangkok-03.jpg', title: 'Bangkok III', desc: 'Mamiya 645 · Fuji Pro 400H', category: 'portrait' },
        { src: 'assets/images/bangkok-04.jpg', title: 'Bangkok IV',  desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/bangkok-05.jpg', title: 'Bangkok V',   desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/bangkok-06.jpg', title: 'Bangkok VI',  desc: 'Mamiya 645 · Fuji Pro 400H', category: 'portrait' },
        { src: 'assets/images/bangkok-07.jpg', title: 'Bangkok VII', desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/bangkok-08.jpg', title: 'Bangkok VIII',desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/bangkok-09.jpg', title: 'Bangkok IX',  desc: 'Mamiya 645 · Fuji Pro 400H', category: 'landscape' },
        { src: 'assets/images/bangkok-10.jpg', title: 'Bangkok X',   desc: 'Mamiya 645 · Fuji Pro 400H', category: 'street' },
        { src: 'assets/images/bangkok-11.jpg', title: 'Bangkok XI',  desc: 'Mamiya 645 · Fuji Pro 400H', category: 'portrait' },

        // — Mamiya 645 · Kodak Gold 200 —
        { src: 'assets/images/kodak-01.jpg', title: 'Kodak I',    desc: 'Mamiya 645 · Kodak Gold 200', category: 'landscape' },
        { src: 'assets/images/kodak-02.jpg', title: 'Kodak II',   desc: 'Mamiya 645 · Kodak Gold 200', category: 'landscape' },
        { src: 'assets/images/kodak-03.jpg', title: 'Kodak III',  desc: 'Mamiya 645 · Kodak Gold 200', category: 'portrait' },
        { src: 'assets/images/kodak-04.jpg', title: 'Kodak IV',   desc: 'Mamiya 645 · Kodak Gold 200', category: 'landscape' },
        { src: 'assets/images/kodak-05.jpg', title: 'Kodak V',    desc: 'Mamiya 645 · Kodak Gold 200', category: 'landscape' },
        { src: 'assets/images/kodak-06.jpg', title: 'Kodak VI',   desc: 'Mamiya 645 · Kodak Gold 200', category: 'portrait' },
        { src: 'assets/images/kodak-07.jpg', title: 'Kodak VII',  desc: 'Mamiya 645 · Kodak Gold 200', category: 'landscape' },
        { src: 'assets/images/kodak-08.jpg', title: 'Kodak VIII', desc: 'Mamiya 645 · Kodak Gold 200', category: 'portrait' },
        { src: 'assets/images/kodak-09.jpg', title: 'Kodak IX',   desc: 'Mamiya 645 · Kodak Gold 200', category: 'landscape' },
        { src: 'assets/images/kodak-10.jpg', title: 'Kodak X',    desc: 'Mamiya 645 · Kodak Gold 200', category: 'street' },
        { src: 'assets/images/kodak-11.jpg', title: 'Kodak XI',   desc: 'Mamiya 645 · Kodak Gold 200', category: 'landscape' },
        { src: 'assets/images/kodak-12.jpg', title: 'Kodak XII',  desc: 'Mamiya 645 · Kodak Gold 200', category: 'landscape' },
        { src: 'assets/images/kodak-13.jpg', title: 'Kodak XIII', desc: 'Mamiya 645 · Kodak Gold 200', category: 'portrait' },
        { src: 'assets/images/kodak-14.jpg', title: 'Kodak XIV',  desc: 'Mamiya 645 · Kodak Gold 200', category: 'landscape' },
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
            cover: 'assets/images/vietnam-05.jpg',
            title: 'Vietnam',
            year: '2024',
            tag: 'Street · Travel',
            desc: 'Shot on a Mamiya 645 loaded with Fuji Pro 400H, this series moves through the streets, markets, and quieter corners of Vietnam — medium format grain meeting the warmth of Southeast Asian light.',
            link: '#'
        },
        {
            cover: 'assets/images/bangkok-03.jpg',
            title: 'Bangkok',
            year: '2024',
            tag: 'Street · Portrait',
            desc: 'Bangkok through the Mamiya — candid portraits and street scenes from a city that never holds still. Fuji Pro 400H renders the heat and colour with a softness that digital can\'t quite reach.',
            link: '#'
        },
        {
            cover: 'assets/images/kodak-04.jpg',
            title: 'Kodak Gold',
            year: '2023',
            tag: 'Landscape · Portrait',
            desc: 'A roll of Kodak Gold 200 through the Mamiya 645. Warm, a little nostalgic, slightly imperfect — exactly what analogue is for.',
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
            src: 'assets/images/vietnam-01.jpg',
            title: 'Vietnam I',
            edition: 'Edition of 25',
            sizes: ['20×30 cm', '40×60 cm', '60×90 cm'],
            price: 'from €85',
            stripeLink: '#stripe-link-placeholder',
            badge: 'Limited Edition'
        },
        {
            src: 'assets/images/bangkok-08.jpg',
            title: 'Bangkok VIII',
            edition: 'Edition of 20',
            sizes: ['30×40 cm', '50×70 cm'],
            price: 'from €95',
            stripeLink: '#stripe-link-placeholder',
            badge: null
        },
        {
            src: 'assets/images/vietnam-09.jpg',
            title: 'Vietnam IX',
            edition: 'Edition of 15',
            sizes: ['40×60 cm', '60×90 cm'],
            price: 'from €120',
            stripeLink: '#stripe-link-placeholder',
            badge: null
        },
        {
            src: 'assets/images/kodak-11.jpg',
            title: 'Kodak XI',
            edition: 'Open Edition',
            sizes: ['20×30 cm', '30×45 cm'],
            price: 'from €65',
            stripeLink: '#stripe-link-placeholder',
            badge: 'New'
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
