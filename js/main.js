let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let a = 0;
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

let intro = ["Hello, I am FIT Robot", "Hi, I am a FIT Robo",];
let help = ["ask the question in website", "ask the question from me", "ask the question"];
let set1 = new Array(0, "why should I follow fit", "It is a pre-degree program for those who wish to follow the Bachelor of Information Technology (BIT) at UCSC. Moreover, it will be an added qualification for those who seek higher education in ICT or employments related to IT");
let set2 = new Array(0, "How to apply/register FIT programme?", "You have to register for the FIT programme via FIT information system https://reg.fit.bit.lk. First, create an account by providing a valid email address. ")
let set3 = new Array(0, "when can I collect the certificates ", "When you have completed relevant e-Tests or practical tests successfully, you can apply to obtain a formal certificate by paying Rs. 500. All requests received before the first Monday of the last week of a month will be processed and the certificate will be issued during the first week of next month. ");
let set4 = new Array(0, "how long will it take to complete fit ", "Generally, it takes 8-10 months to complete all courses if it is very beginner. However, it depends on your experience and your knowledge of IT. Moreover, it will be an added qualification for those who seek higher education in ICT or IT-related employment ");
let set5 = new Array(0, "how can I make a complaint about fit programme ", "Please contact the relevant facilitator of the course, through a forum, message or email. Contact details are given in the contact us page.If you are not satisfied with the reply, contact the coordinator of VLE through email ( taw@ucsc.cmb.ac.lk ).If you are still not satisfied with the reply, send your complaint in writing to the Director, UCSC by using the email (kph@ucsc.cmb.ac.lk) ");
let set6 = new Array(0, "Does UCSC conduct classes for fit ", "No UCSC will not conduct any face-to-face classes. Private institutes conduct face-to-face classes based on the FIT syllabi. However, UCSC will not undertake any responsibility or comment on their performances. Therefore, we advise all the students to follow the online courses in the FITVLE and get updated by checking the announcements we made via the FITVLE and FIT information system. ");
let set7 = new Array(0, "Where can I learn for fit ", "You can follow online courses in the FITVLE. Otherwise, you can select a private institute that conducts classes based on the FIT syllabi. ");
let set8 = new Array(0, "Are these online courses enough to complete FIT?", "Online courses provide general guidance for a self-learning student. They are designed and developed based on the FIT curriculum. However, if you find it difficult to understand the subject matter given in the syllabus and online courses, it is better to consider attending classes conducted by a private institute.")
let set9 = new Array(0, "When will the practical test be held? ", "If there is enough demand, the practical tests can also be held once a month. However, the time plan could vary depending on the demand and availability ");
let set10 = new Array(0, "Do I have to do online course quizzes? ", "These online quizzes are optional self-learning resources for registered students. Your marks or performances in online courses will not be considered when deciding your final grade. However, assignment quizzes are mandatory, and the students should pass these assignment quizzes before applying for the e-Tests. ");
let set11 = new Array(0, "Where can I take the FIT exams? ", "You can take the FIT exams at the UCSC or online from home (if we conduct online tests). ");
let set12 = new Array(0, "Without doing FIT, can I register for BIT? ", "Yes, you can. If you pass all three subjects in the Advanced Level exams, you can directly register for BIT programme without following the FIT ");
let set13 = new Array(0, "When can I register for the FIT?", "Students can register for the FIT programme at any time of the year. The registration period will expire after 365 calendar days from the registration date. ")
let set14 = new Array(0, "what are the certificates that I can collect by following fit", " There is only one certificate in this programme. It will be offered to you after you pass all three e-Tests and the two Practical tests. But if required, you can get a programme status letter after passing all three eTests. Also, you can take a printout of your profile page in the FIT information system and use it as a proof of registration to this programme");
let set15 = new Array(0, "why should I follow fit before I register bit ", "You can obtain ICT related certification to find an employment in ICT or related areas as a beginner. Since BIT is an external degree programme, you could do a full time or part time job while following the BIT Programme If you do not have enough qualifications to register BIT programme, you can use FIT certification to obtain BIT registration ");
let set16 = new Array(0, "can I use fit certificates to register other degree programmes ", "At the moment, FIT is considered as an alternative qualification to register BIT programme. However, it is difficult to say about other programs since conditions of registration vary from one to another. However, if any other institute decides to consider FIT certification equivalent qualification for registration, we will announce them. ");
let set17 = new Array(0, "how can I find more details about the fit programme", "Programme Structure page could be a good starting point");
let set18 = new Array(0, "is there any different between old and new syllabus ", "Yes, there are some differences, and those improvements are done to enhance the FIT programme. The students are supposed to follow the new syllabus as all the examinations are conducted based on the new syllabi. ");
let set19 = new Array(0, "Should I go to Institute to complete FIT programme? ", "There is no compulsory requirement. There are a lot of self-learning students who follow the FIT programme. However, if you find it difficult to understand the subject matter given in the syllabus and online courses, it is better to consider attending classes conducted by a private institute. ");
let set20 = new Array(0, "How long does it take to know FIT results? ", "Usually, FIT e-test results are released two weeks after completing the examinations in the schedule. But, it takes 2-3 weeks to publish the FIT practical test results. ");
let set21 = new Array(0, "Do I have to pass to obtain the certificate? ", "Yes, you have to pass relevant tests of the FIT programme to obtain the certificates. The pass mark for any e-Test or practical test will be 50 marks. ");
let set22 = new Array(0, "Do I have to do all e-Tests at once? ", "No, there is no such requirement. You can decide and do it in the way you like. However, if you register for all e-Tests, you can do all these three e-Tests on the same day. ");
let set23 = new Array(0, "I have done similar courses, can I get FIT certificate? ", "You have to sit for FIT e-Tests and practical tests to obtain the FIT certificate. You cannot claim the FIT certificate by submitting certificates of any similar courses. ");
let set24 = new Array(0, "Other than FIT qualifications, are there conditions to register BIT? ", "Yes, You must have completed, GCE (O/L) examination with credit passes for maths and English. ");
let set25 = new Array(0, "Do I have to come to the UCSC to register?", "No, you do not have to come to the UCSC to register. You can register online via FIT information system (reg.fit.bit.lk). However, it takes 2-7 working days to validate your payments provide you access to the FITVLE.")
let set26 = new Array(0, "Does my practice quiz marks will be counted for the final grade? ", "No, practice quizzes or Assignments marks are not counted for the final grade in the course. The final grade of a course depends on your performance in the e-Tests and practical tests. However, assignment quizzes are mandatory, and you should pass these assignment quizzes before applying for the e-Tests. ");
let set27 = new Array(0, "I have done courses similar to the FIT programme. Can I register for BIT? ", "It is difficult to say since all similar courses are not acceptable. However, if you have done similar courses/study programmes, we recommend you to take FIT e-Tests and apply for BIT registration based on the results. ");
let set28 = new Array(0, "How long will it take to get access to the virtual learning environment (FITVLE) after registration? ", "It will take 3-4 working days( maximum 7days) after submitting your registration detail via FIT information system. If you have provided a valid email address, we will inform you as soon as we create an account in the online system. If it delays more than seven days, please contact the admin of the FITVLE (admin@fit.bit.lk). ");
let set29 = new Array(0, "If I am a repeat student (registered before 2021), do I have to follow the new syllabus when I take the next exam? ", "Yes, There are no separate exams for students who registered before 2021. ");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const speech = new SpeechSynthesisUtterance();

function buttonMsg(selectMsg,msgAnswer){
    console.log(selectMsg);
    console.log(msgAnswer);
    let output = '';
    
 
    output += `<dl id="sample" class="dropdown">
                    <dt class="question"><p>${selectMsg}</p></dt>
                    
                    <div class="serchanswer">
                        <p>${msgAnswer}</p>

                    </div>
                </dl>`

    //chatareaouter.innerHTML += output;  
    $('.chatarea-outer').append(output).promise().done(function(){
        
        
    });
       
    
    return chatareaouter; 
}

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

function chatbotvoice(message) {
    const userSpeech = message

    //  speech.text = "Sorry,This is test message";
    if (message.includes('who are you')) {
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('how can help me' || 'can you help me' || 'help me')) {
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('why should I follow fit')) {
        let finalresult = set1[2][Math.floor(Math.random() * set1[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('what are the certificates that I can collect by following fit')) {
        let finalresult = set14[2][Math.floor(Math.random() * set14[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('why should I follow fit before I register bit')) {
        let finalresult = set15[2][Math.floor(Math.random() * set15[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('can I use fit certificates to register other degree programmes')) {
        let finalresult = set16[2][Math.floor(Math.random() * set16[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('when can I collect the certificates')) {
        let finalresult = set3[2][Math.floor(Math.random() * set3[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('how can I find more details about the fit programme')) {
        let finalresult = set17[2][Math.floor(Math.random() * set17[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('how long will it take to complete fit')) {
        let finalresult = set4[2][Math.floor(Math.random() * set4[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('how can I make a complaint about fit programme')) {
        let finalresult = set5[2][Math.floor(Math.random() * set5[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('is there any different between old and new syllabus')) {
        let finalresult = set18[2][Math.floor(Math.random() * set18[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('does ucsc conduct classes for fit')) {
        let finalresult = set6[2][Math.floor(Math.random() * set6[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('where can I learn for fit')) {
        let finalresult = set7[2][Math.floor(Math.random() * set7[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('are these online courses enough to complete fit')) {
        let finalresult = set8[2][Math.floor(Math.random() * set8[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('should I go to institute to complete fit programme')) {
        let finalresult = set19[2][Math.floor(Math.random() * set19[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('how long will it take to get access to the virtual learning environment (FITVLE) after registration')) {
        let finalresult = set28[2][Math.floor(Math.random() * set28[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('how long does it take to know fit results')) {
        let finalresult = set20[2][Math.floor(Math.random() * set20[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('when will the practical test be held')) {
        let finalresult = set9[2][Math.floor(Math.random() * set9[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('do I have to pass to obtain the certificate')) {
        let finalresult = set21[2][Math.floor(Math.random() * set21[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('do I have to do online course quizzes')) {
        let finalresult = set10[2][Math.floor(Math.random() * set10[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('does my practice quiz marks will be counted for the final grade')) {
        let finalresult = set26[2][Math.floor(Math.random() * set26[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('where can I take the fit exams')) {
        let finalresult = set11[2][Math.floor(Math.random() * set11[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('if I am a repeat student, do I have to follow the new syllabus when I take the next exam')) {
        let finalresult = set29[2][Math.floor(Math.random() * set29[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        
    }
    else if (message.includes('do I have to do all e-Tests at once')) {
        let finalresult = set22[2][Math.floor(Math.random() * set22[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('without doing fit, can I register for bit?')) {
        let finalresult = set12[2][Math.floor(Math.random() * set12[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('I have done similar courses, can I get fit certificate')) {
        let finalresult = set23[2][Math.floor(Math.random() * set23[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('I have done courses similar to the fit programme. Can I register for bit')) {
        let finalresult = set27[2][Math.floor(Math.random() * set27[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));

    }
    else if (message.includes('other than fit qualifications, are there conditions to register bit')) {
        let finalresult = set24[2][Math.floor(Math.random() * set24[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('how to apply fit programme'||'how to register fit programme'||'how to apply programme'||'how to register programme')) {
        let finalresult = set2[2][Math.floor(Math.random() * set2[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('when can I register for the fit')) {
        let finalresult = set13[2][Math.floor(Math.random() * set13[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (message.includes('do I have to come to the ucsc to register')) {
        let finalresult = set25[2][Math.floor(Math.random() * set25[2].length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else{
        selectAnswer(speech, userSpeech);
        
    }
    

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


function selectAnswer(speech, massge) {
    const newSpeech = speech;
    let userQuestions = massge;
    const userQuestionsArray = userQuestions.split(" ");
    const strLength = userQuestionsArray.length;
    
    if(strLength<4){
        shoteText(userQuestions);
    }
    else if (strLength  < 6) {
 /*       let i = 0;
        let p = 0;
        let loop;
 */     

        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set1[1], j);
            countArray[i] = count;
            i++;
        }
        set1[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set2[1], j);
            countArray[p] = count;
            p++;
        }
        set2[0] = countArray.reduce(add, 0);
        
        const Point = [set1[0], set2[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });

        const objectArray = new Array(set1, set2);

        if (maxPoint[0] < 3) {
            speech.text = "sorry,I can't understanrd your speech";
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
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (strLength  < 9) {
 /*       let i = 0;
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
*/
        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set3[1], j);
            countArray[i] = count;
            i++;
        }
        set3[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set4[1], j);
            countArray[p] = count;
            p++;
        }
        set4[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set5[1], j);
            countArray[q] = count;
            q++;
        }
        set5[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set6[1], j);
            countArray[r] = count;
            r++;
        }
        set6[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set7[1], j);
            countArray[s] = count;
            console.log(countArray[s]);
            s++;
        }
        set7[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set8[1], j);
            countArray[t] = count;
            t++;
        }
        set8[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set9[1], j);
            countArray[u] = count;
            u++;
        }
        set9[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set10[1], j);
            countArray[v] = count;
            v++;
        }
        set10[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set11[1], j);
            countArray[j] = count;
            j++;
        }
        set11[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set12[1], j);
            countArray[k] = count;
            k++;
        }
        set12[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set13[1], j);
            countArray[m] = count;
            m++;
        }
        set13[0] = countArray.reduce(add, 0);

        const Point = [set3[0], set4[0], set5[0], set6[0], set7[0], set8[0], set9[0], set10[0], set11[0], set12[0], set13[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });

        const objectArray = new Array(set3, set4, set5, set6, set7, set8, set9, set10, set11, set12, set13);

        if (maxPoint[0] < 3) {
            speech.text = "sorry,I can't understanrd your speech";
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
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        
    }
    else if (strLength  < 12) {
/*        let i = 0;
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
*/

        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set14[1], j);
            countArray[i] = count;
            i++;
        }
        set14[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set15[1], j);
            countArray[p] = count;
            p++;
        }
        set15[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set16[1], j);
            countArray[q] = count;
            q++;
        }
        set16[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set17[1], j);
            countArray[r] = count;
            r++;
        }
        set17[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set18[1], j);
            countArray[s] = count;
            s++;
        }
        set18[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set19[1], j);
            countArray[t] = count;
            t++;
        }
        set19[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set20[1], j);
            countArray[u] = count;
            u++;
        }
        set20[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set21[1], j);
            countArray[v] = count;
            v++;
        }
        set21[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set22[1], j);
            countArray[j] = count;
            j++;
        }
        set22[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set23[1], j);
            countArray[k] = count;
            k++;
        }
        set23[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set24[1], j);
            countArray[m] = count;
            m++;
        }
        set24[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set25[1], j);
            countArray[a] = count;
            a++;
        }
        set25[0] = countArray.reduce(add, 0);

        const Point = [set14[0], set15[0], set16[0], set17[0], set18[0], set19[0], set20[0], set21[0], set22[0], set23[0], set24[0], set25[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });

        const objectArray = new Array(set14, set15, set16, set17, set18, set19, set20, set21, set22, set23, set24, set25);

        if (maxPoint[0] < 3) {
            speech.text = "sorry,I can't understanrd your speech";
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
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (strLength  < 15) {
/*          let i = 0;
        let p = 0;
        let loop;
*/
        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set26[1], j);
            countArray[i] = count;
            i++;
        }
        set26[0] = countArray.reduce(add, 0);

        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set27[1], j);
            countArray[p] = count;
            p++;
        }
        set27[0] = countArray.reduce(add, 0);

        const Point = [set26[0], set27[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });

        const objectArray = new Array(set26, set27);

        if (maxPoint[0] < 3) {
            speech.text = "sorry,I can't understanrd your speech";
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
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (strLength  < 18) {
/*        let i = 0;
        let loop;
*/
        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set28[1], j);
            countArray[i] = count;
            i++;
        }
        set28[0] = countArray.reduce(add, 0);

        const Point = [set28[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });

        const objectArray = new Array(set28);

        if (maxPoint[0] < 3) {
            speech.text = "sorry,I can't understanrd your speech";
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
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if (18 <= strLength ) {
/*        let i = 0;
        let loop;
*/ 
        const countArray = [];
        for (j of userQuestionsArray) {
            let count = 0;
            count = stringSearch(set29[1], j);
            countArray[i] = count;
            i++;
        }
        set29[0] = countArray.reduce(add, 0);

        const Point = [set29[0]];
        const maxPoint = Point.sort(function (a, b) {
            return b - a
        });

        const objectArray = new Array(set29);

        if (maxPoint[0] < 3) {
            speech.text = "sorry,I can't understanrd your speech";
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
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));   
    }   
    return;
}

function loopQuestion(objectArray, z) {
    console.log(objectArray);
    let p = z;
   let output = '';
    speech.text = "Did you Asked     " + objectArray + " Yes Or No ?";
    return;
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
    return;
}

function answerQuestBot(yyy, answer) {
    switch (yyy) {
        case 'yes':
            speech.text = answer;
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));
            autoScroll();
            return;
        case 'no':
            speech.text="ask the question again";
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));
            autoScroll();
            return;
        default:
            speech.text="sorry,I can't understanrd your speech";
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



function againStart() {

    recognition.onresult = function (e) {
        let resultIndex = e.resultIndex;
        let transcript = e.results[resultIndex][0].transcript;
        chatareamain.appendChild(showusermsg(transcript));
        chatbotvoice(transcript);
        recognition.stop();
        
    }

}

function shoteText(userQuestions){
    
//    let subMain = new Array();
    let keyWord = new Array('apply', 'register', 'certificate', 'learn', 'online', 'course', 'practical', 'exam', 'details', 'syllabus', 'learn', 'repeat');
    for(var f=0;f<keyWord.length; f++){
        var wordCount = stringSearch(userQuestions, keyWord[f]);
        if(wordCount){
            subMain = sutableSerach(f)  
            var returnArray = arrayUnion(subMain);         
        }   
    
    }
    if(typeof(returnArray)== "object"){
        showQuction(returnArray);
    }
    else{
        speech.text="this is text massage";
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text)); 
    }

    
}

function sutableSerach(passCount){
    
    switch(passCount) {
        case 0:
            subMain = [set2]
          return subMain;
        case 1:
            subMain = [set2, set13, set15, set16, set25, set28]
          return subMain;
        case 2:
            subMain = [set3, set14, set16, set21, set23]
          return subMain;
        default:
          // code block
      }
    return subMain;
}

function arrayUnion(subMain){
    let temp = new Array();
    let union = [...new Set([...temp, ...subMain])];
    temp = union;
    return temp; 
}

function showQuction(returnArray){
    for(var w = 0; w < returnArray.length; w++){
        var Quctions = returnArray[w][1];
        var Answer = returnArray[w][2];
        buttonMsg(Quctions,Answer)
    }
} 



/*$(".dropdown img.flag").addClass("flagvisibility");
$(".dropdown dt a").click(function() {
    $(".dropdown dd p").toggle();
});
*/
$(document).ready(() => {
    $(".chatarea-outer").on('click','.dropdown dt p',function(){
        console.log("aaaaaaa");
        var value = $(this).parent().parent().children().children();
       $(value[1]).slideToggle("slow");
       autoScroll();
   })
})