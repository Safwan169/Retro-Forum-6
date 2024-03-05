const comments = document.getElementById('comments');
const cards = document.getElementById('cards')

const loadData = async (value, coding) => {
    console.log(value)
    const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${value || ''}`)
    const data = await res.json()
    const allData = data.posts
    gainData(allData);

}
const gainData = (Data) => {
    console.log(Data)
    comments.textContent = " "
    Data.forEach(datas => {

        console.log(datas.title)
        const datasTitle = datas.title
        const eachComments = document.createElement('div')
        eachComments.classList = `hero shadow-2xl w-full lg:w-full mt-3 p-7 rounded-2xl bg-base-200`
        eachComments.innerHTML = `<div class="hero-content flex-col justify-end  flex  lg:flex-row items-start gap-14">
    <div class="indicator">
        <span  id="lol"  class="indicator-item badge ${datas.isActive}  "></span>
        <div class="grid w-10 rounded-2xl bg-cover h-10 bg-base-300 place-items-center" style="background-image: url('${datas.image}')"></div>
    </div>
    <div class="flex flex-col gap-5">
        <div class="flex gap-6 text-xl font-bold">
            <p>#${datas.category}</p>
            <p>Author:${datas.author.name}</p>
        </div>
        <h1 id=" "class="text-3xl font-bold">${datas.title}</h1>
        <p class="py-3">${datas.description}</p>
        <hr class="border-dashed border-gray-300 border-1">
        <div class="flex justify-between gap-5  lg:w-[600px]  items-center">
            <div class="flex gap-2 lg:gap-4">
                <p class="text-gray-400 flex gap-2 lg:gap-4 items-center"><i
                        class="fa-regular fa-message"></i> ${datas.comment_count}</p>
                <p class="text-gray-400 flex gap-2 lg:gap-4 items-center"><i
                        class="fa-regular fa-eye"></i>${datas.view_count}</p>
                <p class="text-gray-400 flex gap-2 lg:gap-4 items-center"><i
                        class="fa-regular fa-clock"></i> ${datas.posted_time}min</p>
            </div>
            <div>
                <button onClick='msg("${datas.view_count}" ,"${datasTitle.replace(/'/, '')}")' class="btn bg-green-500 hover:bg-green-600 rounded-full"> <i class="fa-solid fa-envelope-open-text text-white fa-xl"> </i></button>
            </div>
        </div>
    </div>
</div>`;


        const comments = document.getElementById('comments');


        comments.appendChild(eachComments)

                




    }

    )
load(false)

}
// search


const searchBtn = () => {
    const input = document.getElementById('search-input')
   
    load(true)
    document.getElementById('commentsHead').classList.add('hidden','text-center')
   setInterval( ()=>{ document.getElementById('commentsHead').classList.remove('hidden')
    loadData(input.value)},2000)



   


}


loadData()

const load = (isLoading) => {
    const loading = document.getElementById('load')
    if (isLoading) {
    loading.classList.remove('hidden')
        
    }
    else{
     loading.classList.add('hidden')

    }
    

}
// side add
let num = 0;
const msg = (ll, mm) => {
    const get = document.getElementById('get')
    get.classList.remove('hidden')
    console.log(ll)
    console.log(mm)
    const oo = document.getElementById('click-comments')
    console.log(oo)

    const yy = document.createElement('div')
    yy.classList = `shadow-2xl flex flex-col gap-3 `
    yy.innerHTML = `
     <div class="flex gap-4 justify-between">
     <div class="font-bold">${mm}</div>
     <div class="flex flex-row gap-3 items-center justify-center"><i
     class="fa-regular fa-eye"></i>${ll}</div>
     </div>
     <hr class="border-dashed border-1 border-gray-300">


    
    `;

    oo.appendChild(yy)
    const counter = document.getElementById('counter')
    console.log(counter)
    num = num + 1
    counter.innerText = num

}

const leatstData = async () => {
    const res = await fetch(" https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    const data = await res.json()
    LeatstData(data)
}
const LeatstData = (last) => {
    console.log(last)
    last.forEach(data1 => {
        const kk = data1.author.posted_date
        const uu = data1.author.designation

        const uu1 = (typeof uu !== 'undefined' && typeof uu === 'string') ? uu : "Unknown";
        var kk1 = (typeof kk !== 'undefined' && typeof kk === 'string') ? kk : "Unknown";


        console.log(kk1)


        const eachComments = document.createElement('div')
        eachComments.classList = `shadow-2xl lg:pl-10`
        eachComments.innerHTML = `  <div class="w-full justify-center items-center text-center lg:items-start lg:text-left flex flex-col gap-5 p-5">
        <div class="bg-cover rounded-xl my-4 w-32 h-32 " style="background-image: url('${data1.cover_image}')">
          

        </div>
        <div class="flex gap-3">
            <img src="Frame.png" alt="">
            <p class="font-bold">${kk1}</p>

        </div>
        <div class="flex flex-col gap-4">
            <p class="font-black ">What will a mars habitat force that impact in our daily life!!!</p>
            <p class="text-gray-400 font-semibold">Yes, you can run unit tests and view the results directly within the app. </p>

        </div>
        <div class="flex flex-col lg:flex-row items-center gap-5">
            <p class="bg-cover lg:w-8 w-20 h-20 my-4 lg:h-8 rounded-lg " style="background-image: url('${data1.profile_image}')"></p>
            <div class="flex flex-col gap-2">
                <p class="font-black ">${data1.author.name
            }</p>
                <p class="font-bold">${uu1
            }</p>
            </div>
        </div>
    </div>`;
        const comments5 = document.getElementById('cards');


        comments5.appendChild(eachComments)

    })
}
leatstData()
