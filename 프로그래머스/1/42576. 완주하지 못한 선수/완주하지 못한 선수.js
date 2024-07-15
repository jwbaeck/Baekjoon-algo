function solution(participant, completion) {
    const names = {};

    participant.forEach(name => {
        if (names[name]) {
            names[name]++;
        } else {
            names[name] = 1;
        }
    });

    completion.forEach(name => {
        names[name]--;
    });

    for (let name in names) {
        if (names[name] > 0) {
            return name;
        }
    }
}