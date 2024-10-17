import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 10,
    duration: '30s',
};

let rateLimitReached = false;

export default function () {
    if (rateLimitReached) {
        sleep(0.5); // Slow down if rate limit is reached
    }

    // Setting request parameters, including the Authorization header and the option to ignore TLS certificate validation
    const params = {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpc3N1ZXIiLCJzdWIiOiJzdWJqZWN0IiwiYXVkIjoiYXVkaWVuY2UiLCJleHAiOjE4OTM0NTYwMDAsIm5iZiI6MTY2NDcxMDAyMiwiaWF0IjoxNjY0NzEwMDIyLCJqdGkiOiJpZDEyMzQ1NiJ9Cg.iWhtB6NljlN2oLL0aQI0PFmz8CF7L0W5-JoP18xouRHPRQqfckWF7vxpOBKzHFn5DF2xKCMG9eCa3ovNKSIrFU9nH78yrrtHyEZdVI_T77If1_4KJP230W-UoyKfJK0_K4ty3ckNEntjybfplrrDuPpJKZKpKyMObJs_uipFQofpKbyc5ijonfnlz7fLqZsdu0ZDd8_i9HoDr2b4p9sC-4uW-BB62S5YVy7Xx4vrnoJW-9daXIAbAhI_09rddIspl4ebt0rytfvalVhZlb_kDcJhuBgUzuUOYy5gG_02mf_3glekJwG0LCgFfr01G7i1FiXtmPL2lgX9kqiftKbSZw" 
            },
        insecureSkipTLSVerify: true
    };

    let res = http.get('https://jobs.local/get-job', params);

    if (res.status === 429) {
        rateLimitReached = true;
        sleep(1); // Increase sleep time or implement other logic
    }

    check(res, {
        'is status 200': (r) => r.status === 200,
    });
}