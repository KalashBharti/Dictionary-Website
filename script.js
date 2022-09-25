let inputWord=document.getElementById("inputWord");
//taking input and perform action on enter press
inputWord.addEventListener("keypress",(key)=>
{

    if(key.code==="Enter" || key.keyCode===13)
    {
        fetchData(key.target.value);
    }
})


//fetching meaning from api
function fetchData(word)
{
    clear();
    
    url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
    let similarWord=""; //to take similar words
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
        document.getElementById("display_word").innerText=word;
        
        let str=data[0].meanings;
        
    str.forEach(element => {
        let partOfSpeech=element.partOfSpeech; //taking partofspeech-noun,verb
        
        //taking synonyms mode
        //taking words from synonims node
        let similarWordobj =element.synonyms;
        similarWordobj.forEach((element)=>
        {
            similarWord+=element+", ";
        })  //next in line 57
        
        
        let definition=  element.definitions;  //taking definitions mode
        //taking definition from definitions node
        definition.forEach((element)=>
        {
            let sentence=element.definition;
            //printing the element in docs
            document.getElementById("ol")
            .innerHTML+=`<li> ${partOfSpeech}: ${sentence} </li>`;
            
        })
 
      
    });
    //printing similar word in dom
    document.getElementById("similarword").innerText=similarWord+"...";
    
}).catch((e)=>{  //if element is not found
    console.log("not found")
    alert("Word not found")
    document.getElementById("display_word").innerText="";
    
    
    
})
}

function clear()
{
    document.getElementById("similarword").innerText="";
    document.getElementById("ol")
    .innerHTML="";
}