function addingEventListener() {
}
const element = document.getElementById('myElement');
function handleEvent(event) {
    console.log('Event was triggered:', event.type);
}
element.addEventListener('click', handleEvent);