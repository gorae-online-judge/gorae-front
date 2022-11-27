import Api from './Api';

function ApiService() {
    const requests = {
        getProblemInfos: async (problemNumber) => {
            return await Api.get("/search/" + problemNumber)
                .then((res) => {
                    let mergedSamples = ''
                    for (let i = 0; i < res.data.samples.length; i++) {
                        mergedSamples += '<p>예제 입력 ' + (i + 1) + '</p>';
                        mergedSamples += res.data.samples[i].input;
                        mergedSamples += '<p>예제 출력 ' + (i + 1) + '</p>';
                        mergedSamples += res.data.samples[i].output;
                        if (i < res.data.samples.length - 1) {
                            mergedSamples += '<hr class="dashed">';
                        }
                    }
                    res.data.samples = mergedSamples;
                    return res.data;
                });
        },
        getSampleJudgeResult: async (req) => {
            return await Api.post("/judge", req)
                .then((res) => { // true, false만 결과로 옴
                    return res.data;
                })
                .catch((e) => {
                    console.log(e);
                    return false;
                });
        },
        isIdDuplicated: async (id) => {
            return await Api.get("/duplicate", {
                params: { id: id }
            }).then((res) => { // 'duplicate': true or false
                return { 'result': true, 'duplicate': res.data } 
            })
            .catch((e) => {
                console.log(e);
                return { 'result': false }
            });
        }
    }
    return requests;
}

export default ApiService;