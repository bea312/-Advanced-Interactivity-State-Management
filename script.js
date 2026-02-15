// sub
const modal = document.getElementById('subscribe-modal');
const openBtn = document.getElementById('open-modal');
const closeBtn = document.getElementById('close-modal');

const openModal = () => {
    modal.classList.remove('hidden');

    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.classList.add('hidden');

    document.body.style.overflow = 'auto';
}
if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}