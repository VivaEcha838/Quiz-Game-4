class Quiz{
    constructor(){

    }
    display(){
        //var question = createElement('h2');
        //this.fetchAllQuestion();
        
        //question.html()
       // question.position(displayWidth / 2, displayHeight / 2);
       if(allQuestions != undefined){
           //background(marvelImg);
        var display_position = 200;
        
        var i = 0;
        for(var q in allQuestions){
            var question = allQuestions[q].QText;
            console.log(allQuestions[q].QText);
            text(question, 200, display_position);
            display_position = display_position + 100;

            radio[i]= createRadio();
            radio[i].option(allQuestions[q].Option1);
            radio[i].option(allQuestions[q].Option2);
            radio[i].option(allQuestions[q].Option3);

            radio[i].position(300,display_position);
            display_position = display_position + 100;
            i++;
               }
               //console.log(i);
            var submit = createButton("Submit");
            submit.position(displayWidth / 2, (i+1)*200);


            submit.mousePressed(()=>{
                var j = 0;
                for(var q in allQuestions){
                    console.log(radio[j].value(), allQuestions[q].CorrectAns);
                    if(radio[j].value()===allQuestions[q].CorrectAns){
                        score = score + 10;
                        console.log(j);
                    }
                   radio[j].attribute("disabled","true");
                    j++

                }
                var value = confirm("Your score is: " + score + "\n Do you want to take another quiz?");
                console.log(value);  
                if(value === true){
                    clear();
                    for(var i = 0; i<radio.length; i++){
                        radio[i].hide();
                    }
                    radio = []
                    submit.hide();

                    form = new Form();
                    form.display();
                    
                }else{
                  score = 0;
                }
            })
            
        
        }
    }
    static fetchAllQuestion(){
 var questionFetchRef = database.ref("Marvel");
 questionFetchRef.on("value",(data)=>{
     allQuestions = data.val();
     //console.log(data.val());
 })
    }
    static fetchQuizTopics(){
        var quizTopics = database.ref("Topics");
        quizTopics.on("value",(data)=>{
         allTopics = data.val();   
        })
    }
}