const btnGithub = document.querySelector("#github-button");
const lengs = document.querySelector("#lengs");
const btnLinkedin = document.querySelector("#linkedin-button");
const btnTwitter = document.querySelector("#twitter-button");
const btnEmail = document.querySelector("#email-button");
const btnWebsite = document.querySelector("#web-button");
const standimg = require('./images/mov/sit.gif');
var updatebut = document.getElementById('update');

var alerttt = document.getElementById('updateee');



		   $("#alerttt").click(function() {
               //updatebut.click();
			   alert("yaaa");
             });


      function alerttt() {
				alert('yyyyyy');
            }

//const updatebut = ()=> { alert("ddd");}

//updatebut.click();

		   $("#update").click(function() {
               //updatebut.click();
			   alert("yaaa");
             });


lengs.addEventListener('click', () => {
    window.open('https://youtube.com', '_blank');
});

btnGithub.addEventListener('click', () => {
    window.open('https://youtube.com', '_blank');
});

btnLinkedin.addEventListener('click', () => {
    window.open('https://linkedin.com/in/', '_blank');
});

btnTwitter.addEventListener('click', () => {
    window.open('https://twitter.com/', '_blank');
});


btnEmail.addEventListener('click', () => {
    window.open('mailto:labs-l@pitang.com');
});

btnWebsite.addEventListener('click', () => {
    window.open('https://www.pitang.com/', '_blank');
});