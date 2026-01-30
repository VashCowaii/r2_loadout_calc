let videoCode = "";

//find the most recent video from me, and use its embed code here
for (let entry of contentGuides) {
    if (entry.author === "Vash" && entry.isYTVid) {videoCode = entry.embedLink;break;}
}
document.getElementById("homepageYTEmbed").src = `https://www.youtube.com/embed/videoseries?list=PLAurRJpAFofspqc3PaSCPZLZV5m6s7KUm`;