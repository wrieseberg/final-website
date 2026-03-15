document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });

            // Remove active class from all panels
            panels.forEach(p => p.classList.remove('active'));

            // Set current tab as active
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            // Show current panel
            const targetId = tab.getAttribute('data-tab');
            const targetPanel = document.getElementById(targetId);
            
            if(targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});
