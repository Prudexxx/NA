


const daysData = {
  "01.01": "День космонавтики",
  "02.01": "День рыбака",
  "03.01": "День студента",
  "04.01": "День зимнего солнцестояния",
  "05.01": "День семьи",
  "06.01": "День православной культуры",
  "07.01": "Рождество",
  "08.01": "День кино",
  "09.01": "День почты",
  "10.01": "День науки",
  "11.01": "Международный день памяти жертв Холокоста",
  "12.01": "День работника прокуратуры",
  "13.01": "День российской печати",
  "14.01": "День российского студенчества",
  "15.01": "День печати",
  "16.01": "День памяти Святого Трифона",
  "17.01": "День российской печати",
  "18.01": "День работника налоговых органов",
  "19.01": "Крещение Господне",
  "20.01": "День морской пехоты",
  "21.01": "Международный день объятий",
  "22.01": "День инженерных войск",
  "23.01": "День Российского студента",
  "24.01": "День российского студента",
  "25.01": "День российского студента",
  "26.01": "День российского студента",
  "27.01": "День памяти жертв Холокоста",
  "28.01": "День работника налоговых органов",
  "29.01": "День воинской славы",
  "30.01": "День памяти жертв Холокоста",
  "31.01": "День российской печати",
  "01.02": "День снятия блокады Ленинграда",
  "02.02": "День российской науки",
  "03.02": "День героев Отечества",
  "04.02": "День памяти воинов-интернационалистов",
  "05.02": "День российской науки",
  "06.02": "День российской науки",
  "07.02": "День российской науки",
  "08.02": "День российской науки",
  "09.02": "День памяти воинов-интернационалистов",
  "10.02": "День России (День защитника Отечества)",
  "11.02": "День памяти воинов-интернационалистов",
  "12.02": "День российской науки",
  "13.02": "День российского студента",
  "14.02": "День всех влюблённых",
  "15.02": "День памяти воинов-интернационалистов",
  "16.02": "День памяти воинов-интернационалистов",
  "17.02": "День российской науки",
  "18.02": "День памяти воинов-интернационалистов",
  "19.02": "День защитника Отечества",
  "20.02": "День памяти воинов-интернационалистов",
  "21.02": "День родного языка",
  "22.02": "День защитника Отечества",
  "23.02": "День защитника Отечества",
  "24.02": "День памяти воинов-интернационалистов",
  "25.02": "День российской науки",
  "26.02": "День российской науки",
  "27.02": "День российской науки",
  "28.02": "День российской науки",
  "01.03": "Международный женский день (подготовка к 8 марта)",
  "02.03": "День Российской армии",
  "03.03": "День гуманитарных наук",
  "04.03": "День науки",
  "05.03": "День геолога",
  "06.03": "День святого Патрика",
  "07.03": "Женский день (преддверие 8 марта)",
  "08.03": "Международный женский день",
  "09.03": "День работников культуры",
  "10.03": "День памяти А.С. Пушкина",
  "11.03": "День работника жилищно-коммунального хозяйства",
  "12.03": "День работника культуры",
  "13.03": "День российских студенческих отрядов",
  "14.03": "Международный день числа Пи",
  "15.03": "День работника бытового обслуживания",
  "16.03": "День памяти А.С. Пушкина",
  "17.03": "День моряка",
  "18.03": "День воссоединения Крыма с Россией",
  "19.03": "День моряка",
  "20.03": "Международный день счастья",
  "21.03": "Наурыз (Новруз)",
  "22.03": "День моряка",
  "23.03": "День работников культуры",
  "24.03": "День работника культуры",
  "25.03": "День работников культуры",
  "26.03": "День работника культуры",
  "27.03": "День морской пехоты",
  "28.03": "День работника культуры",
  "29.03": "День моряка",
  "30.03": "День памяти А.С. Пушкина",
  "31.03": "День российской науки",
  "01.04": "День смеха",
  "02.04": "День рождения В.И. Ленина",
  "03.04": "День космонавтики",
  "04.04": "День конституции",
  "05.04": "День космонавтики",
  "06.04": "День памяти жертв Чернобыля",
  "07.04": "День здоровья",
  "08.04": "День геолога",
  "09.04": "День космонавтики",
  "10.04": "День памяти погибших при исполнении служебных обязанностей",
  "11.04": "День космонавтики",
  "12.04": "День космонавтики",
  "13.04": "День памяти погибших при исполнении служебных обязанностей",
  "14.04": "День космонавтики",
  "15.04": "День космонавтики",
  "16.04": "День космонавтики",
  "17.04": "День космонавтики",
  "18.04": "День памяти погибших при исполнении служебных обязанностей",
  "19.04": "День памяти погибших при исполнении служебных обязанностей",
  "20.04": "День космонавтики",
  "21.04": "День памяти погибших при исполнении служебных обязанностей",
  "22.04": "День экологии",
  "23.04": "День пожарной охраны",
  "24.04": "День науки",
  "25.04": "День российской печати",
  "26.04": "День памяти погибших при исполнении служебных обязанностей",
  "27.04": "День науки",
  "28.04": "День памяти погибших при исполнении служебных обязанностей",
  "29.04": "День памяти погибших при исполнении служебных обязанностей",
  "30.04": "День памяти погибших при исполнении служебных обязанностей",
  "01.05": "Праздник Весны и Труда",
  "02.05": "День Победы (подготовка)",
  "03.05": "День Победы",
  "04.05": "День Победы",
  "05.05": "День Победы",
  "06.05": "День Победы",
  "07.05": "День Победы",
  "08.05": "День памяти и примирения",
  "09.05": "День Победы",
  "10.05": "День победы",
  "11.05": "День Победы",
  "12.05": "День матери",
  "13.05": "День медицинского работника",
  "14.05": "День Победы (подготовка)",
  "15.05": "День Победы (подготовка)",
  "16.05": "День Победы (подготовка)",
  "17.05": "День Победы (подготовка)",
  "18.05": "День Победы (подготовка)",
  "19.05": "День Победы (подготовка)",

  "20.05": "🌞20 мая. Выход из изоляции. <br> <br>«Мы делаем какие-то шаги и радуемся тому, о чем раньше даже не подумали бы».  <br>Базовый текст, с. 128  <br> <br>📗Активная зависимость держала нас в изоляции по многим причинам. Вначале мы избегали семью и друзей, чтобы они не узнали, что мы употребляем наркотики. Некоторые избегали всех  независимых людей из страха перед моральным осуждением и преследованием по закону. Мы презирали людей с «нормальной» жизнью, семьей и увлечениями, называли их «лохами», считая, что мы никогда не будем получать радость от простых удовольствий жизни. В конечном счете, мы даже избегали товарищей по употреблению, потому что не хотели делиться. Наша жизнь сузилась, и все наши дела свелись к повседневному поддержанию своей болезни.  <br>📗Сегодня наша жизнь намного полнее. Нам нравится участвовать в мероприятиях вместе с другими выздоравливающими зависимыми. Мы уделяем время своей семье. И мы нашли много других занятий, которые доставляют нам удовольствие. Какие перемены, по сравнению с прошлым! Мы можем жить жизнью такой же полной, как «нормальные» люди, которых мы когда-то презирали. Радость – дар выздоровления – вернулась в нашу жизнь.  <br><br>📚Только сегодня: Я найду удовольствие в простой рутине повседневной жизни.",

  "21.05": "🌞21 мая. Возвращайся! «Собрания помогают нам не только помнить о том, откуда мы пришли, но, что еще важнее, увидеть, куда мы можем двигаться в выздоровлении».<br></br> Базовый текст, с. 69 <br>📗Зависимые во многом сильно отличаются от других людей. Когда мы пришли в АН, мы встретили людей, похожих на нас, которые понимали нас и которых мы могли понять. Мы больше не чувствовали себя изгоями и чужаками всегда и везде. На  собраниях АН мы были у себя дома, среди друзей. <br>📗Мы не перестаем быть зависимыми, сохраняя чистоту. Нам все еще необходимо идентифицировать себя с другими зависимыми. Мы продолжаем приходить на собрания АН, чтобы помнить, кто мы, откуда мы пришли и куда идем. Каждое собрание напоминает нам, что мы никогда не сможем употреблять наркотики без плачевных последствий. Каждое собрание напоминает нам, что мы никогда не сможем полностью излечиться, но, применяя принципы программы, мы можем выздоравливать. И каждое собрание предлагает нам опыт и пример других зависимых, продолжающих свое выздоровление. <br>📗На собраниях мы видим, что у каждого свой путь в этой программе, и результаты работы по программе заметны в жизни каждого. Если нам нравится жизнь какого-то че ловека, мы можем узнать, что он делает для этого, каким путем идет. Собрания Анонимных Наркоманов предлагают нам сравнить, где мы были и куда мы идем, – без этого сравнения у нас ничего не получится. Это то, ради чего мы возвращаемся. <br>📚Только сегодня: Я посещу собрание АН, чтобы напомнить себе, кто я, откуда я  пришел и куда иду в своем выздоровлении.",

  "22.05": "🌞22 мая. Симптомы духовного пробуждения. <br>«Шаги ведут к пробуждению в нас духовной сущности, Это пробуждение подтверждается изменениями в нашей жизни.», <br></br>Базовый текст, с. 61 <br>📗Мы знаем, как распознать проявления болезни зависимости. Эти симптомы неоспоримы. Кроме неконтролируемой тяги к наркотикам, это еще и болезненная привычка к эгоистичному, корыстному поведению. Когда наша зависимость достигла предела, мы уже не чувствовали ничего, кроме боли. Мы постоянно обвиняли себя и других и тратили большую часть свободного времени на беспокойство или попытки контролировать последствия своих действий. <br>📗Помимо симптомов болезни существуют и симптомы духовного пробуждения, которые ярко проявляются в выздоравливающих зависимых. К этим симптомам относятся: склонность думать и действовать непринужденно, потеря интереса к обвинению и оценке чужих действий, способность радоваться настоящему моменту и частые взрывы смеха. <br>📗Если мы видим в ком-то проявления симптомов духовного пробуждения, мы должны иметь в виду, что это пробуждение передается от одного другому. Лучшее, что мы можем сделать, – это держаться поближе к таким людям. Когда мы начинаем часто испытывать непреодолимую благодарность, у нас возрастает способность принимать любовь Сообщества и появляется неконтролируемое желание ответить любовью со своей стороны; мы понимаем, что и у нас тоже произошло духовное пробуждение. <br>📚Только сегодня: Больше всего на свете я  хочу духовно пробудиться. Я буду искать симптомы духовного пробуждения и порадуюсь, когда узнаю их.",

  "23.05": "🌞23 мая. Возмещение ущерба и спонсор.<br>«Мы хотим избавиться от вины, но не хотим делать это за чужой счет».<br></br> Базовый текст, с. 50 <br>📗Давайте посмотрим правде в глаза: большинство из нас оставили за собой широкий след разрушений; мы причинили вред каждому, с кем имели дело. Наибольший ущерб мы нанесли тем людям, которых больше всего любили. В порыве избавления от чувства вины мы могли поделиться с этими людьми отвратительными подробностями своих поступков, о которых лучше было бы не говорить. Наша открытость может нанести сильную боль, от которой никому не станет легче. <br>📗Девятый Шаг существует не для того, чтобы снять вину с нашей совести, а для того, чтобы мы приняли свою ответственность за то плохое, что совершили. Работать по Восьмому и Девятому Шагам мы должны под руководством своего спонсора, и ущерб возмещать таким образом, чтобы не причинить новый. Мы не просто хотим освободиться от угрызений совести – мы хотим освободиться от своих недостатков. Мы больше не желаем причинять боль тем, кого любим. Мы можем доказать это, работая по Девятому Шагу ответственно, проверяя свои мотивы и обсуждая со спонсором ущерб, который мы планируем возместить, до того, как начнем его возмещать. <br>📚Только сегодня: Я хочу принять ответственность за свои действия. Перед тем, как возмещать ущерб, я  поговорю со своим спонсором.",

  "24.05": "🌞24 мая. Рискуем быть уязвимыми.<br> «По мере нашего роста мы учимся преодолевать стремление убежать и спрятаться от себя и своих чувств». <br></br>Базовый текст, с. 107 <br>📗Мы боялись быть уязвленными, и, чтобы не рисковать, многие из нас выработали привычку держать других людей на безопасном расстоянии от себя. Примеры такой эмоциональной изоляции могут дать нам ощущение, что мы безнадежно закрыты своими масками. Мы привыкли рисковать своей жизнью; теперь мы можем пойти на риск и со своими чувствами. Делясь с другими зависимыми, мы узнаем, что мы не уникальны и не станем слишком уязвимыми из-за того, что просто позволим другим поближе узнать нас, тем более, если мы в хорошей компании. Работая по Двенадцати Шагам программы АН, мы растем и меняемся. Нам больше не хочется, да и не нужно прятаться от грозящей нам опасности. Нам предлагают возможность сбросить со своих чувств маскировку, которая помогала выжить во время активной зависимости. <br>📗Открываясь перед другими, мы рискуем стать уязвимыми, но этот риск стоит того, чтобы на него пойти. С помощью спонсора и других выздоравливающих зависимых мы учимся честно и открыто выражать свои чувства. Любовь наших товарищей, которую мы получаем в ответ на свои чувства, делает нас сильнее и придает мужества. Благодаря применению духовных принципов мы и в самих себе, и в окружающих людях находим силу и свободу. Это наше право – быть самими собой и радоваться компании наших зависимых товарищей. <br>📚Только сегодня: Я открыто и честно поделюсь с другим выздоравливающим зависимым. Я рискну стать уязвимым и получу радость от своей дружбы с другими членами АН. Я буду расти.",

  "25.05": "🌞25 мая. «Хорошие» и «плохие» чувства. <br>«Каждый день происходит что-то хорошее и плохое. Если мы не будем по достоинству ценить и то, и другое, то можем упустить какую-то возможность для личного роста». IP № 8, Только сегодня <br>📗Большинство из нас склонно бессовестно жаловаться на все, что происходит каждый день в нашей жизни, будь то хорошее или плохое, успех или неудача. Мы обычно чувствуем себя счастливыми, когда нам «хорошо», и злимся, расстраиваемся или чувствуем вину, когда нам «плохо». При этом наши хорошие или плохие чувства часто на самом деле не соответствуют тому, что хорошо или плохо для нас. Например, неудача может дать нам гораздо больше, чем успех, особенно если неудача явилась результатом нашего риска. <br>📗Если мы осуждаем свои эмоциональные реакции, то снова возвращаемся к старым стереотипам мышления. Мы можем изменить свое отношение к повседневным событиям, рассматривая их как возможность для роста, а не как хорошее или плохое. Мы можем стремиться к тому, чтобы извлекать уроки, вместо того чтобы ставить штампы на происходящее. Когда мы извлекаем уроки, каждый наш день может чему-то научить нас. Ежедневный Десятый Шаг – это отличный инструмент, чтобы оценить произошедшее за день и извлечь уроки как из успеха, так и из неудачи. <br>📚Только сегодня: Мне дана возможность применять принципы программы таким образом, чтобы учиться и расти. Если я  извлекаю уроки из жизненных происшествий, то это мой успех.",

  "26.05": "🌞26 мая. Сила в группе. <br>«Каждый из нас решает сам, как понимать Высшую Силу… Мы можем называть ее группой, программой или Богом», <br>Базовый текст, с. 29 <br>📗Многим из нас очень трудно прийти к пониманию Высшей Силы до тех пор, пока мы полностью не примем всю безысходность нашего бессилия перед зависимостью. Сделав это, большинство из нас, наконец, обретают желание попросить помощи у какой-то Силы, более могущественной, чем наша болезнь. Первым практическим воплощением этой Силы для многих из нас становится группа АН. Возможно, это то, с чего нам следует начать, развивая свое собственное понимание Бога. <br>📗Одним из проявлений Силы в группе является безусловная любовь членов АН, когда они помогают друг другу, не ожидая ничего взамен. Групповой опыт выздоровления – это само по себе Сила, более могущественная, чем наша собственная, так как группа имеет подкрепленные опытом знания о том, что работает, а что нет. И тот факт, что зависимые продолжают приходить на собрания АН день за днем, говорит о присутствии там Высшей Силы – привлекательной и заботливой силы, которая помогает нам оставаться чистыми и расти. <br>📗Все эти вещи подтверждают присутствие Высшей Силы в группах АН. Когда мы присматриваемся без предубеждения, каждый из нас сможет заметить проявления этой Силы. Не важно, называем ли мы это Богом, Высшей Силой или чем-то еще – важно вовлекать эту Силу в нашу жизнь каждый день. <br>📚Только сегодня: Я открою глаза и без предубеждения посмотрю на проявления Силы в моей группе АН. Я попрошу у этой Силы, чтобы она помогла мне остаться чистым.",

  "27.05": "🌞27 мая. Принимать вызов сегодняшнего дня. <br>«… решение просить Бога о помощи становится нашим самым главным источником силы и мужества». <br></br>Базовый текст, с. 32 <br>📗Вызов – это то, что придает нам смелости для совершения действия. Все новое и незнакомое воспринимается нами как вызов, независимо от того, хорошо это или плохо для нас. Нам приходится преодолевать препятствия и сопротивление, возникающие как внутри нас самих, так и вовне. Новые и трудные вещи, препятствия и сопротивление – это все часть «жизни, как она есть». Жить чистым означает принимать жизненный вызов. <br>📗Многие из нас употребляли наркотики, чтобы сознательно или неосознанно избежать этого вызова. Многих из нас в равной степени пугали и неудача, и успех. Каждый раз, когда мы отказывались принимать жизненные реалии, мы страдали, потому что наша самооценка понижалась. Некоторые из нас употребляли наркотики, чтобы скрыть стыд, который мы чувствовали. Поступая так, мы с каждым разом теряли способность отвечать на жизненные вызовы и все больше склонялись к тому, чтобы продолжать употреблять. <br>📗Работая по программе АН, мы нашли инструменты, необходимые для того, чтобы успешно принимать любой вызов. Мы поверили в Силу, более могущественную, чем наша собственная, Силу, которая заботится о нашей воле и наших жизнях. Мы просили эту Силу исправить наши недостатки, из-за которых наши жизни стали неуправляемыми. Мы предприняли действия по улучшению своего осознанного контакта с этой Высшей Силой. Благодаря работе по Шагам нам была дана возможность прекратить употреблять наркотики и начать жить. <br>📗Каждый день жизнь бросает нам все новые вызовы. Н каждый день, работая по программе выздоровления, мы получаем счастливую возможность отвечать на эти вызовы. <br>📚Только сегодня: Я попрошу мою Высшую Силу помочь мне уверенно принять жизненный вызов сегодня.",

  "28.05": "🌞28 мая. Когда мы понимаем. <br>«Мы исследовали свою жизнь и обнаружили, кто мы есть на самом деле. Быть по-настоящему смиренными – это значит принять себя и честно стараться быть самими собой». <br>Базовый текст, с. 44 <br>📗Когда мы были употребляющими зависимыми, наша личность определялась потребностями нашей болезни. Мы могли быть кем угодно и чем угодно, если это было необходимо для достижения нашей цели – получения «кайфа». Мы были биологическими роботами, способными легко адаптироваться к любым условиям жизни в употреблении.<br> 📗Начав однажды выздоравливать, мы вступили в новую, непохожую на прежнюю жизнь. Многим из нас было непонятно, как нам следует вести себя в этой жизни и в возникающих в ней ситуациях. Некоторые из нас не знали, как разговаривать с людьми, как одеваться, как вести себя на людях. Мы не могли быть самими собой, потому что не могли понять, кто же мы на самом деле. <br>📗Двенадцать Шагов предлагают нам простой метод выяснения, кем мы являемся в действительности. Мы открываем свои достоинства и недостатки – то, что нам нравится в себе, и то, от чего мы не в восторге. С помощью целительной силы Двенадцати Шагов мы начинаем понимать, что каждый из нас – индивидуальность. Мы должны быть собой, ибо именно для этого мы и созданы Высшей Силой, как мы ее понимаем. Настоящее исцеление начинается, когда мы приходим к пониманию, что раз наша Высшая Сила создала нас такими, то нет ничего зазорного в том, чтобы быть теми, кто мы есть. <br>📚Только сегодня: Работая по Шагам, я  могу испытать свободу быть самим собой, то есть тем человеком, каким моя Высшая Сила определила мне быть.",

  "29.05": "🌞29 мая. Позаботься обо мне.<br>«Мы верим, что наша Высшая Сила будет заботиться о нас», Базовый текст, с. 71 <br>📗У каждого из нас бывают времена, когда кажется, что наша жизнь разваливается на части. В эти дни или даже недели нам кажется, что все, что только может  произойти плохого, происходит.  Мы сомневаемся, что сможем пережить такие болезненные перемены, как потеря работы, смерть любимого человека или разрыв отношений. <br>📗Именно тогда, когда мир рушится вокруг нас, мы обретаем свою самую сильную веру в любящую Высшую Силу. Ни один человек не сможет освободить нас от страданий; мы знаем, что только забота Бога может предоставить нам комфорт, который мы ищем. Мы чувствуем себя разбитыми, но не сдаемся, зная, что наши жизни восстановятся. <br>📗По мере того, как мы продвигаемся в выздоровлении и наша вера в Высшую Силу растет, мы обретаем уверенность, что сможем пережить тяжелые времена с надеждой, несмотря на боль. Нам не нужно отчаиваться, потому что мы знаем, что наша Высшая Сила будет заботиться о нас, когда мы сами не сможем этого делать. <br>📚Только сегодня: Я буду полагаться на заботу Бога в тяжелые времена, зная, что моя Высшая Сила всегда будет со мной.",

  "30.05": "🌞30 мая. Уединение в противовес одиночеству. <br>«Мы делимся с другими людьми своими чувствами, и это помогает нам не уходить в самоизоляцию и одиночество», <br>Базовый текст, с. 107 <br>📗Существует разница между уединением и одиночеством. Одиночество – это состояние души, пустота, которая заставляет нас быть печальными и порой безнадежными. Одиночество не всегда исчезает только оттого, что мы вступаем в отношения или окружаем себя людьми. Некоторые из нас чувствуют себя одиноко даже в переполненном людьми помещении. <br>📗Многие из нас пришли к Анонимным Наркоманам из- за отчаянного одиночества зависимости. После посещения собраний мы начинаем обзаводиться новыми друзьями, и обычно наше чувство одиночества ослабевает. Но многим из нас приходится бороться с одиночеством еще очень долгое время в выздоровлении.<br>📗Как вылечиться от одиночества? Лучшее лекарство – начать общение с Высшей Силой. Только это общение может помочь заполнить пустоту в нашей душе. Мы выясняем, что если у нас есть вера в Высшую Силу, то мы больше уже не чувствуем себя одиноко. Мы можем спокойно и уверенно оставаться наедине с собой, если у нас есть сознательный контакт с Богом, как мы его понимаем. <br>📗Когда мы выздоравливаем, мы часто получаем глубокое удовлетворение от общения и взаимодействия с другими людьми. Все это остается с нами, но чем теснее становится наш контакт с Высшей Силой, тем меньше нам необходимо окружать себя людьми. Пока мы выявляем и углубляем связь с Силой, более могущественной, чем наша собственная, нашим постоянным спутником является наш собственный дух, который мы в себе обнаруживаем. Мы осознаем, что духовно связаны с чем-то более значительным, чем мы сами. <br>📚Только сегодня: Я обрету спокойствие и уверенность через осознанный контакт с Высшей Силой. Я никогда не одинок.",

  "31.05": "🌞31 мая. Будь проще.  <br>«Мы живем по принципу «день за днем», но также от одного мгновения до другого. Когда мы перестаем жить по принципу «здесь и сейчас», наши проблемы становятся неоправданно преувеличенными».  <br>Базовый текст, с. 125  <br>📗Жизнь часто кажется слишком сложной, чтобы в ней разобраться, особенно для тех из нас, кто слишком долго избегал реальной жизни. Когда мы перестали употреблять наркотики, многим из нас пришлось лицом к лицу встретиться с жизнью, которая смущала нас и даже приводила в ужас. Разобраться в жизни, во всех ее деталях сразу – это может оказаться непосильным делом. Мы приходим к мысли, что не можем справиться с жизнью, и бесполезно пытаться. Такие мысли легко раскручиваются, и вскоре мы оказываемся парализованными жизнью, которую сами усложнили у себя в голове.  <br>📗К счастью, нам не нужно делать все сразу. Решить одну какую-то проблему представляется возможным, поэтому мы решаем проблемы по очереди. Мы заботимся о настоящем моменте, затем переходим к следующему моменту, когда он наступает. Мы учимся оставаться чистыми только сегодня, и такой же подход мы применяем к своим проблемам. Если мы проживаем каждый отдельно взятый момент жизни, то перспектива не кажется такой пугающей. Пользуясь одним днем, мы можем оставаться чистыми и учиться жить.  <br>📚Только сегодня: Я буду проще, живя только в настоящий момент. Сегодня я  буду решать только сегодняшние проблемы, а завтрашние проблемы оставлю на завтра.",
  
  "01.06": "День защиты детей🌹1 июня. Возвращайся. <br>«Мы не обязаны быть чистыми, когда приходим в первый раз, но после посещения первого собрания мы предлагаем новичкам возвращаться – и возвращаться чистыми. Нам не нужно дожидаться передозировки или тюремного заключения, чтобы получить помощь от Анонимных Наркоманов». <br>Базовый текст, с. 13<br>🌼Лишь немногие из нас пришли в АН, преисполненные готовностью к выздоровлению. Одни приходят сюда, чтобы избежать тюрьмы. Другие – чтобы сохранить семью. Кто-то приходит, чтобы спасти карьеру, находящуюся на грани краха. Не важно, почему мы здесь. Важно только то, что мы здесь. <br>🌼Мы слышали, как говорят: «Приноси свое тело, а разум догонит». Мы можем приходить на собрание в поисках повода для драки. Мы можем быть одним из тех, кто сидит в дальнем конце комнаты, бросая угрожающие взгляды на каждого, кто попробует приблизиться. Возможно, мы уходим до заключительной молитвы.<br> 🌼Но если мы возвращаемся, то обнаруживаем, что наша предубежденность постепенно исчезает. Мы перестаем включать защитный механизм и начинаем действительно слушать тех, кто с нами делится. Мы можем даже услышать чей-то опыт, который будет очень похож на наш собственный. Мы вступаем в процесс изменений. <br>🌼После некоторого времени в АН мы замечаем, что это не просто наш разум пришел на собрание. Гораздо важнее, что пришло также и наше сердце. После того, как это произойдет, начнутся настоящие чудеса! <br>💐Только сегодня: Я постараюсь слушать без предубеждения то, чем другие делятся со мной." ,

  "02.06": "🌹2 июня. Устали до предела. <br>«Мы хотели найти легкий и простой выход из создавшегося положения… И если мы искали помощи, то только для того, чтобы освободиться от боли». <br>Базовый текст, с. 6<br>🌼Что-то не так. На самом деле что-то уже давно не так, и это причиняет нам боль и усложняет жизнь. Проблема в том, что в любой данный момент времени нам кажется, что легче пережить боль от наших недостатков, чем выдержать полный переворот, подразумевающий изменение образа жизни. У нас может быть очень сильное желание избавиться от боли, но нам не очень-то хочется делать то, что действительно необходимо, чтобы устранить источник страданий из своей жизни. <br>🌼Большинство из нас и не думали искать выздоровления от зависимости до тех пор, пока не «устали до предела быть усталыми до предела». То же самое относится и к вечным дефектам нашего характера, которые мы пронесли через всю жизнь. Только тогда, когда мы ни секунды больше не сможем переносить наши недостатки, – мы осознаем, что переживать перемены не может  быть так же тяжело, как переживать то, что происходит с нами сегодня. И большинство из нас захочет попробовать что-то изме нить. <br>🌼Слава богу, Шаги всегда в нашем распоряжении, независимо от того, насколько мы устали. Самое смешное в том, что, как только мы решаемся начать работать по Двенадцати Шагам, мы понимаем, что наш страх перед переменами не имеет под собой никаких оснований. Шаги – это щадящая программа изменения шаг за шагом. Ни один шаг не является настолько страшным сам по себе, чтобы его нельзя было сделать. Когда мы применяем Шаги в жизни, то изменяемся и становимся свободными. <br>💐Только сегодня: Какие бы дефекты ни мешали мне жить полнокровной, счастливой жизнью, я  знаю: программа поможет мне измениться шаг за шагом. Мне не стоит бояться Двенадцати Шагов.",

  "03.06": "День России",
  "04.06": "День России",
  "05.06": "День эколога",
  "06.06": "День памяти погибших при исполнении служебных обязанностей",
  "07.06": "День России",
  "08.06": "День России",
  "09.06": "День России",
  "10.06": "День России",
  "11.06": "День России",
  "12.06": "День России",
  "13.06": "День российской науки",
  "14.06": "День памяти погибших при исполнении служебных обязанностей",
  "15.06": "День России",
  "16.06": "День России",
  "17.06": "День России",
  "18.06": "День памяти погибших при исполнении служебных обязанностей",
  "19.06": "День медика",
  "20.06": "День памяти погибших при исполнении служебных обязанностей",
  "21.06": "День летнего солнцестояния",
  "22.06": "День памяти и скорби",
  "23.06": "День пограничника",
  "24.06": "День молодежи",
  "25.06": "День молодежи",
  "26.06": "День памяти погибших при исполнении служебных обязанностей",
  "27.06": "День молодежи",
  "28.06": "День Конституции РФ",
  "29.06": "День памяти погибших при исполнении служебных обязанностей",
  "30.06": "День молодежи",
  "01.07": "День археолога",
  "02.07": "День России",
  "03.07": "День военной разведки",
  "04.07": "День независимости США",
  "05.07": "День памяти погибших при исполнении служебных обязанностей",
  "06.07": "День рыболова",
  "07.07": "День кораблестроителя",
  "08.07": "День семьи",
  "09.07": "День российской почты",
  "10.07": "День моряка",
  "11.07": "День металлурга",
  "12.07": "День специалиста по связям",
  "13.07": "День российской армии",
  "14.07": "День памяти погибших при исполнении служебных обязанностей",
  "15.07": "День металлурга",
  "16.07": "День российской почты",
  "17.07": "День металлурга",
  "18.07": "День памяти погибших при исполнении служебных обязанностей",
  "19.07": "День металлурга",
  "20.07": "День моряка",
  "21.07": "День художника",
  "22.07": "День памяти погибших при исполнении служебных обязанностей",
  "23.07": "День металлурга",
  "24.07": "День российской почты",
  "25.07": "День шахтера",
  "26.07": "День металлурга",
  "27.07": "День российского кино",
  "28.07": "День памяти погибших при исполнении служебных обязанностей",
  "29.07": "День работников торговли",
  "30.07": "День памяти погибших при исполнении служебных обязанностей",
  "31.07": "День металлурга",
  "01.08": "День Военно-морского флота",
  "02.08": "День воздушного флота",
  "03.08": "День Воздушно-десантных войск",
  "04.08": "День памяти погибших при исполнении служебных обязанностей",
  "05.08": "День памяти погибших при исполнении служебных обязанностей",
  "06.08": "День памяти погибших при исполнении служебных обязанностей",
  "07.08": "День памяти погибших при исполнении служебных обязанностей",
  "08.08": "День Военно-морского флота",
  "09.08": "День воздушного флота",
  "10.08": "День строителя",
  "11.08": "День работника физической культуры и спорта",
  "12.08": "День Военно-морского флота",
  "13.08": "День памяти погибших при исполнении служебных обязанностей",
  "14.08": "День физической культуры и спорта",
  "15.08": "День памяти погибших при исполнении служебных обязанностей",
  "16.08": "День молодежи",
  "17.08": "День памяти погибших при исполнении служебных обязанностей",
  "18.08": "День государственного флага РФ",
  "19.08": "День шахтера",
  "20.08": "День Военно-морского флота",
  "21.08": "День Государственного флага РФ",
  "22.08": "День государственного флага РФ",
  "23.08": "День государственного флага РФ",
  "24.08": "День государственного флага РФ",
  "25.08": "День шахтера",
  "26.08": "День российского кино",
  "27.08": "День российского кино",
  "28.08": "День российского кино",
  "29.08": "День российского кино",
  "30.08": "День Военно-морского флота",
  "31.08": "День знаний",
  "01.09": "День знаний",
  "02.09": "День памяти погибших при исполнении служебных обязанностей",
  "03.09": "День социального работника",
  "04.09": "День учителя",
  "05.09": "День России",
  "06.09": "День памяти погибших при исполнении служебных обязанностей",
  "07.09": "День работников нефтяной и газовой промышленности",
  "08.09": "День российского кино",
  "09.09": "День памяти погибших при исполнении служебных обязанностей",
  "10.09": "День знаний",
  "11.09": "День российской дипломатии",
  "12.09": "День памяти погибших при исполнении служебных обязанностей",
  "13.09": "День российского кино",
  "14.09": "День учителя",
  "15.09": "День памяти погибших при исполнении служебных обязанностей",
  "16.09": "День социального работника",
  "17.09": "День российского кино",
  "18.09": "День памяти погибших при исполнении служебных обязанностей",
  "19.09": "День голосования (выборы)",
  "20.09": "День мира",
  "21.09": "День международного мира",
  "22.09": "День согласия и примирения",
  "23.09": "День памяти погибших при исполнении служебных обязанностей",
  "24.09": "День российского кино",
  "25.09": "День учителя",
  "26.09": "День российского кино",
  "27.09": "День пенсионера",
  "28.09": "День памяти погибших при исполнении служебных обязанностей",
  "29.09": "День патриота",
  "30.09": "День примирения и согласия",
  "01.10": "Международный день пожилых людей",
  "02.10": "День учителя",
  "03.10": "День учителя",
  "04.10": "День народного единства",
  "05.10": "День учителя",
  "06.10": "День учителя",
  "07.10": "День учителя",
  "08.10": "День учителя",
  "09.10": "День учителя",
  "10.10": "День учителя",
  "11.10": "День учителя",
  "12.10": "День учителя",
  "13.10": "День учителя",
  "14.10": "День учителя",
  "15.10": "День учителя",
  "16.10": "День учителя",
  "17.10": "День учителя",
  "18.10": "День учителя",
  "19.10": "День учителя",
  "20.10": "День учителя",
  "21.10": "День учителя",
  "22.10": "День учителя",
  "23.10": "День учителя",
  "24.10": "День учителя",
  "25.10": "День учителя",
  "26.10": "День учителя",
  "27.10": "День учителя",
  "28.10": "День учителя",
  "29.10": "День учителя",
  "30.10": "День учителя",
  "31.10": "День учителя",
  "01.11": "День народного единства",
  "02.11": "День памяти погибших при исполнении служебных обязанностей",
  "03.11": "День народного единства",
  "04.11": "День народного единства",
  "05.11": "День народного единства",
  "06.11": "День революции",
  "07.11": "День Октябрьской революции",
  "08.11": "День народного единства",
  "09.11": "День памяти погибших при исполнении служебных обязанностей",
  "10.11": "День добрососедства",
  "11.11": "День единства народов России",
  "12.11": "День матери",
  "13.11": "День народного единства",
  "14.11": "День ракетных войск",
  "15.11": "День матери",
  "16.11": "День рождения революции",
  "17.11": "День памяти погибших при исполнении служебных обязанностей",
  "18.11": "День студента",
  "19.11": "День матери",
  "20.11": "День памяти погибших при исполнении служебных обязанностей",
  "21.11": "День памяти жертв терроризма",
  "22.11": "День памяти погибших при исполнении служебных обязанностей",
  "23.11": "День народного единства",
  "24.11": "День матери",
  "25.11": "День матери",
  "26.11": "День памяти погибших при исполнении служебных обязанностей",
  "27.11": "День памяти погибших при исполнении служебных обязанностей",
  "28.11": "День матери",
  "29.11": "День матери",
  "30.11": "День матери",
  "01.12": "День Конституции РФ",
  "02.12": "День Конституции РФ",
  "03.12": "День инвалидов",
  "04.12": "День народного единства",
  "05.12": "День Конституции РФ",
  "06.12": "День Конституции РФ",
  "07.12": "День героев Отечества",
  "08.12": "День Конституции РФ",
  "09.12": "День Героев России",
  "10.12": "День прав человека",
  "11.12": "День Конституции РФ",
  "12.12": "День Конституции РФ",
  "13.12": "День Конституции РФ",
  "14.12": "День экипажа ВМФ",
  "15.12": "День прав человека",
  "16.12": "День России",
  "17.12": "День памяти погибших при исполнении служебных обязанностей",
  "18.12": "День работника налоговых органов",
  "19.12": "День работника органов внутренних дел",
  "20.12": "День работника налоговых органов",
  "21.12": "День зимнего солнцестояния",
  "22.12": "День энергетика",
  "23.12": "День работника органов внутренних дел",
  "24.12": "День спасателя",
  "25.12": "Рождество Христово",
  "26.12": "День ликвидации последствий аварии на Чернобыльской АЭС",
  "27.12": "День спасателя",
  "28.12": "День энергетика",
  "29.12": "День работников налоговых органов",
  "30.12": "День памяти погибших при исполнении служебных обязанностей",
  "31.12": "Новый год"
};
// Заполняем все дни, если нужно
const monthsDays = {
  "01": 31,
  "02": 28,
  "03": 31,
  "04": 30,
  "05": 31,
  "06": 30,
  "07": 31,
  "08": 31,
  "09": 30,
  "10": 31,
  "11": 30,
  "12": 31
};
for (const month in monthsDays) {
  const daysCount = monthsDays[month];
  for (let d = 1; d <= daysCount; d++) {
    const dayStr = d.toString().padStart(2, '0');
    const dateKey = `${dayStr}.${month}`;
    if (!daysData[dateKey]) {
      daysData[dateKey] = "Обычный день";
    }
  }
}

// Получаем текущий день
const today = new Date();
const startOfYear = new Date(today.getFullYear(), 0, 0);
const diffMs = today - startOfYear;
const oneDayMs = 1000 * 60 * 60 * 24;
let dayOfYear = Math.floor(diffMs / oneDayMs);
if (dayOfYear > 365) dayOfYear = 365; // по невисокосному году

// Форматируем дату
const day = today.getDate().toString().padStart(2, '0');
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const todayKey = `${day}.${month}`;

// Получаем описание
let description = daysData[todayKey] || "Этот день не найден в данных";

// Вставляем описание в блок и сохраняем текущий размер шрифта
const descriptionDiv = document.getElementById('todayDescription');
descriptionDiv.innerHTML = description;

// Регулятор размера шрифта
const fontSizeRange = document.getElementById('fontSizeRange');
const fontSizeValue = document.getElementById('fontSizeValue');

// Обработчик изменения ползунка
fontSizeRange.addEventListener('input', () => {
  const size = fontSizeRange.value;
  descriptionDiv.style.fontSize = size + 'px';
  fontSizeValue.textContent = size + 'px';
});
