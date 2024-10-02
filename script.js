document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".tarif__scroll-container");
  const cardsContainer = scrollContainer.querySelector(
    ".tarif__cards--desctop"
  );
  const descriptionContainer = scrollContainer.querySelector(
    ".tarif__description-container"
  );
  const fixedLeftElements = document.querySelectorAll(".fixed-left"); // Находим элементы с классом .fixed-left

  let scrollPosition = 0;
  let isDragging = false;
  let startX;
  let scrollStart;

  // Изначальное смещение .fixed-left элементов
  let initialOffsets = Array.from(fixedLeftElements).map(
    (el) => el.getBoundingClientRect().left
  );

  // Обновление позиции .fixed-left элементов относительно их изначального положения
  function updateFixedLeftPositions() {
    fixedLeftElements.forEach((el, index) => {
      el.style.transform = `translateX(${scrollPosition}px)`; // Фиксируем на месте
    });
  }

  // Обработка горизонтальной прокрутки для колесика мыши
  scrollContainer.addEventListener("wheel", (e) => {
    // Проверка, горизонтальная ли прокрутка
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      // Предотвращение стандартного поведения только для горизонтальной прокрутки
      e.preventDefault();

      // Обновление позиции прокрутки на основе deltaX
      scrollPosition += e.deltaX;

      // Ограничение позиции прокрутки в пределах ширины контейнера
      scrollPosition = Math.max(
        0,
        Math.min(
          scrollPosition,
          cardsContainer.scrollWidth - scrollContainer.clientWidth
        )
      );

      // Применение трансформации к обоим контейнерам
      cardsContainer.style.transform = `translateX(${-scrollPosition}px)`;
      descriptionContainer.style.transform = `translateX(${-scrollPosition}px)`;

      // Обновление позиции .fixed-left элементов
      updateFixedLeftPositions();
    }
  });

  // Прокрутка при помощи перетаскивания курсором
  scrollContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollStart = scrollPosition;
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 1.5; // Множитель для более быстрой прокрутки
    scrollPosition = scrollStart - walk;

    // Ограничение позиции прокрутки в пределах ширины контейнера
    scrollPosition = Math.max(
      0,
      Math.min(
        scrollPosition,
        cardsContainer.scrollWidth - scrollContainer.clientWidth
      )
    );

    // Применение трансформации к обоим контейнерам
    cardsContainer.style.transform = `translateX(${-scrollPosition}px)`;
    descriptionContainer.style.transform = `translateX(${-scrollPosition}px)`;

    // Обновление позиции .fixed-left элементов
    updateFixedLeftPositions();
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDragging = false;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDragging = false;
  });

  // добавление поддержки для мобильных устройств (тач-события)
  scrollContainer.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollStart = scrollPosition;
  });

  scrollContainer.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollPosition = scrollStart - walk;

    // Ограничение позиции прокрутки в пределах ширины контейнера
    scrollPosition = Math.max(
      0,
      Math.min(
        scrollPosition,
        cardsContainer.scrollWidth - scrollContainer.clientWidth
      )
    );

    // Применение трансформации к обоим контейнерам
    cardsContainer.style.transform = `translateX(${-scrollPosition}px)`;
    descriptionContainer.style.transform = `translateX(${-scrollPosition}px)`;

    // Обновление позиции .fixed-left элементов
    updateFixedLeftPositions();
  });

  scrollContainer.addEventListener("touchend", () => {
    isDragging = false;
  });

//   // Фиксация на мобильном
//   const mobileHeading = document.querySelector("#mobile-top");
//   const scrollTip = document.querySelector("#scroll-tip");
//   const mobileTarif = document.querySelector("#mobile-tarif");
//   const undoTriggerElenemt = document.querySelector("#undo-trigger-elenemt");

//   window.addEventListener("scroll", () => {
//     // Получаем размеры и позицию элемента относительно окна браузера
//     const headingRect = mobileHeading.getBoundingClientRect();
//     const scrollTipRect = scrollTip.getBoundingClientRect();
//     const undoTriggerElenemtRect = undoTriggerElenemt.getBoundingClientRect();

//     // Проверяем, достиг ли элемент верхней части окна браузера
//     if (headingRect.top <= 0) {
//       mobileHeading.classList.add("heading-fixed");
//     }
//     if (scrollTipRect.top <= 115) {
//       scrollTip.classList.add("scroll-tip-fixed");
//       mobileTarif.classList.add("mobile-tarif-fixed");
//     }
//   });
});
