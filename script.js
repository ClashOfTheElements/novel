function switchTab(sectionId) {
    // 1. Hide every single text content panel from the screen layout grid explicitly
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    // 2. Clear out the active neon glow highlight from every navigation link button
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // 3. Force the selected section content panel block to show up visually on the fly
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        // FIX: Using flex or block based on your styling design to prevent grid breaking
        targetSection.style.display = 'block'; 
        targetSection.classList.add('active');
    }

    // 4. Safely apply the active neon lighting state to the menu link chosen
    if (sectionId === 'home') {
        const homeBtn = document.getElementById('btn-home');
        if (homeBtn) homeBtn.classList.add('active');
    } else if (sectionId === 'policy') {
        const policyBtn = document.getElementById('btn-policy');
        if (policyBtn) policyBtn.classList.add('active');
    } else if (['about-story', 'about-characters', 'about-author'].includes(sectionId)) {
        // FIX: Explicitly tracking internal dropdown array strings for strict authorization
        const loreBtn = document.getElementById('btn-lore');
        if (loreBtn) loreBtn.classList.add('active');
    }
}

// 🌟 AUTOMATIC ROUTER FOR INCOMING COMMANDS FROM CHAPTER PAGES
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const targetTab = urlParams.get('tab');
    
    if (targetTab) {
        switchTab(targetTab);
    } else {
        // FIX: Force default fallback state to Home if no tab parameter exists
        switchTab('home');
    }
});
