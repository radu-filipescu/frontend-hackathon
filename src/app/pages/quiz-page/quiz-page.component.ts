import { Component, OnInit } from '@angular/core';

interface QuizQuestion {
  question: string;
  choices: string[];
  answer: string;
}

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {
  questions : QuizQuestion[] = [
    {
      question: 'What percent of the global population breathes air that does not meet World Health Organization standards?',
      choices: [ '50%','75%', '99%' ,'90%' ],
      answer: "99%"
    },
    {
      question: 'What precent of baby sea turtles have plastic in their stomachs?',
      choices: ['100%' ,'70%', '80%', '90%'],
      answer: "100%"
    },
    {
      question: "What percent of the sea's surface is polluted by plastic waste?",
      choices: ['58%','88%','78%','68%'],
      answer: "88%"
    },
    {
      question: 'Between 8 to 14 million _ enters our ocean every year.',
      choices: ['pieces', 'kilos', 'grams', 'tonnes'],
      answer: 'tonnes'
    },
    {
      question: 'How many plastic bags are used in the world each year?',
      choices: ['1 billion', '500 billion', '30 billion', '900 million'],
      answer: '500 billion'
    },
    {
      question: 'What percent of fish caught for human consumption contains plastic?',
      choices: ['63%','33%','13%','93%'],
      answer: '33%'
    },
    {
      question: 'How much plastic waste does the world produce yearly?',
      choices: ['523 tonnes','381 million tonnes','1 billion tonnes','13 million tonnes'],
      answer:'381 million tonnes'
    },
    {
      question: 'Where can microplastics be found?',
      choices: ['tap water','beer', 'salt', 'all of the above'],
      answer: 'all of the above'
    }
  ];
  currentQuestionIndex: number = 0;
  currentQuestion: QuizQuestion = this.questions[this.currentQuestionIndex];
  selectedChoice: string | null = null;
  showScore: boolean = true;
  lastQuestion: boolean = false;
  score: number = 0;
  totalQuestions: number = this.questions.length;
  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectChoice(choice: string): void {
    this.selectedChoice = choice;
    this.selected = true;
  }

  nextQuestion(): void {
    this.selected = false;
    if (this.selectedChoice === this.currentQuestion.answer) {
      this.score++;
    }
    if ((this.currentQuestionIndex === this.totalQuestions - 1)) {
      this.lastQuestion = true;
    }else{
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedChoice = null;
    }
  }

  submitQuiz(): void{

  }

}
