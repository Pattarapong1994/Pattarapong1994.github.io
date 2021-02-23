(function () {
    const character = [
        {
            img: "url('https://img.ecartelera.com/news/fotos/100/121/1.png')",
            name: "Jack Sparrow",
            history: "In the first film, Sparrow is the former captain of the Black Pearl. After a mutiny by his first mate Hector Barbossa, he is left to die on an island. Though Barbossa and his crew are immortal as a result of a curse, Sparrow craves revenge. With the help of Will Turner and Elizabeth Swann, he lifts the curse and kills Barbossa."
        },
        {
            img: "url('https://pm1.narvii.com/6146/0f3b41557e8f9a0b88f7c4cc1837bb21e10ad0b6_00.jpg')",
            name: "Hector Barbossa",
            history: "In the first film, Barbossa is captain of the pirate ship Black Pearl. He was the former first mate of the Black Pearl and led a mutiny against former captain, Jack Sparrow. Barbossa persuaded Jack to reveal the bearings to Isla de Muerta where the Chest of Cortez was hidden. After Sparrow divulged the location, Barbossa and the crew left Sparrow to starve on a tiny island. After stealing the gold, Barbossa and his crew became undead and unable to feel physical pleasure."
        },
        {
            img: "url('https://i.pinimg.com/originals/ce/30/2d/ce302dcc134879bbae9d195072a51dfb.jpg')",
            name: "Joshamee Gibbs",
            history: "In the first film, Gibbs appears as a petty officer in the Royal Navy, it is implied that he is the ship's boatswain as he is respected, very cynical, and drinks heavily which are stereotypes of a boatswain. While Governor Swann and a young Elizabeth Swann travel to Port Royal, he assists in rescuing a young Will Turner from a shipwreck. Eight years later, Jack Sparrow encounters Gibbs sleeping among pigs in Tortuga. Gibbs, no longer affiliated with the Royal Navy, agrees to help Jack sail HMS Interceptor as his First Mate. After Jack is captured by Barbossa, Gibbs attempts to captain Interceptor. They are swiftly overtaken by the Black Pearl and captured. Elizabeth frees Gibbs and the crew, who decide to take Black Pearl instead of rescuing Jack from Barbossa. However, Gibbs and the crew later return to Port Royal to save Jack from hanging. After Jack is rescued, Gibbs stays on as his First Mate."
        },
        {
            img: "url('https://www.hippoquotes.com/img/pirates-of-the-caribbean-quotes-will-turner/POTC_October2013WillTurner.jpg')",
            name: "Will Turner",
            history: "In the first film, a young Will Turner (played by Dylan Smith) is rescued from a shipwreck by James Norrington and Elizabeth Swann. As an adult, Will is a blacksmith's apprentice working in Port Royal. He loves Elizabeth, although he is of a lower social class. Will helps Jack escape from Port Royal. He uses his blood to break the curse upon the crew of the Black Pearl."
        },
        {
            img: "url('https://pbs.twimg.com/media/D2kv4nyWsAA1aa3.jpg')",
            name: "Elizabeth Swann",
            history: "In the first film, a young Elizabeth (played by Lucinda Dryzek) helps rescue Will Turner from a shipwreck; she steals a pirate's medallion from Will in order to protect him. As an adult, she is engaged to James Norrington. Captain Barbossa captures Elizabeth. Because she possesses the medallion, he presumes she is the daughter of Bootstrap Bill Turner, whose blood is needed to lift the pirates' curse. She assists Will and Jack in defeating Barbossa."
        },
        {
            img: "url('https://static.puzzlefactory.pl/puzzle/135/864/original.jpg')",
            name: "Davy Jones",
            history: "Davy Jones is the immortal captain of Flying Dutchman. His original purpose was to carry souls of those who died at sea from this world to the next on his vessel. He was charged with this duty by his one true love, a sea goddess named Calypso. For every ten years at sea he could spend one day ashore to be with her. Ten years after first being charged with the duty, Jones prepared to be reunited with his true love on land, but was heartbroken and enraged when she never appeared. Unable to deal with Calypso's betrayal, he ripped out his heart and placed it in a chest, burying it on land. "
        }
    ];

    const btn = document.querySelector('#btn');

    btn.addEventListener('click', function() {
        let random = Math.floor(Math.random() *character.length);
        console.log(random);

        document.querySelector('.img-cha').style.backgroundImage = character[random].img;
        document.querySelector('.topic').textContent = character[random].name;
        document.querySelector('.history').textContent = character[random].history;


    })
})()