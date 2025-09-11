/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// --- 1. DATA & TRANSLations ---

const translations = {
    en: {
        pageTitle: "IHRS | Human Resources Solutions",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navClients: "Clients",
        navTeam: "iHRS Team",
        navContact: "Contact",
        navApplyJobs: "Apply Jobs",
        servicesTitle: "Services",
        clientsTitle: "Clients",
        teamTitle: "iHRS Team",
        footerText: "© 2025 IHRS. All rights reserved. <span class='dev-credit'>| Developed by Fahmy Mohsen</span>",
        langSwitchTo: "AR",
        aboutIntro: "iHRS is a professional HR services provider with a dedicated team of experts delivering tailored solutions to meet clients’ business needs. We specialize in HR Outsourcing, Payroll Administration, HR Consultations, Recruitment, and Management Development, always striving to grow with our clients as true partners in success.",
        aboutVisionTitle: "Vision",
        aboutVisionText: "Delivering HR solutions that simplify daily operations and enhance business results.",
        aboutMissionTitle: "Mission",
        aboutMissionText: "Partnering with clients to provide customized HR services that address challenges and drive growth, guided by our values of passion, accountability, teamwork, quality, and customer care.",
        aboutCoreValuesTitle: "Core Values",
        coreValue1Title: "Credibility & Transparency",
        coreValue1Desc: " – Building trust through clear and honest practices.",
        coreValue2Title: "Confidentiality",
        coreValue2Desc: " – Securing all client information.",
        coreValue3Title: "Compliance",
        coreValue3Desc: " – Adhering to updated laws and regulations.",
        coreValue4Title: "Modernization",
        coreValue4Desc: " – Adapting to change with innovation and research.",
        contactPhoneTitle: "Phone:",
        contactEmailsTitle: "Emails:",
        contactGeneralInquiries: "General Inquiries:",
        contactHrManager: "HR Manager:",
        contactRecruitment: "Recruitment Team / CVs:",
        contactAddressTitle: "Address:",
        contactAddressText: "23 Fareek Awal Ali Amer, Al Mintaqah as Sādisah, Nasr City, Cairo Governorate 4450323",
    },
    ar: {
        pageTitle: "IHRS | حلول الموارد البشرية",
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "خدماتنا",
        navClients: "عملاؤنا",
        navTeam: "فريق iHRS",
        navContact: "اتصل بنا",
        navApplyJobs: "التقديم للوظائف",
        servicesTitle: "خدماتنا",
        clientsTitle: "عملاؤنا",
        teamTitle: "فريق iHRS",
        footerText: "© 2025 IHRS. جميع الحقوق محفوظة. <span class='dev-credit'>| تطوير فهمي محسن</span>",
        langSwitchTo: "EN",
        aboutIntro: "iHRS هي شركة متخصصة في تقديم خدمات الموارد البشرية مع فريق متخصص من الخبراء الذين يقدمون حلولاً مصممة خصيصًا لتلبية احتياجات أعمال العملاء. نحن متخصصون في الاستعانة بمصادر خارجية للموارد البشرية، وإدارة الرواتب، واستشارات الموارد البشرية، والتوظيف، وتطوير الإدارة، ونسعى دائمًا للنمو مع عملائنا كشركاء حقيقيين في النجاح.",
        aboutVisionTitle: "الرؤية",
        aboutVisionText: "تقديم حلول موارد بشرية تبسط العمليات اليومية وتعزز نتائج الأعمال.",
        aboutMissionTitle: "الرسالة",
        aboutMissionText: "الشراكة مع العملاء لتقديم خدمات موارد بشرية مخصصة تعالج التحديات وتدفع النمو، مسترشدين بقيمنا المتمثلة في الشغف والمساءلة والعمل الجماعي والجودة ورعاية العملاء.",
        aboutCoreValuesTitle: "القيم الأساسية",
        coreValue1Title: "المصداقية والشفافية",
        coreValue1Desc: " – بناء الثقة من خلال ممارسات واضحة وصادقة.",
        coreValue2Title: "السرية",
        coreValue2Desc: " – تأمين جميع معلومات العملاء.",
        coreValue3Title: "الامتثال",
        coreValue3Desc: " – الالتزام بالقوانين واللوائح المحدثة.",
        coreValue4Title: "التحديث",
        coreValue4Desc: " – التكيف مع التغيير بالابتكار والبحث.",
        contactPhoneTitle: "الهاتف:",
        contactEmailsTitle: "البريد الإلكتروني:",
        contactGeneralInquiries: "استفسارات عامة:",
        contactHrManager: "مدير الموارد البشرية:",
        contactRecruitment: "فريق التوظيف / السير الذاتية:",
        contactAddressTitle: "العنوان:",
        contactAddressText: "23 فريق أول علي عامر، المنطقة السادسة، مدينة نصر، محافظة القاهرة 4450323",
    }
};

const servicesData = [
    {
        id: 1,
        image: "https://i.ibb.co/BKNZ4Pty/Human-Resource-Outsourcing.png",
        title: { en: "Human Resource Outsourcing", ar: "الاستعانة بمصادر خارجية للموارد البشرية" },
        details: [
            { en: "Personnel administration", ar: "إدارة شؤون الموظفين" },
            { en: "Social insurance", ar: "التأمينات الاجتماعية" },
            { en: "Labor disputes", ar: "النزاعات العمالية" },
            { en: "Payroll management", ar: "إدارة الرواتب" },
            { en: "Government compliance", ar: "الامتثال الحكومي" },
            { en: "Salary administration", ar: "إدارة الأجور" },
            { en: "Legal & personnel consultations", ar: "الاستشارات القانونية وشؤون الموظفين" }
        ]
    },
    {
        id: 2,
        image: "https://i.ibb.co/xSpZ7ZY0/Payroll-Services.png",
        title: { en: "Payroll Services", ar: "خدمات الرواتب" },
        details: [
            { en: "Payroll processing and taxation", ar: "معالجة الرواتب والضرائب" },
            { en: "Social Insurance & Income Tax compliance", ar: "الامتثال للتأمينات الاجتماعية وضريبة الدخل" },
            { en: "Salary structuring & grading", ar: "هيكلة وتصنيف الرواتب" }
        ]
    },
    {
        id: 3,
        image: "https://i.ibb.co/LzYw0Hgs/Personnel-Consultations.png",
        title: { en: "Personnel Consultations", ar: "استشارات شؤون الموظفين" },
        details: [
            { en: "Employee file audits", ar: "تدقيق ملفات الموظفين" },
            { en: "Social insurance procedures", ar: "إجراءات التأمينات الاجتماعية" },
            { en: "Employment contracts & legal documentation", ar: "عقود العمل والوثائق القانونية" },
            { en: "Leaves management & legal ratios (special needs)", ar: "إدارة الإجازات والنسب القانونية (ذوي الاحتياجات الخاصة)" },
            { en: "Work permits & residency for expatriates", ar: "تصاريح العمل والإقامة للوافدين" }
        ]
    },
    {
        id: 4,
        image: "https://i.ibb.co/vxwcZqN5/Human-Resource-Consultations.png",
        title: { en: "Human Resource Consultations", ar: "استشارات الموارد البشرية" },
        details: [
            { en: "Establishing & developing HR departments", ar: "تأسيس وتطوير إدارات الموارد البشرية" },
            { en: "Company policies & HR manuals", ar: "سياسات الشركة وأدلة الموارد البشرية" },
            { en: "Job analysis & evaluations", ar: "تحليل وتقييم الوظائف" },
            { en: "Employee appraisal systems", ar: "أنظمة تقييم الموظفين" },
            { en: "Psychometric assessments", ar: "التقييمات النفسية" },
            { en: "Organizational structures", ar: "الهياكل التنظيمية" }
        ]
    },
    {
        id: 5,
        image: "https://i.ibb.co/KdBzqH7/Training-Organization-Development.png",
        title: { en: "Training & Organization Development", ar: "التدريب والتطوير التنظيمي" },
        details: [
            { en: "Individual and group training plans", ar: "خطط تدريب فردية وجماعية" },
            { en: "Development programs tailored to employee needs", ar: "برامج تطوير مصممة لاحتياجات الموظفين" }
        ]
    },
    {
        id: 6,
        image: "https://i.ibb.co/9dvWpQ6/Recruitment-Selection.png",
        title: { en: "Recruitment & Selection", ar: "التوظيف والاختيار" },
        details: [
            { en: "Phone interviews", ar: "المقابلات الهاتفية" },
            { en: "Preliminary face-to-face interviews", ar: "المقابلات الأولية وجهًا لوجه" },
            { en: "Analytical interviews", ar: "المقابلات التحليلية" },
            { en: "Psychometric tests", ar: "الاختبارات النفسية" }
        ]
    },
    {
        id: 7,
        image: "https://i.ibb.co/v5v9QTp/Performance-Management-Systems-PMS.png",
        title: { en: "Performance Management Systems (PMS)", ar: "أنظمة إدارة الأداء (PMS)" },
        details: [
            { en: "Annual goal setting for the company", ar: "تحديد الأهداف السنوية للشركة" },
            { en: "Performance appraisal", ar: "تقييم الأداء" },
            { en: "Training & development planning", ar: "تخطيط التدريب والتطوير" },
            { en: "Promotion and succession planning", ar: "التخطيط للترقية والتعاقب الوظيفي" }
        ]
    },
    {
        id: 8,
        image: "https://i.ibb.co/fd8NY6sV/Insurance-Services.png",
        title: { en: "Insurance Services", ar: "خدمات التأمين" },
        details: [
            { en: "Private medical insurance", ar: "التأمين الطبي الخاص" },
            { en: "Private life insurance", ar: "التأمين الخاص على الحياة" },
            { en: "Non-life insurance (projects – goods – sites)", ar: "التأمينات العامة (مشاريع – بضائع – مواقع)" }
        ]
    },
    {
        id: 9,
        image: "https://i.ibb.co/m5N1MCSH/Transportation-Logistics-Services.png",
        title: { en: "Transportation & Logistics Services", ar: "خدمات النقل والخدمات اللوجستية" },
        details: [
            { en: "Employee transportation based on residence", ar: "نقل الموظفين حسب مناطق السكن" },
            { en: "Daily optimized routes", ar: "مسارات يومية محسّنة" },
            { en: "Cost-effective transportation solutions", ar: "حلول نقل فعالة من حيث التكلفة" }
        ]
    }
];

const teamData = [
    { name: "Awed El Gouhry", title: { en: "Founder & CEO", ar: "المؤسس والرئيس التنفيذي" }, image: "https://i.ibb.co/zVT2JbyT/1.png" },
    { name: "Mohamed EL Gouhary", title: { en: "Senior HR Specialist", ar: "أخصائي موارد بشرية أول" }, image: "https://i.ibb.co/kgMVXbhh/2.png" },
    { name: "Mohamed Fekry", title: { en: "Financial Manager", ar: "مدير مالي" }, image: "https://i.ibb.co/B22cX3JS/3.png" },
    { name: "Alaa Gamal", title: { en: "HR Specialist", ar: "أخصائي موارد بشرية" }, image: "https://i.ibb.co/3519JmGS/4.png" },
    { name: "Srour Ali", title: { en: "HR Specialist", ar: "أخصائي موارد بشرية" }, image: "https://i.ibb.co/1GnJfhNt/5.png" },
    { name: "Hossam Hassan", title: { en: "HR Specialist", ar: "أخصائي موارد بشرية" }, image: "https://i.ibb.co/KppdfQTZ/6.png" },
    { name: "Amal Muhammed", title: { en: "Senior Talent Acquisition Specialist", ar: "أخصائي اكتساب مواهب أول" }, image: "https://i.ibb.co/DX7N2G2/6.png" },
    { name: "Eman Gaber", title: { en: "Talent Acquisition Specialist", ar: "أخصائي اكتساب مواهب" }, image: "https://i.ibb.co/1tLKZGSZ/8.png" },
    { name: "Farah Ayman", title: { en: "Talent Acquisition Specialist", ar: "أخصائي اكتساب مواهب" }, image: "https://i.ibb.co/ds2L8WjV/9.png" },
    { name: "Nourhan Elsayed", title: { en: "Talent Acquisition Specialist", ar: "أخصائي اكتساب مواهب" }, image: "https://i.ibb.co/7JMGQTG8/7.png" },
    { name: "Fahmy Mohsen", title: { en: "", ar: "" }, image: "https://i.ibb.co/Dfxh6qSj/Alaa-Gamal.png" }
];

const clientsData = [
    { id: 1, name: "Client 1", logoUrl: "https://i.ibb.co/dwYJkYYv/14.png" },
    { id: 2, name: "Client 2", logoUrl: "https://i.ibb.co/bM4C6N2j/13.png" },
    { id: 3, name: "Client 3", logoUrl: "https://i.ibb.co/RGttKspR/1.png" },
    { id: 4, name: "Client 4", logoUrl: "https://i.ibb.co/9kCfV1Wb/2.png" },
    { id: 5, name: "Client 5", logoUrl: "https://i.ibb.co/p6d5SPpL/3.png" },
    { id: 6, name: "Client 6", logoUrl: "https://i.ibb.co/qFysgQQr/4.png" },
    { id: 7, name: "Client 7", logoUrl: "https://i.ibb.co/chQSrsfJ/5.png" },
    { id: 8, name: "Client 8", logoUrl: "https://i.ibb.co/DcqJ7js/6.png" },
    { id: 9, name: "Client 9", logoUrl: "https://i.ibb.co/bRvNxVqV/7.png" },
    { id: 10, name: "Client 10", logoUrl: "https://i.ibb.co/DHPrqJhw/8.png" },
    { id: 11, name: "Client 11", logoUrl: "https://i.ibb.co/twmM0pY2/9.png" },
    { id: 12, name: "Client 12", logoUrl: "https://i.ibb.co/8n3n7jZj/10.png" },
    { id: 13, name: "Client 13", logoUrl: "https://i.ibb.co/qM5j4Htf/11.png" },
    { id: 14, name: "Client 14", logoUrl: "https://i.ibb.co/dJknZRbh/12.png" },
];


// --- 2. STATE MANAGEMENT ---

let currentLang = 'en';
let currentSlideIndex = 0;
let sliderInterval;


// --- 3. DOM ELEMENTS ---

const langSwitcherBtn = document.getElementById('lang-switcher');
const menuToggleBtn = document.getElementById('menu-toggle');
const mainNav = document.querySelector('.main-nav');
const servicesGrid = document.getElementById('services-grid');
const teamGrid = document.getElementById('team-grid');
const clientsGrid = document.getElementById('clients-grid');
const translatableElements = document.querySelectorAll('[data-lang-key]');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]:not([href="#"])');
const sections = document.querySelectorAll('main section[id]');
const sliderContainer = document.querySelector('.slider-container');
const dotsContainer = document.querySelector('.dots-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


// --- 4. FUNCTIONS ---

/**
 * Updates all static text elements on the page based on the current language.
 */
function updateTextContent() {
    const langPack = translations[currentLang];
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (key && langPack[key]) {
            // Special case for footer to allow HTML for the dev credit span
            if (key === 'footerText') {
                el.innerHTML = langPack[key];
            } else {
                el.textContent = langPack[key];
            }
        }
    });
    document.title = langPack.pageTitle;
    langSwitcherBtn.textContent = langPack.langSwitchTo;
}

/**
 * Renders service items into a grid of cards.
 */
function renderServices() {
    if (!servicesGrid) return;
    
    const cardsHTML = servicesData.map(service => {
        const title = service.title[currentLang];
        const detailsList = service.details.map(detail => `<li>${detail[currentLang]}</li>`).join('');

        return `
            <div class="service-card">
                <img src="${service.image}" alt="${title}" loading="lazy" decoding="async">
                <div class="service-card-content">
                    <h3>${title}</h3>
                    <ul>
                        ${detailsList}
                    </ul>
                </div>
            </div>
        `;
    }).join('');

    servicesGrid.innerHTML = cardsHTML;
}

/**
 * Renders team members into a grid of cards.
 */
function renderTeam() {
    if (!teamGrid) return;
    
    const cardsHTML = teamData.map(member => {
        const title = member.title[currentLang];
        return `
            <div class="team-card">
                <img src="${member.image}" alt="${member.name}" loading="lazy" decoding="async" width="150" height="150">
                <h4>${member.name}</h4>
                <p>${title}</p>
            </div>
        `;
    }).join('');
    
    teamGrid.innerHTML = cardsHTML;
}

/**
 * Renders client logos into a grid.
 */
function renderClients() {
    if (!clientsGrid) return;
    
    const clientsHTML = clientsData.map(client => {
        return `
            <div class="client-logo">
                <img src="${client.logoUrl}" alt="${client.name} Logo" loading="lazy" decoding="async">
            </div>
        `;
    }).join('');

    clientsGrid.innerHTML = clientsHTML;
}


/**
 * Renders the hero slider slides and dots.
 */
function renderSlider() {
    if (!sliderContainer || !dotsContainer) return;

    sliderContainer.innerHTML = '';
    dotsContainer.innerHTML = '';

    servicesData.forEach((service, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url(${service.image})`;
        slide.innerHTML = `<div class="slide-content"><h2>${service.title[currentLang]}</h2></div>`;
        sliderContainer.appendChild(slide);

        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.dataset.index = index.toString();
        dotsContainer.appendChild(dot);
    });
}


/**
 * Shows a specific slide and updates the active dot.
 * @param {number} index - The index of the slide to show.
 */
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

/**
 * Starts or resets the auto-play functionality for the slider.
 */
function startSliderInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        showSlide(currentSlideIndex + 1);
    }, 5000); // Change slide every 5 seconds
}


/**
 * Scrolls smoothly to a target section, accounting for the sticky header.
 * @param {string} targetId The ID of the section to scroll to.
 */
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    // Ensure both the target and the header exist before proceeding.
    if (!targetElement || !header) return;

    // Calculate the height of the sticky header to use as an offset.
    const headerHeight = header.offsetHeight;

    // Get the position of the target element relative to the document top.
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    
    // Calculate the final scroll position, subtracting the header's height.
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
    
    // If the mobile menu is open, close it after navigation.
    mainNav?.classList.remove('active');
}

/**
 * Updates the 'active' class on navigation links based on scroll position.
 */
function updateActiveLink() {
    if (!header || !sections.length) return;
    const headerHeight = header.offsetHeight;
    let currentSectionId = '';

    sections.forEach(section => {
        // A section is considered active if its top is above the fold (within a buffer zone)
        // FIX: Cast section to HTMLElement as Element does not have an offsetTop property.
        const sectionTop = (section as HTMLElement).offsetTop - headerHeight - 20; 
        if (window.scrollY >= sectionTop) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        // Check if the link's href matches the current section's id
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Debounce function to limit the rate at which a function gets called.
 * @param {Function} func The function to debounce.
 * @param {number} delay The delay in milliseconds.
 * @returns {Function} The debounced function.
 */
function debounce(func, delay = 50) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

/**
 * Sets the language for the entire application.
 * @param {string} lang - The language to switch to ('en' or 'ar').
 */
function setLanguage(lang) {
    currentLang = lang;
    const isRTL = lang === 'ar';

    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', isRTL);
    
    updateTextContent();
    renderServices();
    renderTeam();
    renderClients();
    renderSlider();
    showSlide(currentSlideIndex); // Re-show current slide to update text
}

/**
 * Toggles the language between English and Arabic.
 */
function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
}

/**
 * Toggles the mobile navigation menu.
 */
function toggleMobileMenu() {
    mainNav?.classList.toggle('active');
}


// --- 5. EVENT LISTENERS & INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    if (langSwitcherBtn) {
        langSwitcherBtn.addEventListener('click', toggleLanguage);
    }
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', toggleMobileMenu);
    }

    // Slider Navigation Listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlideIndex + 1);
            startSliderInterval(); // Reset interval on manual navigation
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlideIndex - 1);
            startSliderInterval(); // Reset interval on manual navigation
        });
    }
    
    if (dotsContainer) {
        dotsContainer.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('dot')) {
                const index = parseInt(target.dataset.index, 10);
                showSlide(index);
                startSliderInterval(); // Reset interval
            }
        });
    }

    // Add smooth scroll to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                smoothScrollTo(targetId);
            }
        });
    });
    
    // Add scroll listener to update active link
    const debouncedUpdate = debounce(updateActiveLink, 100);
    window.addEventListener('scroll', debouncedUpdate);

    // Set initial language and render content
    setLanguage('en'); 
    
    // Initialize Slider
    renderSlider();
    showSlide(0);
    startSliderInterval();

    // Set initial active link state on page load
    updateActiveLink();
});