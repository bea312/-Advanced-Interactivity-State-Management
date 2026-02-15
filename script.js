document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('subscribe-modal');
    const openBtn = document.getElementById('open-modal');
    const closeBtn = document.getElementById('close-modal');
    const toggleRepliesBtn = document.getElementById('toggle-replies');
    const replySection = document.getElementById('reply-section');
    const scoreVal = document.getElementById('score-val');
    
    let score = 0;


    const openModal = () => {
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    };

   
    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

   
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    if (toggleRepliesBtn && replySection) {
        toggleRepliesBtn.addEventListener('click', () => {
            replySection.classList.toggle('hidden');
        });
    }

    
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const text = this.querySelector('span');

            if (!icon || !text) return; // Safety check

            if (icon.classList.contains('fa-thumbs-o-up')) {
                icon.className = 'fa fa-check'; 
                text.innerText = 'Liked';
                this.classList.add('bg-gray-100');
                score++;
            } else {
                icon.className = 'fa fa-thumbs-o-up'; 
                text.innerText = 'Like';
                this.classList.remove('bg-gray-100');
                if (score > 0) score--;
            }

            
            if (scoreVal) {
                scoreVal.innerText = score;
                scoreVal.style.color = (score >= 10) ? "gold" : "black";
            }
        });
    });
});