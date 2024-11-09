

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `✉ 𝙈𝙀𝙉𝙎𝘼𝙅𝙀:* *${pesan}* \n *👤 𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎:* *${participants.length}*`;
  let teks = `**⺀এ𝘔𝘦𝘯𝘤𝘪𝘰𝘯 𝘎𝘦𝘯𝘦𝘳𝘢𝘭!এ⺀*\n\n *${oi}\n\n_*➥ NɪᴋᴏʟBᴏᴛ ᴛᴇ ᴍᴇɴᴄɪᴏɴᴀ!*_\n`;
  for (const mem of participants) {
    teks += `*┊ᡣ𐭩* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*╰───── 𝐍𝐢𝐤𝐨𝐥 𝐁𝐨𝐭 ─────╯*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación|putos)$/i;
handler.admin = true;
handler.group = true;
export default handler;
