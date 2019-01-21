function groupAdultsByAgeRange(grouping, ageGroup) {
  // const groupKey1 = "20 and younger";
  // const groupKey2 = "21-30";
  // const groupKey3 = "31-40";
  // const groupKey4 = "41-50";
  // const groupKey5 = "51 and older";

  const group1 = grouping.filter(
    person => person.age <= 20 && person.age > 17 && !person.age.empty
  );
  const group2 = grouping.filter(person => person.age <= 30 && person.age > 20);
  const group3 = grouping.filter(person => person.age <= 40 && person.age > 30);
  const group4 = grouping.filter(person => person.age <= 50 && person.age > 40);
  const group5 = grouping.filter(person => person.age >= 51);

  return grouping
    .filter(person => person.age > 17 && !person.age.empty)
    .reduce(function(acc, person) {
      // const key = person[ageGroup];
      // if (!acc[key]) {
      //   acc[key] = [];
      // }
      // acc[key].push(person);
      // return acc;

      //return {acc.groupKey1.push(group1), acc.groupKey2.push(group2), acc.groupKey3.push(group3), acc.groupKey4.push(group4), acc.groupKey5.push(group5)}

      if (person.age <= 20) {
        return { "20 and younger": person };
      }
      if ((person.age <= 30 && person.age > 20).any) {
        return { "21-30": person };
      }
      if ((person.age <= 40 && person.age > 30).any) {
        return { "31-40": person };
      }
      if ((person.age <= 50 && person.age > 40).any) {
        return { "41-50": person };
      }
      if ((person.age > 50).any) {
        return { "51 and older": person };
      }
      return acc;
    }, {});
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
