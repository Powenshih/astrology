window.addEventListener('load', function() {
    console.log('page loaded');

    let button = document.getElementById('button');
    button.addEventListener('click', function() {
        let inputText = document.getElementById('input').value;
        // I think problem is below //
        // What is the input? and how it triggers? //
        let API_SRC = "chinese_zodiac.json";

        // 9/1 MG's additional//
        // if (inputText) {
        fetch(API_SRC)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                zodiacData = data;

                // for length of zodiac
                for (let i = 0; i < data.zodiac.length; i++) {
                    console.log(data.zodiac[i].startyear);

                    let rem = (inputText - data.zodiac[i].startyear) % 12;
                    console.log(rem);
                    // MG's suggestion //
                    if (rem == 0) {
                        let headingElement = document.getElementById('name');
                        headingElement.innerHTML = data.zodiac[i].name;
                    }

                    // if (rem = data.zodiac.length - 6) {
                    //     let headingElement = document.getElementById('astrology_p_name');
                    //     headingElement.innerHTML = data.zodiac[0].name;
                    // }

                    // if (rem = data.zodiac.length - 5) {
                    //     let headingElement = document.getElementById('astrology_p_name');
                    //     headingElement.innerHTML = data.zodiac[1].name;
                    // }
                }
            })

        .catch(error => {
            console.log("Error!!! :" + error)

        })


        // }
    })
})

/*===== p5 Code =====*/

let zodiacData;

function setup() {
    console.log("p5 setup!!!");
    createCanvas(600, 400);
    background(random(255));
}

function draw() {
    if (zodiacData) {
        for (let i = 0; i < zodiacData.number; i++) {
            ellipse(100 + (i * 50), 300, 30);
        }
    } else {
        console.log("not ready yet");
    }

}