const emojibutton = document.getElementById('emobtn');
const emojiname = document.getElementById('emoname');

const emojiarrayofobject = [];

async function genrateEmoji(){
    res = await fetch();
    data = await res.json();

    for (let i = 0; i < 1000; i++) {
        emojiarrayofobject.push({
            emo: data[i].character,
            emoName: data[i].unicodeName
        });
    }
}

genrateEmoji()

emojibutton.addEventListener('click',()=>{
    const num = Math.floor(Math.random()*1000);
    emojibutton.innerHTML = emojiarrayofobject[num].emo;
    emojiname.innerHTML = emojiarrayofobject[num].emoName
})