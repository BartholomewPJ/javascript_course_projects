const btns = document.querySelectorAll('.faq-toggle');

btns.forEach(btn => {
    btn.addEventListener('click',() =>
    {
        btn.parentNode.classList.toggle('active')
        // let faqbox=document.querySelector('.faq');
        // faqbox.classList.toggle('active');
    })
})

/*

const faqbox = document.querySelectorAll('.faq');

faqbox.forEach(box => {
    let btn = box.querySelector('.faq-toggle');
    btn.addEventListener('click',() => {
        box.classList.toggle('active');
    })
})

*/