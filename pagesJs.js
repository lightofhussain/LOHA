var uploadBtn=document.getElementById("upload") //for video
const inputImg=document.getElementById("upload2") //for img
const fileInput=document.getElementById("upload3") //for csv file
const fileInput2=document.getElementById("upload4") //for text file
// const textFile=document.getElementById("text-file") //display text
let myImag=document.getElementById("img1")
let fileContent=document.getElementById("file-content")



//========== data sent from other page. Reterived from  local storage and displayed on this page element ========
function getFileData(){
    const textFileData=localStorage.getItem('data')
    fileContent.textContent=textFileData
    localStorage.clear()
}
getFileData()



//==========Open  text file using file dialog input box ===========================================================
fileInput2.addEventListener('change',()=>{
    fileContent.textContent=""
    const fr1=new FileReader();
    fr1.readAsText(fileInput2.files[0])
    fr1.addEventListener('load', ()=>{
    fileContent.textContent=fr1.result
    fileInput2.value="" // to clear input box 
    })
 },false)

 



//=========Open  image file using file dialog input box =====================================================
inputImg.addEventListener('change',function(e){
    const reader2= new FileReader();
    reader2.onload = function(){
        var fileName1=reader2.result;
        myImag.src = fileName1
    }
    reader2.readAsDataURL(inputImg.files[0])
},false)



//=========Open  video file using file dialog input box =====================================================
uploadBtn.onchange=function(){
    var reader= new FileReader();
    reader.readAsDataURL(uploadBtn.files[0])
    reader.onload=function(){
        var fileName=reader.result;
        var video=document.getElementById("box")
        video.src=fileName
    }
}






// function fnOpenInvestementFile(fileName){  
//     textFile.textContent=""
//         fetch(fileName)
//         .then((res)=>res.text())
//         .then((text)=>{
//             textFile.textContent=text
//         })
//         .catch((e)=>console.error(e))
// }

// function fnOpenInvestementFile(fileName){  
//     textFile.textContent=""
//         fetch(fileName)
//         .then((res)=>res.text())
//         .then((text)=>{

//            const lines=text.split("\n")
//             textFile.textContent=lines

//         })
//         .catch((e)=>console.error(e))
// }




// //=========read csv file====================================================
// fileInput.addEventListener('change',()=>{
//     textFile.textContent=""

//     const fr=new FileReader();
//     fr.readAsText(fileInput.files[0])
//     fr.addEventListener('load', ()=>{
//         const csv=fr.result
//         const array=csv.split('\r\n').map((line)=>{
//            return line.split(',')
//         })

//         const table=document.createElement('table')
//         array.forEach(line=>{

//             const tr=document.createElement('tr')
//             line.forEach(cell => {
//                 // let td;
//                 // if(index === 0){
//                 //     td = document.createElement('th')
//                 // }else{
//                 //     td=document.createElement('td')
//                 // }
//                 const td=document.createElement('td')
//                 td.textContent=cell;
//                 tr.appendChild(td);
//             })
//             table.appendChild(tr)
//         })
//         textFile.appendChild(table)
        
//         fileInput.value="" // to clear input box 
//     })
   
   
// },false)










