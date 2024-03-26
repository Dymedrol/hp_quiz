$(document).ready(function() {

    var quiz = {
        questions: [
            {
                text: 'Неоригинальные картриджи стоят дешевле, поэтому их использование поможет существенно сэкономить.',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/1_f54tDrR.jpg',
                color: '#FFB9D5',
                answers: {
                    0: {
                       text: 'И не зря! По данным Buyers Laboratory и SpencerLab, даже в исправных «клонах» — картриджах стороннего производителя, продающихся под своей торговой маркой, — тонера бывает до 40% меньше, чем в оригинальных картриджах.',
                    },
                    1: {
                       text: 'Увы, но скупой платит дважды. По данным Buyers Laboratory и SpencerLab, даже в исправных «клонах» — картриджах стороннего производителя, продающихся под своей торговой маркой, — тонера бывает до 40% меньше, чем в оригинальных картриджах. И их использование точно не поможет сэкономить на длинной дистанции.',
                    },
                },
            },
            {
                text: 'Картриджи сторонних производителей такие же надежные, как и картриджи официального производителя.',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/2_M5N4W76.jpg',
                color: '#FFE1ED',
                answers: {
                    0: {
                       text: 'И статистика подтверждает это: 76% пользователей сталкивались с проблемами при работе с неоригинальными картриджами. Также, согласно исследованиям, более 30% протестированных неоригинальных картриджей вышли из строя: были неисправны на момент покупки или сломались во время использования.',
                    },
                    1: {
                       text: 'Статистика говорит об обратном: 76% пользователей сталкивались с проблемами при работе с неоригинальными картриджами. Также, согласно исследованиям, более 30% протестированных неоригинальных картриджей вышли из строя: были неисправны на момент покупки или сломались во время использования.',
                    },
                },
            },
            {
                text: 'Неоригинальные струйные картриджи портят в 80 раз больше страниц, чем оригинальные. Чтобы напечатать одинаковое количество документов, в среднем вам понадобится шесть неоригинальных картриджей вместо четырех оригинальных. ',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/33333.png',
                color: '#AAC6EE',
                answers: {
                    0: {
                       text: 'А это так. Согласно результатам независимого исследования, оригинальные струйные картриджи HP в среднем позволяют печатать на 50% больше страниц, чем протестированные неоригинальные картриджи. ',
                    },
                    1: {
                       text: 'Это действительно так. Согласно результатам независимого исследования, оригинальные струйные картриджи HP в среднем позволяют печатать на 50% больше страниц, чем протестированные неоригинальные картриджи.',
                    },
                },
            },
            {
                text: 'Расход бумаги при использовании неоригинальных картриджей действительно большой. Однако качество печати почти не уступает оригинальным картриджам.',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/4_q7QmOy9.jpg',
                color: '#00A4E3',
                answers: {
                    0: {
                       text: 'Да, у производителей неоригинальных картриджей попросту нет ресурсов, чтобы контролировать качество тонера, поэтому их порошки не обладают оптимальным составом, а 60% напечатанных с их помощью документов часто оказываются смазанными, имеют полосы и могут испачкать ваши руки.<br><br> Кроме того, из-за необходимости часто перепечатывать документы вы существенно увеличиваете расходы электроэнергии (на 32%), бумаги, ресурса картриджа, а главное — вашего времени.',
                    },
                    1: {
                       text: 'Не угадали! Реальность такова, что у производителей неоригинальных картриджей попросту нет ресурсов, чтобы контролировать качество тонера, поэтому их порошки не обладают оптимальным составом, а 60% напечатанных с их помощью документов часто оказываются смазанными, имеют полосы и могут испачкать ваши руки. <br><br>Кроме того, из-за необходимости часто перепечатывать документы вы существенно увеличиваете расходы электроэнергии (на 32%), бумаги, ресурса картриджа, а главное — вашего времени.',
                    },
                },
            },
            {
                text: 'Любой текст может буквально «исчезнуть» с листа через несколько месяцев, если будет напечатан неоригинальными чернилами.',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/5_uztZFNT.jpg',
                color: '#A8D9E7',
                answers: {
                    0: {
                       text: 'И зря! Как показывают тестирования, при использовании оригинальных картриджей документ сохранит четкий текст и через 50 лет. А вот текст, напечатанный неоригинальными чернилами, может исчезнуть уже через несколько месяцев.',
                    },
                    1: {
                       text: 'Все верно! Как показывают тестирования, при использовании оригинальных картриджей документ сохранит четкий текст и через 50 лет. А вот текст, напечатанный неоригинальными чернилами, может исчезнуть уже через несколько месяцев.',
                    },
                },
            },
            {
                text: 'Картриджи в принтере содержат простейший химический состав, что позволяет перезаправить его кустарным способом вместо покупки нового.',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/6_aBc8YUy.jpg',
                color: '#FFE696',
                answers: {
                    0: {
                       text: 'А это так! Оригинальные чернила HP — это жидкость со сложным составом, химические и физические характеристики которой делают ее безопасной для всех компонентов принтера. Формулы чернил проходят многоступенчатые испытания специалистами-химиками HP.',
                    },
                    1: {
                       text: 'Вы правы! Оригинальные чернила HP — это жидкость со сложным составом, химические и физические характеристики которой делают ее безопасной для всех компонентов принтера. Формулы чернил проходят многоступенчатые испытания специалистами-химиками HP.',
                    },
                },
            },
            {
                text: 'О принтере и расходниках можно не слишком заботиться, ведь в случае неисправностей устройства пользователи оригинальных и неоригинальных картриджей могут обратиться в службу поддержки и отремонтировать его по гарантии.',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/7777.png',
                color: '#00A99E',
                answers: {
                    0: {
                       text: 'И вы правы. Выход из строя принтера из-за использования неоригинальных расходников не является гарантийным случаем. Кроме того, пользователям сторонних расходных материалов в три раза чаще требуется помощь службы поддержки, чем клиентам, которые выбирают оригинальные картриджи. 97% технических специалистов подтверждают: неоригинальные картриджи сокращают срок службы принтеров.',
                    },
                    1: {
                       text: 'К сожалению, это не так. Выход из строя принтера из-за использования неоригинальных расходников не является гарантийным случаем. Кроме того, пользователям сторонних расходных материалов в три раза чаще требуется помощь службы поддержки, чем клиентам, которые выбирают оригинальные картриджи. 97% технических специалистов подтверждают: неоригинальные картриджи сокращают срок службы принтеров.',
                    },
                },
            },
            {
                text: 'Расходные материалы сторонних производителей могут поставить под угрозу кибербезопасность устройств.',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/8_yKRmOaD.jpg',
                color: '#00A99E',
                answers: {
                    0: {
                       text: 'Но это так. Расходники сторонних производителей содержат чипы неизвестного происхождения, на которых может оказаться небезопасное ПО. В результате у злоумышленников появляется возможность обнаружить уязвимость интерфейса данных, связывающего чип с принтером, и внедрить вредоносный код в сеть всего предприятия. В свою очередь чипы HP содержат микропрограммное обеспечение с защитой от взлома, которое невозможно изменить со стороны.',
                    },
                    1: {
                       text: 'Да, это так. Расходники сторонних производителей содержат чипы неизвестного происхождения, на которых может оказаться небезопасное ПО. В результате у злоумышленников появляется возможность обнаружить уязвимость интерфейса данных, связывающего чип с принтером, и внедрить вредоносный код в сеть всего предприятия. В свою очередь чипы HP содержат микропрограммное обеспечение с защитой от взлома, которое невозможно изменить со стороны.',
                    },
                },
            },
        ],
    };

    var mainPage = $('.hp');
    var stepPage = $('.question');
    var resultPage = $('.result');

    var startTestButton = $('#start');
    var steps = $('#steps');
    var trueButton = $('#true-answer');
    var falseButton = $('#false-answer');

    var windowWidth = $(window).width();

    var isLast = false;

    for (var i = 0; i < quiz.questions.length; i++) {
        steps.append( "<div class='question-content__dots-dot'></div>" );
    }

    var stepCount = 0;

    var showResult = function() {
        mainPage.css('display', 'none');
        stepPage.css('display', 'none');
        resultPage.css('display', 'block');
    }

    var showAnswer = function(index) {
        console.log(index);
        var question = quiz.questions[stepCount - 1];
        $('.question-content__buttons').hide();
        $('.question-content__answer-text').html(question.answers[index].text);
        $('.question-content__answer').show();
    }

    falseButton.click(function(){showAnswer(0)});
    trueButton.click(function(){showAnswer(1)});

    var updateStep = function() {

        var questionPic = $('#question-pic');
        stepCount++;

        if (stepCount === quiz.questions.length) {
            isLast = true;
        }

        $('#num').text(stepCount);

        var progressWidth = 6 * stepCount + (10 *(stepCount - 1));
        $('.question-content__dots-progress').width(progressWidth)

        $('.question-content__buttons').show();
        $('#question-title').empty();
        $('.question-content__answer').hide();

        var question = quiz.questions[stepCount - 1];


        $('#question-title').text(question.text);

        var url = question.pic;

        var picUrl = 'url("' + url + '")';
        var questionClass = 'question-pic_' + stepCount;

        questionPic.removeClass();
        questionPic.addClass('question-pic').addClass(questionClass);
        questionPic.css('background-image', picUrl);
        questionPic.css('background-color', question.color);
    }

    $('#next-question').click(function(event) {
        if (isLast) {
            showResult();
            return
        }
        updateStep();
    })

    startTestButton.click(function() {
        mainPage.hide();
        updateStep();
        stepPage.css('display', 'flex');
    });

    $('.hp-btn-finish').click(function(){
        location.reload();
    });

    $( window ).resize(function() {
        windowWidth = $(window).width();
    });
});