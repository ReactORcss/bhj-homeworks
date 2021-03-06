function chat() {
    const chatWidget = document.querySelector('.chat-widget');
    const btnStartChat = document.querySelector('.chat-widget__side');
    btnStartChat.addEventListener('click', startChat);
    const botMessages = ['Мне некогда!', 'Я сказал, что времени у меня на Вас нет!', 'Кто Вы такие?', 'Прощаемся!', 'Может это Вы дурак?'];

    function startChat() {
        chatWidget.classList.add('chat-widget_active');
        runBot();
    };

    function runBot() {
        const chatWidgetInput = document.getElementById('chat-widget__input');
        const chatWidgetMessages = document.getElementById('chat-widget__messages');
        chatWidgetInput.addEventListener('keydown', (event) => {
            const currentDate = new Date();
            let currentHH = currentDate.getHours().toString();
            let currentMM = currentDate.getMinutes().toString();
            if (event.key == "Enter" && chatWidgetInput.value != '') {
                chatWidgetMessages.innerHTML += `
          <div class="message message_client">
            <div class="message__time">${currentHH}:${currentMM}</div>
            <div class="message__text">
              ${chatWidgetInput.value}
            </div>
          </div>
        `
                chatWidgetInput.value = '';
                let index = Math.round(Math.random() * botMessages.length - 1);
                if (index < 0) {
                    index = 0;
                }
                const botMessage = botMessages[index];
                chatWidgetMessages.innerHTML += `
          <div class="message">
            <div class="message__time">${currentHH}:${currentMM}</div>
            <div class="message__text">
              ${botMessage}
            </div>
          </div>
        `
            }
        })
    };
}
document.addEventListener('DOMContentLoaded', chat);
