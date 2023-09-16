function addingEventListener() {
}
const element = document.getElementById('myElement');
function handleEvent(event) {
    console.log('Event was triggered:', event.type);
}
element.addEventListener('click', handleEvent);
const button = document.getElementById('myButton');
function handleClick() {
    alert('Button Clicked!');
}
button.addEventListener('click', handleClick);