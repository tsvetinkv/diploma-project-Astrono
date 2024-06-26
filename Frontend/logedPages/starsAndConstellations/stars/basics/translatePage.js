translateButton(16, 9, 10);
function translateTxt(translations) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id10 = document.getElementById('10');
    const id12 = document.querySelectorAll(`.${CSS.escape("12")}`);
    const id14 = document.querySelectorAll(`.${CSS.escape("14")}`);
    const id15 = document.querySelectorAll(`.${CSS.escape("15")}`);
    const id17 = document.querySelectorAll(`.${CSS.escape("17")}`);
    const id19 = document.querySelectorAll(`.${CSS.escape("19")}`);
    const id249 = document.querySelectorAll(`.${CSS.escape("249")}`);
    const id250 = document.querySelectorAll(`.${CSS.escape("250")}`);
    const id251 = document.querySelectorAll(`.${CSS.escape("251")}`);
    const id201 = document.getElementById('201');
    const id202 = document.getElementById('202');
    const id203 = document.getElementById('203');
    const id205 = document.querySelectorAll('.tbtn');
    const id265 = document.querySelectorAll('.logoutbtn');
    const id108 = document.getElementById('108');
    const placeholder = document.getElementById('placeholder');
    const id110 = document.getElementById('110');
    const id111 = document.getElementById('111');
    const id112 = document.getElementById('112');
    const id113 = document.getElementById('113');
    const id114 = document.getElementById('114');
    const id115 = document.getElementById('115');
    const id116 = document.getElementById('116');
    const id117 = document.getElementById('117');
    const id118 = document.getElementById('118');
    const id119 = document.getElementById('119');
    const id120 = document.getElementById('120');
    const id121 = document.getElementById('121');
    const id122 = document.getElementById('122');
    const id123 = document.getElementById('123');
    const id124 = document.getElementById('124');
    const id125 = document.getElementById('125');
    const id126 = document.getElementById('126');

    let elements = [id8, id9, id10, id108, id203, id201, id202, id110, id111, id112, id113, id114, id115, id116, id117, id118, id119, id120, id121, id122, id123, id124, id125, id126];
    translations.forEach(t => {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const elementId = parseInt(element.id, 10)
            if (t.id === elementId) {
                element.innerHTML = t.text;
            }
            if(t.id == 109){
                placeholder.placeholder = t.text;
            }
        }

        translateMultipleElements(id205, t, 205);
        translateMultipleElements(id12, t, 12);
        translateMultipleElements(id14, t, 14);
        translateMultipleElements(id15, t, 15);
        translateMultipleElements(id17, t, 17);
        translateMultipleElements(id19, t, 19);
        translateMultipleElements(id249, t, 249);
        translateMultipleElements(id250, t, 250);
        translateMultipleElements(id251, t, 251);
        translateMultipleElements(id265, t, 265);
    })

}

