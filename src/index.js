import { loadWeekOneAssignment } from './week-one/weekOne.js';
import { loadWeekOneDiscussion } from './week-one/weekOne.js';

const main = document.getElementById('main');
const logo = document.getElementById('logo');
const weekOneAssignmentAnchor = document.getElementById('weekOneAssignmentAnchor');
const weekOneDiscussionAnchor = document.getElementById('weekOneDiscussionAnchor');
const weekOneReflectionAnchor = document.getElementById('weekOneReflectionAnchor');

logo.addEventListener('mouseenter', function() {
    logo.src = './assets/logoMoved.png';
})

logo.addEventListener('mouseleave', function() {
    logo.src = './assets/logo.png';
})

//week one effects
weekOneAssignmentAnchor.addEventListener('click', function() {
    loadWeekOneAssignment(main);
    const weekOneAssignment = document.getElementById('weekOneAssignment');
    weekOneAssignment.className = 'w3-animate-left';
});
weekOneDiscussionAnchor.addEventListener('click', function() {
    loadWeekOneDiscussion(main);
    const weekOneDiscussion = document.getElementById('weekOneDiscussion');
    weekOneDiscussion.className = 'w3-animate-left';
})



