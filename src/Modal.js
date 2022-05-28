class State {
  expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      date: this.getCurrentDate(new Date(2022, 11, 13)),
      amount: 235.4,
    },
    {
      id: "e2",
      title: "Washing Powder",
      date: this.getCurrentDate(new Date(2022, 3, 3)),
      amount: 25.4,
    },
    {
      id: "e4",
      title: "Baking Soda",
      date: this.getCurrentDate(new Date(2022, 3, 2)),
      amount: 135.4,
    },
    {
      id: "e5",
      title: "Baking Soda",
      date: this.getCurrentDate(new Date(2019, 3, 2)),
      amount: 135.4,
    },
  ];

  getCurrentDate(date) {
    return new Intl.DateTimeFormat("gn-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  }
}

export default new State();
