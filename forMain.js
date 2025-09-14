document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.FAQ__collapsible');
    
    collapsibles.forEach(button => {
        button.addEventListener('click', function() {
            collapsibles.forEach(btn => {
                if (btn !== this) {
                    btn.classList.remove('active');
                    const content = btn.nextElementSibling;
                    content.classList.remove('active');
                    content.style.maxHeight = '0';
                }
            });
            
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.classList.remove('active');
                content.style.maxHeight = '0';
            }
        });
    });
});