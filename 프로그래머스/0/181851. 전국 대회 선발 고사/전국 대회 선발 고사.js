function solution(rank, attendance) {
  const records = {};
  
  for (let i = 0; i < rank.length; i++) {
    records[rank[i]] = attendance[i];
  }
  
  const students = Object.keys(records);
  const possibleStudents = [];
  
  for (const student of students) {
    if (records[student]) {
      possibleStudents.push(student);
    }
  }

  const studentIndexs = possibleStudents.map((student) => rank.indexOf(Number(student)));
  const topThrees = studentIndexs.slice(0, 3);
  const result = (topThrees[0] * 10000) + (topThrees[1] * 100) + topThrees[2];
  
  return result;
}