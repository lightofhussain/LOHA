let aboutData1=aboutData
let messageBoard=document.getElementById("message_board")
let messageboardContainer=document.getElementById("messageboard_container")
let msgbord_btnH2=document.getElementById("msgbord_btn_h2")
const fileText=document.getElementById("file-text")


function fnThank(){
    alert("Thank you for visiting ")
}

    function fnOpenInvestementFile(fileName){  
        fileText.textContent=""
            fetch(fileName)
            .then((res)=>res.text())
            .then((text)=>{
            // const lines=text.split("\n")
                // fileText.textContent=lines
                fileText.textContent=text
                localStorage.setItem('data',text )
               
                // localStorage.setItem('data',JSON.stingify({fileText.value}))
                window.location.href="pages.html"
            })
            .catch((e)=>console.error(e))


        }
  /*
  use localStorage method
storing data
  localStorage.setItem('data-name',valueoftextbox )

  window.location.href="nextPage.html"

getting data in next page

const valueoftextbox=localStorage.getItem('data-name)
   let textContainer=document.getElementById("text-container")

textContainer.textContent=valueoftextbox

  */ 
/**
 * passing value between html pages
 * for object we use
 * localStorage.setItem('data-name',JSON.stingify({myObject}) )
 * 
 * geting
 * 
 * const valueoftextbox=JSON.parse(localStorage.getItem('data-name'))
 * 
 * 
 * clear local storage
 * localStorage.clear()
 * or
 * localStorage.remove('data-name')
 * 
 * 
 * 
 * 
 * another method for storage is section storage
 * sectionStorage.setItem('data',myvalues)
 * myValues=sectionStorge.getItem('data')
 */








function loginCancel(){
    loginPage.style.opacity=0
    loginPage.style.zIndex=-2
}


function fnOpenLogin(){
    loginPage.style.opacity=1
    loginPage.style.zIndex=10

}

function fnCloseMsgBoard(){
    messageboardContainer.style.opacity=0
    messageboardContainer.style.zIndex=-1
}

function fnHeroMessage(){
    messageboardContainer.style.opacity=1
    messageboardContainer.style.zIndex=10
    messageboardContainer.style.fontSize="35px"
    messageboardContainer.style.color="black"
    messageBoard.innerHTML="join us"

}
function fnTopBar(id)
{
    messageboardContainer.style.opacity=1
    messageboardContainer.style.zIndex=10
    messageBoard.innerHTML=""
        aboutData1.forEach(element => 
        {
            if(id===element.id){
                messageBoard.innerHTML+=`
                    <div class="msgboard_title">${element.title}</div>
                    <div class="msgboard_details">${element.detail}</div>`
                }
            
        });
}


