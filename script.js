var bodyType = new Vue ({
  el: '#bodyType',
  data: {
    bodyTypes: ["Your biggest concern should be losing fat and adopting a lifestyle that keeps it off. Strength training should be done to get a better muscle-to-fat ratio, which will help to boost your metabolism. Use moderate weights at a fast training pace, allowing for very little rest between sets and exercises. Lower your calorie intake and eat frequent but small meals to make sure you're still getting adequate nutrition. Eliminate sugar, sweets, and junk food from your diet. Get your heart pumping by engaging in some form of daily activity such as brisk walking or biking.",
    "You have a naturally fit body but, to maintain or improve it, you should adopt an exercise and diet regimen that compliments your build. You can strength train more often and for longer periods of time, but be careful not to overdo it. Train with moderate to heavy weighs and keep a moderate pace, making sure not to rest too long between sets. You'll find you gain muscle quite easily. Don't fear; you won't get 'bulky' When you're happy with your muscle size, simply train to maintain. Stick to a good, healthy diet to stay lean and muscular, and watch for any slow-creeping fat gains. Engage in and enjoy aerobic activities, but be careful not to overdo it.",
    "You should concentrate on gaining weight in the form of good, lean muscle tissue. Weight training should be fairly heavy and done at a slower workout pace with longer rest periods between sets. Don't weight train too often or for too long per training session. Eat a diet high in quality foods, eat more than you're used to, and eat often. Keep aerobic activities to a minimum."],
    imgs: [
      {
        title: 'ENDOMORPH',
        src: 'img/endomorph.png',
        lis: ['Blocky', 'Thick rib cage', 'Wide/thicker joins', 'Hips as wide(or wider) than clavicles', 'Shoerter limbs']
      },
      {
        title: 'MESOMORPH',
        src: 'img/mesomorph.png',
        lis: ['Wide clavicles', 'Narrow waist', 'Thinner joins', 'Long and round muscle bellies']
      },
      {
        title: 'ECTOMORPH',
        src: 'img/ectomorph.png',
        lis: ['Narrow hips and clavicles', 'Small joins (wrist/ankles)', 'Thin build', 'Stringy muscle bellies', 'Long limbs']
      }
    ]
  },
  methods: {
    toggleQuiz: function(){
      bodyTypeQuiz.i = 0;
      bodyTypeQuiz.viewQuiz = !bodyTypeQuiz.viewQuiz;
    }
  }
});

var bodyTypeQuiz = new Vue ({
  el: "#bodyTypeQuiz",
  data: {
    viewQuiz: false,
    questions: [
    'I AM',
    'MY SHOULDERS ARE',
    'A PAIR OF RELAXED-FIT JEANS (WITH A CORRECT WAIST SIZE) FIT ME',
    'MY FOREARMS LOOK',
    'MY BODY TENDS TO',
    'MY BODY LOOKS',
    "IF I ENCIRCLE MY WRIST WITH MY OTHER HAND'S MIDDLE FINGER AND THUMB",
    "CONCERNING MY WEIGHT, I",
    " WHICH RANGE BEST DESCRIBES YOUR CHEST MEASUREMENTS?"
    ],
    answers: [
      ['Male', 'Female'],
      ['Wider than my hips', 'The same witdh as my hips', 'Narrower than my hips'],
      ['Tight around my glutes', 'Perfect around my glutes', 'Loose around my glutes'],
      ['Big', 'Average', 'Small'],
      ['Carry a bit of extra fat', 'Stay lean, yet mascular', 'Stay skinny'],
      ['Round and soft', 'Square and rugged', 'Long and narrow'],
      ['The middle finger and thumb do not touch', 'The middle finger and thumb just touch', 'The middle finger and thumb overlap'],
      ['Gain weight easily, but find it hard to lose', 'I can gain and lose without too much of struggle', 'Have trouble gaining weight in form of muscle or fat'],
      ['43 inches or more', '37-43 inches', '37 inches or less'],
    ],
    i: 0,
    ectoScore: 0,
    endoScore: 0,
    mesoScore: 0,
    ectoRatio: 0,
    endoRatio: 0,
    mesoRatio: 0,
    showResult: false,
  },
  methods: {
    nextQuestion: function(){
      bodyTypeQuiz.i++;
      if (bodyTypeQuiz.i == bodyTypeQuiz.questions.length) {
        result.showResult = true;
        document.getElementById('answer').innerHTML = 'Your body type is: ' + bodyTypeQuiz.ectoRatio + '% Endomorph, ' + bodyTypeQuiz.endoRatio + '% Mesomorph and ' + bodyTypeQuiz.mesoRatio + '% Ectomorph.';
      }
      var ele = document.getElementsByName('answer');
      for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
      }
    },
    result: function(e){
      var choice = e.target.value;
      if (choice == 'Female') {
        bodyTypeQuiz.answers[5] = ['Pear-shaped', 'Hourglass-shaped', 'Mostly straight up and down'];
        bodyTypeQuiz.answers[8] = ['42 inches or more', '35-42 inches', '35 inches or less'];
      }
      if (choice == bodyTypeQuiz.answers[bodyTypeQuiz.i][0] && choice != 'Male' && choice != 'Female') {
        bodyTypeQuiz.endoScore++;
      }
      if (choice == bodyTypeQuiz.answers[bodyTypeQuiz.i][1] && choice != 'Male' && choice != 'Female') {
        bodyTypeQuiz.mesoScore++;
      }
      if (choice == bodyTypeQuiz.answers[bodyTypeQuiz.i][2] && choice != 'Male' && choice != 'Female') {
        bodyTypeQuiz.ectoScore++;
      }
      bodyTypeQuiz.ectoRatio = bodyTypeQuiz.ectoScore * 100 / 8;
      bodyTypeQuiz.endoRatio = bodyTypeQuiz.endoScore * 100 / 8;
      bodyTypeQuiz.mesoRatio = bodyTypeQuiz.mesoScore * 100 / 8;
    }
  },
});

var result = new Vue ({
  el: "#result",
  data: {
    showResult: false,
  },
  methods: {
    toggleQuiz: function(){
      result.showResult = false;
      bodyTypeQuiz.viewQuiz = !bodyTypeQuiz.viewQuiz;
    }
  }
});