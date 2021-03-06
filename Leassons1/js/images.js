function img(){
    let wrapper = document.createElement('div'),
        linkPicture = document.querySelectorAll('.img_link'),
        img = document.createElement('img'),
        workWrapper = document.querySelector('.works');

        wrapper.classList.add('popup');
        workWrapper.appendChild(wrapper);
        wrapper.style.justifyContent = 'center';
        wrapper.style.alignItems = 'center';
        wrapper.appendChild(img);

    let imgMain = document.querySelectorAll('.worksImg');
    for (let i = 0; i < imgMain.length; i++) {
        imgMain[i].addEventListener('click', ()=> {
            for (let a = 0; a < linkPicture.length; a++) {
                if (i == a) {

                    img.setAttribute('src', linkPicture[a].href);
                }
            }
        });
    }

    workWrapper.addEventListener('click', function (e) {
        e.preventDefault();
        let elem = e.target;
        if (elem && elem.classList.contains('worksImg')) {
            wrapper.style.display = 'flex';
            document.body.style.overflow = 'hidden';

        }
        if (elem && elem.matches('div.popup')) {
            wrapper.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}
module.exports = img;