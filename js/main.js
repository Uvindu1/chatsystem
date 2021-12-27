let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am FIT Robot", "Hi, I am a FIT Robo",];
let help = ["ask the question in website", "ask the question from me", "ask the question"];
let q1 = ["It is a pre-degree program for those who wish to follow the Bachelor of Information Technology (BIT) at UCSC. Moreover, it will be an added qualification for those who seek higher education in ICT or employments related to IT"];
let q2 = ["There is only one certificate in this programme. It will be offered to you after you pass all three e-Tests and the two Practical tests. But if required, you can get a programme status letter after passing all three eTests. Also, you can take a printout of your profile page in the FIT information system and use it as a proof of registration to this programme"];
let q3 = ["You can obtain ICT related certification to find an employment in ICT or related areas as a beginner. Since BIT is an external degree programme, you could do a full time or part time job while following the BIT Programme If you do not have enough qualifications to register BIT programme, you can use FIT certification to obtain BIT registration"];
let q4 = ["At the moment, FIT is considered as an alternative qualification to register BIT programme. However, it is difficult to say about other programs since conditions of registration vary from one to another. However, if any other institute decides to consider FIT certification equivalent qualification for registration, we will announce them."];
let q5 = ["When you have completed relevant e-Tests or practical tests successfully, you can apply to obtain a formal certificate by paying Rs. 500. All requests received before the first Monday of the last week of a month will be processed and the certificate will be issued during the first week of next month."]
let q6 = ["Programme Structure page could be a good starting point"];
let q7 = ["Generally, it takes 8-10 months to complete all courses if it is very beginner. However, it depends on your experience and your knowledge of IT. Moreover, it will be an added qualification for those who seek higher education in ICT or IT-related employment."];
let q8 = ["Please contact the relevant facilitator of the course, through a forum, message or email. Contact details are given in the contact us page.If you are not satisfied with the reply, contact the coordinator of VLE through email ( taw@ucsc.cmb.ac.lk ).If you are still not satisfied with the reply, send your complaint in writing to the Director, UCSC by using the email (kph@ucsc.cmb.ac.lk)"];
let q9 = ["Yes, there are some differences, and those improvements are done to enhance the FIT programme. The students are supposed to follow the new syllabus as all the examinations are conducted based on the new syllabi."];
let q10 = ["No UCSC will not conduct any face-to-face classes. Private institutes conduct face-to-face classes based on the FIT syllabi. However, UCSC will not undertake any responsibility or comment on their performances. Therefore, we advise all the students to follow the online courses in the FITVLE and get updated by checking the announcements we made via the FITVLE and FIT information system."];
let q11 = ["You can follow online courses in the FITVLE. Otherwise, you can select a private institute that conducts classes based on the FIT syllabi."];
let q12 = ["Online courses provide general guidance for a self-learning student. They are designed and developed based on the FIT curriculum. However, if you find it difficult to understand the subject matter given in the syllabus and online courses, it is better to consider attending classes conducted by a private institute."];
let q13 = ["There is no compulsory requirement. There are a lot of self-learning students who follow the FIT programme. However, if you find it difficult to understand the subject matter given in the syllabus and online courses, it is better to consider attending classes conducted by a private institute."];
let q14 = ["It will take 3-4 working days( maximum 7days) after submitting your registration detail via FIT information system. If you have provided a valid email address, we will inform you as soon as we create an account in the online system. If it delays more than seven days, please contact the admin of the FITVLE (admin@fit.bit.lk)."];
let q15 = ["Usually, FIT e-test results are released two weeks after completing the examinations in the schedule. But, it takes 2-3 weeks to publish the FIT practical test results."];
let q16 = ["If there is enough demand, the practical tests can also be held once a month. However, the time plan could vary depending on the demand and availability."];
let q17 = ["Yes, you have to pass relevant tests of the FIT programme to obtain the certificates. The pass mark for any e-Test or practical test will be 50 marks."];
let q18 = ["These online quizzes are optional self-learning resources for registered students. Your marks or performances in online courses will not be considered when deciding your final grade. However, assignment quizzes are mandatory, and the students should pass these assignment quizzes before applying for the e-Tests."];
let q19 = ["No, practice quizzes or Assignments marks are not counted for the final grade in the course. The final grade of a course depends on your performance in the e-Tests and practical tests. However, assignment quizzes are mandatory, and you should pass these assignment quizzes before applying for the e-Tests."];
let q20 = ["You can take the FIT exams at the UCSC or online from home (if we conduct online tests)."];
let q21 = ["Yes, There are no separate exams for students who registered before 2021."];
let q22 = ["No, there is no such requirement. You can decide and do it in the way you like. However, if you register for all e-Tests, you can do all these three e-Tests on the same day."];
let q23 = ["Yes, you can. If you pass all three subjects in the Advanced Level exams, you can directly register for BIT programme without following the FIT"];
let q24 = ["You have to sit for FIT e-Tests and practical tests to obtain the FIT certificate. You cannot claim the FIT certificate by submitting certificates of any similar courses."];
let q25 = ["It is difficult to say since all similar courses are not acceptable. However, if you have done similar courses/study programmes, we recommend you to take FIT e-Tests and apply for BIT registration based on the results."];
let q26 = ["Yes, You must have completed, GCE (O/L) examination with credit passes for maths and English."];
let q27 = ["You have to register for the FIT programme via FIT information system https://reg.fit.bit.lk. First, create an account by providing a valid email address."];
let q28 = ["Students can register for the FIT programme at any time of the year. The registration period will expire after 365 calendar days from the registration date."];
let q29 = ["No, you do not have to come to the UCSC to register. You can register online via FIT information system (reg.fit.bit.lk). However, it takes 2-7 working days to validate your payments provide you access to the FITVLE."];
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const speech = new SpeechSynthesisUtterance();

function showusermsg(usermsg) {
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function autoScroll(){
    $(document).ready(function () {
        $('.scroll_div').animate({
            scrollTop: $('.scroll_div').get(0).scrollHeight
        }, 2000);
    });
}



/*function showRightAnswerchatbotmsg(newSpeech,answer) {
    answertSpeech = "Do you Asked" + newSpeech;
    newAnswer=answer;     
    let output = '';
    output += ` <div class="chatarea-inner chatbot ">${answertSpeech}<div id="row"><div class="answer" type="button">yes</div> <div class="answer" type="button">NO</div></div></div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
  
}*/

function chatbotvoice(message) {

    const userSpeech = message
    selectAnswer(speech, userSpeech);
    //  speech.text = "Sorry,This is test message";
    if (message.includes('who are you')) {
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if (message.includes('how can help me' || 'can you help me' || 'help me')) {
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if (message.includes('why should I follow fit')) {
        let finalresult = q1[Math.floor(Math.random() * q1.length)];
        speech.text = finalresult;
    }
    if (message.includes('what are the certificates that I can collect by following fit')) {
        let finalresult = q2[Math.floor(Math.random() * q2.length)];
        speech.text = finalresult;
    }
    if (message.includes('why should I follow fit before I register bit')) {
        let finalresult = q3[Math.floor(Math.random() * q3.length)];
        speech.text = finalresult;
    }
    if (message.includes('can I use fit certificates to register other degree programmes')) {
        let finalresult = q4[Math.floor(Math.random() * q4.length)];
        speech.text = finalresult;
    }
    if (message.includes('when can I collect the certificates')) {
        let finalresult = q5[Math.floor(Math.random() * q5.length)];
        speech.text = finalresult;
    }
    if (message.includes('how can I find more details about the fit programme')) {
        let finalresult = q6[Math.floor(Math.random() * q6.length)];
        speech.text = finalresult;
    }
    if (message.includes('how long will it take to complete fit')) {
        let finalresult = q7[Math.floor(Math.random() * q7.length)];
        speech.text = finalresult;
    }
    if (message.includes('how can I make a complaint about fit programme')) {
        let finalresult = q8[Math.floor(Math.random() * q8.length)];
        speech.text = finalresult;
    }
    if (message.includes('is there any different between old and new syllabus')) {
        let finalresult = q9[Math.floor(Math.random() * q9.length)];
        speech.text = finalresult;
    }
    if (message.includes('does ucsc conduct classes for fit')) {
        let finalresult = q10[Math.floor(Math.random() * q10.length)];
        speech.text = finalresult;
    }
    if (message.includes('where can I learn for fit')) {
        let finalresult = q11[Math.floor(Math.random() * q11.length)];
        speech.text = finalresult;
    }
    if (message.includes('are these online courses enough to complete fit')) {
        let finalresult = q12[Math.floor(Math.random() * q12.length)];
        speech.text = finalresult;
    }
    if (message.includes('should I go to institute to complete fit programme')) {
        let finalresult = q13[Math.floor(Math.random() * q13.length)];
        speech.text = finalresult;
    }
    if (message.includes('how long will it take to get access to the virtual learning environment (FITVLE) after registration')) {
        let finalresult = q14[Math.floor(Math.random() * q14.length)];
        speech.text = finalresult;
    }
    if (message.includes('how long does it take to know fit results')) {
        let finalresult = q15[Math.floor(Math.random() * q15.length)];
        speech.text = finalresult;
    }
    if (message.includes('when will the practical test be held')) {
        let finalresult = q16[Math.floor(Math.random() * q16.length)];
        speech.text = finalresult;
    }
    if (message.includes('do I have to pass to obtain the certificate')) {
        let finalresult = q17[Math.floor(Math.random() * q17.length)];
        speech.text = finalresult;
    }
    if (message.includes('do I have to do online course quizzes')) {
        let finalresult = q18[Math.floor(Math.random() * q18.length)];
        speech.text = finalresult;
    }
    if (message.includes('does my practice quiz marks will be counted for the final grade')) {
        let finalresult = q19[Math.floor(Math.random() * q19.length)];
        speech.text = finalresult;
    }
    if (message.includes('where can I take the fit exams')) {
        let finalresult = q20[Math.floor(Math.random() * q20.length)];
        speech.text = finalresult;
    }
    if (message.includes('if I am a repeat student (registered before 2021), do I have to follow the new syllabus when I take the next exam')) {
        let finalresult = q21[Math.floor(Math.random() * q21.length)];
        speech.text = finalresult;
    }
    if (message.includes('do I have to do all e-Tests at once')) {
        let finalresult = q22[Math.floor(Math.random() * q22.length)];
        speech.text = finalresult;
    }
    if (message.includes('without doing fit, can I register for bit?')) {
        let finalresult = q23[Math.floor(Math.random() * q23.length)];
        speech.text = finalresult;
    }
    if (message.includes('I have done similar courses, can I get fit certificate')) {
        let finalresult = q24[Math.floor(Math.random() * q24.length)];
        speech.text = finalresult;
    }
    if (message.includes('I have done courses similar to the fit programme. Can I register for bit')) {
        let finalresult = q25[Math.floor(Math.random() * q25.length)];
        speech.text = finalresult;
    }
    if (message.includes('other than fit qualifications, are there conditions to register bit')) {
        let finalresult = q26[Math.floor(Math.random() * q26.length)];
        speech.text = finalresult;
    }
    if (message.includes('how to apply fit programme'||'how to register fit programme'||'how to apply programme'||'how to register programme')) {
        let finalresult = q27[Math.floor(Math.random() * q27.length)];
        speech.text = finalresult;
    }
    if (message.includes('when can I register for the fit')) {
        let finalresult = q28[Math.floor(Math.random() * q28.length)];
        speech.text = finalresult;
    }
    if (message.includes('do I have to come to the ucsc to register')) {
        let finalresult = q29[Math.floor(Math.random() * q29.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));

    autoScroll();

}



recognition.onresult = function (e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend = function () {
    mic.style.background = "rgb(63,94,251)";
    mic.style.color = '#ffffff';
}
mic.addEventListener("click", function () {
    console.log("lising");
    mic.style.background = '#898b93';
    mic.style.color = '#000000';
    recognition.start();
    console.log("Activated");
})



$(document).ready(() => {
    $(".chat_bot_img").click(() => {
        $(".chat_bot").slideToggle("slow");
    })
})



/*function myFunction(){
    document.getElementsByClassName("chat_bot").classList.toggle("show");

}
*/

/*window.onclick = function(event) {
    if (!event.target.matches('chat_bot_img')) {
      var dropdowns = document.getElementsByClassName("chat_bot");

        if (dropdowns.classList.contains('show')) {
          dropdowns.classList.remove('show');
        }
      
    }
  }
  */

function selectAnswer(speech, massge) {
    const newSpeech = speech;
    let userQuestions = massge;
    const userQuestionsArray = userQuestions.split(" ");
    const strLength = userQuestionsArray.length;
    

    /*   if(userQuestionsArray.length<10){
           let i = 0;
           let p = 0;
           let q = 0;
           let loop;
           let set1 = new Array(0, "what is your name","It is a pre-degree program for those who wish to follow the Bachelor of Information Technology (BIT) at UCSC. Moreover, it will be an added qualification for those who seek higher education in ICT or employments related to IT");
           let set2 = new Array(0, "your name is what","My name is FIT chat bot robot");
           let set3 = new Array(0, "why is use my age","my uni is 100 in 2021");
           console.log(set1);
           console.log(set2);
           console.log(set3);
           const countArray=[];
           for(j of userQuestionsArray){
               let count = 0;
               count = stringSearch(set1[1],j);
               countArray[i] = count;
               console.log(countArray[i]);
               i++;
           }
           console.log(countArray);
           set1[0] = countArray.reduce(add, 0);
          console.log(set1[0]);
   
           for(j of userQuestionsArray){
               let count = 0;
               count = stringSearch(set2[1],j);
               countArray[p] = count;
               console.log(countArray[p]);
               p++;
           }
          console.log(countArray);
           set2[0] = countArray.reduce(add, 0);
          console.log(set2[0]);
   
           for(j of userQuestionsArray){
               let count = 0;
               count = stringSearch(set3[1],j);
               countArray[q] = count;
               console.log(countArray[q]);
               q++;
           }
          console.log(countArray);
           set3[0] = countArray.reduce(add, 0);
          console.log(set3[0]);
   
          const Point = [set1[0],set2[0],set3[0]];
          const maxPoint = Point.sort(function(a,b){
              return b-a
          });
   
          
   
          const objectArray = new Array(set1, set2, set3);
          
          if(maxPoint[0] < 3){
           speech.text = "Sorry,This is test message";  
          }
          else{
           var z=1;   
           for(loop = 0; loop < objectArray.length; loop++){
               if(maxPoint[0]==objectArray[loop][0]){
                   loopQuestion(objectArray[loop][1],z);
                   oneQuestionAnswer(objectArray[loop][2]);
                   z++;
               }
           }
          }
       }
   */
    if (strLength  < 6) {
        let i = 0;
        let p = 0;
        let loop;
        let set1 = new Array(0, "why should I follow fit", "It is a pre-degree program for those who wish to follow the Bachelor of Information Technology (BIT) at UCSC. Moreover, it will be an added qualification for those who seek higher education in ICT or employments related to IT");
        let set2 = new Array(0, "How to apply/register FIT programme?", "You have to register for the FIT programme via FIT information system https://reg.fit.bit.lk. First, create an account by providing a valid email address. ")
        console.log(set1);
        console.log(set2);

        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set1[1], j);
            countArray[i] = count;
            console.log(countArray[i]);
            i++;
        }
        console.log(countArray);
        set1[0] = countArray.reduce(add, 0);
        console.log(set1[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set2[1], j);
            countArray[p] = count;
            console.log(countArray[p]);
            p++;
        }
        console.log(countArray);
        set2[0] = countArray.reduce(add, 0);
        console.log(set2[0]);

  

        const Point = [set1[0], set2[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });



        const objectArray = new Array(set1, set2);

        if (maxPoint[0] < 3) {
            speech.text = "Sorry,This is test message";
        }
        else {
            var z = 1;
            for (loop = 0; loop < objectArray.length; loop++) {
                if (maxPoint[0] == objectArray[loop][0]) {
                    loopQuestion(objectArray[loop][1], z);
                    oneQuestionAnswer(objectArray[loop][2]);
                    z++;
                }
            }
        }





    }
    else if (6 <= strLength  < 9) {
        let i = 0;
        let p = 0;
        let q = 0;
        let r = 0;
        let s = 0;
        let t = 0;
        let u = 0;
        let v = 0;
        let j = 0;
        let k = 0;
        let m = 0;
        let loop;
        let set1 = new Array(0, "when can I collect the certificates ", "When you have completed relevant e-Tests or practical tests successfully, you can apply to obtain a formal certificate by paying Rs. 500. All requests received before the first Monday of the last week of a month will be processed and the certificate will be issued during the first week of next month. ");
        let set2 = new Array(0, "how long will it take to complete fit ", "Generally, it takes 8-10 months to complete all courses if it is very beginner. However, it depends on your experience and your knowledge of IT. Moreover, it will be an added qualification for those who seek higher education in ICT or IT-related employment ");
        let set3 = new Array(0, "how can I make a complaint about fit programme ", "Please contact the relevant facilitator of the course, through a forum, message or email. Contact details are given in the contact us page.If you are not satisfied with the reply, contact the coordinator of VLE through email ( taw@ucsc.cmb.ac.lk ).If you are still not satisfied with the reply, send your complaint in writing to the Director, UCSC by using the email (kph@ucsc.cmb.ac.lk) ");
        let set4 = new Array(0, "Does UCSC conduct classes for fit ", "No UCSC will not conduct any face-to-face classes. Private institutes conduct face-to-face classes based on the FIT syllabi. However, UCSC will not undertake any responsibility or comment on their performances. Therefore, we advise all the students to follow the online courses in the FITVLE and get updated by checking the announcements we made via the FITVLE and FIT information system. ");
        let set5 = new Array(0, "Where can I learn for fit ", "You can follow online courses in the FITVLE. Otherwise, you can select a private institute that conducts classes based on the FIT syllabi. ");
        let set6 = new Array(0, "Are these online courses enough to complete FIT?", "Online courses provide general guidance for a self-learning student. They are designed and developed based on the FIT curriculum. However, if you find it difficult to understand the subject matter given in the syllabus and online courses, it is better to consider attending classes conducted by a private institute.")
        let set7 = new Array(0, "When will the practical test be held? ", "If there is enough demand, the practical tests can also be held once a month. However, the time plan could vary depending on the demand and availability ");
        let set8 = new Array(0, "Do I have to do online course quizzes? ", "These online quizzes are optional self-learning resources for registered students. Your marks or performances in online courses will not be considered when deciding your final grade. However, assignment quizzes are mandatory, and the students should pass these assignment quizzes before applying for the e-Tests. ");
        let set9 = new Array(0, "Where can I take the FIT exams? ", "You can take the FIT exams at the UCSC or online from home (if we conduct online tests). ");
        let set10 = new Array(0, "Without doing FIT, can I register for BIT? ", "Yes, you can. If you pass all three subjects in the Advanced Level exams, you can directly register for BIT programme without following the FIT ");
        let set11 = new Array(0, "When can I register for the FIT?", "Students can register for the FIT programme at any time of the year. The registration period will expire after 365 calendar days from the registration date. ")
        console.log(set1);
        console.log(set2);
        console.log(set3);
        console.log(set4);
        console.log(set5);
        console.log(set6);
        console.log(set7);
        console.log(set8);
        console.log(set9);
        console.log(set10);
        console.log(set11);

        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set1[1], j);
            countArray[i] = count;
            console.log(countArray[i]);
            i++;
        }
        console.log(countArray);
        set1[0] = countArray.reduce(add, 0);
        console.log(set1[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set2[1], j);
            countArray[p] = count;
            console.log(countArray[p]);
            p++;
        }
        console.log(countArray);
        set2[0] = countArray.reduce(add, 0);
        console.log(set2[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set3[1], j);
            countArray[q] = count;
            console.log(countArray[q]);
            q++;
        }
        console.log(countArray);
        set3[0] = countArray.reduce(add, 0);
        console.log(set3[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set4[1], j);
            countArray[r] = count;
            console.log(countArray[r]);
            r++;
        }
        console.log(countArray);
        set4[0] = countArray.reduce(add, 0);
        console.log(set4[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set5[1], j);
            countArray[s] = count;
            console.log(countArray[s]);
            s++;
        }
        console.log(countArray);
        set5[0] = countArray.reduce(add, 0);
        console.log(set5[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set6[1], j);
            countArray[t] = count;
            console.log(countArray[t]);
            t++;
        }
        console.log(countArray);
        set6[0] = countArray.reduce(add, 0);
        console.log(set6[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set7[1], j);
            countArray[u] = count;
            console.log(countArray[u]);
            u++;
        }
        console.log(countArray);
        set7[0] = countArray.reduce(add, 0);
        console.log(set7[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set8[1], j);
            countArray[v] = count;
            console.log(countArray[v]);
            v++;
        }
        console.log(countArray);
        set8[0] = countArray.reduce(add, 0);
        console.log(set8[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set9[1], j);
            countArray[j] = count;
            console.log(countArray[j]);
            j++;
        }
        console.log(countArray);
        set9[0] = countArray.reduce(add, 0);
        console.log(set9[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set10[1], j);
            countArray[k] = count;
            console.log(countArray[k]);
            k++;
        }
        console.log(countArray);
        set10[0] = countArray.reduce(add, 0);
        console.log(set10[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set11[1], j);
            countArray[m] = count;
            console.log(countArray[m]);
            m++;
        }
        console.log(countArray);
        set11[0] = countArray.reduce(add, 0);
        console.log(set11[0]);

        const Point = [set1[0], set2[0], set3[0], set4[0], set5[0], set6[0], set7[0], set8[0], set9[0], set10[0], set11[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });



        const objectArray = new Array(set1, set2, set3, set4, set5, set6, set6, set7, set8, set9, set10, set11);

        if (maxPoint[0] < 3) {
            speech.text = "Sorry,This is test message";
        }
        else {
            var z = 1;
            for (loop = 0; loop < objectArray.length; loop++) {
                if (maxPoint[0] == objectArray[loop][0]) {
                    loopQuestion(objectArray[loop][1], z);
                    oneQuestionAnswer(objectArray[loop][2]);
                    z++;
                }
            }
        }

    }
    else if (9 <= strLength  < 12) {
        let i = 0;
        let p = 0;
        let q = 0;
        let r = 0;
        let s = 0;
        let t = 0;
        let u = 0;
        let v = 0;
        let j = 0;
        let k = 0;
        let m = 0;
        let a = 0;
        let loop;
        let set1 = new Array(0, " what are the certificates that I can collect by following fit", " There is only one certificate in this programme. It will be offered to you after you pass all three e-Tests and the two Practical tests. But if required, you can get a programme status letter after passing all three eTests. Also, you can take a printout of your profile page in the FIT information system and use it as a proof of registration to this programme");
        let set2 = new Array(0, "why should I follow fit before I register bit ", "You can obtain ICT related certification to find an employment in ICT or related areas as a beginner. Since BIT is an external degree programme, you could do a full time or part time job while following the BIT Programme If you do not have enough qualifications to register BIT programme, you can use FIT certification to obtain BIT registration ");
        let set3 = new Array(0, "can I use fit certificates to register other degree programmes ", "At the moment, FIT is considered as an alternative qualification to register BIT programme. However, it is difficult to say about other programs since conditions of registration vary from one to another. However, if any other institute decides to consider FIT certification equivalent qualification for registration, we will announce them. ");
        let set4 = new Array(0, "how can I find more details about the fit programme", "Programme Structure page could be a good starting point");
        let set5 = new Array(0, "is there any different between old and new syllabus ", "Yes, there are some differences, and those improvements are done to enhance the FIT programme. The students are supposed to follow the new syllabus as all the examinations are conducted based on the new syllabi. ");
        let set6 = new Array(0, "Should I go to Institute to complete FIT programme? ", "There is no compulsory requirement. There are a lot of self-learning students who follow the FIT programme. However, if you find it difficult to understand the subject matter given in the syllabus and online courses, it is better to consider attending classes conducted by a private institute. ");
        let set7 = new Array(0, "How long does it take to know FIT results? ", "Usually, FIT e-test results are released two weeks after completing the examinations in the schedule. But, it takes 2-3 weeks to publish the FIT practical test results. ");
        let set8 = new Array(0, "Do I have to pass to obtain the certificate? ", "Yes, you have to pass relevant tests of the FIT programme to obtain the certificates. The pass mark for any e-Test or practical test will be 50 marks. ");
        let set9 = new Array(0, "Do I have to do all e-Tests at once? ", "No, there is no such requirement. You can decide and do it in the way you like. However, if you register for all e-Tests, you can do all these three e-Tests on the same day. ");
        let set10 = new Array(0, "I have done similar courses, can I get FIT certificate? ", "You have to sit for FIT e-Tests and practical tests to obtain the FIT certificate. You cannot claim the FIT certificate by submitting certificates of any similar courses. ");
        let set11 = new Array(0, "Other than FIT qualifications, are there conditions to register BIT? ", "Yes, You must have completed, GCE (O/L) examination with credit passes for maths and English. ");
        let set12 = new Array(0, "Do I have to come to the UCSC to register?", "No, you do not have to come to the UCSC to register. You can register online via FIT information system (reg.fit.bit.lk). However, it takes 2-7 working days to validate your payments provide you access to the FITVLE.")
        console.log(set1);
        console.log(set2);
        console.log(set3);
        console.log(set4);
        console.log(set5);
        console.log(set6);
        console.log(set7);
        console.log(set8);
        console.log(set9);
        console.log(set10);
        console.log(set11);
        console.log(set12);

        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set1[1], j);
            countArray[i] = count;
            console.log(countArray[i]);
            i++;
        }
        console.log(countArray);
        set1[0] = countArray.reduce(add, 0);
        console.log(set1[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set2[1], j);
            countArray[p] = count;
            console.log(countArray[p]);
            p++;
        }
        console.log(countArray);
        set2[0] = countArray.reduce(add, 0);
        console.log(set2[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set3[1], j);
            countArray[q] = count;
            console.log(countArray[q]);
            q++;
        }
        console.log(countArray);
        set3[0] = countArray.reduce(add, 0);
        console.log(set3[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set4[1], j);
            countArray[r] = count;
            console.log(countArray[r]);
            r++;
        }
        console.log(countArray);
        set4[0] = countArray.reduce(add, 0);
        console.log(set4[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set5[1], j);
            countArray[s] = count;
            console.log(countArray[s]);
            s++;
        }
        console.log(countArray);
        set5[0] = countArray.reduce(add, 0);
        console.log(set5[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set6[1], j);
            countArray[t] = count;
            console.log(countArray[t]);
            t++;
        }
        console.log(countArray);
        set6[0] = countArray.reduce(add, 0);
        console.log(set6[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set7[1], j);
            countArray[u] = count;
            console.log(countArray[u]);
            u++;
        }
        console.log(countArray);
        set7[0] = countArray.reduce(add, 0);
        console.log(set7[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set8[1], j);
            countArray[v] = count;
            console.log(countArray[v]);
            v++;
        }
        console.log(countArray);
        set8[0] = countArray.reduce(add, 0);
        console.log(set8[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set9[1], j);
            countArray[j] = count;
            console.log(countArray[j]);
            j++;
        }
        console.log(countArray);
        set9[0] = countArray.reduce(add, 0);
        console.log(set9[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set10[1], j);
            countArray[k] = count;
            console.log(countArray[k]);
            k++;
        }
        console.log(countArray);
        set10[0] = countArray.reduce(add, 0);
        console.log(set10[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set11[1], j);
            countArray[m] = count;
            console.log(countArray[m]);
            m++;
        }
        console.log(countArray);
        set11[0] = countArray.reduce(add, 0);
        console.log(set11[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set12[1], j);
            countArray[a] = count;
            console.log(countArray[a]);
            a++;
        }
        console.log(countArray);
        set12[0] = countArray.reduce(add, 0);
        console.log(set12[0]);

        const Point = [set1[0], set2[0], set3[0], set4[0], set5[0], set6[0], set7[0], set8[0], set9[0], set10[0], set11[0], set12[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });



        const objectArray = new Array(set1, set2, set3, set4, set5, set6, set7, set8, set9, set10, set11, set12);

        if (maxPoint[0] < 3) {
            speech.text = "Sorry,This is test message";
        }
        else {
            var z = 1;
            for (loop = 0; loop < objectArray.length; loop++) {
                if (maxPoint[0] == objectArray[loop][0]) {
                    loopQuestion(objectArray[loop][1], z);
                    oneQuestionAnswer(objectArray[loop][2]);
                    z++;
                }
            }
        }

    }
    else if (12 <= strLength  < 15) {
        let i = 0;
        let p = 0;
        let loop;
        let set1 = new Array(0, "Does my practice quiz marks will be counted for the final grade? ", "No, practice quizzes or Assignments marks are not counted for the final grade in the course. The final grade of a course depends on your performance in the e-Tests and practical tests. However, assignment quizzes are mandatory, and you should pass these assignment quizzes before applying for the e-Tests. ");
        let set2 = new Array(0, "I have done courses similar to the FIT programme. Can I register for BIT? ", "It is difficult to say since all similar courses are not acceptable. However, if you have done similar courses/study programmes, we recommend you to take FIT e-Tests and apply for BIT registration based on the results. ");
        console.log(set1);
        console.log(set2);

        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set1[1], j);
            countArray[i] = count;
            console.log(countArray[i]);
            i++;
        }
        console.log(countArray);
        set1[0] = countArray.reduce(add, 0);
        console.log(set1[0]);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set2[1], j);
            countArray[p] = count;
            console.log(countArray[p]);
            p++;
        }
        console.log(countArray);
        set2[0] = countArray.reduce(add, 0);
        console.log(set2[0]);

        const Point = [set1[0], set2[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });



        const objectArray = new Array(set1, set2);

        if (maxPoint[0] < 3) {
            speech.text = "Sorry,This is test message";
        }
        else {
            var z = 1;
            for (loop = 0; loop < objectArray.length; loop++) {
                if (maxPoint[0] == objectArray[loop][0]) {
                    loopQuestion(objectArray[loop][1], z);
                    oneQuestionAnswer(objectArray[loop][2]);
                    z++;
                }
            }
        }


    }
    else if (15 <= strLength  < 18) {
        let i = 0;
        let loop;
        let set1 = new Array(0, "How long will it take to get access to the virtual learning environment (FITVLE) after registration? ", "It will take 3-4 working days( maximum 7days) after submitting your registration detail via FIT information system. If you have provided a valid email address, we will inform you as soon as we create an account in the online system. If it delays more than seven days, please contact the admin of the FITVLE (admin@fit.bit.lk). ");
        console.log(set1);

        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set1[1], j);
            countArray[i] = count;
            console.log(countArray[i]);
            i++;
        }
        console.log(countArray);
        set1[0] = countArray.reduce(add, 0);
        console.log(set1[0]);

        const Point = [set1[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });

        const objectArray = new Array(set1);

        if (maxPoint[0] < 3) {
            speech.text = "Sorry,This is test message";
        }
        else {
            var z = 1;
            for (loop = 0; loop < objectArray.length; loop++) {
                if (maxPoint[0] == objectArray[loop][0]) {
                    loopQuestion(objectArray[loop][1], z);
                    oneQuestionAnswer(objectArray[loop][2]);
                    z++;
                }
            }
        }



    }
    else if (18 <= strLength ) {
        let i = 0;
        let loop;
        let set1 = new Array(0, "If I am a repeat student (registered before 2021), do I have to follow the new syllabus when I take the next exam? ", "Yes, There are no separate exams for students who registered before 2021. ");
        console.log(set1);

        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set1[1], j);
            countArray[i] = count;
            console.log(countArray[i]);
            i++;
        }
        console.log(countArray);
        set1[0] = countArray.reduce(add, 0);
        console.log(set1[0]);

        const Point = [set1[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });

        const objectArray = new Array(set1);

        if (maxPoint[0] < 3) {
            speech.text = "Sorry,This is test message";
        }
        else {
            var z = 1;
            for (loop = 0; loop < objectArray.length; loop++) {
                if (maxPoint[0] == objectArray[loop][0]) {
                    loopQuestion(objectArray[loop][1], z);
                    oneQuestionAnswer(objectArray[loop][2]);
                    z++;
                }
            }
        }


    }


    //  window.speechSynthesis.speak(speech);
    //  chatareamain.appendChild(showRightAnswerchatbotmsg(speech.text));
    //window.speechSynthesis.speak(speech);
    //chatareamain.appendChild(chatRoboSujesun(speech.text));

}
function loopQuestion(objectArray, z) {
    console.log(objectArray);
    let p = z;
    //   speech.text=objectArray;
   let output = '';
    speech.text = "Do you Asked     " + objectArray + " Yes Or No ?"
//    window.speechSynthesis.speak(speech);
//    output += `<div class="chatarea-inner chatbot">Do you Asked ${objectArray} : Yes or No</div>`;
//    chatareaouter.innerHTML += output;
    console.log(" ++++++; " + objectArray);
    return chatareaouter;
    //  speech.text="Do you Asked,"+"  "+objectArray+"?" +"           " + "question No " + z + "     :Yes or No";


}



function oneQuestionAnswer(rightAnswer) {
    var answer = rightAnswer;
    recognition.onresult = function (e) {
        let resultIndex = e.resultIndex;
        let transcript = e.results[resultIndex][0].transcript;
        chatareamain.appendChild(showusermsg(transcript));
        answerQuestBot(transcript, answer);
        againStart();
    }
}

function answerQuestBot(yyy, answer) {
    switch (yyy) {
        case 'yes':
            speech.text = answer;
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));
            autoScroll();
            break;
        case 'no':
            speech.text="ask the question again";
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));
            autoScroll();
            break;
        default:
            speech.text="sorry,I can't undestard your speech";
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text)); 
            autoScroll();   

    }
    return;
}

function stringSearch(string, pattern) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] !== string[i + j]) break;
            if (j === pattern.length - 1) count++;
        }
    }
    return count;
}

function add(accumlator, a) {
    return accumlator + a;
}


/*
function detectQuestion( lastobject){
    let newArr = [...lastobject];

//    const peraObject = new Array;
  //  console.log(newArr);
 //   console.log(peraObject);
  //  const keys = Object.keys(lastArray);
 //   const values = Object.values(keys);

   /* for(var i=0;i<lastArray.length;i++){
        console.log(lastArray[i]);
    }

*/
/*    let sum10 = lastArray.set1.sum1;
    let sum20 = lastArray.set2.sum2;
    let sum30 = lastArray.set3.sum3;
    let value = maxValue;
    switch(value){
        case sum10 :
            console.log(lastArray.set1.questio1);
            break  
        case sum20 :
            console.log(lastArray.set2.questio2);
            break
        case sum30 :
            console.log(lastArray.set3.questio3);
            break
    }
   
}
*/

/*function chatRoboSujesun(){
  
    let output = '';
    output += `<br><div class="chatarea-inner chatbot row"><div class="answer" type="button">YES</div> <div class="answer" type="button">NO</div></div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;

}
*/

function againStart() {
    recognition.onresult = function (e) {
        let resultIndex = e.resultIndex;
        let transcript = e.results[resultIndex][0].transcript;
        chatareamain.appendChild(showusermsg(transcript));
        chatbotvoice(transcript);
        console.log(transcript);
    }
}