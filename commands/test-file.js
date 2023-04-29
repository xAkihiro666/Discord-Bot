module.exports = [{
    name: "welcome",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
    $interactionReply[Success;;;;everyone;true]
    $setGuildVar[isEmbed;$slashOption[embed]]
    $setGuildVar[wMessage;$slashOption[message]]
    $setGuildVar[channel;$slashOption[channel]]
    $onlyIf[$channelType[$slashOption[channel]]==text;Hey {options:{ephemeral: true}}
{extraOptions:{interaction: true}}]
    `
},{
    name: "welcome-test",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
    $if[$getGuildVar[isEmbed]==true]
    $interactionReply[$getGuildVar[wMessage];;;;everyone;true]
    $else
    $interactionReply[;{newEmbed:{title:Welcome $username}{description:$getGuildVar[wMessage]}};;;everyone;true]
    $endif
    `
},{
    type: "join",
    channel: "$getGuildVar[channel]",
    code: `
    $if[$getGuildVar[isEmbed]==false]
    $getGuildVar[wMessage]
    `
}]

//$interactionReply[Hello!;;;;everyone;true]