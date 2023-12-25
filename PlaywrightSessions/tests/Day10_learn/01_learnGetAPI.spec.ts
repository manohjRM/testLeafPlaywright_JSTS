import {test, expect} from '@playwright/test';

test('Create Incident', async ({request})=>{

    let sysID;

    const response = await request.post('https://dev228499.service-now.com/api/now/table/incident',{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWRtaW46c0QhQTNwZEw4ZVcq'
        }
    });
    const respBody = await response.json(); 
    sysID = respBody.result.sys_id;
    console.log(`The new incident ${respBody.result.number} created successfully`);
    console.log(respBody.result.task_effective_number);
    console.log(`The status code for the given post request is: ${response.status()}`);

    const get_response = await request.get(`https://dev228499.service-now.com/api/now/table/incident/${sysID}`);
    const get_respBody = await get_response.json();
    console.log(get_respBody.result.task_effective_number);
    console.log(`The status code for the given get request is: ${get_response.status()}`);
    

})