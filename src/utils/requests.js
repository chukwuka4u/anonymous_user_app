async function getQueue(adminId, queueId) {
    const res = await fetch(`https://queue-api-48vb.onrender.com/api/v1/user/anonymous/${queueId}/get_queue?admin_id=${adminId}`);
    console.log(adminId, queueId)
    const queue = await res.json();
    return queue
}

async function joinQueue(adminId, queueId) {
    const res = await fetch(`https://queue-api-48vb.onrender.com/api/v1/user/anonymous/${queueId}/anonymous_join?admin_id=${adminId}`, {
        method: 'POST'
    });
    const data = await res.json()
    return data;
}

async function leaveQueue(adminId, queueId, userId) {
    const res = await fetch(`https://queue-api-48vb.onrender.com/api/v1/user/anonymous/${queueId}/anonymous_leave?admin_id=${adminId}&user_id=${userId}`, {
        method: 'PATCH'
    });
    const data = await res.json()
    return data;
}

export {getQueue, joinQueue, leaveQueue}