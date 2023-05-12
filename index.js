const spawn = require("child_process").spawn;

// Test할 데이터
let testData = { test: true };
// object -> json
testData = JSON.stringify(testData);

const pyProcess = spawn("python3", ["test.py", testData]);
pyProcess.stdout.on("data", (data) => {
	// 에러 없을 때
	const encodedData = data.toString("utf8");
	console.log(`data: ${encodedData}`);
});

pyProcess.stderr.on("data", (data) => {
	// 에러 발생 시
	const encodedData = data.toString("utf8");
	console.log(`python error: ${encodedData}`);
});
