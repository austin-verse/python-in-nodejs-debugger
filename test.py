import sys
import json

# 전달받은 json 데이터 parsing
receivedData = json.loads(sys.argv[1])

# json parse하지않고 출력했을 때 콘솔에 출력되는 json의 key값은 ""로 감싸져있어야 정상
# json parse하고 출력했을 떄 콘솔에 출력되는 json의 key값은 ""로 감싸져있지않아야 정상
print(receivedData)

