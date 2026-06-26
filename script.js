/* =============================================
   THE DISTORTED APERTURE — script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================
       DATA
       ============================================ */

    const works = [
        { src: 'assets/images/alleppy-vision3-35mm-01.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-02.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-03.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-04.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-05.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-06.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-07.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-08.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-09.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-10.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-11.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-12.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-13.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/alleppy-vision3-35mm-14.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/bangkok-berlinkino-120-01.jpg', title: 'Bangkok - Berlin Kino B&W (120)', category: 'portrait' },
        { src: 'assets/images/bangkok-berlinkino-120-02.jpg', title: 'Bangkok - Berlin Kino B&W (120)', category: 'portrait' },
        { src: 'assets/images/bangkok-berlinkino-120-03.jpg', title: 'Bangkok - Berlin Kino B&W (120)', category: 'portrait' },
        { src: 'assets/images/bangkok-berlinkino-120-04.jpg', title: 'Bangkok - Berlin Kino B&W (120)', category: 'portrait' },
        { src: 'assets/images/bangkok-berlinkino-120-05.jpg', title: 'Bangkok - Berlin Kino B&W (120)', category: 'portrait' },
        { src: 'assets/images/bangkok-berlinkino-120-06.jpg', title: 'Bangkok - Berlin Kino B&W (120)', category: 'portrait' },
        { src: 'assets/images/bangkok-berlinkino-120-07.jpg', title: 'Bangkok - Berlin Kino B&W (120)', category: 'portrait' },
        { src: 'assets/images/bangkok-berlinkino-120-08.jpg', title: 'Bangkok - Berlin Kino B&W (120)', category: 'portrait' },
        { src: 'assets/images/bangkok-doublex5222-35mm-01.jpg', title: 'Bangkok - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-doublex5222-35mm-02.jpg', title: 'Bangkok - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-doublex5222-35mm-03.jpg', title: 'Bangkok - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-doublex5222-35mm-04.jpg', title: 'Bangkok - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-doublex5222-35mm-05.jpg', title: 'Bangkok - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-01.jpg', title: 'Bangkok - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-02.jpg', title: 'Bangkok - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-03.jpg', title: 'Bangkok - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-04.jpg', title: 'Bangkok - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-05.jpg', title: 'Bangkok - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-06.jpg', title: 'Bangkok - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-07.jpg', title: 'Bangkok - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-08.jpg', title: 'Bangkok - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-09.jpg', title: 'Bangkok - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-10.jpg', title: 'Bangkok - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/bangkok-fujipro400h-120-11.jpg', title: 'Bangkok - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-01.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-02.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-03.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-04.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-05.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-06.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-07.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-08.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-09.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-10.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-11.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-12.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-13.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-14.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-15.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-16.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-17.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-18.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-19.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-20.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-21.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-22.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-23.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-24.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-25.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-26.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-27.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-28.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-29.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-30.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-31.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-32.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-33.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-34.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kentmere400-35mm-35.jpg', title: 'Bangkok - Kentmere 400 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-kodakgold200-120-01.jpg', title: 'Bangkok - Kodak Gold 200 (120)', category: 'street' },
        { src: 'assets/images/bangkok-kodakgold200-120-02.jpg', title: 'Bangkok - Kodak Gold 200 (120)', category: 'street' },
        { src: 'assets/images/bangkok-kodakgold200-120-03.jpg', title: 'Bangkok - Kodak Gold 200 (120)', category: 'street' },
        { src: 'assets/images/bangkok-kodakgold200-120-04.jpg', title: 'Bangkok - Kodak Gold 200 (120)', category: 'street' },
        { src: 'assets/images/bangkok-kodakgold200-120-05.jpg', title: 'Bangkok - Kodak Gold 200 (120)', category: 'street' },
        { src: 'assets/images/bangkok-kodakgold200-120-06.jpg', title: 'Bangkok - Kodak Gold 200 (120)', category: 'street' },
        { src: 'assets/images/bangkok-kodakgold200-120-07.jpg', title: 'Bangkok - Kodak Gold 200 (120)', category: 'street' },
        { src: 'assets/images/bangkok-kodakgold200-120-08.jpg', title: 'Bangkok - Kodak Gold 200 (120)', category: 'street' },
        { src: 'assets/images/bangkok-kodakgold200-120-09.jpg', title: 'Bangkok - Kodak Gold 200 (120)', category: 'street' },
        { src: 'assets/images/bangkok-kodakgold200-120-10.jpg', title: 'Bangkok - Kodak Gold 200 (120)', category: 'street' },
        { src: 'assets/images/bangkok-kodakgold200-120-11.jpg', title: 'Bangkok - Kodak Gold 200 (120)', category: 'street' },
        { src: 'assets/images/bangkok-primage100-35mm-01.jpg', title: 'Bangkok - Kodak ProImage 100 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-primage100-35mm-02.jpg', title: 'Bangkok - Kodak ProImage 100 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-primage100-35mm-03.jpg', title: 'Bangkok - Kodak ProImage 100 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-primage100-35mm-04.jpg', title: 'Bangkok - Kodak ProImage 100 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-primage100-35mm-05.jpg', title: 'Bangkok - Kodak ProImage 100 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-primage100-35mm-06.jpg', title: 'Bangkok - Kodak ProImage 100 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-primage100-35mm-07.jpg', title: 'Bangkok - Kodak ProImage 100 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-primage100-35mm-08.jpg', title: 'Bangkok - Kodak ProImage 100 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-primage100-35mm-09.jpg', title: 'Bangkok - Kodak ProImage 100 (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-01.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-02.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-03.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-04.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-05.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-06.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-07.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-08.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-09.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-10.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-11.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-12.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bangkok-vision3-35mm-13.jpg', title: 'Bangkok - Kodak VISION3 250D (35mm)', category: 'street' },
        { src: 'assets/images/bodhgaya-kodakgold200-120-01.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/bodhgaya-kodakgold200-120-02.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/bodhgaya-kodakgold200-120-03.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/bodhgaya-kodakgold200-120-04.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/bodhgaya-kodakgold200-120-05.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/bodhgaya-kodakgold200-120-06.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/bodhgaya-kodakgold200-120-07.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/bodhgaya-kodakgold200-120-08.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/bodhgaya-kodakgold200-120-09.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-01.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-02.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-03.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-04.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-05.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-06.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-07.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-08.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-09.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-10.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-11.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/borobudur-kodakgold200-35mm-12.jpg', title: 'Borobudur - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-01.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-02.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-03.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-04.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-05.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-06.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-07.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-08.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-09.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-10.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-11.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-12.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-13.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-14.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-15.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-16.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/bromo-kodakgold200-35mm-17.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/chongqing-colourplus200-35mm-01.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-02.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-03.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-04.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-05.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-06.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-07.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-08.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-09.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-10.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-11.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-12.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-13.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-14.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-15.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-16.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-17.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-18.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-19.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-20.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-21.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-22.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-23.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-24.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-25.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-26.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-27.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-28.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-29.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-30.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-31.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-32.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-33.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-colourplus200-35mm-34.jpg', title: 'Chongqing - Kodak Colourplus 200 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-01.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-02.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-03.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-04.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-05.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-06.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-07.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-08.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-09.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-10.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-11.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-12.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-13.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-14.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-15.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-16.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-17.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-18.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-19.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-20.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-21.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-22.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-23.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-24.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-25.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/chongqing-ultramax400-35mm-26.jpg', title: 'Chongqing - Kodak Ultramax 400 (35mm)', category: 'street' },
        { src: 'assets/images/gowargondi-kodakgold200-120-01.jpg', title: 'Gowargondi - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/gowargondi-kodakgold200-120-02.jpg', title: 'Gowargondi - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/gowargondi-kodakgold200-120-03.jpg', title: 'Gowargondi - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/gowargondi-kodakgold200-120-04.jpg', title: 'Gowargondi - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/gowargondi-kodakgold200-120-05.jpg', title: 'Gowargondi - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/gowargondi-kodakgold200-120-06.jpg', title: 'Gowargondi - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/gowargondi-kodakgold200-120-07.jpg', title: 'Gowargondi - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/gowargondi-kodakgold200-120-08.jpg', title: 'Gowargondi - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/gowargondi-kodakgold200-120-09.jpg', title: 'Gowargondi - Kodak Gold 200 (120)', category: 'landscape' },
        { src: 'assets/images/jaipur-kodakgold200-35mm-01.jpg', title: 'Jaipur - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/jaipur-kodakgold200-35mm-02.jpg', title: 'Jaipur - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/jaipur-kodakgold200-35mm-03.jpg', title: 'Jaipur - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/jaipur-kodakgold200-35mm-04.jpg', title: 'Jaipur - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/jaipur-kodakgold200-35mm-05.jpg', title: 'Jaipur - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/jaipur-kodakgold200-35mm-06.jpg', title: 'Jaipur - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/jaipur-kodakgold200-35mm-07.jpg', title: 'Jaipur - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/kochi-vision3-35mm-01.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-02.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-03.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-04.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-05.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-06.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-07.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-08.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-09.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-10.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-11.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-12.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-13.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-14.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-15.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-16.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-17.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/kochi-vision3-35mm-18.jpg', title: 'Kochi - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/mumbai-doublex5222-35mm-01.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/mumbai-doublex5222-35mm-02.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/mumbai-doublex5222-35mm-03.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/mumbai-doublex5222-35mm-04.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/mumbai-doublex5222-35mm-05.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/mumbai-doublex5222-35mm-06.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/mumbai-doublex5222-35mm-07.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/mumbai-doublex5222-35mm-08.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/mumbai-doublex5222-35mm-09.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/mumbai-doublex5222-35mm-10.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/mumbai-doublex5222-35mm-11.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/mumbai-doublex5222-35mm-12.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', category: 'street' },
        { src: 'assets/images/patani-kodakgold200-35mm-01.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-02.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-03.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-04.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-05.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-06.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-07.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-08.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-09.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-10.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-11.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-12.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-13.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-14.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-15.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-16.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-17.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/patani-kodakgold200-35mm-18.jpg', title: 'Patani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/ranong-primage100-35mm-01.jpg', title: 'Ranong - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/ranong-primage100-35mm-02.jpg', title: 'Ranong - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/rosfilm400-35mm-01.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-02.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-03.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-04.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-05.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-06.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-07.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-08.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-09.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-10.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-11.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-12.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-13.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-14.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-15.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-16.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/rosfilm400-35mm-17.jpg', title: 'Rosfilm 400 (35mm)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-01.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-02.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-03.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-04.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-05.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-06.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-07.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-08.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-09.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-10.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-11.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-12.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-13.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/saigon-fujipro400h-120-14.jpg', title: 'Saigon - Fuji Pro 400H (120)', category: 'street' },
        { src: 'assets/images/sangkhla-primage100-35mm-01.jpg', title: 'Sangkhla Buri - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/sangkhla-primage100-35mm-02.jpg', title: 'Sangkhla Buri - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/sangkhla-primage100-35mm-03.jpg', title: 'Sangkhla Buri - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/sangkhla-primage100-35mm-04.jpg', title: 'Sangkhla Buri - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/sangkhla-primage100-35mm-05.jpg', title: 'Sangkhla Buri - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/sangkhla-primage100-35mm-06.jpg', title: 'Sangkhla Buri - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/sangkhla-primage100-35mm-07.jpg', title: 'Sangkhla Buri - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/sangkhla-primage100-35mm-08.jpg', title: 'Sangkhla Buri - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/sangkhla-primage100-35mm-09.jpg', title: 'Sangkhla Buri - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/sangkhla-primage100-35mm-10.jpg', title: 'Sangkhla Buri - Kodak ProImage 100 (35mm)', category: 'landscape' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-01.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-02.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-03.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-04.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-05.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-06.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-07.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-08.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-09.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-10.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-11.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-12.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-13.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-14.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-15.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-16.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-17.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/songkhla-kodakgold200-35mm-18.jpg', title: 'Songkhla - Kodak Gold 200 (35mm)', category: 'street' },
        { src: 'assets/images/udon-kodakgold200-35mm-01.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-02.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-03.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-04.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-05.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-06.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-07.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-08.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-09.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-10.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-11.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-12.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-13.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-14.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-kodakgold200-35mm-15.jpg', title: 'Udon Thani - Kodak Gold 200 (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-vision3-35mm-01.jpg', title: 'Udon Thani - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-vision3-35mm-02.jpg', title: 'Udon Thani - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-vision3-35mm-03.jpg', title: 'Udon Thani - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/udon-vision3-35mm-04.jpg', title: 'Udon Thani - Kodak VISION3 250D (35mm)', category: 'landscape' },
        { src: 'assets/images/yogyakarta-vision3-35mm-01.jpg', title: 'Yogyakarta - Kodak VISION3 250D (35mm)', category: 'portrait' },
        { src: 'assets/images/yogyakarta-vision3-35mm-02.jpg', title: 'Yogyakarta - Kodak VISION3 250D (35mm)', category: 'portrait' },
        { src: 'assets/images/yogyakarta-vision3-35mm-03.jpg', title: 'Yogyakarta - Kodak VISION3 250D (35mm)', category: 'portrait' },
        { src: 'assets/images/yogyakarta-vision3-35mm-04.jpg', title: 'Yogyakarta - Kodak VISION3 250D (35mm)', category: 'portrait' }    ];

    const docProjects = [
        {
            cover: 'assets/images/moken-01.jpg',
            title: 'Where the Sea Remembers',
            subtitle: 'The Moken Project',
            year: '2024',
            tag: 'Documentary · Human Rights',
            desc: 'The sea remembers what the world forgets. For the Moken, an Indigenous seafaring community of the Andaman coast, water is not just a livelihood — it is spirit, compass, and home.',
            photos: [
                { src: 'assets/images/moken-01.jpg', caption: 'Father and son share a laugh on their Kabang (longtail boat). Amid uncertainties, kinship still flows between generations like the sea itself.' },
                { src: 'assets/images/moken-02.jpg', caption: 'A young Moken man stands barefoot on his Kabang. He may be among the last of his generation to inherit the seafaring life, as traditional knowledge fades under pressure from statelessness and restricted access to ancestral waters.' },
                { src: 'assets/images/moken-03.jpg', caption: 'A Kabang glides into open sea, echoing generations of Moken navigation. The water is both path and lifeblood, still read through signs, waves, and silence.' },
                { src: 'assets/images/moken-04.jpg', caption: 'Kabangs float quietly in still water. These are more than vessels — they are living tools of survival, memory, and resistance, anchored in both tradition and uncertainty.' },
                { src: 'assets/images/moken-05.jpg', caption: 'Under pouring rain, a Moken couple sits in front of their fragile home. Once nomadic seafarers living on Kabangs, they were forced to settle on land, facing deep uncertainty about their status, home, and ancestral way of life.' },
                { src: 'assets/images/moken-06.jpg', caption: 'A Moken couple mend their fishing nets under a plastic tarp. Traditional skills persist despite hardship, offering quiet resistance to forced modernization and the loss of self-sufficient ways of life.' },
                { src: 'assets/images/moken-07.jpg', caption: 'A Moken man sits quietly on the porch of his stilt house, overlooking the tides that once guided him and his ancestors. Built close to the water yet rooted in uncertainty, this home reflects the transition from a nomadic life at sea to a fragile existence on land.' },
                { src: 'assets/images/moken-08.jpg', caption: 'Washed by rising tides and surrounded by decay, this stilt house stands as a symbol of resilience on unstable ground. For the Moken, the shoreline is no longer a sanctuary but a fragile boundary between memory and displacement.' },
                { src: 'assets/images/moken-09.jpg', caption: 'An elderly Moken woman watches the rain from her wooden home. Her gaze holds stories of the sea — of memory, survival, and a vanishing way of life shaped by tides and spirits, now threatened by rising seas and restricted waters.' },
            ]
        },
        {
            cover: 'assets/images/bangkok-fujipro400h-120-01.jpg',
            title: 'Southeast Asia',
            subtitle: null,
            year: '2023–2024',
            tag: 'Street · Travel',
            desc: 'Across Bangkok, Saigon, Patani, Sangkhla Buri, and Songkhla — a medium format exploration of Southeast Asian street life, shot on Fuji Pro 400H and Kodak Gold through the Mamiya 645.',
            photos: []
        },
        {
            cover: 'assets/images/bodhgaya-kodakgold200-120-01.jpg',
            title: 'The Indian Subcontinent',
            subtitle: null,
            year: '2023–2024',
            tag: 'Landscape · Portrait',
            desc: 'From the ghats of Bodhgaya to the backwaters of Alleppy and the streets of Mumbai and Jaipur — India on film, in colour and grain.',
            photos: []
        },
    ];

    const prints = [
        { src: 'assets/images/alleppy-vision3-35mm-01.jpg', title: 'Alleppy - Kodak VISION3 250D (35mm)', edition: 'Edition of 25', sizes: ['20×30 cm', '40×60 cm', '60×90 cm'], price: '£40', stripeLink: '#stripe-link-placeholder', badge: 'Limited Edition' },
        { src: 'assets/images/bangkok-fujipro400h-120-01.jpg', title: 'Bangkok - Fuji Pro 400H (120)', edition: 'Edition of 20', sizes: ['30×40 cm', '50×70 cm'], price: '£40', stripeLink: '#stripe-link-placeholder', badge: null },
        { src: 'assets/images/bodhgaya-kodakgold200-120-01.jpg', title: 'Bodhgaya - Kodak Gold 200 (120)', edition: 'Edition of 20', sizes: ['30×40 cm', '50×70 cm'], price: '£40', stripeLink: '#stripe-link-placeholder', badge: null },
        { src: 'assets/images/bromo-kodakgold200-35mm-01.jpg', title: 'Mount Bromo - Kodak Gold 200 (35mm)', edition: 'Edition of 25', sizes: ['20×30 cm', '40×60 cm'], price: '£40', stripeLink: '#stripe-link-placeholder', badge: 'New' },
        { src: 'assets/images/saigon-fujipro400h-120-01.jpg', title: 'Saigon - Fuji Pro 400H (120)', edition: 'Edition of 20', sizes: ['30×40 cm', '50×70 cm'], price: '£40', stripeLink: '#stripe-link-placeholder', badge: null },
        { src: 'assets/images/mumbai-doublex5222-35mm-01.jpg', title: 'Mumbai - Kodak Double-X 5222 (35mm)', edition: 'Edition of 25', sizes: ['20×30 cm', '40×60 cm'], price: '£40', stripeLink: '#stripe-link-placeholder', badge: null },
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

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navDrawer.classList.toggle('open');
    });

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
                    </div>
                </div>
            `;
            item.addEventListener('click', () => openLightbox(idx, filtered));
            galleryContainer.appendChild(item);
        });
    }

    buildGallery('all');

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

    const lightbox        = document.getElementById('lightbox');
    const lightboxImg     = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose   = document.getElementById('lightboxClose');
    const lightboxPrev    = document.getElementById('lightboxPrev');
    const lightboxNext    = document.getElementById('lightboxNext');

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
        lightboxCaption.textContent = item.title;
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
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
    const docDetail    = document.getElementById('doc-detail');

    function openDocDetail(project) {
        if (!docDetail) return;
        docDetail.innerHTML = `
            <button class="doc-back" id="docBack">← Back to Documentary</button>
            <div class="doc-detail-header">
                <p class="label">${project.tag}</p>
                <h2>${project.title}</h2>
                ${project.subtitle ? `<p class="doc-detail-subtitle">${project.subtitle}</p>` : ''}
                <span class="doc-item-year">${project.year}</span>
            </div>
            <div class="doc-detail-intro">
                <p>${project.desc}</p>
            </div>
            <div class="doc-detail-photos">
                ${project.photos.map(p => `
                    <figure class="doc-photo">
                        <img src="${p.src}" alt="${p.caption}" loading="lazy">
                        <figcaption>${p.caption}</figcaption>
                    </figure>
                `).join('')}
            </div>
        `;
        docDetail.classList.add('active');
        docContainer.style.display = 'none';
        document.querySelector('#documentary .page-header').style.display = 'none';
        window.scrollTo(0, 0);

        document.getElementById('docBack').addEventListener('click', () => {
            docDetail.classList.remove('active');
            docContainer.style.display = '';
            document.querySelector('#documentary .page-header').style.display = '';
        });
    }

    if (docContainer) {
        docProjects.forEach(project => {
            const item = document.createElement('div');
            item.className = 'doc-item';
            const hasPhotos = project.photos && project.photos.length > 0;
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
                ${hasPhotos
                    ? `<button class="doc-link doc-link-btn">View Project →</button>`
                    : `<span class="doc-link" style="color:var(--text-muted);border-color:var(--border);cursor:default;">Coming Soon</span>`
                }
            `;
            if (hasPhotos) {
                item.querySelector('.doc-link-btn').addEventListener('click', () => openDocDetail(project));
            }
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
            const badgeHTML = product.badge ? `<div class="shop-item-badge">${product.badge}</div>` : '';
            const item = document.createElement('div');
            item.className = 'shop-item';
            item.innerHTML = `
                <div class="shop-item-image">
                    <img src="${product.src}" alt="${product.title}" loading="lazy">
                    ${badgeHTML}
                </div>
                <div class="shop-item-info">
                    <h3>${product.title}</h3>
                    <div class="shop-item-meta"><span class="edition">${product.edition}</span></div>
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

    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', async e => {
            e.preventDefault();
            const data = new FormData(contactForm);
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST', body: data, headers: { 'Accept': 'application/json' }
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
