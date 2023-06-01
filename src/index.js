import { loadWeekOneAssignment, loadWeekOneDiscussion, loadWeekOneReflection } from './week-one/weekOne.js';
import {loadWeekTwoAssignment, loadWeekTwoDiscussion } from './week-two/weekTwo.js'

const main = document.getElementById('main');
const logo = document.getElementById('logo');
const weekOneAssignmentAnchor = document.getElementById('weekOneAssignmentAnchor');
const weekOneDiscussionAnchor = document.getElementById('weekOneDiscussionAnchor');
const weekOneReflectionAnchor = document.getElementById('weekOneReflectionAnchor');
const weekTwoAssignmentAnchor = document.getElementById('weekTwoAssignmentAnchor');
const weekTwoDiscussionAnchor = document.getElementById('weekTwoDiscussionAnchor');
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
weekOneReflectionAnchor.addEventListener('click', function() {
    loadWeekOneReflection(main);
    const weekOneDiscussion = document.getElementById('weekOneReflection');
    weekOneDiscussion.className = 'w3-animate-left';
})


//week two effects
weekTwoAssignmentAnchor.addEventListener('click', function() {
    loadWeekTwoAssignment(main);
    const weekTwoAssignment = document.getElementById('weekTwoAssignment');
    weekTwoAssignment.className = 'w3-animate-left';
});
weekTwoDiscussionAnchor.addEventListener('click', function() {
    loadWeekTwoDiscussion(main);
    const weekTwoDiscussion = document.getElementById('weekTwoDiscussion');
    weekTwoDiscussion.className = 'w3-animate-left';
})



