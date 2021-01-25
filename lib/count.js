function count(data) {
  return data.reduce((prev, curr) => {
    curr.name = `${curr.name}[${curr.people.length}]`;
    curr.people = curr.people.reduce((pprev, ccurr) => {
      ccurr.name = `${ccurr.name}[${ccurr.animals.length}]`;

      return [...pprev, ccurr];
    }, []);

    return [...prev, curr];
  }, []);
}

module.exports = count;
