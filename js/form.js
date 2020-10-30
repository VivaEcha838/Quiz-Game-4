class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');

        this.continue = createButton("Continue");

        this.greeting1 = createElement('h3')
}
     hide(){
         this.input.hide();
         this.button.hide();
         this.greeting.hide();
         this.continue.hide();
     }
    display(){
        var title = createElement('h2');
        title.html("Quiz Time!");
        title.position(displayWidth / 2 - 50, 10);
       
        this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
        this.button.position(displayWidth / 2 + 30, displayHeight / 2);

       
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            //player.name = this.input.value();
            //playerCount +=1;
            //player.index = playerCount;
            //player.update();
            //player.updateCount(playerCount);
            this.greeting.html("Hello "+ name );
            this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
            this.continue.position(displayWidth / 2 - 100, displayHeight / 2);

            this.greeting1.html("Please choose the subject that you want to be quizzed on!");
            this.greeting1.position(displayWidth / 2 - 150, displayHeight / 2 + 75);

            if(allTopics != undefined){
                radioTopics = createRadio();
                for(var n in allTopics){
                   radioTopics.option(allTopics[n].T1);
                }
                radioTopics.position(displayWidth / 2 + 50, displayHeight / 2)
;               
                console.log(allTopics);
            }

            
        })
        this.continue.mousePressed(()=>{
            /*player.updateCount(0);
            game.update(0);*/

            //game.play();
            //gameStart = 1;
            form.hide();
            textSize(30);
            text("Quiz Start", 120,100);
         
            quiz = new Quiz();
            quiz.display();
        })
    }

    
}