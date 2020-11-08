const Discord = require('discord.js')
const client = new Discord.Client({partials : ["MESSAGE","CHANNEL","REACTION"]});
const fs = require("fs");
let badword = JSON.parse(fs.readFileSync("badword.json", "utf8"));

client.on('ready',()=>{
    console.log(`Logged in as ${client.user.tag}`);
    console.log(`Cached Member ${client.users.cache.size}`)
})


client.on('message', m =>{
    const args = m.content.split(/ +/);
    const command = args.shift().toLowerCase();
    const channel = client.channels.cache.get(m.channel.id)

    if(command){
      if(command == "ceker"){
        if (args[0]){
          if(channel.guild.roles.cache.find(o => o.name.toLowerCase() == args[0].toLowerCase())){
            if (args[0].toLowerCase() == channel.guild.roles.cache.find(o => o.name.toLowerCase() == args[0].toLowerCase()).name.toLowerCase()){
              let d = `List Developer yang memiliki skill ${channel.guild.roles.cache.find(o => o.name.toLowerCase() == args[0].toLowerCase()).name}:\n`
              let x = 1
              let f = channel.guild.roles.cache.find(o => o.name.toLowerCase() == args[0].toLowerCase()).members.map(y=> {
                d += `${x}. ${y.displayName}\n`
                x += 1
                return d
              })
              m.reply(d)
            }
          }else if(args[0].toLowerCase() === 'ayam' || args[0].toLowerCase() === 'bebek' || args[0].toLowerCase() === 'angsa' || args[0].toLowerCase() === 'kalkun'){
            m.reply(`Ma'af, Dev <@${m.author.id}> Kami bukan tempat jualan ${args[0]}`)
          }else {
            m.reply(`Ma'af mungkin boleh lihat role yang ada di <#729575194187923458>`)
          }
        }else {
          m.reply(`Mau Check Role apa Dev <@${m.author.id}>`)
        }    
      }
    }

    try {
        text = ''
        if(m.channel.id == '733075728232349748')return;
        if(m.channel.id === '734636465014702080') return;
        if(m.channel.name === '🦊playground-area') return;
        if(m.channel.name === '🔏moderator-area') return;
        if(m.channel.name === '❓help-desk') return;
        if(m.content[0] == ">") return;
        if(m.content[0] == "!") return;
        if(m.content[0] == "-") return;
        m.content.toLowerCase().split(' ').forEach(y=> {
          if (badword[y]){
            text += `${badword[y]} `
          }else{
            text+= `${y} `
          }
        })
        console.log(text)
        //console.log(`this is ${m.content}`)
        let bad = ["remot","mouse"]
        gg = "anjing|babi|monyet|kunyuk|bajingan|asu|bangsat|kampret|kontol|memek|ngentot|ngewe|perek|pecun|bencong|banci|jablay|maho|bego|goblok|idiot|geblek|orang gila|gila|sinting|tolol|sarap|udik|kampungan|kamseupay|buta|budek|bolot|jelek|setan|iblis|keparat|ngehe|bejad|gembel|brengsek|tai|sompret"
        
        if(m.author.bot === false && `${m.content.toLowerCase()} ` !== text){
        m.delete()
        
     
        m.channel.send(`Maksud Dev <@${m.author.id}> ini lohhh 
     >>> ${text}`) 
        }
        if(m.toLowerCase().split(' ')[0]){
     
        }
      } catch (error) {
     
      }
    
});

client.on('messageReactionAdd',(reaction,user)=>{
    if(user.bot)return;
    if(reaction.message.channel.id =='729575194187923458'){
        if(reaction.message.id == '729582282242785370'){
            // console.log('This is the right channel');

            let emojiname = reaction.emoji.name
            let changedemoji = ''
            if(emojiname == 'html_programming'){
                changedemoji = 'html'
            }else if(emojiname == 'c1_programming'){
                changedemoji = 'c'
            }else if(emojiname == 'net_programming'){
                changedemoji = '.net'
            }else if(emojiname == 'java_programming'){
                changedemoji = 'java'
            }else if(emojiname == 'php_programming'){
                changedemoji = 'php'
            }else if(emojiname == 'lua_programming'){
                changedemoji = '.lua'
            }else if(emojiname == 'c3_programming'){
                changedemoji = 'c#'
            }else if(emojiname == 'go_programming'){
                changedemoji = 'go'
            }else if(emojiname == 'dart_programming'){
                changedemoji = 'dart'
            }else if(emojiname == 'swift_programming'){
                changedemoji = 'swift'
            }else if(emojiname == 'c2_programming'){
                changedemoji = 'c++'
            }else if(emojiname == 'kotlin_programming'){
                changedemoji = 'kotlin'
            }else if(emojiname == 'ruby_programming'){
                changedemoji = 'ruby'
            }else if(emojiname == 'JavaScript_programming'){
                changedemoji = 'javascript'
            }else if(emojiname == 'css_programming'){
                changedemoji = 'css'
            }else if(emojiname == 'python_programming'){
                changedemoji = 'python'
            }else if(emojiname == 'rust_programming'){
                changedemoji = 'rust'
            }else if(emojiname == 'sql_programming'){
                changedemoji = 'sql'
            }
        
            console.log('add')
        let role =reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() == changedemoji.toLowerCase())
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id);

        member.roles.add(role.id);
        
    
        }
    }
})

client.on('messageReactionRemove',(reaction,user)=>{
    if(user.bot)return;
    if(reaction.message.channel.id =='729575194187923458'){
        if(reaction.message.id == '729582282242785370'){
            // console.log('This is the right channel');

            let emojiname = reaction.emoji.name
            let changedemoji = ''
            if(emojiname == 'html_programming'){
                changedemoji = 'html'
            }else if(emojiname == 'c1_programming'){
                changedemoji = 'c'
            }else if(emojiname == 'net_programming'){
                changedemoji = '.net'
            }else if(emojiname == 'java_programming'){
                changedemoji = 'java'
            }else if(emojiname == 'php_programming'){
                changedemoji = 'php'
            }else if(emojiname == 'lua_programming'){
                changedemoji = '.lua'
            }else if(emojiname == 'c3_programming'){
                changedemoji = 'c#'
            }else if(emojiname == 'go_programming'){
                changedemoji = 'go'
            }else if(emojiname == 'dart_programming'){
                changedemoji = 'dart'
            }else if(emojiname == 'swift_programming'){
                changedemoji = 'swift'
            }else if(emojiname == 'c2_programming'){
                changedemoji = 'c++'
            }else if(emojiname == 'kotlin_programming'){
                changedemoji = 'kotlin'
            }else if(emojiname == 'ruby_programming'){
                changedemoji = 'ruby'
            }else if(emojiname == 'JavaScript_programming'){
                changedemoji = 'javascript'
            }else if(emojiname == 'css_programming'){
                changedemoji = 'css'
            }else if(emojiname == 'python_programming'){
                changedemoji = 'python'
            }else if(emojiname == 'rust_programming'){
                changedemoji = 'rust'
            }else if(emojiname == 'sql_programming'){
                changedemoji = 'sql'
            }
        
            console.log('remove')
        let role =reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() == changedemoji.toLowerCase())
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id);

        member.roles.remove(role.id);
        
    
        }
    }
})

client.on('guildMemberAdd',(member)=>{
    let roleDev = member.guild.roles.cache.get('728981956322263070');
    const channel =  member.guild.channels.cache.find(ch => ch.name === '🏡general').send(`Selamat Datang di Server Team UP Dev ${member}, Oh iya jangan lupa tag skill kamu di <#729575194187923458> ya !!\n
 Server Info :
   Kunjungi <#729575194187923458> untuk ambil skill spesifikasi kamu ya!
   Kunjungi <#724165603740483638> untuk diskusi bareng lewat teks sama temen - temen lainnya
   Kunjungi <#729321872491020294> untuk bermain Quiz(On Development)
   Kunjungi <#729339682307178567> untuk course - course menarik lainnya
   Kunjungi <#729375875711107163> untuk melihat info - info penting
   Kunjungi <#729659401279111168> untuk temen - temen yang kesulitan memahami sebuah kasus
   Kunjungi <#729359717616320663> untuk ide untuk pengembangan bot atau berkontribusi
   Developer Area :
   Kunjungi <#724165704412168212> untuk melihat tips trick pemprograman
   Kunjungi <#729993789745397760> untuk Ide Proyek dan Ide Lainnya
   Kunjungi <#730078494133977219> untuk mendapat info event penting
   Kunjungi <#730225043396886570> untuk mendapatkan Assets untuk digunakan kembali (gratis)
   Kunjungi <#731095073738981417> untuk mendapatkan info lamaran kerja/proyek
   
   Oh iya, aku udah nambahin title Developer nih khusus untuk Dev ${member}, kalau ngerasa titlenya gak diperluin boleh di remove kok`)

   member.guild.channels.cache.find(ch => ch.name ==='📰members-logs').send(`Selamat Datang **${member}** di Team UP Server, kamu memiliki username _**${member.user.tag}**_ Silahkan kunjungi <#724165603740483638> Untuk Ngobrol Bareng dan melihat info server `);

    member.roles.add(roleDev);


})

client.on('guildMemberRemove',(member) => {

    member.guild.channels.cache.find(ch => ch.name ==='📰members-logs').send(`**${member}** dengan username _**${member.user.tag}**_ Telah Meninggalkan Server Team UP`);
})


client.login(process.env.TOKEN);
