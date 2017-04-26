function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs);
    }


    function drawSongs(songList) {

        var songListElem = document.getElementById('song-list')
        var template = ''
        for (var i = 0; i < songList.length; i++) {
            var song = songList[i]
            template += `
                <div class= "well"
              <div class="col-md-10 "col-md-offset-1">
                <div class="row">
                <div class="col-md-1">
                    <img src="${song.albumArt}">
                </div>
                <div class= "col-md-1">
                    Artist: ${song.artist}
                 </div>
                 <div class="col-md-1">
                    <a href="#linkAudio">Title: ${song.title}</a>
                </div>
                <div class="col-md-2">
                    Ablum title: ${song.collection}
                </div>
                <div class="col-md-3">
                    <audio controls id="linkAudio">
                        <source src="${song.preview}">
                    </audio>
                </div>
                <div class="col-md-2 text-center">
                    Price: ${song.price}
                </div>
                </div>
                </div>
                </div>
                </div>
    
       
        `
        }

        songListElem.innerHTML = template
    }
    // This is where you task begins



}





var itunesCtrl = new ItunesController()