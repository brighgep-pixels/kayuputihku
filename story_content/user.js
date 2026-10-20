function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tgGXiIGVpn":
        Script1();
        break;
      case "5ti8YwWN9GS":
        Script2();
        break;
      case "5ptol8RrprH":
        Script3();
        break;
      case "62l3CfIQZy5":
        Script4();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";

audio.load();

audio.play();

audio.volume=0.3;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";

audio.load();

audio.play();

audio.volume=0.3;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";

audio.load();

audio.pause();

audio.volume=0.3;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";

audio.load();

audio.pause();

audio.volume=0.3;
}

