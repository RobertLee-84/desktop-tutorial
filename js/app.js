// 현재는 게임 파일이 연결되지 않은 초기 화면입니다.
// 다음 단계에서 ./games/<게임명>/<게임명>.jsdos를 연결합니다.

const statusEl = document.getElementById("status");
const placeholder = document.getElementById("placeholder");

function startGame(bundleUrl) {
  if (!bundleUrl) return;

  placeholder.style.display = "none";
  statusEl.textContent = "게임을 불러오는 중...";

  const dos = Dos(document.getElementById("dosbox"), {
    url: bundleUrl
  });

  statusEl.textContent = "게임 실행 중";
  return dos;
}

// 예:
// startGame("./games/test/test.jsdos");
