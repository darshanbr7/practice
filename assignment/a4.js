let info=[{"id":1,"name":"Isaiah","email":"icranna0@bravesites.com"},
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
{"id":18,"name":"Marshall","email":"mbartoszekh@house.gov"},
{"id":19,"name":"Ilyse","email":"iyersoni@umich.edu"},
{"id":20,"name":"Dillie","email":"dwindrusj@ucla.edu"},
{"id":21,"name":"Randal","email":"rrubegak@tamu.edu"},
{"id":22,"name":"Nancy","email":"ntitcoml@smugmug.com"},
{"id":23,"name":"Brock","email":"bdurrantm@dailymail.co.uk"},
{"id":24,"name":"Rosabelle","email":"rhizirn@eventbrite.com"},
{"id":25,"name":"Eolanda","email":"echetwindo@smh.com.au"},
{"id":26,"name":"Thane","email":"tcromerp@canalblog.com"},
{"id":27,"name":"Trixi","email":"tsantacroleq@naver.com"},
{"id":28,"name":"Ambrosi","email":"alefebrer@wikimedia.org"},
{"id":29,"name":"Stern","email":"sfieldstones@sfgate.com"},
{"id":30,"name":"Evey","email":"erisleyt@nih.gov"},
{"id":31,"name":"Linn","email":"ldubsu@tiny.cc"},
{"id":32,"name":"Mic","email":"mcrookstonv@jugem.jp"},
{"id":33,"name":"Fannie","email":"fmaleneyw@comcast.net"},
{"id":34,"name":"Weylin","email":"wlumbleyx@nasa.gov"},
{"id":35,"name":"Dorie","email":"dinnotty@prlog.org"},
{"id":36,"name":"Carmine","email":"chowlez@tuttocitta.it"},
{"id":37,"name":"Morlee","email":"mshill10@4shared.com"},
{"id":38,"name":"Jessalin","email":"jtutill11@answers.com"},
{"id":39,"name":"Beauregard","email":"bvanyashkin12@csmonitor.com"},
{"id":40,"name":"Garret","email":"gcosely13@bbc.co.uk"},
{"id":41,"name":"Marissa","email":"mbool14@hhs.gov"},
{"id":42,"name":"Charlean","email":"cdrane15@etsy.com"},
{"id":43,"name":"Morton","email":"mmoodie16@pinterest.com"},
{"id":44,"name":"Eal","email":"ecolledge17@ameblo.jp"},
{"id":45,"name":"Ruddy","email":"rrizon18@nydailynews.com"},
{"id":46,"name":"Lynea","email":"lconti19@netscape.com"},
{"id":47,"name":"Hanan","email":"hkibble1a@yolasite.com"},
{"id":48,"name":"Hadrian","email":"htremblet1b@tumblr.com"},
{"id":49,"name":"Israel","email":"ilittlejohn1c@diigo.com"},
{"id":50,"name":"Romonda","email":"rdellcasa1d@quantcast.com"}]
function get_data(){
      let rows=" "
      for(data of info){
        rows=rows+`<tr>
                    <td style="size:40px"> ${data.id}</td>
                    <td> ${data.name}</td>
                     <td> ${data.email}</td>
                     <td> ${data.email .substr(data.email.indexOf("@")+1).toUpperCase()}</td>
                    </tr>`
      }
      document.getElementById("get-data").innerHTML=rows
     }