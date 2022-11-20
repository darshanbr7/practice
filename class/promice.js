let employee=[{"id":1,"name":"Isaiah","email":"icranna0@bravesites.com"},
{"id":2,"name":"Sibella","email":"sisbell1@tinypic.com"},
{"id":3,"name":"Shoshanna","email":"soconor2@nytimes.com"},
{"id":4,"name":"Di","email":"dwillcox3@desdev.cn"},
{"id":5,"name":"Welsh","email":"wtroctor4@cdbaby.com"},
{"id":6,"name":"Joelynn","email":"jlevine5@cyberchimps.com"},
{"id":7,"name":"Burl","email":"baldritt6@a8.net"},
{"id":8,"name":"Oran","email":"olongman7@accuweather.com"},
{"id":9,"name":"Brenna","email":"bsnailham8@123-reg.co.uk"},
{"id":10,"name":"Leonidas","email":"lfairham9@123-reg.co.uk"},
{"id":11,"name":"Mattheus","email":"mmagnera@tinyurl.com"},
{"id":12,"name":"Ozzie","email":"oslayfordb@google.ca"},
{"id":13,"name":"Gun","email":"gfluitc@theatlantic.com"},
{"id":14,"name":"Blanca","email":"bshortcliffed@surveymonkey.com"},
{"id":15,"name":"Pearla","email":"pkliesle@soup.io"},
{"id":16,"name":"Zora","email":"zdeportf@furl.net"},
{"id":17,"name":"Ely","email":"eblenking@icq.com"},
{"id":18,"name":"Marshall","email":"mbartoszekh@house.gov"},]
 let Create_employe=(emp)=>{
    return new Promise(( resole,reset)=>{
        setTimeout(()=>{
            flag=true
            employee.push(emp)
            flag?resole("data inserted succusfully"):reset("data inseted failed")
        },[4000])
    })

 }
 let get_Employee=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employee){
            rows=rows+`<tr> <td> ${emp.id}</td>
            <td> ${emp.name}</td>
            <td> ${emp.email}</td></tr>`
        }
        document.getElementById("abc").innerHTML=rows
    },[1000])
 }
 Create_employe({id:101,name:"darshan",email:"darshanbr@gmail.com"}).then((msg)=>{
console.log(msg)
get_Employee()
 }).catch((ms1)=>{console.log(ms1)})