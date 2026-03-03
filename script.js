const allLessons = () => {
    let url = 'https://openapi.programming-hero.com/api/levels/all'
    fetch(url)
        .then(res => res.json())
        .then(data => showLessons(data.data));
};





const showLessons = (allLessons) => {
    let all = document.getElementById('lessons');
    all.innerHTML = '';
    for (const lesson of allLessons) {
        console.log(lesson);

        let lessSection = document.createElement('div');
        lessSection.innerHTML = `
        <button onclick="loadWords(${lesson.level_no})" class="btn btn-outline btn-primary mx-auto"><i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}</button>
        
        `
        // lessSection.classList.add('mx-auto',)
        all.appendChild(lessSection)
    }


}
allLessons()



const loadWords = (id) => {
    // console.log(id)
    let url = `https://openapi.programming-hero.com/api/level/${id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayWords(data.data))
}

const displayWords = (word) => {
    // console.log(word)
    let words = document.getElementById('words')
    words.innerHTML = '';
    word.forEach(element => {
        console.log(element)
            let eachWord = document.createElement('div');

    eachWord.innerHTML = `
            <div class="card bg-white  py-13 space-y-2.5 px-10 mx-auto text-center ">
                <h3 class="font-bold">${element.word}</h3>
                <p>Meaning /Pronounciation</p>
                <h1 class="text-2xl font-bold">"${element.meaning} / ${element.pronunciation}"</h1>
                  <div class="flex justify-between ">
                    <button class="hover:bg-blue-100 p-1 rounded-2xl"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="hover:bg-blue-100 p-1 rounded-2xl"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
    
    `

    words.append(eachWord)
    });


}