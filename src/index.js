import './style.css';

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    import('./joke').then((module) => {
        module.default();
    }
    )
});
