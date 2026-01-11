// code/data.js

const myItems = [
    { 
        id: "note",  
        w: 85,  
        h: 128, 
        title: "Idea Note", 
        desc: `
            I have a habit of taking notes. Whether it is a fleeting thought or a spoken remark, I must write it down by hand for it to remain in my memory. It feels as if I am etching them into my brain with ink.

I possess several other small notebooks, each assigned a specific role—a scheduler, a log for content I’ve consumed, or a diary. But this notebook is the "primordial" one that precedes all others. It contains hastily scribbled schedules, brief book reviews, and titles of movies I want to watch. The contents here pass through a filter before being transferred to other, more specialized notebooks. In a sense, this palm-sized notebook reveals my life in its most unfiltered, raw state.

I bought this notebook in Tokyo a few years ago. The PVC cover is detachable, making it convenient to swap in a refill once full. I have already filled one, and the current one is nearing its end. In a few years, a stack of used notebooks will likely accumulate in a corner of my room. I need to consider how to manage them. After all, I cannot simply discard or neglect these tangible chunks of my unadorned thoughts.
        `
    },
    { 
        id: "pen",   
        w: 140, 
        h: 15,  
        title: "Favorite Pen",  
        desc: `
It is a water-based pen with an incredibly smooth glide. The moment the tip touches the paper, the writing seems to flow effortlessly. It feels as if the flow of my thoughts mirrors that natural movement.

My mind seems to be influenced by physical actions more than I expected. When I need to organize a draft or untangle my thoughts, letting the words flow with this pen is far more helpful than using a keyboard. My thoughts expand in proportion to the black ink taking over the page.

Moreover, this pen fits perfectly with the notebook I carry. When I clip it to the side, it looks so natural, as if they were a matching set from the very beginning.        ` 
    },
    { 
        id: "candy", 
        w: 78,  
        h: 47,  
        title: "Mint Candy", 
        desc: `
           Mint candy is the most practical snack for the modern person. It can mitigate stale breath (though brushing one’s teeth is certainly better) or help ward off drowsiness. Aside from water, this mint candy might be what I consume the most.

Among the countless options available, this is my favorite. Others are too strong, too mild, rattle excessively in their packaging, or are simply too bulky for daily carry. This product is sold in Japan; costing only a few cents, I pick up several packs whenever I travel there. While I prefer the standard mint flavor, seasonal varieties like melon or yuzu make for popular, casual gifts.

In truth, the greatest function of a mint is as an ice-breaker. Offering a mint from my bag at an unfamiliar gathering is a social trick I have consistently relied on. As the candy melts and the refreshing scent spreads through the mouth, the tension softens, and a small opening for conversation begins to form.
        ` 
    },
    { 
        id: "med",   
        w: 69,  
        h: 50,  
        title: "Medicine Pouch", 
        desc: `
            This small pouch is my "just in case" survival kit. As someone who suffers from frequent headaches and occasional allergies, I realized early on that being prepared is half the battle. Inside, you'll find a carefully organized assortment of painkillers, allergy medication, band-aids, and even a small alcohol wipe.
            
            It gives me a sense of security knowing that I can handle minor health inconveniences without having to rush to a pharmacy. The pouch itself is made of waterproof fabric, so the contents stay safe even if my water bottle leaks inside my bag. 
            
            My friends often call me the "walking pharmacy" because I'm always the one who has a band-aid when someone gets a paper cut. It might seem like overkill to carry this every day, but on the days when I or someone else needs it, it feels like the most valuable item in my bag. It represents my desire to care for myself and others.
        ` 
    },
    { 
        id: "lip",   
        w: 105, 
        h: 22,  
        title: "Moisturizing Lip Balm", 
        desc: `
            My lips get terribly dry, especially in the winter or in air-conditioned offices, so this lip balm is an absolute necessity. I probably apply it ten times a day. If I leave the house without it, I spend the entire day feeling uncomfortable and distracted.
            
            This particular brand uses natural beeswax and peppermint oil. The peppermint gives a slight tingling sensation that feels cooling and refreshing. It's not too glossy, so it looks natural, which I prefer for daily wear. The tube is slim and fits perfectly in the small inner pocket of my bag or my jeans pocket.
            
            I've finished countless tubes of this over the years. It's one of those mundane items that you don't think about until it's gone. For me, applying lip balm is also a small ritual—a tiny pause in a hectic day to take care of myself. It helps me feel put together and ready to speak or smile with confidence.
        ` 
    },
    { 
        id: "sani",  
        w: 33,  
        h: 66,  
        title: "Hand Sanitizer", 
        desc: `
            In the post-pandemic world, carrying hand sanitizer has become second nature to everyone, myself included. This small bottle is attached to my bag strap for easy access. I use it after riding the subway, touching elevator buttons, or before grabbing a quick snack on the go.
            
            I'm very picky about the scent. Many sanitizers smell too strongly of alcohol or artificial chemicals, but this one has a subtle lavender fragrance that is actually calming. It contains moisturizing ingredients like aloe vera, so it doesn't dry out my hands even with frequent use.
            
            It's a small shield against the invisible germs of the city. Keeping my hands clean is the simplest way to stay healthy, and having this within arm's reach gives me peace of mind when I'm navigating through crowded public spaces. It's a small bottle, but it packs a lot of protection.
        ` 
    },
    { 
        id: "hand",  
        w: 85,  
        h: 45,  
        title: "Hand Cream", 
        desc: `
Finding the right hand cream is a tricky task. Some textures are too greasy, leaving a slippery residue on the surface, while others are so light they vanish without a trace. Since I am also sensitive to scents, I avoid products with strong fragrances. I prefer smaller tubes for portability, as bulky containers are inconvenient to carry. I used to use hand cream frequently, but ever since I started using oils, I haven’t felt much need for it myself. Instead, I keep one in my bag for the people around me. Wherever I go, someone always seems to need it. Even if they don’t ask first, once I habitually take mine out, they inevitably ask to share.        ` 
    },
    { 
        id: "ear",   
        w: 70,  
        h: 70,  
        title: "Wired Earphones", 
        desc: `
In the age of Bluetooth, where we are free from cords, people often say that wired earphones actually have a certain "vibe." However, that is not why I use them. First, the sound quality is simply better. I particularly love a resonant bass, and these seem to capture that range exceptionally well. Also, I am very prone to losing things. Since wired earphones are, quite literally, "connected by a wire," they are impossible to lose. When I used wireless earbuds, it was all too common to open the case only to find one side missing.

Some cite the lack of noise cancellation—considered a necessity in modern society—as a disadvantage. Yet, by using wired earphones, I have come to enjoy the ambient sounds that naturally drift in with the music. While it is regrettable when the noise is too loud and drowns out the song, the way the flow of air or the miscellaneous sounds of the street overlap with my favorite music is a surprisingly pleasant, serendipitous experience. In a society where it is easy to become emotionally isolated, keeping one’s senses open to the surroundings is a precious thing.        ` 
    },
    { 
        id: "oil",   
        w: 10,  
        h: 65,  
        title: "Scented Oil", 
        desc: `
            Among the five senses, olfaction feels the most unfamiliar to me. While I process other sensory inputs instinctively, a novel scent has the unique power to sharpen my mind. Originally designed as a therapeutic aid for relaxation, this oil acts as a stimulant for me—providing refreshment instead of calm. In moments of stagnation or dazedness, inhaling this scent shifts my perspective. In an age where we constantly seek more intense dopamine hits, I find it lucky that such a minor sensory detail can bring about a breath of fresh air to my emotions.
        ` 
    },
    { 
        id: "camera",   
        w: 160, 
        h: 75,  
        title: "Digital Camera", 
        desc: `
            In an age where everyone has a high-quality camera in their smartphone, carrying a bulky film camera might seem outdated. But I love the process of film photography. It forces me to slow down. With only 36 shots per roll, I have to be intentional about what I capture. I can't just snap a hundred photos and hope one turns out well.
            
            The weight of the camera in my hand feels real and mechanical. I love the sound of the shutter clicking and the manual winding lever. It captures light and colors in a way that digital filters simply cannot replicate—there's a warmth and graininess that evokes nostalgia.
            
            The delayed gratification is the best part. Waiting weeks to finish a roll and get it developed adds a layer of anticipation. When I finally see the photos, I often rediscover moments I had forgotten about. It helps me document my life not for instant likes on social media, but for the sake of memory itself.
        ` 
    },
    { 
        id: "connect",   
        w: 80, 
        h: 60,  
        title: "SD Card Reader for iphone", 
        desc: `
This device connects to my iPhone, and I primarily use it to transfer photos from my camera. Before discovering this tool, I had to tediously transfer everything through a laptop, so this has been incredibly convenient. Since my camera’s LCD screen tends to appear brighter than the actual result, my phone effectively serves as a dedicated monitor for checking my shots.        ` 
    }
];