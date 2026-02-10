async function getQueue(adminId, queueId) {
    const res = await fetch(`http://localhost:3000/api/v1/user/anonymous/${queueId}/get_queue?admin_id=${adminId}`);
    console.log(adminId, queueId)
    const queue = await res.json();
    console.log(queue)
}

async function joinQueue(adminId, queueId) {
    const res = await fetch(`http://localhost:3000/api/v1/user/anonymous/${queueId}/anonymous_join?admin_id=${adminId}`, {
        method: 'POST'
    });
    const data = await res.json()
    return data;
}

async function leaveQueue(adminId, queueId, userId) {
    const res = await fetch(`http://localhost:3000/api/v1/user/anonymous/${queueId}/anonymous_leave?admin_id=${adminId}&user_id=${userId}`, {
        method: 'DELETE'
    });
    const data = await res.json()
    return data;
}

export {getQueue, joinQueue, leaveQueue}