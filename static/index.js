const home=document.getElementById('home')
const contact=document.getElementById('contact')
const events=document.getElementById('events')


if (window.location.pathname=='/'){
    console.log('home')
    home.classList.add('logic')
    if (contact.classList.contains('logic')){
        contact.classList.remove('logic')
    }
    if (events.classList.contains('logic')){
        events.classList.remove('logic')
}
}
if (window.location.pathname=='/Contact'){
    console.log('contact')
    contact.classList.add('logic')
    if (home.classList.contains('logic')){
        home.classList.remove('logic')
    }
    if (events.classList.contains('logic')){
        events.classList.remove('logic')
}
}

if (window.location.pathname=='/Events'){
    console.log('events')
    events.classList.add('logic')
    if (home.classList.contains('logic')){ 
        home.classList.remove('logic')
    }
    if (contact.classList.contains('logic')){
        contact.classList.remove('logic')
}
}

