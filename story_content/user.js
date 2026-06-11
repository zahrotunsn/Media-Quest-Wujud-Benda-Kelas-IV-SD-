function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oSWsLTKI9x":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

