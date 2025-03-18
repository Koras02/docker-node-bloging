const { exec } = require("child_process");

// 도커 이미지 목록 가져오기
function listDockerImage() {
  exec("docker images", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }

    // 도커 이미지 목록 출력
    console.log(stdout);
  });
}

// 함수 호출
listDockerImage();
