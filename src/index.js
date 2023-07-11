import { loadWeekOneAssignment, loadWeekOneDiscussion, loadWeekOneReflection } from './week-one/weekOne.js';
import {loadWeekTwoAssignment, loadWeekTwoDiscussion, loadWeekTwoReflection } from './week-two/weekTwo.js';
import {loadWeekThreeReflection, loadWeekThreeAssignment, loadWeekThreeDiscussion } from './week-three/weekThree.js'
import {loadWeekFourReflection, loadWeekFourAssignment, loadWeekFourDiscussion } from './week-four/weekFour.js'
import {loadWeekFiveReflection, loadWeekFiveAssignment, loadWeekFiveDiscussion } from './week-five/weekFive.js'


const main = document.getElementById('main');
const logo = document.getElementById('logo');
const weekOneAssignmentAnchor = document.getElementById('weekOneAssignmentAnchor');
const weekOneDiscussionAnchor = document.getElementById('weekOneDiscussionAnchor');
const weekOneReflectionAnchor = document.getElementById('weekOneReflectionAnchor');
const weekTwoAssignmentAnchor = document.getElementById('weekTwoAssignmentAnchor');
const weekTwoDiscussionAnchor = document.getElementById('weekTwoDiscussionAnchor');
const weekTwoReflectionAnchor = document.getElementById('weekTwoReflectionAnchor');
const weekThreeReflectionAnchor = document.getElementById('weekThreeReflectionAnchor');
const weekThreeAssignmentAnchor = document.getElementById('weekThreeAssignmentAnchor');
const weekThreeDiscussionAnchor = document.getElementById('weekThreeDiscussionAnchor');
const weekFourReflectionAnchor = document.getElementById('weekFourReflectionAnchor');
const weekFourAssignmentAnchor = document.getElementById('weekFourAssignmentAnchor');
const weekFourDiscussionAnchor = document.getElementById('weekFourDiscussionAnchor');
const weekFiveReflectionAnchor = document.getElementById('weekFiveReflectionAnchor');
const weekFiveAssignmentAnchor = document.getElementById('weekFiveAssignmentAnchor');
const weekFiveDiscussionAnchor = document.getElementById('weekFiveDiscussionAnchor');

logo.addEventListener('mouseenter', function() {
    logo.src = './assets/logoMoved.png';
})

logo.addEventListener('mouseleave', function() {
    logo.src = './assets/logo.png';
})

//Assignments
weekOneAssignmentAnchor.addEventListener('click', function() {
    loadWeekOneAssignment(main);
    const weekOneAssignment = document.getElementById('weekOneAssignment');
    weekOneAssignment.className = 'w3-animate-left';
});
weekTwoAssignmentAnchor.addEventListener('click', function() {
    loadWeekTwoAssignment(main);
    const weekTwoAssignment = document.getElementById('weekTwoAssignment');
    weekTwoAssignment.className = 'w3-animate-left';
});
weekThreeAssignmentAnchor.addEventListener('click', function() {
    loadWeekThreeAssignment(main);
    const weekThreeAssignment = document.getElementById('weekThreeAssignment');
    weekThreeAssignment.className = 'w3-animate-left';
});
weekFourAssignmentAnchor.addEventListener('click', function() {
    loadWeekFourAssignment(main);
    const weekFourAssignment = document.getElementById('weekFourAssignment');
    weekFourAssignment.className = 'w3-animate-left';
});
weekFiveAssignmentAnchor.addEventListener('click', function() {
    loadWeekFiveAssignment(main);
    const weekFiveAssignment = document.getElementById('weekFiveAssignment');
    weekFiveAssignment.className = 'w3-animate-left';
});


//Discussions
weekOneDiscussionAnchor.addEventListener('click', function() {
    loadWeekOneDiscussion(main);
    const weekOneDiscussion = document.getElementById('weekOneDiscussion');
    weekOneDiscussion.className = 'w3-animate-left';
})
weekTwoDiscussionAnchor.addEventListener('click', function() {
    loadWeekTwoDiscussion(main);
    const weekTwoDiscussion = document.getElementById('weekTwoDiscussion');
    weekTwoDiscussion.className = 'w3-animate-left';
})
weekThreeDiscussionAnchor.addEventListener('click', function() {
    loadWeekThreeDiscussion(main);
    const weekThreeDiscussion = document.getElementById('weekThreeDiscussion');
    weekThreeDiscussion.className = 'w3-animate-left';
})
weekFourDiscussionAnchor.addEventListener('click', function() {
    loadWeekFourDiscussion(main);
    const weekFourDiscussion = document.getElementById('weekFourDiscussion');
    weekFourDiscussion.className = 'w3-animate-left';
})
weekFiveDiscussionAnchor.addEventListener('click', function() {
    loadWeekFiveDiscussion(main);
    const weekFiveDiscussion = document.getElementById('weekFiveDiscussion');
    weekFiveDiscussion.className = 'w3-animate-left';
})


//Reflections
weekOneReflectionAnchor.addEventListener('click', function() {
    loadWeekOneReflection(main);
    const weekOneReflection = document.getElementById('weekOneReflection');
    weekOneReflection.className = 'w3-animate-left';
})
weekTwoReflectionAnchor.addEventListener('click', function() {
    loadWeekTwoReflection(main);
    const weekTwoReflection = document.getElementById('weekTwoReflection');
    weekTwoReflection.className = 'w3-animate-left';
})
weekThreeReflectionAnchor.addEventListener('click', function() {
    loadWeekThreeReflection(main);
    const weekThreeReflection = document.getElementById('weekThreeReflection');
    weekThreeReflection.className = 'w3-animate-left';
})
weekFourReflectionAnchor.addEventListener('click', function() {
    loadWeekFourReflection(main);
    const weekFourReflection = document.getElementById('weekFourReflection');
    weekFourReflection.className = 'w3-animate-left';
})
weekFiveReflectionAnchor.addEventListener('click', function() {
    loadWeekFiveReflection(main);
    const weekFiveReflection = document.getElementById('weekFiveReflection');
    weekFiveReflection.className = 'w3-animate-left';
})
