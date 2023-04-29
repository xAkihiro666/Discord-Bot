module.exports = [{
  name: "play",
  $if: "old",
  aliases: ["p"],
  code: `
  
  $ifAwaited[$queueLength==0;{execute:Length_True};{execute:Length_False}]
  
  $if[$checkCondition[$hasPlayer==false||$voiceID[$clientID]==]==true]
  $joinVC[$voiceID]
  $endif
  
  
  $onlyIf[$message!=;{newEmbed:{{title:**Usage**}{description:To be added}}]   
  $onlyIf[$voiceID[$authorID;$guildID]!=;{newEmbed:{{title:**Notice**}{description:To be added}}]
  
  `
},{
  name: "Length_True",
  type: 'awaited',
  code: `
  **Playing** 🎶 \`\$songInfo[title]\`\ - Now!
  $playTrack[$nonEscape[$replaceText[$message;https://youtu.be/;https://youtube.com/watch?v=;1]];youtube]
  
  `
},{
  name: "Length_False",
  type: 'awaited',
  code: `
  $thumbnail[$songInfo[thumbnail;$sub[$queueLength;1]]]
  $author[Added to Queue;$userAvatar]
  $description[**[$songInfo[title;$sub[$queueLength;1]]]($songInfo[url;$sub[$queueLength;1]])**]
  $addField[Position in queue;$sub[$queueLength;1];true]
  $addField[Time Until The Next Song;$replaceText[$advancedTextSplit[$digitalFormat[$sub[$songInfo[duration];$getCurrentTrackDuration]];(..);1];00:;;1];true]
  $addField[Song Duration;$replaceText[$advancedTextSplit[$digitalFormat[$songInfo[duration;$sub[$queueLength;1]]];(..);1];00:;;1];true]
  $addField[Channel;$songInfo[artist;$sub[$queueLength;1];1];true]
  $playTrack[$nonEscape[$replaceText[$message;https://youtu.be/;https://youtube.com/watch?v=;1]];youtube]
  
  `
},{
  name: "queue",
  aliases: ["q"],
  code: `
  $queue[1;10;{position}) {title} - <@{requester.user.id}>\n]
  `
}]