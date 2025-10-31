import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, Heart, Home, Briefcase, Scale } from 'lucide-react';
import './App.css';

function App() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedRight, setExpandedRight] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Права, що забезпечують природне існування фізичної особи",
      icon: Heart,
      colorClass: "rose",
      rights: [
        {
          name: "Право на життя",
          article: "Ст. 281 ЦК України",
          description:
            "Фізична особа має невід'ємне право на життя. Вона має право захищати своє життя і здоров'я від протиправних посягань.",
          example:
            "Право на необхідну оборону, право відмовитися від медичного втручання",
          representation:
            "Представництво НЕ ДОПУСКАЄТЬСЯ - право носить особистий характер",
        },
        {
          name: "Право на охорону здоров'я",
          article: "Ст. 283 ЦК України",
          description:
            "Фізична особа має право на охорону свого здоров'я. Здоров'я фізичної особи є нематеріальним благом.",
          example: "Право на медичну допомогу, право на безпечне довкілля",
          representation:
            "Представництво можливе для отримання медичної допомоги малолітнім/неповнолітнім (батьки, опікуни) та недієздатним особам (опікуни)",
        },
        {
          name: "Право на свободу та особисту недоторканність",
          article: "Ст. 29 Конституції, ст. 289 ЦК",
          description:
            "Фізична особа має право на свободу та особисту недоторканність. Ніхто не може бути заарештований або триматися під вартою інакше як за вмотивованим рішенням суду.",
          example: "Заборона незаконного затримання, катування",
          representation:
            "Представництво НЕ ДОПУСКАЄТЬСЯ - право носить особистий характер",
        },
      ],
    },
    {
      id: 2,
      title: "Права, що забезпечують соціальне буття фізичної особи",
      icon: User,
      colorClass: "blue",
      rights: [
        {
          name: "Право на ім'я",
          article: "Ст. 294-295 ЦК України",
          description:
            "Фізична особа має право на ім'я. Ім'я фізичної особи, яка є громадянином України, складається з прізвища, власного імені та по батькові.",
          example: "Право на зміну імені, використання псевдоніма",
          representation:
            "Зміна імені малолітньої особи (до 14 років) - батьки/опікуни; неповнолітня особа (14-18 років) - діє самостійно за згодою батьків",
        },
        {
          name: "Право на повагу до гідності та честі",
          article: "Ст. 297 ЦК України",
          description:
            "Фізична особа має право на повагу до її гідності та честі. Гідність та честь фізичної особи є недоторканними.",
          example: "Захист від наклепу, образи, приниження",
          representation:
            "Захист може здійснюватися представником за дорученням або законним представником (для малолітніх/неповнолітніх/недієздатних)",
        },
        {
          name: "Право на недоторканність ділової репутації",
          article: "Ст. 299 ЦК України",
          description:
            "Фізична особа має право на недоторканність своєї ділової репутації. Ділова репутація фізичної особи є нематеріальним благом.",
          example:
            "Захист від поширення недостовірної інформації про професійні якості",
          representation:
            "Представництво можливе на підставі довіреності або законного представництва",
        },
        {
          name: "Право на особисте життя та його таємницю",
          article: "Ст. 301 ЦК України",
          description:
            "Фізична особа має право на особисте життя. Фізична особа сама визначає своє особисте життя і можливість ознайомлення з ним інших осіб.",
          example: "Таємниця листування, телефонних розмов, особистих записів",
          representation:
            "Представництво НЕ ДОПУСКАЄТЬСЯ через особистий характер права (винятки встановлені законом для правоохоронних органів)",
        },
        {
          name: "Право на таємницю кореспонденції",
          article: "Ст. 306 ЦК України",
          description:
            "Фізична особа має право на таємницю листування, телефонних розмов, телеграфної та іншої кореспонденції.",
          example: "Заборона розголошення змісту листів, повідомлень",
          representation: "Представництво НЕ ДОПУСКАЄТЬСЯ",
        },
        {
          name: "Право на невтручання в сімейне життя",
          article: "Ст. 302 ЦК України",
          description:
            "Фізична особа має право на невтручання в її сімейне та подружнє життя.",
          example:
            "Захист від втручання у відносини між подружжям, батьками та дітьми",
          representation:
            "Представництво НЕ ДОПУСКАЄТЬСЯ через особистий характер",
        },
        {
          name: "Право на свободу літературної, художньої творчості",
          article: "Ст. 309 ЦК України",
          description:
            "Фізична особа має право на свободу літературної, художньої, наукової і технічної творчості.",
          example: "Право створювати твори, обирати жанр та стиль",
          representation:
            "Здійснення авторських прав може передаватися представнику за договором (ліцензійним, видавничим)",
        },
      ],
    },
    {
      id: 3,
      title: "Права, що забезпечують індивідуалізацію фізичної особи",
      icon: User,
      colorClass: "purple",
      rights: [
        {
          name: "Право на інформацію",
          article: "Ст. 302 ЦК України",
          description:
            "Фізична особа має право на інформацію про себе. Збирання, зберігання, використання та поширення конфіденційної інформації про особу без її згоди не допускається.",
          example:
            "Доступ до персональних даних у державних реєстрах, медичних картках",
          representation:
            "Представництво можливе за довіреністю або законним представником (для неповнолітніх/недієздатних)",
        },
        {
          name: "Право на особисті папери",
          article: "Ст. 307 ЦК України",
          description:
            "Фізична особа має право на особисті папери і записи. Забороняється пошук, вилучення, дослідження, оприлюднення особистих паперів і записів особи без її згоди.",
          example: "Щоденники, особисті листи, нотатки",
          representation:
            "Представництво НЕ ДОПУСКАЄТЬСЯ (винятки - рішення суду)",
        },
        {
          name: "Право на власне зображення",
          article: "Ст. 308 ЦК України",
          description:
            "Фізична особа має право на власне зображення. Використання зображення фізичної особи можливе лише за її згодою.",
          example: "Фотографування, відеозйомка, публікація фото",
          representation:
            "Згода на використання зображення малолітньої/неповнолітньої особи надається батьками/опікунами",
        },
      ],
    },
    {
      id: 4,
      title: "Права на результати інтелектуальної діяльності",
      icon: Briefcase,
      colorClass: "amber",
      rights: [
        {
          name: "Право інтелектуальної власності",
          article: "Ст. 418, Книга 4 ЦК України",
          description:
            "Право інтелектуальної власності - це право особи на результат інтелектуальної, творчої діяльності або інший об'єкт права інтелектуальної власності.",
          example: "Авторське право, право на винахід, торговельну марку",
          representation:
            "Майнові права можуть передаватися за договором; особисті немайнові права автора (право на ім'я, недоторканність твору) - представництво НЕ ДОПУСКАЄТЬСЯ",
        },
        {
          name: "Право на результати наукової, технічної творчості",
          article: "Ст. 309, 457-461 ЦК України",
          description:
            "Включає право на винахід, корисну модель, промисловий зразок та інші результати науково-технічної творчості.",
          example: "Патент на винахід, свідоцтво на корисну модель",
          representation:
            "Оформлення патентних прав може здійснюватися через патентного повіреного (представника)",
        },
      ],
    },
    {
      id: 5,
      title: "Права, що забезпечують участь у суспільному житті",
      icon: Scale,
      colorClass: "green",
      rights: [
        {
          name: "Право на свободу об'єднання",
          article: "Ст. 36 Конституції",
          description:
            "Громадяни мають право на свободу об'єднання у політичні партії та громадські організації.",
          example: "Створення та членство в громадських організаціях, партіях",
          representation:
            "Неповнолітні (14-18 років) можуть вступати до громадських організацій за згодою батьків/опікунів",
        },
        {
          name: "Право на свободу пересування",
          article: "Ст. 33 Конституції, ст. 313 ЦК",
          description:
            "Фізична особа має право на свободу пересування та вільний вибір місця проживання.",
          example: "Право вільно переїжджати, обирати місце проживання",
          representation:
            "Представництво НЕ ДОПУСКАЄТЬСЯ через особистий характер. Виняток: реєстрація місця проживання малолітньої особи здійснюється батьками/опікунами",
        },
        {
          name: "Право на мирні зібрання",
          article: "Ст. 39 Конституції",
          description:
            "Громадяни мають право збиратися мирно, без зброї і проводити збори, мітинги, походи і демонстрації.",
          example: "Участь у мітингах, демонстраціях, пікетах",
          representation: "Представництво НЕ ДОПУСКАЄТЬСЯ",
        },
      ],
    },
  ];

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
    setExpandedRight(null);
  };

  const toggleRight = (categoryId, rightIndex) => {
    const key = `${categoryId}-${rightIndex}`;
    setExpandedRight(expandedRight === key ? null : key);
  };

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="header-card">
          <h1 className="header-title">
            Види особистих немайнових прав фізичної особи
          </h1>
          <p className="header-subtitle">
            Згідно з Цивільним кодексом України (Книга 2, Глава 21)
          </p>
          <div className="info-box">
            <p className="info-text">
              <strong>Особисті немайнові права</strong> - це права, що
              забезпечують природне існування, індивідуалізацію та соціальне
              буття фізичної особи. Вони не мають економічного змісту, є
              невід'ємними від особи та не можуть бути передані іншим особам
              (ст. 269 ЦК України).
            </p>
          </div>
        </div>

        <div className="categories-list">
          {categories.map((category) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;

            return (
              <div
                key={category.id}
                className="category-card"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`category-button ${category.colorClass}`}
                >
                  <div className="category-header">
                    <Icon className={`category-icon ${category.colorClass}`} />
                    <h2
                      className={`category-title ${category.colorClass}`}
                    >
                      {category.title}
                    </h2>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className={`chevron-icon ${category.colorClass}`} />
                  ) : (
                    <ChevronDown className={`chevron-icon ${category.colorClass}`} />
                  )}
                </button>

                {isExpanded && (
                  <div className="category-content">
                    {category.rights.map((right, index) => {
                      const rightKey = `${category.id}-${index}`;
                      const isRightExpanded = expandedRight === rightKey;

                      return (
                        <div
                          key={index}
                          className="right-card"
                        >
                          <button
                            onClick={() => toggleRight(category.id, index)}
                            className="right-button"
                          >
                            <div className="right-header">
                              <h3 className="right-name">
                                {right.name}
                              </h3>
                              <p className="right-article">
                                {right.article}
                              </p>
                            </div>
                            {isRightExpanded ? (
                              <ChevronUp className="chevron-icon slate" />
                            ) : (
                              <ChevronDown className="chevron-icon slate" />
                            )}
                          </button>

                          {isRightExpanded && (
                            <div className="right-details">
                              <div className="detail-section">
                                <h4 className="detail-label">
                                  Характеристика:
                                </h4>
                                <p className="detail-text">
                                  {right.description}
                                </p>
                              </div>

                              <div className="detail-section">
                                <h4 className="detail-label">
                                  Приклади:
                                </h4>
                                <p className="detail-text italic">
                                  {right.example}
                                </p>
                              </div>

                              <div className="representation-box">
                                <h4 className="representation-label">
                                  Підстави виникнення представництва:
                                </h4>
                                <p className="representation-text">
                                  {right.representation}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="summary-card">
          <h3 className="summary-title">
            Загальні підстави представництва у немайнових правах:
          </h3>
          <ul className="summary-list">
            <li className="summary-item">
              <span className="summary-number">1.</span>
              <span className="summary-text">
                <strong>Законне представництво</strong> - батьки/усиновлювачі,
                опікуни, піклувальники (для малолітніх, неповнолітніх,
                недієздатних осіб) - ст. 242-244 ЦК України
              </span>
            </li>
            <li className="summary-item">
              <span className="summary-number">2.</span>
              <span className="summary-text">
                <strong>Добровільне представництво</strong> - за довіреністю
                (для дієздатних осіб) - ст. 237-247 ЦК України
              </span>
            </li>
            <li className="summary-item">
              <span className="summary-number">3.</span>
              <span className="summary-text">
                <strong>Обмеження:</strong> особисті немайнові права здебільшого
                НЕ можуть здійснюватися через представника через їх особистий
                характер (ст. 269 ЦК)
              </span>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <h1 style={{color: "#000"}}>Виконала: Пряха Каріна 2-22</h1>
    </div>
  );
}

export default App;
