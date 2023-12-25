import {test, expect} from '@playwright/test';

test('Create Incident', async ({request})=>{

    const response = await request.post('https://dev228499.service-now.com/api/now/table/incident',{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWRtaW46c0QhQTNwZEw4ZVcq'
        }
    });
    const respBody = await response.json(); 
    console.log(await response.json());
    
    console.log(`The new incident ${respBody.result.number} created successfully`);
    console.log(respBody.result.task_effective_number);
    console.log(`The status code for the given request is: ${response.status()}`);

})