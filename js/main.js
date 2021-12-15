let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am FIT Robot", "Hi, I am a FIT Robo",];
let help = ["Yes", "How can i help you?", "ask the question"];
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

function chatbotvoice(message) {
    const speech = new SpeechSynthesisUtterance();
    selectCorrectAnswer(speech); 
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
    if (message.includes('What are the certificates that I can collect by following FIT?')) {
        let finalresult = q2[Math.floor(Math.random() * q2.length)];
        speech.text = finalresult;
    }
    if (message.includes('Why should I follow FIT before I register BIT?')) {
        let finalresult = q3[Math.floor(Math.random() * q3.length)];
        speech.text = finalresult;
    }
    if (message.includes('Can I use FIT certificates to register other degree programmes?')) {
        let finalresult = q4[Math.floor(Math.random() * q4.length)];
        speech.text = finalresult;
    }
    if (message.includes('When can I collect the certificates?')) {
        let finalresult = q5[Math.floor(Math.random() * q5.length)];
        speech.text = finalresult;
    }
    if (message.includes('How can I find more details about the FIT programme?')) {
        let finalresult = q6[Math.floor(Math.random() * q6.length)];
        speech.text = finalresult;
    }
    if (message.includes('How long will it take to complete FIT?')) {
        let finalresult = q7[Math.floor(Math.random() * q7.length)];
        speech.text = finalresult;
    }
    if (message.includes('How can I make a complaint about FIT programme?')) {
        let finalresult = q8[Math.floor(Math.random() * q8.length)];
        speech.text = finalresult;
    }
    if (message.includes('Is there any different between old and new syllabus?')) {
        let finalresult = q9[Math.floor(Math.random() * q9.length)];
        speech.text = finalresult;
    }
    if (message.includes('Does UCSC conduct classes for FIT?')) {
        let finalresult = q10[Math.floor(Math.random() * q10.length)];
        speech.text = finalresult;
    }
    if (message.includes('Where can I learn for FIT?')) {
        let finalresult = q11[Math.floor(Math.random() * q11.length)];
        speech.text = finalresult;
    }
    if (message.includes('Are these online courses enough to complete FIT?')) {
        let finalresult = q12[Math.floor(Math.random() * q12.length)];
        speech.text = finalresult;
    }
    if (message.includes('Should I go to Institute to complete FIT programme?')) {
        let finalresult = q13[Math.floor(Math.random() * q13.length)];
        speech.text = finalresult;
    }
    if (message.includes('How long will it take to get access to the virtual learning environment (FITVLE) after registration?')) {
        let finalresult = q14[Math.floor(Math.random() * q14.length)];
        speech.text = finalresult;
    }
    if (message.includes('How long does it take to know FIT results?')) {
        let finalresult = q15[Math.floor(Math.random() * q15.length)];
        speech.text = finalresult;
    }
    if (message.includes('When will the practical test be held?')) {
        let finalresult = q16[Math.floor(Math.random() * q16.length)];
        speech.text = finalresult;
    }
    if (message.includes('Do I have to pass to obtain the certificate?')) {
        let finalresult = q17[Math.floor(Math.random() * q17.length)];
        speech.text = finalresult;
    }
    if (message.includes('Do I have to do online course quizzes?')) {
        let finalresult = q18[Math.floor(Math.random() * q18.length)];
        speech.text = finalresult;
    }
    if (message.includes('Does my practice quiz marks will be counted for the final grade?')) {
        let finalresult = q19[Math.floor(Math.random() * q19.length)];
        speech.text = finalresult;
    }
    if (message.includes('Where can I take the FIT exams?')) {
        let finalresult = q20[Math.floor(Math.random() * q20.length)];
        speech.text = finalresult;
    }
    if (message.includes('If I am a repeat student (registered before 2021), do I have to follow the new syllabus when I take the next exam?')) {
        let finalresult = q21[Math.floor(Math.random() * q21.length)];
        speech.text = finalresult;
    }
    if (message.includes('Do I have to do all e-Tests at once?')) {
        let finalresult = q22[Math.floor(Math.random() * q22.length)];
        speech.text = finalresult;
    }
    if (message.includes('Without doing FIT, can I register for BIT?')) {
        let finalresult = q23[Math.floor(Math.random() * q23.length)];
        speech.text = finalresult;
    }
    if (message.includes('I have done similar courses, can I get FIT certificate?')) {
        let finalresult = q24[Math.floor(Math.random() * q24.length)];
        speech.text = finalresult;
    }
    if (message.includes('I have done courses similar to the FIT programme. Can I register for BIT?')) {
        let finalresult = q25[Math.floor(Math.random() * q25.length)];
        speech.text = finalresult;
    }
    if (message.includes('Other than FIT qualifications, are there conditions to register BIT?')) {
        let finalresult = q26[Math.floor(Math.random() * q26.length)];
        speech.text = finalresult;
    }
    if (message.includes('How to apply/register FIT programme?')) {
        let finalresult = q27[Math.floor(Math.random() * q27.length)];
        speech.text = finalresult;
    }
    if (message.includes('When can I register for the FIT?')) {
        let finalresult = q28[Math.floor(Math.random() * q28.length)];
        speech.text = finalresult;
    }
    if (message.includes('Do I have to come to the UCSC to register?')) {
        let finalresult = q29[Math.floor(Math.random() * q29.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));

    $(document).ready(function () {
        $('.scroll_div').animate({
            scrollTop: $('.scroll_div').get(0).scrollHeight
        }, 2000);
    });
}

recognition.onresult = function (e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    selectAnswer(transcript);
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

  function selectAnswer(massge){
    let userQuestions = massge;
    const userQuestionsArray = userQuestions.split(" ");
    console.log(userQuestionsArray.length);
    console.log(userQuestionsArray[0]);

    if(userQuestionsArray.length<10){
        let i = 0;
        let p = 0;
        let q = 0;
        const countArray=[];
        for(j of userQuestionsArray){
            let count = 0;
            count = stringSearch("what is what is what is your name",j);
            countArray[i] = count;
            console.log(countArray[i]);
            i++;
        }
        console.log(countArray);
        const sum1 = countArray.reduce(add, 0);
       console.log(sum1);

        for(j of userQuestionsArray){
            let count = 0;
            count = stringSearch("how is how is how is your name",j);
            countArray[p] = count;
            console.log(countArray[p]);
            p++;
        }
       console.log(countArray);
        const sum2 = countArray.reduce(add, 0);
       console.log(sum2);

        for(j of userQuestionsArray){
            let count = 0;
            count = stringSearch("why is why is why is your name",j);
            countArray[q] = count;
            console.log(countArray[q]);
            q++;
        }
       console.log(countArray);
        const sum3 = countArray.reduce(add, 0);
       console.log(sum3);

       const Point = [sum1,sum2,sum3];
       const maxPoint = Point.sort(function(a,b){
           return b-a
       });

       console.log(maxPoint);

       detectQuestion(maxPoint[0], sum1, sum2, sum3);


    }
    if(3<=userQuestionsArray.length<6){

    }
    if(6<=userQuestionsArray.length<9){
        
    }
    if(9<=userQuestionsArray.length<12){
        
    }
    if(12<=userQuestionsArray.length<15){
        
    }
    if(15<=userQuestionsArray.length<18){
        
    }
    if(18<=userQuestionsArray.length){
       
    }
    
 }
  function selectCorrectAnswer(speech){
    speech.text = "Sorry,This is test message";

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

  function add(accumlator,a){
    return accumlator + a;
}

function detectQuestion(maxValue, sum1, sum2, sum3){
    let sum10 = sum1;
    let sum20 = sum2;
    let sum30 = sum3;
    let value = maxValue;
    switch(value){
        case sum10 :
            console.log("what is what is what is your name");
        break;  
        case sum20 :
            console.log("how is how is how is your name");
        break;   
        case sum30 :
            console.log("why is why is why is your name");
        break;     
    }
}


