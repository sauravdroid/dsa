// Problem statement link 
// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


function minimumSwaps(arr) {
    let edgeCount = 0;
    let currentIdx = 0;
    let desiredIdx = null;
    const n = arr.length;
    const nVisited = new Array(n).fill(false);

    while (currentIdx !== -1) {
        nVisited[currentIdx] =  true;

        desiredIdx = arr[currentIdx] - 1;
        const nIsAlreadyVisited = nVisited[desiredIdx];

        if (desiredIdx !== currentIdx && !nIsAlreadyVisited) {
            currentIdx = desiredIdx;
            edgeCount++
        } else {
            currentIdx = nVisited.indexOf(false);
        }
    }

    return edgeCount;
}

// Using for loop
function minimumSwapsLoop(arr) {
    let edgeCount = 0;
    let currentIdx = 0;
    let desiredIdx = null;
    const n = arr.length;
    const visited = [];

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            currentIdx = i;
            let cycleCount = 0;
            while (!visited[currentIdx]) {
                visited[currentIdx] = true;
                desiredIdx = arr[currentIdx] - 1;
                if (desiredIdx !== currentIdx && !visited[desiredIdx]) {
                    currentIdx = desiredIdx;
                    edgeCount++;
                }
            }
        }
    }

    return edgeCount;
}