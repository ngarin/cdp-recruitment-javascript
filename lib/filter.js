function filter(data, val) {
  const search = new RegExp(val, "g");

  return data.filter(d =>
    d.people.some(p => {
      p.animals = p.animals.filter(a => a.name.search(search) > -1);
      return p.animals.length;
    })
  );
}

module.exports = filter;
