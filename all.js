const comments=document.getElementById('comments');
const cards=document.getElementById('cards')

const loadData=async()=>{
    const res=await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts')
    const data=await res.json()
   const allData=data.posts
   gainData(allData);
// console.log(allData)

}
const gainData=(Data)=>{
    console.log(Data)
 Data.forEach(datas=>{
 
    const eachComments=document.createElement('div')
    eachComments.classList =`hero  mt-3 p-7 rounded-2xl bg-base-200`
    eachComments.innerHTML =`<div class="hero-content flex-col justify-end  flex  lg:flex-row items-start gap-14">
    <div class="indicator">
        <span class="indicator-item badge bg-green-500"></span>
        <div class="grid w-10 rounded-2xl bg-cover h-10 bg-base-300 place-items-center" style="background-image: url('${datas.image}')"></div>
    </div>
    <div class="flex flex-col gap-5">
        <div class="flex gap-6 text-xl font-bold">
            <p>#${datas.category}</p>
            <p>Author:${datas.author.name}</p>
        </div>
        <h1 class="text-3xl font-bold">10 Kids Unaware of Their Halloween Costume</h1>
        <p class="py-3">It’s one thing to subject yourself to ha Halloween costume mishap
            because,<br> hey that’s your prerogative</p>
        <hr class="border-dashed border-gray-300 border-1">
        <div class="flex justify-between items-center">
            <div class="flex gap-4">
                <p class="text-gray-400 flex gap-4 items-center"><i
                        class="fa-regular fa-message"></i> ${datas.comment_count}</p>
                <p class="text-gray-400 flex gap-4 items-center"><i
                        class="fa-regular fa-eye"></i>${datas.view_count}</p>
                <p class="text-gray-400 flex gap-4 items-center"><i
                        class="fa-regular fa-clock"></i> ${datas.posted_time}min</p>
            </div>
            <div>
                <button class="btn bg-green-500 hover:bg-green-600 rounded-full"> <i class="fa-solid fa-envelope-open-text text-white fa-xl"> </i></button>
            </div>
        </div>
    </div>
</div>`;
console.log(eachComments)
const comments=document.getElementById('comments');

comments.appendChild(eachComments)
 })
}
// allData.forEach()


loadData()