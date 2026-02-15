document.addEventListener('DOMContentLoaded', () => {
    
    const modal = document.getElementById('subscribe-modal');
    const openBtn = document.getElementById('open-modal'); 
    const closeBtn = document.getElementById('close-modal'); 
    const scoreVal = document.getElementById('score-val');
    let score = 0;

 
    const toggleModal = (show) => {
        if (!modal) return;
        modal.classList.toggle('hidden', !show);
      
        document.body.style.overflow = show ? 'hidden' : 'auto';
    };

    if (openBtn) openBtn.addEventListener('click', () => toggleModal(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleModal(false));
    
 
    window.addEventListener('click', (e) => { 
        if (e.target === modal) toggleModal(false); 
    });

 
    document.querySelectorAll('.toggle-replies-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const parentArticle = this.closest('article');
            const replySection = parentArticle.querySelector('.reply-wrapper');
            
            if (replySection) {
                replySection.classList.toggle('hidden');
            }
        });
    });

   
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const text = this.querySelector('span');
            if (!icon || !text) return;

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