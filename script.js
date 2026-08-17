const letterMessage = `
Hi Sis! Greetings!

I hope you're having a great day with God
also with your prayer and quiet time.
I just wanted to ask you this coming days
for our Encouragement Kingdom Date.
`;

function openLetter() {

    document.getElementById("opening").classList.add("hidden");

    document.getElementById("letter").classList.remove("hidden");

    typeMessage();

}

function typeMessage() {

    const messageElement = document.getElementById("message");

    let index = 0;

    function type() {

        if (index < letterMessage.length) {

            messageElement.innerHTML +=
                letterMessage.charAt(index);

            index++;

            setTimeout(type, 35);

        }

    }

    type();

}

function showSurprise() {

    document.getElementById("surprise")
        .classList.remove("hidden");

}